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
          <h1>{{ about.paginaTitel }}</h1>
          <p>{{ about.paginaBeschrijving }}</p>
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
            <img :src="abouts[0]?.paginaAfbeelding.url" alt="Afbeelding van de evenementen pagina" loading="lazy"
              width="100%" height="100%" />
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
  <section class="introductie-contain">
    <div v-if="abouts.length">
      <div v-for="about in abouts" :key="about.id">
        <h2>{{ about.introductieTitel }}</h2>
        <div class="introductie-flex">
          <p>{{ about.introductieEen }}</p>
          <p>{{ about.introductieTwee }}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="services-contain">
    <article>
      <section class="service-card card-one-bg">
        <div class="information-service-card card-one">
          <div v-if="abouts.length">
            <div v-for="about in abouts" :key="about.id" class="intro-item">
              <h3>{{ about.titelSectieEen }}</h3>
              <p>{{ about.informatieSectieEen }}</p>
            </div>
          </div>
        </div>
      </section>
      <div class="image-overlay-service-card">
        <div class="image-container-service-card">
          <img :src="abouts[0]?.afbeeldingSectieEen.url" alt="Afbeelding missie" loading="lazy" width="100%"
            height="100%" />
        </div>
      </div>
    </article>
    <article>
      <section class="service-card card-two-bg">
        <div class="information-service-card card-two">
          <div v-if="abouts.length">
            <div v-for="about in abouts" :key="about.id" class="intro-item">
              <h3>{{ about.titelSectieTwee }}</h3>
              <p>{{ about.informatieSectieTwee }}</p>
            </div>
          </div>
        </div>
      </section>
      <div class="image-overlay-service-card">
        <div class="image-container-service-card">
          <img :src="abouts[0]?.afbeeldingSectieTwee.url" alt="Afbeelding visie" loading="lazy" width="100%"
            height="100%" />
        </div>
      </div>
    </article>
  </section>
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

.intro-content h1 {
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
  width: 120%;
  height: 120%;
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

/* section twee  */

.introductie-contain {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--primary-color);
  padding: 4rem 1.5rem;
}

.introductie-contain h2 {
  color: var(--background-color);
}

.introductie-contain p {
  color: var(--background-color);
}

.introductie-flex {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
}

/* section three  */

.services-contain {
  background-color: var(--background-color);
}

article {
  width: 100%;
}

.service-card {
  padding: 3rem 1.5rem;
}

.image-overlay-service-card {
  height: 25rem;
}

.information-service-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
}

.card-one-bg {
  background-color: var(--tertiary-color);
}

.card-one h3,
.card-one p {
  color: var(--secondary-color);
}

.card-two-bg {
  background-color: var(--secondary-color);
}

.card-two h3,
.card-two p {
  color: var(--tertiary-color);
}

.buttons {
  display: flex;
  flex-direction: column;
}

.spelregels-button {
  border-top: none;
  gap: 0;
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

  .introductie-contain {
    gap: 1rem;
    padding: 4rem 3rem;
  }

  .service-card {
    padding: 5rem 3rem;
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

  .introductie-contain {
    gap: 1.5rem;
    padding: 5rem 10rem;
    margin: 0 auto;
    text-align: center;
    align-items: center;
  }

  .introductie-flex {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    text-align: left;
  }

  article {
    width: 100%;
    height: 35rem;
    display: flex;
    flex-direction: row-reverse;
  }

  article:nth-child(2) {
    flex-direction: row;
  }

  article:nth-child(4) {
    flex-direction: row;
  }

  .service-card {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .image-overlay-service-card {
    width: 50%;
    height: auto;
  }

  .information-service-card {
    margin: 0;
    gap: 3rem;
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

  .introductie-contain {
    padding: 7rem 15rem;
  }

  .introductie-flex {
    margin-top: 5rem;
  }

  article {
    height: 45rem;
  }

  .information-service-card {
    max-width: 40rem;
  }
}

@media (min-width: 90rem) {
  .introductie-contain {
    padding: 8rem 25rem;
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
