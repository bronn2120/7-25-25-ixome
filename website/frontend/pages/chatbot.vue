<template>
  <div class="container mt-5 pt-5">
    <h1 class="text-center mb-4 animate__animated animate__fadeInDown">IXome.ai Chatbot</h1>
    <p class="text-center lead mb-5 animate__animated animate__fadeIn">Ask about Control4 or Lutron troubleshooting. Tokens required for technical queries.</p>

    <div class="chat-container row justify-content-center">
      <div class="col-md-8">
        <div class="chat-messages" ref="messages">
          <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.sender]">
            <img v-if="msg.sender === 'bot'" class="avatar" src="/assets/images/einstein-avatar.jpg" alt="Einstein Avatar">
            <p>{{ msg.text }}</p>
          </div>
          <div v-if="typing" class="message bot typing">Typing...</div>
        </div>
        <form @submit.prevent="sendMessage" class="chat-form">
          <input v-model="query" type="text" placeholder="Type your question..." required>
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
        <p v-if="tokenInfo" class="mt-3 text-center">{{ tokenInfo }}</p>
      </div>
    </div>

    <!-- Simple Chatbot Widget (though on dedicated page, included for consistency) -->
    <div class="chat-widget">
      <input v-model="quickQuery" type="text" placeholder="Quick question?">
      <button @click="sendQuickQuery">Ask</button>
      <p v-if="quickResponse">{{ quickResponse }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chatbot',
  data() {
    return {
      messages: [],
      query: '',
      typing: false,
      tokenInfo: '',
      quickQuery: '',
      quickResponse: ''
    }
  },
  async mounted() {
    try {
      const res = await this.$axios.get('/user_tokens'); // Assume backend route for token check
      this.tokenInfo = `Tokens left: ${res.data.tokens}`;
    } catch (e) {
      this.tokenInfo = 'Error fetching tokens';
    }
  },
  methods: {
    async sendMessage() {
      if (!this.query) return;
      this.messages.push({ sender: 'user', text: this.query });
      this.typing = true;
      try {
        const res = await this.$axios.post('/process', { input_type: 'text', input_data: this.query });
        this.messages.push({ sender: 'bot', text: res.data.result });
        this.tokenInfo = `Tokens left: ${res.data.remaining_tokens}`; // Update after deduction
      } catch (e) {
        this.messages.push({ sender: 'bot', text: 'Error: Failed to respond' });
      }
      this.typing = false;
      this.query = '';
      this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight;
    },
    async sendQuickQuery() {
      // Same as homepage widget
      if (!this.quickQuery) return;
      try {
        const res = await this.$axios.post('/process', { input_type: 'text', input_data: this.quickQuery });
        this.quickResponse = res.data.result || 'Error: No response';
      } catch (e) {
        this.quickResponse = 'Error: Failed to send query';
      }
    }
  },
  head() {
    return {
      title: 'IXome.ai - Chatbot',
      meta: [
        { name: 'description', content: 'Interact with our AI chatbot for smart home support.' },
        { name: 'keywords', content: 'smart home chatbot, Control4, Lutron, AI troubleshooting' }
      ]
    }
  }
}
</script>

<style scoped>
.chat-container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.chat-messages {
  height: 400px;
  overflow-y: auto;
  margin-bottom: 10px;
}
.message {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
}
.user {
  background: #007bff;
  color: white;
  text-align: right;
}
.bot {
  background: #f8f9fa;
  text-align: left;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.typing {
  color: gray;
}
.chat-form {
  display: flex;
}
.chat-form input {
  flex: 1;
  margin-right: 10px;
}
.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}
.chat-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: white;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  z-index: 999;
}
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}
</style>