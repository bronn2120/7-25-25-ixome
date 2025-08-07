<template>
  <div class="blog-details-area ptb-80">
    <div class="container mx-auto px-4">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="blog-details">
            <h2 class="text-4xl font-bold mb-5">Top 5 Control4 Troubleshooting Tips</h2>
            <p class="mb-5 text-gray-600">Learn expert tips to quickly resolve common Control4 issues with IXome.ai's smart home chatbot, designed to save you time and hassle.</p>
            <p class="mb-5 text-gray-600">Our AI-powered chatbot provides instant solutions for Control4 systems, from connectivity issues to device malfunctions. Subscribe to one of our plans (Basic, Pro, or Enterprise) to access seamless support.</p>
            <NuxtLink to="/blog" class="btn btn-primary">Back to Blog</NuxtLink>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="widget-area">
            <div class="widget widget_search">
              <h3 class="widget-title text-xl font-bold mb-5 text-gray-800">Search</h3>
              <form class="search-form relative">
                <input type="text" class="search-field w-full p-2 pl-3 border border-gray-300 rounded-md text-base" placeholder="Search blog...">
                <button type="submit" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-none border-none text-xl text-blue-500"><i class="bx bx-search-alt"></i></button>
              </form>
            </div>
            <div class="widget widget_categories">
              <h3 class="widget-title text-xl font-bold mb-5 text-gray-800">Categories</h3>
              <ul class="list-none space-y-2">
                <li><NuxtLink to="/blog" class="text-blue-500 hover:text-green-500 text-base">Smart Home Tips</NuxtLink></li>
                <li><NuxtLink to="/blog" class="text-blue-500 hover:text-green-500 text-base">Control4 Solutions</NuxtLink></li>
                <li><NuxtLink to="/blog" class="text-blue-500 hover:text-green-500 text-base">Lutron Support</NuxtLink></li>
                <li><NuxtLink to="/blog" class="text-blue-500 hover:text-green-500 text-base">AI Automation</NuxtLink></li>
              </ul>
            </div>
            <div class="widget widget_recent_posts">
              <h3 class="widget-title text-xl font-bold mb-5 text-gray-800">Recent Posts</h3>
              <ul class="list-none space-y-2">
                <li><NuxtLink to="/blog-details" class="text-blue-500 hover:text-green-500 text-base">Top 5 Control4 Troubleshooting Tips</NuxtLink></li>
                <li><NuxtLink to="/blog-details" class="text-blue-500 hover:text-green-500 text-base">Mastering Lutron Systems with AI</NuxtLink></li>
                <li><NuxtLink to="/blog-details" class="text-blue-500 hover:text-green-500 text-base">The Future of AI in Smart Homes</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NuxtLink } from '#components';

useHead({
  title: 'IXome.ai - Blog Details',
  meta: [
    { name: 'description', content: 'Expert tips and insights on smart home troubleshooting with IXome.ai.' },
    { name: 'keywords', content: 'smart home blog, Control4 troubleshooting, Lutron support, AI chatbot' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' }
  ]
});
</script>

<style scoped>
.blog-details-area {
  position: relative;
  z-index: 1;
}

.blog-details h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
}

.blog-details p {
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #28a745;
  border-color: #28a745;
}

.widget-area .widget {
  margin-bottom: 30px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.widget-area .widget-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
}

.widget-area .search-form {
  position: relative;
}

.widget-area .search-form input {
  width: 100%;
  padding: 10px 40px 10px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.widget-area .search-form button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 20px;
  color: #007bff;
}

.widget-area .widget_categories ul,
.widget-area .widget_recent_posts ul {
  list-style: none;
  padding: 0;
}

.widget-area .widget_categories ul li,
.widget-area .widget_recent_posts ul li {
  margin-bottom: 10px;
}

.widget-area .widget_categories ul li a,
.widget-area .widget_recent_posts ul li a {
  color: #007bff;
  font-size: 16px;
  text-decoration: none;
}

.widget-area .widget_categories ul li a:hover,
.widget-area .widget_recent_posts ul li a:hover {
  color: #28a745;
}
</style>