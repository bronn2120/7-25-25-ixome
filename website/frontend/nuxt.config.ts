export default defineNuxtConfig({
  compatibilityDate: '2025-08-02',
  modules: ['@nuxtjs/strapi', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/i18n'],
  strapi: {
    url: 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    token: 'your_strapi_jwt  # Replace with the new token'
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: true,
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
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', name: 'English' }
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    lazy: true
  },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['gsap']
  },
  runtimeConfig: {
    public: {
      strapiUrl: 'http://localhost:1337'
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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
});
