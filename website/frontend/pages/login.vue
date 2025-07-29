<template>
    <div class="login-area ptb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 offset-lg-3">
            <div class="login-form">
              <h2>Login to IXome.ai</h2>
              <p>Access your account to manage tokens and smart home support.</p>
  
              <form @submit.prevent="handleLogin">
                <div class="form-group">
                  <label>Username</label>
                  <input v-model="username" type="text" class="form-control" placeholder="Enter username" required>
                </div>
  
                <div class="form-group">
                  <label>Password</label>
                  <input v-model="password" type="password" class="form-control" placeholder="Enter password" required>
                </div>
  
                <button type="submit" class="btn btn-primary">Login</button>
                <p v-if="error" class="error">{{ error }}</p>
              </form>
  
              <p>Don't have an account? <NuxtLink to="/signup">Sign Up</NuxtLink></p>
            </div>
          </div>
        </div>
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
        error: ''
      }
    },
    methods: {
      async handleLogin() {
        try {
          const response = await this.$axios.post('http://localhost:5001/login', {
            username: this.username,
            password: this.password
          })
          if (response.data.access_token) {
            localStorage.setItem('token', response.data.access_token)
            this.$router.push('/dashboard') // Redirect to dashboard or home after login
          }
        } catch (err) {
          this.error = err.response?.data?.msg || 'Login failed. Try again.'
        }
      }
    },
    head() {
      return {
        title: 'IXome.ai - Login',
        meta: [
          { name: 'description', content: 'Login to your IXome.ai account to manage tokens and smart home support.' },
          { name: 'keywords', content: 'smart home login, Control4, Lutron, AI chatbot' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .login-area {
    position: relative;
    z-index: 1;
  }
  
  .login-form {
    padding: 30px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
    text-align: center;
  }
  
  .login-form h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  .login-form p {
    margin-bottom: 30px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    display: block;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: 500;
    width: 100%;
  }
  
  .btn-primary:hover {
    background-color: #28a745;
    border-color: #28a745;
  }
  
  .error {
    color: #dc3545;
    font-size: 14px;
    margin-top: 10px;
  }
  </style>