<template>
  <!-- Start Navbar Area -->
  <header
    id="header"
    :class="['headroom', { 'is-sticky': isSticky }]"
  >
    <div class="startp-nav">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
          <NuxtLink class="navbar-brand" to="/">
            <img src="~/assets/img/white-logo.png" alt="logo" />
          </NuxtLink>

          <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

          <b-collapse
            class="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
            is-nav
          >
            <ul class="navbar-nav nav ml-auto">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link" exact>
                  Home
                </NuxtLink>
              </li>

              <li class="nav-item">
                <NuxtLink to="/about" class="nav-link">
                  About
                </NuxtLink>
              </li>

              <li class="nav-item">
                <NuxtLink to="/services" class="nav-link">
                  Services
                </NuxtLink>
              </li>

              <li class="nav-item">
                <NuxtLink to="/pricing" class="nav-link">
                  Pricing
                </NuxtLink>
              </li>

              <li class="nav-item">
                <NuxtLink to="/projects" class="nav-link">
                  Projects
                </NuxtLink>
              </li>

              <li class="nav-item">
                <NuxtLink to="/blog" class="nav-link">
                  Blog
                </NuxtLink>
              </li>

              <li class="nav-item">
                <NuxtLink to="/contact" class="nav-link">
                  Contact
                </NuxtLink>
              </li>

              <li class="nav-item">
                <NuxtLink to="/login" class="nav-link">
                  Login
                </NuxtLink>
              </li>
            </ul>
          </b-collapse>

          <div class="others-option">
            <a href="#" class="btn btn-primary">Schedule a Demo</a>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <!-- End Navbar Area -->
</template>

<script>
export default {
  name: "HeaderFive",
  data() {
    return {
      isSticky: false,
    };
  },

  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 300) {
        that.isSticky = true;
      } else {
        that.isSticky = false;
      }
    });
  },
};
</script>

<style scoped>
.headroom {
  background-color: #ffffff; /* White background like template */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.headroom.is-sticky {
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.navbar-nav .nav-link {
  color: #007bff; /* Blue links like template */
  font-weight: 500;
  font-size: 16px;
  padding: 10px 15px;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
  color: #28a745; /* Light green hover like template */
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
</style>