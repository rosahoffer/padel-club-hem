import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },

  router: {
    middleware: []
  },

  css: [
    'assets/styles/main.css'
  ],

  compatibilityDate: '2024-07-05'
});