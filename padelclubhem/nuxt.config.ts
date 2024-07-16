// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    'assets/styles/main.css'
  ],

  compatibilityDate: '2024-07-05',
  modules: ["nuxt-marquee"],
  components: true,

  app: {
    pageTransition: { name: 'page', mode: 'in-out' },
    head: {
      htmlAttrs: {
        lang: 'nl'
      }
    }
  }
});