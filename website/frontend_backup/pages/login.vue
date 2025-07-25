<template>
  <div class="container mt-5 pt-5">
    <h1 class="text-center mb-4 animate__animated animate__fadeInDown">Login to IXome.ai</h1>
    <p class="text-center lead mb-5 animate__animated animate__fadeIn">Access your subscription and chatbot tokens.</p>

    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group mb-3">
            <label for="username">Username</label>
            <input v-model="username" type="text" id="username" class="form-control" required>
          </div>
          <div class="form-group mb-4">
            <label for="password">Password</label>
            <input v-model="password" type="password" id="password" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block">Login</button>
        </form>
        <p v-if="message" class="mt-3 text-center alert" :class="{ 'alert-success': !isError, 'alert-danger': isError }">{{ message }}</p>
        <p class="text-center mt-3"><router-link to="/purchase/basic">New user? Purchase a subscription</router-link></p>
      </div>
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
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      message: '',
      isError: false,
      query: '',
      response: ''
    }
  },
  methods: {
    async handleLogin() {
      try {
        const res = await this.$axios.post('/login', { username: this.username, password: this.password });
        this.message = 'Login successful! Redirecting...';
        this.isError = false;
        // Store JWT in localStorage or Pinia
        localStorage.setItem('jwt', res.data.jwt);
        setTimeout(() => this.$router.push('/'), 2000);
      } catch (e) {
        this.message = e.response?.data?.error || 'Login failed. Try again.';
        this.isError = true;
      }
    },
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
      title: 'IXome.ai - Login',
      meta: [
        { name: 'description', content: 'Login to access your smart home chatbot subscription.' },
        { name: 'keywords', content: 'IXome login, smart home subscription' }
      ]
    }
  }
}
</script>

<style scoped>
.login-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
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
</style>