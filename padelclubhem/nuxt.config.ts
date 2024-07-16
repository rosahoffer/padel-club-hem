import { defineNuxtConfig } from 'nuxt/config';
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    'assets/styles/main.css'
  ],

  compatibilityDate: '2024-07-05',
  modules: ["nuxt-marquee"],
  components: true,

  build: {
    cache: true,
    plugins: [
      new HardSourceWebpackPlugin()
    ],
    parallel: true,
    optimizeCSS: true,
    terser: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  },

  head: {
    htmlAttrs: {
      lang: 'nl'
    }
  }

  
});
