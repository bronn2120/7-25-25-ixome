<template>
  <div class="contact-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h2>Contact Us</h2>
        <div class="bar"></div>
        <p>Get in touch with IXome.ai for expert smart home support. Our AI chatbot is ready to assist with Control4 and Lutron issues—subscribe now!</p>
      </div>

      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="contact-form">
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label>Name</label>
                <input v-model="name" type="text" class="form-control" placeholder="Enter your name" required>
              </div>

              <div class="form-group">
                <label>Email</label>
                <input v-model="email" type="email" class="form-control" placeholder="Enter your email" required>
              </div>

              <div class="form-group">
                <label>Message</label>
                <textarea v-model="message" class="form-control" placeholder="Your message" rows="5" required></textarea>
              </div>

              <button type="submit" class="btn btn-primary">Send Message</button>
              <p v-if="success" class="success">Message sent successfully!</p>
              <p v-if="error" class="error">{{ error }}</p>
            </form>
          </div>
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="contact-info">
            <h3>Contact Information</h3>
            <ul>
              <li><i class="bx bx-envelope"></i> Email: support@ixome.ai</li>
              <li><i class="bx bx-phone"></i> Phone: +1 (555) 123-4567</li>
              <li><i class="bx bx-map"></i> Address: 123 Smart Home Lane, Tech City, USA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      success: false,
      error: ''
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await this.$axios.post('http://localhost:5001/contact', {
          name: this.name,
          email: this.email,
          message: this.message
        })
        if (response.data.success) {
          this.success = true
          this.error = ''
          this.name = ''
          this.email = ''
          this.message = ''
        }
      } catch (err) {
        this.error = err.response?.data?.msg || 'Failed to send message. Try again.'
        this.success = false
      }
    }
  },
  head() {
    return {
      title: 'IXome.ai - Contact',
      meta: [
        { name: 'description', content: 'Contact IXome.ai for smart home support with Control4 and Lutron systems.' },
        { name: 'keywords', content: 'smart home contact, Control4, Lutron, AI chatbot' }
      ]
    }
  }
}
</script>

<style scoped>
.contact-area {
  position: relative;
  z-index: 1;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 0;
}

.section-title .bar {
  height: 5px;
  width: 50px;
  background-color: #684df4;
  margin: 15px auto 20px;
  position: relative;
  border-radius: 30px;
}

.section-title .bar::before {
  content: '';
  position: absolute;
  left: 0;
  top: -2.5px;
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background-color: #ffffff;
  border: 2px solid #684df4;
}

.section-title p {
  max-width: 600px;
  margin: 0 auto;
}

.contact-form {
  padding: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
}

.contact-form .form-group {
  margin-bottom: 20px;
}

.contact-form .form-group label {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  display: block;
}

.contact-form .form-group input,
.contact-form .form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.contact-form .btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 500;
  width: 100%;
}

.contact-form .btn-primary:hover {
  background-color: #28a745;
  border-color: #28a745;
}

.contact-form .success {
  color: #28a745;
  font-size: 14px;
  margin-top: 10px;
}

.contact-form .error {
  color: #dc3545;
  font-size: 14px;
  margin-top: 10px;
}

.contact-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info ul li {
  font-size: 16px;
  margin-bottom: 15px;
}

.contact-info ul li i {
  color: #684df4;
  margin-right: 10px;
}
</style>