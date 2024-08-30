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
    <section v-if="landingPage && landingPage.ctaContainer">
        <h3>{{ landingPage.ctaContainer.titel }}</h3>
        <p>{{ landingPage.ctaContainer.subtitel }}</p>
        <!-- Gebruik de <a> tag voor externe links -->
        <a :href="landingPage.ctaContainer.buttonUrl" target="_blank" rel="noopener noreferrer" class="primary-button-grey">
            {{ landingPage.ctaContainer.buttonText }}
        </a>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);
    padding: 4rem 1.5rem;
    text-align: center;
}

h3{
    color: var(--tertiary-color);
}

p{
    color: var(--tertiary-color);
}

@media (min-width: 40rem) {
    section {
        gap: 1rem;
        padding: 4rem 3rem;
    }
}

@media (min-width: 60rem) {
    section {
        gap: 1.5rem;
        padding: 5rem 10rem;
    }

    section p {
        max-width: 30rem;
    }
}

@media (min-width: 80rem) {
    section {
        padding: 7rem 15rem;
    }
}

@media (min-width: 90rem) {
    section {
        padding: 8rem 25rem;
    }
}

</style>