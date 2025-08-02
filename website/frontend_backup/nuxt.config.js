export default defineNuxtConfig({
    modules: ['@nuxtjs/strapi'],
    strapi: {
      url: 'http://localhost:1337',
      prefix: '/api',
      version: 'v4',
      token: 'your_strapi_jwt'  // Replace with your Strapi API token
    },
    // ... other config
  });