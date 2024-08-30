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
    <section v-if="landingPage" class="image-overlay">
        <div class="image-container">
            <img :src="landingPage.afbeeldingContainer.afbeelding.url" alt="Afbeelding" />
        </div>
    </section>
</template>


<style scoped>
.image-overlay {
    overflow: hidden;
    width: 100%;
    height: 20rem;
    display: flex;
    align-items: center;
}

.image-container img {
    object-fit: cover;
    width: 120%;
    height: 120%;
    display: flex;
    align-items: center;
    opacity: 0.9;
}

@media (min-width: 40rem) {}

@media (min-width: 60rem) {}

@media (min-width: 80rem) {}

@media (min-width: 120rem) {}
</style>
