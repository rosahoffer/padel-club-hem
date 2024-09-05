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
  
  compatibilityDate: '2024-07-05', 

  modules: [
    'nuxt-marquee',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap' // Voeg de sitemap module toe
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
  },

  // Configureer de sitemap module
  sitemap: {
    hostname: 'https://www.padelclubhem.nl', // Basis-URL van je site
    gzip: true, // Sitemap compressie
    routes: [
      '/sportaanbod', // Sportaanbod pagina
      '/evenementen', // Evenementen pagina
      '/lessen', // Lessen pagina
      '/business', // Business pagina
      '/contact',  // Contact pagina
      {
        url: 'https://meetandplay.nl/club/88199', // Boek een baan link
        changefreq: 'monthly',
        priority: 0.8
      }
    ],
    exclude: [
      '/over-ons',
    ],
    defaults: {
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date()
    }
  }
});
