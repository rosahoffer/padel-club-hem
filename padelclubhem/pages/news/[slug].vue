<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const nieuws = ref<any>(null);

onMounted(async () => {
    const slug = route.params.slug as string;
    try {
        const response = await fetch(`/api/nieuws`);
        if (!response.ok) throw new Error('Network response was not ok.');
        const data = await response.json();
        const item = data.find((n: any) => n.slug === slug);
        if (!item) throw new Error('Nieuwsitem niet gevonden');
        nieuws.value = item;
    } catch (error) {
        console.error('Failed to fetch nieuwsitem:', error);
    }
});
</script>

<template>
    <section v-if="nieuws">
        <h2>{{ nieuws.titel }}</h2>
        <div class="image-wrapper">
            <div class="image-overlay">
                <div class="image-container">
                    <img v-if="nieuws.image && nieuws.image.url" :src="nieuws.image.url" alt="nieuws Image"
                        class="nieuws-image" loading="lazy" width="100%" height="100%">
                </div>
            </div>
        </div>
            <div class="description" v-html="nieuws.beschrijving.html"></div>
            <nuxt-link href="/nieuws" class="primary-button">Terug naar nieuws</nuxt-link>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    background-color: var(--background-color);
    padding: 11rem 1.5rem 3rem 1.5rem;
}

h2 {
    color: var(--primary-color);
}

.description {
    color: var(--secondary-color);
    font-size: 1rem;
    text-align: left;
    margin: 0 auto;
    max-width: 50rem;
}

.primary-button {
    margin: 3rem 0;
    max-width: 10rem;
    margin-left: auto;
}

@media (min-width: 40rem) {
    section {
        gap: 3rem;
        padding: 11rem 3rem 3rem 3rem;
    }
}

@media (min-width: 60rem) {
    .description {
        font-size: 1.125rem;
    }

    h2 {
        color: var(--primary-color);
        text-align: center;
    }

}

@media (min-width: 120rem) {
    .description {
        font-size: 1.25rem;
    }
}
</style>
