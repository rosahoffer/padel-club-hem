<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <section>
    <div class="flex-container-text">
      <h2 class="title-uppercase">Oeps, dat ging even mis!</h2>
      <p class="subtitle">Het lijkt erop dat je een verkeerde afslag hebt genomen.</p>
      <p>Geen zorgen, zelfs de beste spelers missen wel eens een bal! 🏓</p>
      <div class="flex-container-buttons">
        <button @click="handleError" class="primary-button">Terug naar de homepagina</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--second-background);
  margin: 0 3rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-uppercase {
  text-transform: uppercase;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.subtitle {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.flex-container-buttons {
  margin-top: 2rem;
}
</style>
