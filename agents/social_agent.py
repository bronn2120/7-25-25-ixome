
from dotenv import load_dotenv  # Add this line
load_dotenv()  # Add this line to load .env

from langchain.agents import AgentExecutor, create_react_agent
from langchain_openai import OpenAI
from langchain.prompts import PromptTemplate
from langchain.tools import Tool
import os

class SocialAgent:
    def __init__(self):
        self.llm = OpenAI(temperature=0.7)

        self.prompt = PromptTemplate.from_template(
            "You are a social media agent for IXome.ai. Generate a social media post for {platform} about {content}.\n\n{tools}\n\nUse the following format:\n\nThought: you should always think about what to do\nAction: the action to take, should be one of [{tool_names}]\nAction Input: the input to the action\nObservation: the result of the action\n... (this Thought/Action/Action Input/Observation can repeat N times)\nThought: I now know the final answer\nFinal Answer: the final answer to the original input question\n\nBegin!\n\nThought:{agent_scratchpad}"
        )

        self.tools = [
            Tool(
                name="Post to X",
                func=self.post_to_x,
                description="Post to X (Twitter)"
            ),
            Tool(
                name="Post to Facebook",
                func=self.post_to_facebook,
                description="Post to Facebook"
            )
        ]

        self.agent = create_react_agent(self.llm, self.tools, self.prompt)
        self.agent_executor = AgentExecutor(agent=self.agent, tools=self.tools, verbose=True)

    def post_to_x(self, content):
        x_api_key = os.getenv('X_API_KEY')
        if not x_api_key:
            return "X API key not set. Post not sent."
        # Placeholder for X API call - replace with actual API integration if available
        return f"Posted to X: {content}"

    def post_to_facebook(self, content):
        fb_token = os.getenv('FACEBOOK_ACCESS_TOKEN')
        if not fb_token:
            return "Facebook access token not set. Post not sent."
        # Placeholder for Facebook API call - replace with actual API integration if available
        return f"Posted to Facebook: {content}"

    def promote(self, content="", platform="X"):
        result = self.agent_executor.invoke({"platform": platform, "content": content, "agent_scratchpad": ""})
        return {'content': result['output']}

# For testing
if __name__ == "__main__":
    agent = SocialAgent()
    print(agent.promote("New subscription offer"))