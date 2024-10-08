<script setup lang="ts">
import { ref, onMounted } from 'vue';

const lessen = ref<any[]>([]);
const openLes = ref<string | null>(null);

onMounted(async () => {
    try {
        const response = await fetch('/api/lessen');
        if (!response.ok) throw new Error('Network response was not ok.');
        const data = await response.json();
        if (!data) throw new Error('No data received');
        lessen.value = data;
    } catch (error) {
        console.error('Failed to fetch lessen:', error);
    }
});

const toggleLes = (lesSlug: string) => {
    openLes.value = openLes.value === lesSlug ? null : lesSlug;
};

const isOpen = (lesSlug: string) => openLes.value === lesSlug;
</script>

<template>
    <section>
        <div class="title-contain">
            <p class="subtitle-medium">bekijk al onze lessen</p>
            <h2>Vind jouw les!</h2>
        </div>
        <div class="subtitle-small" v-if="lessen.length === 0">Er zijn op dit moment nog geen lessen beschikbaar. Houd
            onze website in de gaten voor nieuwe lessen. Voor vragen kun je mailen naar <nuxt-link class="contact-link"
                href="mailto:info@padelclubhem.nl">info@padelclubhem.nl</nuxt-link>.
        </div>
        <div v-else>
            <ul class="lessen">
                <li v-for="les in lessen" :key="les.slug" class="les-item">
                    <div class="les-info" :class="{ 'active': isOpen(les.slug) }" @click="toggleLes(les.slug)"
                        :aria-controls="'les-details-' + les.slug" tabindex="0">
                        <div class="ball">
                            <svg width="60" height="59" viewBox="0 0 60 59" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M56.6038 41.133C56.2693 41.8957 56.01 42.5243 55.7257 43.1445C52.9911 49.0868 48.5923 53.3278 42.7301 56.1691C40.8317 57.091 39.962 57.0575 39.2344 54.7861C33.6063 37.1937 21.9153 25.5856 4.4205 19.8276C2.33819 19.1404 1.65244 18.2938 2.85667 16.0477C6.00105 10.1891 10.5002 5.89787 16.3959 2.89736C18.336 1.90836 18.8796 2.3861 19.4817 4.30542C24.2819 19.7773 34.3088 30.6898 48.8181 37.5709C50.6412 38.4342 52.6315 38.9622 54.5549 39.6159C55.4246 39.9093 56.4031 40.0266 56.6038 41.1246V41.133Z"
                                    fill="#CBFD3C" />
                                <path
                                    d="M32.8217 58.8373C15.4776 60.6451 0.0255687 47.1492 0 30.3209C0 27.5218 0.656263 26.8053 3.52848 27.6134C16.8668 31.354 30.171 45.433 32.8302 58.8373H32.8217Z"
                                    fill="#CBFD3C" />
                                <path
                                    d="M27.1698 0.391121C44.5652 -1.99809 60.9011 12.4881 59.9613 29.4809C59.893 30.73 60.2945 32.2222 57.757 31.736C44.6848 29.2294 29.0836 13.3683 27.1698 0.391121Z"
                                    fill="#CBFD3C" />
                            </svg>
                        </div>
                        <div class="title-svg-flex">
                            <p class="subtitle-medium">{{ les.titel }}</p>
                            <svg class="les-arrow" width="16" height="22" viewBox="0 0 16 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M15.5386 14.6683L8.85843 21.3485C8.4485 21.7584 7.78387 21.7584 7.37394 21.3485L0.693755 14.6683C0.283826 14.2584 0.283826 13.5937 0.693755 13.1838C1.10369 12.7739 1.76831 12.7739 2.17824 13.1838L7.0665 18.0721L7.0665 1.7118C7.0665 1.13207 7.53646 0.662109 8.11619 0.662109C8.69592 0.662109 9.16588 1.13207 9.16588 1.7118L9.16588 18.0721L14.0541 13.1838C14.4641 12.7739 15.1287 12.7739 15.5386 13.1838C15.9486 13.5937 15.9486 14.2584 15.5386 14.6683Z"
                                    fill="#CBFD3C" />
                            </svg>
                        </div>
                    </div>
                    <transition name="fade">
                        <div v-if="isOpen(les.slug)" :id="'les-details-' + les.slug" class="les-details">
                            <div class="image-wrapper">
                                <div class="image-overlay">
                                    <div class="image-container">
                                        <img v-if="les.image" :src="les.image.url" alt="Les Image" class="les-image"
                                            loading="lazy" width="100%" height="100%">
                                    </div>
                                </div>
                            </div>
                            <div class="flex-les-details">
                                <div class="les-subtags">
                                    <p class="les-subtag">Aantal Personen: {{ les.aantalPersonen }}</p>
                                    <p class="les-subtag">Lesduur: {{ les.lesduur }}</p>
                                    <p class="les-subtag">Inschrijfgeld: {{ les.prijsPerLes }} EUR</p>
                                </div>
                                <p class="les-description">{{ les.introductie }}</p>
                                <nuxt-link class="primary-button" :to="'/inschrijven-les/register/' + les.slug">Ik
                                    wil mij inschrijven!</nuxt-link>
                            </div>
                        </div>
                    </transition>
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

.title-contain h2 {
    color: var(--secondary-color);
}

.lessen {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    border-top: 2px solid var(--secondary-color);
}

.les-item {
    border-bottom: 2px solid var(--secondary-color);
}

.les-info {
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

.les-info.active .les-arrow {
    transform: rotate(180deg);
}

.les-info.active path {
    fill: var(--secondary-color);
}

.les-arrow {
    transition: transform 0.3s ease, fill 0.3s ease;
}

.subtitle-bold-uppercase {
    color: var(--primary-color);
}

.subtitle-medium {
    display: flex;
    justify-content: left;
}

.image-overlay {
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    margin: 1rem 0;
}

.les-subtags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 1rem 0;
}

.les-subtag {
    font-size: 0.7rem;
    line-height: 0.7rem;
    padding: 0.6rem;
    text-align: center;
    border: solid 2px var(--secondary-color);
    max-width: fit-content;
}

.les-description {
    font-size: 0.8rem;
    line-height: 1.5rem;
}

.primary-button {
    max-width: fit-content;
    margin: 1rem 0 2rem 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
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

    .ball {
        margin-right: 3rem;
    }

    .title-svg-flex {
        width: 70%;
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

    .lessen {
        max-width: 80rem;
        margin: 0 auto;
        margin-top: 5rem;
    }

    .les-info {
        padding: 1.5rem 0
    }

    .ball svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    .title-svg-flex {
        width: 60rem;
    }

    .les-details {
        display: flex;
        max-width: 50rem;
    }

    .flex-les-details {
        display: flex;
        flex-direction: column;
        padding-left: 5rem;
    }

    .image-overlay {
        width: 15rem;
        height: 15rem;
        margin: 1rem 0 2rem 0;
    }

    .image-container {
        width: 15rem;
        height: 15rem;
    }

    .les-subtag {
        font-size: 0.8rem;
        line-height: 0.8rem;
        padding: 0.7rem;
    }

    .les-description {
        font-size: 0.9rem;
        line-height: 1.6rem;
    }

    .primary-button {
        margin: 2rem 0 2rem 0;
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
