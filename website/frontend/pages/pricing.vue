<template>
  <div class="pricing-area ptb-80 bg-f7fafd">
    <div class="container">
      <div class="section-title">
        <h2>Our Pricing Plan</h2>
        <div class="bar"></div>
        <p>Choose the subscription that fits your smart home needs.</p>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="pricing-box">
            <div class="price">
              $10 <span>/Month</span>
            </div>
            <div class="pricing-features">
              <ul>
                <li>100 Tokens</li>
                <li>Basic Troubleshooting</li>
                <li>Control4 & Lutron Support</li>
                <li>Email Support</li>
              </ul>
            </div>
            <NuxtLink to="/purchase/basic" class="btn btn-primary">Select Plan</NuxtLink>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="pricing-box">
            <div class="price">
              $50 <span>/Month</span>
            </div>
            <div class="pricing-features">
              <ul>
                <li>1000 Tokens</li>
                <li>Advanced Troubleshooting</li>
                <li>Priority Support</li>
                <li>Chatbot Access</li>
              </ul>
            </div>
            <NuxtLink to="/purchase/pro" class="btn btn-primary">Select Plan</NuxtLink>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
          <div class="pricing-box">
            <div class="price">
              $200 <span>/Month</span>
            </div>
            <div class="pricing-features">
              <ul>
                <li>10000 Tokens</li>
                <li>Enterprise Support</li>
                <li>Dedicated Agent</li>
                <li>Custom Integrations</li>
              </ul>
            </div>
            <NuxtLink to="/purchase/enterprise" class="btn btn-primary">Select Plan</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing'
}
</script>

<style scoped>
.pricing-area {
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

.pricing-box {
  text-align: center;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 5px;
  margin-bottom: 30px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  -webkit-transition: 0.6s;
  transition: 0.6s;
}

.pricing-box .price {
  font-size: 50px;
  font-weight: 700;
  color: #684df4;
  margin-bottom: 30px;
}

.pricing-box .price span {
  font-size: 15px;
  font-weight: 400;
  color: #5c5c5c;
  font-style: italic;
}

.pricing-box .pricing-features {
  margin-bottom: 30px;
}

.pricing-box .pricing-features ul {
  padding: 0;
  list-style-type: none;
  margin: 0;
}

.pricing-box .pricing-features ul li {
  margin-bottom: 12px;
  color: #5c5c5c;
  position: relative;
  padding-left: 20px;
  font-weight: 400;
}

.pricing-box .pricing-features ul li i {
  color: #684df4;
  position: absolute;
  left: 0;
  top: 0;
}

.pricing-box .pricing-features ul li:last-child {
  margin-bottom: 0;
}

.pricing-box:hover {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
}
</style>