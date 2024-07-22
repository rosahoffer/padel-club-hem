export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/styles/main.css' 
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
      }
    }
  }
});
