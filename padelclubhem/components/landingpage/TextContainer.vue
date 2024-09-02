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
    <section v-if="landingPage" class="text-container">
        <h3>{{ landingPage.textContainer.titel }}</h3>
        <p>{{ landingPage.textContainer.paragraaf }}</p>
    </section>
</template>


<style scoped>
/* text container  */

.text-container {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    background-color: var(--primary-color);
    padding: 5rem 1.5rem;
}

.text-container h3 {
    color: var(--background-color);
}

.text-container p {
    color: var(--background-color);
}

@media (min-width: 40rem) {

    .text-container {
        padding: 4rem 3rem;
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

@media (min-width: 80rem) {}

@media (min-width: 120rem) {}
</style>
