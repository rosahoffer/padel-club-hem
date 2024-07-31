export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      hygraphApiUrl: process.env.HYGRAPH_API_URL,
      hygraphApiToken: process.env.HYGRAPH_API_TOKEN,
    }
  },

  devtools: { enabled: true },
  css: [
    '@/assets/styles/main.css' 
  ],

   plugins: [
    '@/plugins/cursor.js'
  ],

  compatibilityDate: '2024-07-05', 

  modules: [
    'nuxt-marquee',
    '@nuxtjs/seo'
  ],

  components: true,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'nl'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
});
