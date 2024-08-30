<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const landingPage = ref<any>(null);
const openItems = ref<{ [key: string]: boolean }>({});

const toggleItem = (item: string) => {
    openItems.value[item] = !openItems.value[item];
};

const isOpen = (item: string) => {
    return !!openItems.value[item];
};

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
    <div v-if="landingPage">
        <!-- Meta Data -->
        <div>
            <meta property="og:title" :content="landingPage.metaTitle" />
            <meta name="description" :content="landingPage.metaDescription" />
        </div>
    </div>

    <!-- Intro Container -->
    <LandingpageIntroContainer />

    <!-- Text Container -->
    <LandingpageTextContainer />

    <!-- Item Container -->
    <LandingpageItemContainer />
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

/* item container  */

.item-container {
    padding: 5rem 1.5rem;
}

.title-contain {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    background-color: var(--background-color);
    padding-bottom: 3rem;
}

.title-contain h3 {
    color: var(--secondary-color);
}

.items {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    border-top: 2px solid var(--secondary-color);
}

.item {
    border-bottom: 2px solid var(--secondary-color);
}

.item-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 1rem 0;
    transition: background-color 0.3s ease;
}

.ball svg {
    width: 1rem;
    height: 1rem;
}

.title-svg-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
}

.item-info.active .item-arrow {
    transform: rotate(180deg);
}

.item-info.active path {
    fill: var(--secondary-color);
}

.item-arrow {
    transition: transform 0.3s ease, fill 0.3s ease;
}

.subtitle-bold-uppercase {
    color: var(--primary-color);
}

.subtitle-medium {
    display: flex;
    justify-content: left;
}

.item-description {
    font-size: 0.8rem;
    line-height: 1.5rem;
    color: var(--secondary-color);
    padding-bottom: 1.5rem
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
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

    .items {
        max-width: 80rem;
        margin: 0 auto;
        margin-top: 5rem;
    }

    .item-info {
        padding: 1.5rem 0
    }

    .ball svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    .title-svg-flex {
        width: 60rem;
    }

    .item-details {
        display: flex;
        max-width: 50rem;
    }

}

@media (min-width: 80rem) {

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

    .title-contain p {
        padding: 3rem 7rem 0rem 7rem;
        max-width: 70rem;
    }

    .title-contain h3 {
        padding: 0rem 7rem 3rem 7rem;
        max-width: 70rem;
    }
}
</style>
