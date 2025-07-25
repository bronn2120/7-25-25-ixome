<template>
  <div class="container mt-5 pt-5">
    <h1 class="text-center mb-4 animate__animated animate__fadeInDown">Oops! Something Went Wrong</h1>
    <p class="text-center lead mb-5 animate__animated animate__fadeIn">{{ errorMessage }}</p>

    <div class="text-center">
      <router-link to="/" class="btn btn-primary btn-lg">Go Back to Homepage</router-link>
    </div>

    <!-- Simple Chatbot Widget -->
    <div class="chat-widget">
      <input v-model="query" type="text" placeholder="Quick question?">
      <button @click="sendQuery">Ask</button>
      <p v-if="response">{{ response }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    errorMessage: {
      type: String,
      default: 'An error occurred. Please try again later.'
    }
  },
  data() {
    return {
      query: '',
      response: ''
    }
  },
  methods: {
    async sendQuery() {
      if (!this.query) return;
      try {
        const res = await this.$axios.post('/process', { input_type: 'text', input_data: this.query });
        this.response = res.data.result || 'Error: No response';
      } catch (e) {
        this.response = 'Error: Failed to send query';
      }
    }
  },
  head() {
    return {
      title: 'IXome.ai - Error',
      meta: [
        { name: 'description', content: 'Error page for IXome.ai smart home chatbot.' }
      ]
    }
  }
}
</script>

<style scoped>
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
</style>