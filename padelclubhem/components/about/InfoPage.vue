<script setup>
import { gsap } from 'gsap';
import { ref, onMounted } from 'vue';

// State om de over ons gegevens op te slaan
const abouts = ref([]);

// API aanroep om de gegevens op te halen
const fetchAbouts = async () => {
  try {
    const response = await fetch('/api/about');
    if (!response.ok) throw new Error('Error fetching data');
    const data = await response.json();
    abouts.value = data; // Vul de abouts array met de opgehaalde gegevens
  } catch (error) {
    console.error('Error fetching about data:', error);
  }
};

// Lifecycle hook om de API aan te roepen en GSAP animatie te starten
onMounted(() => {
  fetchAbouts();

  // Start GSAP animaties na het laden van het component
  const timeline = gsap.timeline();
  timeline
    .from('.intro-content', { duration: 1, y: -50, opacity: 0, ease: 'bounce.out' })
    .from('.section-image-wrapper', { duration: 1, y: 50, opacity: 0, ease: 'power2.out' }, '-=0.5')
    .from('.scroll-down-container-wrapper', { duration: 1, y: 20, opacity: 0, ease: 'bounce.out' }, '-=0.5')
    .from('.ball-separator-wrapper', { duration: 1, x: -50, opacity: 0, ease: 'power2.out' }, '-=0.5');
});
</script>

<template>
  <div class="wrapper">
    <section class="intro-content">
      <div v-if="abouts.length">
        <div v-for="about in abouts" :key="about.id" class="intro-item">
          <p class="subtitle-medium">Over ons</p>
          <h1>{{ about.titel }}</h1>
          <p>{{ about.introductie }}</p>
          <p>{{ about.introductieTwee }}</p>
        </div>
      </div>
      <div v-else>
        <p>Geen informatie beschikbaar over ons.</p>
      </div>
    </section>

    <div class="ball-separator-wrapper">
      <div class="ball-separator">
        <MoleculesBallSeparator />
        <MoleculesBallSeparator />
        <MoleculesBallSeparator />
        <MoleculesBallSeparator />
      </div>
    </div>

    <section class="section-image-wrapper">
      <div class="image-wrapper">
        <div class="image-overlay">
          <div class="image-container">
            <!-- Verander de statische afbeelding naar dynamische afbeelding -->
            <img :src="abouts[0]?.introductieAfbeelding.url" alt="Afbeelding van de evenementen pagina" loading="lazy" width="100%" height="100%" />
          </div>
          <div class="green-separator"></div>
        </div>
      </div>

      <div class="scroll-down-container-wrapper">
        <div class="scroll-down-container">
          <AtomsRacketScrollDown />
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>
.intro-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  background-color: var(--background-color);
  padding: 11rem 1.5rem 3rem 1.5rem;
}

.intro-content h2 {
  color: var(--primary-color);
}

.intro-content p {
  color: var(--secondary-color);
}

.intro-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 40rem;
}

.ball-separator-wrapper {
  overflow: hidden;
  width: 100%;
  height: 8rem;
}

.ball-separator {
  display: flex;
  gap: 1rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.image-overlay {
  width: 100%;
  height: 18rem;
}

.image-overlay {
  width: 100%;
  height: 18rem;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-overlay img {
  width: 150%;
  height: 150%;
}

.section-image-wrapper {
  position: relative;
}

.scroll-down-container-wrapper {
  position: absolute;
  top: -2rem;
  right: 3rem;
  background-color: transparent;
  z-index: 10;
}

@media (min-width: 40rem) {
  .intro-content {
    gap: 3rem;
    padding: 11rem 3rem 3rem 3rem;
  }

  .image-overlay {
    width: 100%;
    height: 30rem;
  }
}

@media (min-width: 60rem) {
  .wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100vh;
    padding-top: 3rem;
  }

  .image-overlay img {
    width: 150%;
    height: 150%;
  }

  .ball-separator-wrapper {
    display: none;
  }

  .section-image-wrapper {
    width: 100%;
    height: auto;
    margin-top: auto;
  }

  .scroll-down-container-wrapper {
    top: -3rem;
    right: 5rem;
  }
}

@media (min-width: 80rem) {

  .section-image-wrapper {
    width: 80%;
    height: auto;
    margin-top: auto;
  }

  .scroll-down-container-wrapper {
    top: -4rem;
    right: 7rem;
  }
}

@media (min-width: 120rem) {

  .intro-content {
    margin: 3rem 7rem 0 7rem;
  }

  .section-image-wrapper {
    padding-right: 7rem;
  }

  .scroll-down-container-wrapper {
    padding-right: 7rem;
  }
}
</style>
