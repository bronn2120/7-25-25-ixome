<template>
  <div class="services-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h2>Our Services</h2>
        <div class="bar"></div>
        <p>IXome.ai offers subscription-based AI chatbot services for Control4 and Lutron troubleshooting, with plans tailored to homeowners, installers, and businesses.</p>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-services-box">
            <div class="icon">
              <i class="flaticon-monitor"></i>
            </div>
            <h3>Basic Subscription</h3>
            <p>100 tokens for $10, perfect for occasional Control4 and Lutron troubleshooting.</p>
            <NuxtLink to="/pricing" class="read-more-btn">Learn More</NuxtLink>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-services-box">
            <div class="icon">
              <i class="flaticon-idea"></i>
            </div>
            <h3>Pro Subscription</h3>
            <p>1000 tokens for $50, ideal for frequent users needing advanced support.</p>
            <NuxtLink to="/pricing" class="read-more-btn">Learn More</NuxtLink>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
          <div class="single-services-box">
            <div class="icon">
              <i class="flaticon-software"></i>
            </div>
            <h3>Enterprise Subscription</h3>
            <p>10000 tokens for $200, designed for installers and large-scale projects.</p>
            <NuxtLink to="/pricing" class="read-more-btn">Learn More</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  head() {
    return {
      title: 'IXome.ai - Services',
      meta: [
        { name: 'description', content: 'Explore IXome.ai’s subscription-based AI chatbot services for Control4 and Lutron troubleshooting.' },
        { name: 'keywords', content: 'smart home services, Control4, Lutron, AI subscription' }
      ]
    }
  }
}
</script>

<style scoped>
.services-area {
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

.single-services-box {
  text-align: center;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 30px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  -webkit-transition: 0.6s;
  transition: 0.6s;
}

.single-services-box .icon {
  margin-bottom: 25px;
}

.single-services-box .icon i {
  display: inline-block;
  height: 80px;
  width: 80px;
  line-height: 80px;
  background-color: #f7fafd;
  color: #684df4;
  font-size: 40px;
  border-radius: 50px;
  -webkit-transition: 0.6s;
  transition: 0.6s;
}

.single-services-box h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
}

.single-services-box p {
  margin-bottom: 0;
}

.single-services-box .read-more-btn {
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  color: #684df4;
  margin-top: 20px;
}

.single-services-box:hover {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
}

.single-services-box:hover .icon i {
  background-color: #684df4;
  color: #ffffff;
}
</style>