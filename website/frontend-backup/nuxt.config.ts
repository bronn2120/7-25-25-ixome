export default defineNuxtConfig({
  compatibilityDate: '2025-08-02',
  modules: ['@nuxtjs/strapi', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  strapi: {
    url: 'http://127.0.0.1:1337',
    prefix: '/api',
    version: 'v4',
    token: process.env.STRAPI_JWT || ''
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: true
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['gsap', '@fortawesome/vue-fontawesome']
  },
  runtimeConfig: {
    public: {
      strapiUrl: 'http://127.0.0.1:1337'
    }
  },
  app: {
    head: {
      title: 'IXome.ai - Smart Home Automation',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'IXome.ai provides AI-driven smart home solutions with Control4 and Lutron support.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', body: true, defer: true }
      ]
    }
  },
  ssr: false,
  errorHandler: '~/error.vue',
  vite: {
    server: {
      proxy: {
        '/strapi-api': {
          target: 'http://127.0.0.1:1337',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/strapi-api/, '')
        }
      }
    }
  }
});