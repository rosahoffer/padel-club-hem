<script setup lang="ts">
import { ref, onMounted } from 'vue';

const nieuwtjes = ref<any[]>([]);

onMounted(async () => {
    try {
        const response = await fetch('/api/nieuws');
        if (!response.ok) throw new Error('Network response was not ok.');
        const data = await response.json();
        if (!data || !data.length) throw new Error('No data received');
        nieuwtjes.value = data;
    } catch (error) {
        console.error('Failed to fetch nieuwtjes:', error);
    }
});
</script>

<template>
    <section>
        <div class="title-contain">
            <p class="subtitle-medium">spetterend nieuws uit de club!</p>
            <h2>De smashes van de week</h2>
        </div>
        <div class="subtitle-small" v-if="nieuwtjes.length === 0">
            Er zijn op dit moment geen nieuwsartikelen beschikbaar. Houd deze pagina in de gaten voor de nieuwste
            updates!
        </div>
        <div v-else>
            <ul class="nieuwtjes">
                <li v-for="nieuws in nieuwtjes" :key="nieuws.id">
                    <div class="nieuws-item">
                        <div class="image-wrapper">
                            <div class="image-overlay">
                                <div class="image-container">
                                    <img v-if="nieuws.image && nieuws.image.url" :src="nieuws.image.url"
                                        alt="nieuws Image" class="nieuws-image" loading="lazy" width="100%"
                                        height="100%">
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="subtitle-date">{{ nieuws.datum }}</p>
                            <h3>{{ nieuws.titel }}</h3>
                            <p class="subtitle-small">{{ nieuws.introductie }}</p>
                            <nuxt-link :href="`/news/${nieuws.slug}`" class="secondary-button-white subtitle-medium"
                                aria-label="Lees meer">
                                lees meer
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.28239 0.452916L14.7293 0.3712C15.309 0.366184 15.783 0.832064 15.788 1.41177L15.8697 10.8586C15.8747 11.4383 15.4088 11.9123 14.8291 11.9174C14.2494 11.9224 13.7754 11.4565 13.7704 10.8768L13.7106 3.96401L2.24266 15.6321C1.83629 16.0455 1.17169 16.0513 0.758226 15.6449C0.344766 15.2386 0.339017 14.574 0.745385 14.1605L12.2133 2.49242L5.30055 2.55222C4.72085 2.55723 4.24684 2.09135 4.24182 1.51165C4.23681 0.93194 4.70269 0.457931 5.28239 0.452916Z"
                                        fill="#cbfd3c" />
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

.nieuwtjes {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 5rem;
}

.nieuws-item {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

.nieuws-item div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.image-overlay {
    width: 100%;
    height: 15rem;
}

.subtitle-medium {
    text-transform: inherit;
}

h3 {
    color: var(--secondary-color);
}

.secondary-button-white {
    display: flex;
    justify-content: space-between;
}

.contact-link {
    color: var(--primary-color);
    text-decoration: underline;
}

.contact-link:hover {
    color: var(--secondary-color);
}

@media (min-width: 40rem) {
    section {
        gap: 3rem;
        padding: 10rem 3rem;
    }

    .nieuwtjes {
        max-width: 70rem;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        gap: 3rem;
        flex-wrap: wrap;
    }

    .nieuws-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 20rem;
        height: 35rem;
        margin-top: 3rem;
    }

    .image-overlay {
        width: 100%;
        height: 15rem;
    }

    .image-container {
        width: 100%;
        height: 100%;
    }

    .subtitle-small {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 4.5rem;
        line-height: 1.5rem
    }

    h3 {
        font-size: 2rem;
        line-height: 2rem;
        color: var(--primary-color);
    }
}

@media (min-width: 60rem) {
    .nieuwtjes {
        margin-top: 5rem;
    }

    .nieuws-item {
        gap: 3rem;
        max-width: 20rem;
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
