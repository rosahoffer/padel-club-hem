<script setup lang="ts">
import { ref, onMounted } from 'vue';

const events = ref<any[]>([]);
const openEvent = ref<string | null>(null);

onMounted(async () => {
    try {
        const response = await fetch('/api/events');
        if (!response.ok) throw new Error('Network response was not ok.');
        const data = await response.json();
        if (!data) throw new Error('No data received');
        events.value = data;
    } catch (error) {
        console.error('Failed to fetch events:', error);
    }
});

const toggleEvent = (eventSlug: string) => {
    openEvent.value = openEvent.value === eventSlug ? null : eventSlug;
};

const isOpen = (eventSlug: string) => openEvent.value === eventSlug;
</script>

<template>
    <section>
        <div class="title-contain">
            <p class="subtitle-medium">De evenementen kalender</p>
            <h2>Doe je mee?</h2>
        </div>
        <div class="subtitle-small" v-if="events.length === 0">Er zijn op dit moment nog geen evenementen beschikbaar. Houd onze website in de gaten voor nieuwe evenementen.</div>
        <div v-else>
            <ul class="events">
                <li v-for="event in events" :key="event.slug" class="event-item">
                    <div
                        class="event-info"
                        :class="{ 'active': isOpen(event.slug) }"
                        @click="toggleEvent(event.slug)"
                        :aria-controls="'event-details-' + event.slug"
                        tabindex="0"
                    >
                        <p class="subtitle-bold-uppercase">{{ event.date }}</p>
                        <div class="title-svg-flex">
                            <p class="subtitle-medium">{{ event.title }}</p>
                            <svg class="event-arrow" width="16" height="22" viewBox="0 0 16 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M15.5386 14.6683L8.85843 21.3485C8.4485 21.7584 7.78387 21.7584 7.37394 21.3485L0.693755 14.6683C0.283826 14.2584 0.283826 13.5937 0.693755 13.1838C1.10369 12.7739 1.76831 12.7739 2.17824 13.1838L7.0665 18.0721L7.0665 1.7118C7.0665 1.13207 7.53646 0.662109 8.11619 0.662109C8.69592 0.662109 9.16588 1.13207 9.16588 1.7118L9.16588 18.0721L14.0541 13.1838C14.4641 12.7739 15.1287 12.7739 15.5386 13.1838C15.9486 13.5937 15.9486 14.2584 15.5386 14.6683Z"
                                    fill="#CBFD3C" />
                            </svg>
                        </div>
                    </div>
                    <transition name="fade">
                        <div v-if="isOpen(event.slug)" :id="'event-details-' + event.slug" class="event-details">
                            <div class="image-wrapper">
                                <div class="image-overlay">
                                    <div class="image-container">
                                        <img v-if="event.image" :src="event.image.url" alt="Event Image"
                                            class="event-image" loading="lazy" width="100%" height="100%">
                                    </div>
                                </div>
                            </div>
                            <div class="flex-event-details">
                                <div class="event-subtags">
                                    <p class="event-subtag">Tijd: {{ event.time }}</p>
                                    <p class="event-subtag">Leeftijd: {{ event.ageGroup }}</p>
                                    <p class="event-subtag">Inschrijfgeld: {{ event.registrationFee }} EUR</p>
                                </div>
                                <p class="event-description">{{ event.description }}</p>
                                <nuxt-link class="primary-button"
                                    :to="'/inschrijven-evenement/register/' + event.slug">Ik
                                    wil meedoen!</nuxt-link>
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

.events {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    border-top: 2px solid var(--secondary-color);
}

.event-item {
    border-bottom: 2px solid var(--secondary-color);
}

.event-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 1rem 0;
    transition: background-color 0.3s ease;
}

.title-svg-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
}

.event-info.active .event-arrow {
    transform: rotate(180deg);
}

.event-info.active path {
    fill: var(--secondary-color);
}

.event-arrow {
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

.event-subtags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 1rem 0;
}

.event-subtag {
    font-size: 0.7rem;
    line-height: 0.7rem;
    padding: 0.6rem;
    text-align: center;
    border: solid 2px var(--secondary-color);
    max-width: fit-content;
}

.event-description {
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

@media (min-width: 40rem) {
    section {
        gap: 3rem;
        padding: 10rem 3rem;
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

    .events {
        max-width: 80rem;
        margin: 0 auto;
        margin-top: 5rem;
    }

    .event-info {
        padding: 1.5rem 0
    }

    .title-svg-flex {
        width: 60rem;
    }

    .event-details {
        display: flex;
        max-width: 50rem;
    }

    .flex-event-details {
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

    .event-subtag {
        font-size: 0.8rem;
        line-height: 0.8rem;
        padding: 0.7rem;
    }

    .event-description {
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
