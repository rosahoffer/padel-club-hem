<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const landingPage = ref<any>(null);

onMounted(async () => {
    const slug = route.params.slug as string;
    try {
        const response = await fetch(`/api/landingpaginas`);
        if (!response.ok) throw new Error('Network response was not ok.');
        const data = await response.json();
        const item = data.find((n: any) => n.slug === slug);
        if (!item) throw new Error('landingPage item niet gevonden');
        landingPage.value = item;
    } catch (error) {
        console.error('Failed to fetch landingPage:', error);
    }
});
</script>

<template>
    <section v-if="landingPage" class="intro-container">
        <div class="intro-content">
            <h2>{{ landingPage.introContainer.titel }}</h2>
            <p>{{ landingPage.introContainer.beschrijving }}</p>
        </div>
        <div class="section-image-wrapper">
            <div class="image-wrapper">
                <div class="image-overlay">
                    <div class="image-container">
                        <img :src="landingPage.introContainer.afbeelding.url" alt="Intro Afbeelding" />
                    </div>
                </div>
            </div>
            <div class="scroll-down-container-wrapper">
                <div class="scroll-down-container">
                    <AtomsRacketScrollDown />
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
/* intro container  */

.intro-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    background-color: var(--background-color);
}

.intro-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    background-color: var(--background-color);
    padding: 11rem 1.5rem 3rem 1.5rem;
}

.intro-content h2 {
    font-size: 1.8rem;
    line-height: 1.8rem;
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

.image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-overlay img {
    width: 100%;
    height: 100%;
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

    .intro-content h2 {
        font-size: 2.5rem;
        line-height: 2.5rem;
    }
}

@media (min-width: 60rem) {

    .text-container {
        padding: 5rem 10rem;
        margin: 0 auto;
        text-align: center;
        align-items: center;
    }
}

@media (min-width: 80rem) {

    .scroll-down-container-wrapper {
        top: -4rem;
        right: 7rem;
    }

    .intro-content h2 {
        font-size: 5rem;
        line-height: 5rem;
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
