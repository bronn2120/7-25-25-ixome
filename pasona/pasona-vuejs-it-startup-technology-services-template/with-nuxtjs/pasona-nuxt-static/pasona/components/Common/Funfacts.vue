<template>
  <div class="funfacts-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h2>We always try to understand users expectation</h2>
        <div class="bar"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div class="row">
        <div class="col-lg-3 col-md-3 col-6 col-sm-3">
          <div class="funfact">
            <h3><span>180</span>+</h3>
            <p>Downloaded</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-6 col-sm-3">
          <div class="funfact">
            <h3><span>20</span>+</h3>
            <p>Feedback</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-6 col-sm-3">
          <div class="funfact">
            <h3><span>500</span>+</h3>
            <p>Workers</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-6 col-sm-3">
          <div class="funfact">
            <h3><span>70</span>+</h3>
            <p>Contributors</p>
          </div>
        </div>
      </div>

      <div class="contact-cta-box">
        <h3>Have any question about us?</h3>
        <p>Don't hesitate to contact us</p>
        <NuxtLink to="/contact" class="btn btn-primary">Contact Us</NuxtLink>
      </div>

      <div class="map-bg">
        <img src="~/assets/img/map.png" alt="map" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Funfacts",
};
</script>