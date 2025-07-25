<template>
  <div class="what-we-do-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h2>Automate Your Smart Home</h2>
        <div class="bar"></div>
        <p>IXome.ai delivers AI-powered solutions for seamless Control4 and Lutron troubleshooting, with autonomous updates and professional support.</p>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-what-we-do-box">
            <div class="icon">
              <i class="flaticon-monitor"></i>
            </div>
            <h3><NuxtLink to="/services">AI Troubleshooting</NuxtLink></h3>
            <p>Resolve smart home issues instantly with our intelligent chatbot.</p>
            <NuxtLink to="/services" class="link">Control4 Support</NuxtLink>
            <NuxtLink to="/services" class="link">Lutron Support</NuxtLink>
            <NuxtLink to="/services" class="read-more-btn"><ArrowRightIcon></ArrowRightIcon>Read More</NuxtLink>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-what-we-do-box">
            <div class="icon">
              <i class="flaticon-idea"></i>
            </div>
            <h3><NuxtLink to="/pricing">Flexible Subscriptions</NuxtLink></h3>
            <p>Choose from Basic, Pro, or Enterprise plans to suit your needs.</p>
            <NuxtLink to="/pricing" class="link">Token-Based Access</NuxtLink>
            <NuxtLink to="/pricing" class="link">Priority Support</NuxtLink>
            <NuxtLink to="/pricing" class="read-more-btn"><ArrowRightIcon></ArrowRightIcon>Read More</NuxtLink>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
          <div class="single-what-we-do-box">
            <div class="icon">
              <i class="flaticon-software"></i>
            </div>
            <h3><NuxtLink to="/about">Agentic Automation</NuxtLink></h3>
            <p>Our CEO agent keeps your support content fresh autonomously.</p>
            <NuxtLink to="/about" class="link">Dynamic Updates</NuxtLink>
            <NuxtLink to="/about" class="link">AI Orchestration</NuxtLink>
            <NuxtLink to="/about" class="read-more-btn"><ArrowRightIcon></ArrowRightIcon>Read More</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhatWeDo",
};
</script>

<style scoped>
.what-we-do-area {
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

.single-what-we-do-box {
  text-align: center;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 30px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  -webkit-transition: 0.6s;
  transition: 0.6s;
}

.single-what-we-do-box .icon {
  margin-bottom: 25px;
}

.single-what-we-do-box .icon i {
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

.single-what-we-do-box h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
}

.single-what-we-do-box p {
  margin-bottom: 0;
}

.single-what-we-do-box .link {
  display: block;
  color: #5c5c5c;
  margin-bottom: 10px;
  font-weight: 400;
}

.single-what-we-do-box .read-more-btn {
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  color: #684df4;
  margin-top: 20px;
  position: relative;
}

.single-what-we-do-box .read-more-btn::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #684df4;
  -webkit-transition: 0.6s;
  transition: 0.6s;
}

.single-what-we-do-box .read-more-btn:hover {
  color: #684df4;
  letter-spacing: 1px;
}

.single-what-we-do-box .read-more-btn:hover::before {
  width: 100%;
}

.single-what-we-do-box:hover {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
}

.single-what-we-do-box:hover .icon i {
  background-color: #684df4;
  color: #ffffff;
}
</style>