<script setup lang="ts">
import { ref, onMounted } from 'vue';

const businesses = ref<any[]>([]);

onMounted(async () => {
    try {
        const response = await fetch('/api/business');
        if (!response.ok) throw new Error('Network response was not ok.');
        const data = await response.json();
        if (!data || !data.length) throw new Error('No data received');
        businesses.value = data;
    } catch (error) {
        console.error('Failed to fetch businesses:', error);
    }
});
</script>

<template>
    <section>
        <div class="title-contain">
            <p class="subtitle-medium">Bekijk al onze zakelijke voordelen</p>
            <h2>Sportieve Bedrijfsvoordelen</h2>
        </div>
        <div class="subtitle-small" v-if="businesses.length === 0">Er zijn op dit moment nog geen zakelijke abonnementen
            beschikbaar. Houd
            onze website in de gaten voor nieuwe zakelijke voordelen.</div>
        <div v-else>
            <ul class="businesses">
                <li v-for="business in businesses" :key="business.id">
                    <div class="business-item">
                        <div class="image-wrapper">
                            <div class="image-overlay">
                                <div class="image-container">
                                    <img v-if="business.image && business.image.url" :src="business.image.url"
                                        alt="Business Image" class="business-image" loading="lazy" width="100%"
                                        height="100%">
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="subtitle-bold-lowercase">{{ business.beschrijving }}</p>
                            <h3>{{ business.titel }}</h3>
                            <nuxt-link href="mailto:info@padelclubhem.nl" class="secondary-button-white subtitle-medium"
                                aria-label="Boek een tennisbaan">
                                Doe jouw aanvraag
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.28239 0.452916L14.7293 0.3712C15.309 0.366184 15.783 0.832064 15.788 1.41177L15.8697 10.8586C15.8747 11.4383 15.4088 11.9123 14.8291 11.9174C14.2494 11.9224 13.7754 11.4565 13.7704 10.8768L13.7106 3.96401L2.24266 15.6321C1.83629 16.0455 1.17169 16.0513 0.758226 15.6449C0.344766 15.2386 0.339017 14.574 0.745385 14.1605L12.2133 2.49242L5.30055 2.55222C4.72085 2.55723 4.24684 2.09135 4.24182 1.51165C4.23681 0.93194 4.70269 0.457931 5.28239 0.452916Z"
                                        fill="#FFEAE3" />
                                </svg>
                            </nuxt-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
section {
    padding: 10rem 1.5rem;
}

.title-contain {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    background-color: var(--background-color);
    padding-bottom: 3rem;
}

.subtitle-medium {
    display: flex;
    justify-content: left;
}

.title-contain h2 {
    color: var(--secondary-color);
    text-wrap: wrap;
}

.businesses {
    display: flex;
    flex-direction: column;
    list-style-type: none;
}

.business-item {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

.image-overlay {
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    margin: 1rem 0;
}

.subtitle-bold-lowercase {
    color: var(--secondary-color);
    font-size: 1rem;
}

h3 {
    color: var(--secondary-color);
}

@media (min-width: 40rem) {
    section {
        gap: 3rem;
        padding: 10rem 3rem;
    }

    .image-overlay {
        width: 20rem;
        height: 15rem;
    }

    .image-container {
        width: 20rem;
        height: 15rem;
    }
}

@media (min-width: 60rem) {
    .businesses {
        max-width: 80rem;
        margin: 0 auto;
        margin-top: 5rem;
        flex-direction: row;
    }

    .business-item {
        display: flex;
        flex-direction: row;
        gap: 2.5rem;
    }
}

@media (min-width: 120rem) {
    .title-contain p {
        padding: 3rem 7rem 0rem 7rem;
        max-width: 70rem;
    }

    .title-contain h2 {
        padding: 0rem 7rem 3rem 7rem;
        max-width: 70rem;
    }
}
</style>
