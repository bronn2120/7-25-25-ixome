<template>
  <header class="header-area">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="~/assets/img/logo.png" alt="IXome.ai Logo" class="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><NuxtLink class="nav-link" to="/">Home</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/about">About</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/services">Services</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/pricing">Pricing</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/contact">Contact</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/blog">Blog</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/login">Login</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/signup">Signup</NuxtLink></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { NuxtLink } from '#components';
</script>

<style scoped>
.header-area {
  background-color: #343a40;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.logo {
  max-height: 50px;
}
.navbar-dark .navbar-nav .nav-link {
  color: #fff;
  font-weight: 500;
  margin-right: 20px;
  font-size: 16px;
  transition: color 0.3s ease;
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: #007bff;
}
.navbar-toggler {
  border-color: #fff;
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
@media (max-width: 991px) {
  .navbar-nav {
    padding-top: 10px;
  }
  .nav-item {
    margin-bottom: 10px;
  }
  .nav-link {
    font-size: 15px;
  }
}
</style>