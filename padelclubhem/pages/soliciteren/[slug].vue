<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const vacature = ref<any>(null);

onMounted(async () => {
    const slug = route.params.slug as string;
    try {
        const response = await fetch(`/api/vacatures`);
        if (!response.ok) throw new Error('Network response was not ok.');
        const data = await response.json();
        const item = data.find((n: any) => n.slug === slug);
        if (!item) throw new Error('vacatureitem niet gevonden');
        vacature.value = item;
    } catch (error) {
        console.error('Failed to fetch vacatureitem:', error);
    }
});
</script>

<template>
    <section v-if="vacature">
        <nav aria-label="Breadcrumb" class="breadcrumb">
            <ul class="breadcrumb-list">
                <li class="breadcrumb-item">
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li class="breadcrumb-item">
                    <NuxtLink to="/vacatures">Vacatures</NuxtLink>
                </li>
                <li class="breadcrumb-item">
                    {{ vacature.functie }}
                </li>
            </ul>
        </nav>
        <h2>{{ vacature.functie }}</h2>
        <div class="vacature-subtags">
            <p class="vacature-subtag">Publicatiedatum: {{ vacature.publicatiedatum }}</p>
            <p class="vacature-subtag">Dienstverband: {{ vacature.typeDienstverband }}</p>
        </div>
        <p class="introductie">{{ vacature.introductie }}</p>
        <div class="image-wrapper">
            <div class="image-overlay">
                <div class="image-container">
                    <img v-if="vacature.image && vacature.image.url" :src="vacature.image.url" alt="vacature Image"
                        class="vacature-image" loading="lazy" width="100%" height="100%">
                </div>
            </div>
        </div>
        <div class="information-contain">
            <h3>Wat biedt jij?</h3>
            <div class="description" v-html="vacature.watBiedtJij.html"></div>
            <h3>Jouw rol bij ons</h3>
            <div class="description" v-html="vacature.jouwRolBijOns.html"></div>
            <h3>Wat bieden wij?</h3>
            <p class="description">{{ vacature.watBiedenWij }}</p>
        </div>
    </section>
    <section class="cta-contain">
        <h3>Interesse?</h3>
        <p>Ben je enthousiast geworden en herken je jezelf in dit profiel? Stuur dan je motivatie en CV!</p>
        <nuxt-link href="mailto:info@padelclubhem.nl" class="primary-button-black">Stuur mijn motivatie en
            CV</nuxt-link>
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
    padding: 11rem 1.5rem 6rem 1.5rem;
}

h2 {
    color: var(--secondary-color);
}

.vacature-subtags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 1rem 0;
}

.vacature-subtag {
    font-size: 0.7rem;
    line-height: 0.7rem;
    padding: 0.6rem;
    text-align: center;
    border: solid 2px var(--secondary-color);
    max-width: fit-content;
}

.information-contain {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin: 0 auto;
}

.primary-button {
    margin: 3rem 0;
    max-width: 10rem;
    margin-left: auto;
}

.image-wrapper {
    max-width: 50rem;
    margin: 0 auto;
}

.image-overlay {
    background-color: transparent;
}

.cta-contain {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--primary-color);
    padding: 4rem 1.5rem;
}

.cta-contain h3 {
    color: var(--background-color);
}

.cta-contain p {
    color: var(--background-color);
}

@media (min-width: 40rem) {
    section {
        gap: 3rem;
        padding: 11rem 3rem 3rem 3rem;
    }

    .cta-contain {
        gap: 1rem;
        padding: 4rem 3rem;
    }
}

@media (min-width: 60rem) {
    .description {
        font-size: 1.125rem;
    }

    h2 {
        text-align: center;
    }

    .introductie {
        margin: 0 auto;
        max-width: 50rem;
        text-align: center;
    }

    .vacature-subtags {
        margin: 0 auto;
    }

    .vacature-subtag {
        font-size: 0.8rem;
        line-height: 0.8rem;
        padding: 0.7rem;
    }

    .vacature-description {
        font-size: 0.9rem;
        line-height: 1.6rem;
    }

    .subtitle-date {
        margin: 0 auto;
    }

    .cta-contain {
        gap: 1.5rem;
        padding: 5rem 10rem;
        margin: 0 auto;
        text-align: center;
        align-items: center;
    }

    .cta-contain p {
        max-width: 30rem;
    }
}

@media (min-width: 80rem) {
    .cta-contain {
        padding: 7rem 15rem;
    }
}

@media (min-width: 90rem) {
    .cta-contain {
        padding: 8rem 25rem;
    }
}

@media (min-width: 120rem) {
    .description {
        font-size: 1.25rem;
    }
}
</style>
