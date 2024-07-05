<script setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
</script>

<template>
  <div>
    <header>
      <Header />
    </header>

    <slot />

    <footer>
      <Footer />
    </footer>
  </div>
</template>