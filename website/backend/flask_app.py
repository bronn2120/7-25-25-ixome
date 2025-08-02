import sys
import os
sys.path.append('/home/vincent/ixome')
sys.path.append('/home/vincent/ixome/agents')

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_socketio import SocketIO, emit
from agents.chat_agent import ChatAgent
from agents.marketing_agent import MarketingAgent
from agents.social_agent import SocialAgent
from agents.writing_agent import WritingAgent
from agents.ceo_agent import CEOAgent
import logging
from asgiref.wsgi import WsgiToAsgi
from dotenv import load_dotenv
import requests
import random
from datetime import timedelta

load_dotenv()
app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('FLASK_SECRET_KEY', '1c5565f83a9180cd3b7c544da8d8faf1623613d1b6c50f06d6702d8f6d641779')
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'your_default_jwt_secret_key')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000", "https://ixome.ai"]}}, supports_credentials=True)
jwt = JWTManager(app)
socketio = SocketIO(app, cors_allowed_origins=["http://localhost:3000", "https://ixome.ai"])
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

print("Initializing agents")
try:
    agent = ChatAgent()
    marketing_agent = MarketingAgent()
    social_agent = SocialAgent()
    writing_agent = WritingAgent()
    ceo_agent = CEOAgent()
    logger.info("Agents initialized successfully")
except ImportError as e:
    logger.error(f"Failed to import agents: {str(e)}")
    raise
except Exception as e:
    logger.error(f"Failed to initialize agents: {str(e)}")
    raise

users = {'test': {'username': 'test', 'email': 'test@example.com', 'password': 'test', 'tokens': 100}}
STRAPI_URL = os.environ.get('STRAPI_URL', 'http://localhost:1337')
STRAPI_JWT = os.environ.get('STRAPI_JWT', 'your_strapi_jwt')

def check_subscription(user_id):
    try:
        headers = {'Authorization': f'Bearer {STRAPI_JWT}'}
        response = requests.get(f"{STRAPI_URL}/api/users?filters[username][$eq]={user_id}", headers=headers)
        if response.status_code == 200:
            user = response.json().get('data', [{}])[0]
            if user:
                subscription = user.get('attributes', {}).get('subscription', {})
                tokens = subscription.get('tokens', 0)
                ceo_agent.orchestrate(user_id, {'tokens': tokens})
                if tokens > 0 or (not user.get('attributes', {}).get('first_visit_done', False)):
                    return True
                return False
        return user_id in users and users[user_id]['tokens'] > 0
    except Exception as e:
        logger.error(f"Error checking subscription: {e}")
        return user_id in users and users[user_id]['tokens'] > 0

@app.route('/homepage_data')
def homepage_data():
    try:
        campaign = marketing_agent.generate_campaign()
        boxes = [
            {'title': 'Basic Tier', 'description': '100 tokens - $10 ' + campaign.get('content', ''), 'link': '/purchase/basic'},
            {'title': 'Pro Tier', 'description': '1000 tokens - $50 ' + campaign.get('content', ''), 'link': '/purchase/pro'},
            {'title': 'Enterprise Tier', 'description': '10000 tokens - $200 ' + campaign.get('content', ''), 'link': '/purchase/enterprise'}
        ]
        if random.random() < 0.2:
            social_agent.promote()
        logger.info(f"Generated homepage data: {boxes}")
        return jsonify(boxes=boxes)
    except Exception as e:
        logger.error(f"Error generating homepage data: {e}")
        return jsonify({"error": "Failed to load homepage data"}), 500

@socketio.on('connect')
@jwt_required()
def handle_connect():
    current_user = get_jwt_identity()
    logger.info(f"User {current_user} connected")
    emit('response', {'text': f"Hey {current_user}! Welcome to ixome.ai chatbot! How can I help you today?"})

@socketio.on('message')
@jwt_required()
async def handle_message(data):
    current_user = get_jwt_identity()
    user_message = data.get('text', '').strip()
    if not user_message:
        emit('response', {'text': 'Oops! Please type a message to get started!'})
        return

    logger.info(f"User {current_user} sent: {user_message}")
    is_technical = any(keyword in user_message.lower() for keyword in ["error", "bug", "crash", "install", "configure"])

    if is_technical:
        if not check_subscription(current_user):
            emit('response', {
                'text': "This looks like a technical issue! I can solve one easy problem for free. If it’s complex, please subscribe to one of our plans: $10 (1 problem), $50 (10 problems), or $200 (100 problems). Visit /support to subscribe!",
                'redirect': '/support'
            })
            return

    try:
        result = await agent.process_input("text", user_message, current_user)
        if user_message.lower().startswith("set tokens to"):
            try:
                tokens = int(user_message.split()[-1])
                users[current_user]['tokens'] = tokens
                ceo_result = ceo_agent.orchestrate(current_user, {'tokens': tokens})
                result = f"{result} | CEO Agent: {ceo_result}"
            except ValueError:
                result = f"{result} | Invalid token value"
        emit('response', {'text': result})
        if is_technical and check_subscription(current_user):
            if current_user in users:
                users[current_user]['tokens'] -= 1
                emit('response', {'text': f"Follow-up: Need more help? Ask another question or let me know! Tokens left: {users[current_user]['tokens']}"})
            else:
                headers = {'Authorization': f'Bearer {STRAPI_JWT}'}
                user_data = requests.get(f"{STRAPI_URL}/api/users?filters[username][$eq]={current_user}", headers=headers).json()
                user = user_data.get('data', [{}])[0]
                if user:
                    user_id = user.get('id')
                    tokens = user.get('attributes', {}).get('subscription', {}).get('tokens', 0) - 1
                    requests.put(f"{STRAPI_URL}/api/users/{user_id}", json={'subscription': {'tokens': tokens}}, headers=headers)
                    emit('response', {'text': "Follow-up: Need more help? Ask another question or let me know!"})
    except Exception as e:
        logger.error(f"Error processing message: {e}")
        emit('response', {'text': f"Oops! Something went wrong. Try again later! ({str(e)})"})

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if username in users and users[username]['password'] == password:
        access_token = create_access_token(identity=username, expires_delta=timedelta(hours=1))
        return jsonify(access_token=access_token), 200
    return jsonify({"msg": "Bad credentials"}), 401

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    if username and email and password:
        if username not in users:
            users[username] = {'username': username, 'email': email, 'password': password, 'tokens': 100}
            access_token = create_access_token(identity=username, expires_delta=timedelta(hours=1))
            return jsonify(access_token=access_token), 200
        return jsonify({"msg": "Username already exists"}), 400
    return jsonify({"msg": "Missing required fields"}), 400

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    if name and email and message:
        logger.info(f"Received contact form: {name}, {email}, {message}")
        return jsonify({'success': True, 'msg': 'Message received'}), 200
    return jsonify({'msg': 'Missing required fields'}), 400

@app.route('/blog/generate', methods=['POST'])
@jwt_required()
def generate_blog():
    try:
        data = request.get_json()
        topic = data.get('topic', 'smart home automation')
        logger.info(f"Generating blog post for topic: {topic}")
        blog_content = writing_agent.generate_content(topic)
        return jsonify({'title': f"{topic.title()} Insights", 'content': blog_content}), 200
    except Exception as e:
        logger.error(f"Error generating blog post: {e}")
        return jsonify({'error': f"Failed to generate blog post: {str(e)}"}), 500

@app.route('/process', methods=['POST'])
@jwt_required()
async def process():
    try:
        data = request.get_json()
        logger.info(f"Received request data: {data}")
        if not data or 'input_type' not in data or 'input_data' not in data:
            return jsonify({'error': 'Invalid input data'}), 400
        if not data['input_data'].strip():
            return jsonify({'error': 'Input data cannot be empty'}), 400
        current_user = get_jwt_identity()
        logger.info(f"Processing request for user: {current_user}")
        result = await agent.process_input(data['input_type'], data['input_data'], current_user)
        if data['input_data'].lower().startswith("set tokens to"):
            try:
                tokens = int(data['input_data'].split()[-1])
                users[current_user]['tokens'] = tokens
                ceo_result = ceo_agent.orchestrate(current_user, {'tokens': tokens})
                result = f"{result} | CEO Agent: {ceo_result}"
            except ValueError:
                result = f"{result} | Invalid token value"
        logger.info(f"ChatAgent result: {result}")
        return jsonify({'result': result})
    except Exception as e:
        logger.error(f"Error processing request: {e}")
        return jsonify({'error': f"Server error: {str(e)}"}), 500

@app.route('/')
def home():
    return "Flask app is running!"

asgi_app = WsgiToAsgi(app)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001))
    app.run(host='0.0.0.0', port=port, debug=True)