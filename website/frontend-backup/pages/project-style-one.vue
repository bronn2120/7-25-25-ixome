<template>
  <div class="project-details-area ptb-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="project-details">
            <h2>Residential Smart Home</h2>
            <p>Our AI-powered chatbot streamlined a Control4 system for a luxury home, automating lighting, security, and entertainment with seamless support.</p>
            <p>With IXome.ai’s Basic Subscription, the homeowner resolved connectivity issues instantly, enhancing their smart home experience.</p>
            <NuxtLink to="/projects" class="btn btn-primary">Back to Projects</NuxtLink>
          </div>
        </div>

        <div class="col-lg-4 col-md-12">
          <div class="project-info">
            <h3>Project Details</h3>
            <ul>
              <li><strong>Client:</strong> Private Homeowner</li>
              <li><strong>Category:</strong> Residential Automation</li>
              <li><strong>Technology:</strong> Control4, IXome.ai Chatbot</li>
              <li><strong>Plan:</strong> Basic Subscription</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectStyleOne',
  head() {
    return {
      title: 'IXome.ai - Project Details',
      meta: [
        { name: 'description', content: 'Explore IXome.ai’s smart home automation projects with Control4 and Lutron.' },
        { name: 'keywords', content: 'smart home projects, Control4, Lutron, AI chatbot' }
      ]
    }
  }
}
</script>

<style scoped>
.project-details-area {
  position: relative;
  z-index: 1;
}

.project-details h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
}

.project-details p {
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 500;
}

.btn-primary:hover {
  background-color: #28a745;
  border-color: #28a745;
}

.project-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
}

.project-info ul {
  list-style: none;
  padding: 0;
}

.project-info ul li {
  font-size: 16px;
  margin-bottom: 10px;
}

.project-info ul li strong {
  color: #333;
}
</style>