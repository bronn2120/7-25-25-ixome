<template>
  <div class="blog-details-area ptb-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="blog-details">
            <h2>Top 5 Control4 Troubleshooting Tips</h2>
            <p>Learn expert tips to quickly resolve common Control4 issues with IXome.ai's smart home chatbot, designed to save you time and hassle.</p>
            <p>Our AI-powered chatbot provides instant solutions for Control4 systems, from connectivity issues to device malfunctions. Subscribe to one of our plans (Basic, Pro, or Enterprise) to access seamless support.</p>
            <NuxtLink to="/blog" class="btn btn-primary">Back to Blog</NuxtLink>
          </div>
        </div>

        <div class="col-lg-4 col-md-12">
          <div class="widget-area">
            <div class="widget widget_search">
              <h3 class="widget-title">Search</h3>
              <form class="search-form">
                <input type="text" class="search-field" placeholder="Search blog...">
                <button type="submit"><i class="bx bx-search-alt"></i></button>
              </form>
            </div>
            <div class="widget widget_categories">
              <h3 class="widget-title">Categories</h3>
              <ul>
                <li><a href="/blog">Smart Home Tips</a></li>
                <li><a href="/blog">Control4 Solutions</a></li>
                <li><a href="/blog">Lutron Support</a></li>
                <li><a href="/blog">AI Automation</a></li>
              </ul>
            </div>
            <div class="widget widget_recent_posts">
              <h3 class="widget-title">Recent Posts</h3>
              <ul>
                <li><a href="/blog-details">Top 5 Control4 Troubleshooting Tips</a></li>
                <li><a href="/blog-details">Mastering Lutron Systems with AI</a></li>
                <li><a href="/blog-details">The Future of AI in Smart Homes</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogDetails',
  head() {
    return {
      title: 'IXome.ai - Blog Details',
      meta: [
        { name: 'description', content: 'Expert tips and insights on smart home troubleshooting with IXome.ai.' },
        { name: 'keywords', content: 'smart home blog, Control4 troubleshooting, Lutron support, AI chatbot' }
      ]
    }
  }
}
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