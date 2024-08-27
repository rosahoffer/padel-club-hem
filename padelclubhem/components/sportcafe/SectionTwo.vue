<script setup lang="ts">
import { ref } from 'vue';

const openSection = ref<string | null>(null);

const toggleSection = (sectionSlug: string) => {
    openSection.value = openSection.value === sectionSlug ? null : sectionSlug;
};

const isOpen = (sectionSlug: string) => openSection.value === sectionSlug;
</script>

<template>
    <section>
        <div class="title-contain">
            <p class="subtitle-medium">Ontspan in ons gezellige sportcafé</p>
            <h2>Wat bieden wij?</h2>
        </div>
        <div>
            <ul class="sections">
                <li class="section-item">
                    <div class="section-info" :class="{ 'active': isOpen('sfeer') }" @click="toggleSection('sfeer')"
                        :aria-controls="'section-details-sfeer'" tabindex="0">
                        <p class="subtitle-medium">Gezellige sfeer</p>
                        <svg class="section-arrow" width="16" height="22" viewBox="0 0 16 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.5386 14.6683L8.85843 21.3485C8.4485 21.7584 7.78387 21.7584 7.37394 21.3485L0.693755 14.6683C0.283826 14.2584 0.283826 13.5937 0.693755 13.1838C1.10369 12.7739 1.76831 12.7739 2.17824 13.1838L7.0665 18.0721L7.0665 1.7118C7.0665 1.13207 7.53646 0.662109 8.11619 0.662109C8.69592 0.662109 9.16588 1.13207 9.16588 1.7118L9.16588 18.0721L14.0541 13.1838C14.4641 12.7739 15.1287 12.7739 15.5386 13.1838C15.9486 13.5937 15.9486 14.2584 15.5386 14.6683Z"
                                fill="#CBFD3C" />
                        </svg>
                    </div>
                    <transition name="fade">
                        <div v-if="isOpen('sfeer')" id="section-details-sfeer" class="section-details">
                            <p>Ons sportcafé is ingericht met comfortabele zitplaatsen en een warme ambiance. Het is de
                                ideale plek om samen te komen met vrienden, familie of teamgenoten en na te praten over
                                het spel. Daarnaast is er een terras in de club voor het kijken van padel wedstrijden.
                            </p>
                        </div>
                    </transition>
                </li>
                <li class="section-item">
                    <div class="section-info" :class="{ 'active': isOpen('drankjes') }"
                        @click="toggleSection('drankjes')" :aria-controls="'section-details-drankjes'" tabindex="0">
                        <p class="subtitle-medium">Heerlijke Drankjes en lekkere snacks</p>
                        <svg class="section-arrow" width="16" height="22" viewBox="0 0 16 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.5386 14.6683L8.85843 21.3485C8.4485 21.7584 7.78387 21.7584 7.37394 21.3485L0.693755 14.6683C0.283826 14.2584 0.283826 13.5937 0.693755 13.1838C1.10369 12.7739 1.76831 12.7739 2.17824 13.1838L7.0665 18.0721L7.0665 1.7118C7.0665 1.13207 7.53646 0.662109 8.11619 0.662109C8.69592 0.662109 9.16588 1.13207 9.16588 1.7118L9.16588 18.0721L14.0541 13.1838C14.4641 12.7739 15.1287 12.7739 15.5386 13.1838C15.9486 13.5937 15.9486 14.2584 15.5386 14.6683Z"
                                fill="#CBFD3C" />
                        </svg>
                    </div>
                    <transition name="fade">
                        <div v-if="isOpen('drankjes')" id="section-details-drankjes" class="section-details">
                            <p>Geniet van een breed assortiment aan drankjes, van verfrissende frisdranken en sapjes tot
                                speciaal geselecteerde bieren en wijnen. Ook kun je terecht voor heerlijke koffie en
                                thee voor een rustige pauze. Wij bieden daarnaast een selectie van smakelijke hapjes,
                                zoals tosti's, broodjes, salades en bittergarnituurtjes.</p>
                        </div>
                    </transition>
                </li>
                <li class="section-item">
                    <div class="section-info" :class="{ 'active': isOpen('sport') }" @click="toggleSection('sport')"
                        :aria-controls="'section-details-sport'" tabindex="0">
                        <p class="subtitle-medium">Live Sportuitzendingen</p>
                        <svg class="section-arrow" width="16" height="22" viewBox="0 0 16 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.5386 14.6683L8.85843 21.3485C8.4485 21.7584 7.78387 21.7584 7.37394 21.3485L0.693755 14.6683C0.283826 14.2584 0.283826 13.5937 0.693755 13.1838C1.10369 12.7739 1.76831 12.7739 2.17824 13.1838L7.0665 18.0721L7.0665 1.7118C7.0665 1.13207 7.53646 0.662109 8.11619 0.662109C8.69592 0.662109 9.16588 1.13207 9.16588 1.7118L9.16588 18.0721L14.0541 13.1838C14.4641 12.7739 15.1287 12.7739 15.5386 13.1838C15.9486 13.5937 15.9486 14.2584 15.5386 14.6683Z"
                                fill="#CBFD3C" />
                        </svg>
                    </div>
                    <transition name="fade">
                        <div v-if="isOpen('sport')" id="section-details-sport" class="section-details">
                            <p>Bij ons kun je genieten van een echte sportkroegsfeer. Volg bijvoorbeeld de Formule
                                1-races, juich voor het Nederlands elftal tijdens hun wedstrijden, bewonder de
                                spectaculaire rally’s van de padellers van het wereldniveau en geniet uiteraard van de
                                spelers op Roland Garros of Wimbledon! We bieden je ultiem sportplezier met een heerlijk
                                biertje, wijntje of frisje erbij.</p>
                        </div>
                    </transition>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
section {
    padding: 6rem 1.5rem;
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

.sections {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    border-top: 2px solid var(--secondary-color);
}

.section-item {
    border-bottom: 2px solid var(--secondary-color);
}

.section-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 1rem 0;
    transition: background-color 0.3s ease;
}

.section-info.active .section-arrow {
    transform: rotate(180deg);
}

.section-info.active path {
    fill: var(--secondary-color);
}

.section-arrow {
    transition: transform 0.3s ease, fill 0.3s ease;
}

.subtitle-medium {
    display: flex;
    justify-content: left;
}

.section-details {
    padding: 1rem 0;
}

.section-details p {
    font-size: 0.8rem;
    line-height: 1.5rem;
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
        padding: 8rem 3rem;
    }
}

@media (min-width: 60rem) {
    .sections {
        max-width: 80rem;
        margin: 0 auto;
        margin-top: 5rem;
    }

    .section-info {
        padding: 1.5rem 0;
    }

    .section-details p {
        max-width: 50rem;
        font-size: 0.9rem;
        line-height: 1.6rem;
        padding-bottom: 1.5rem;
    }
}

@media (min-width: 120rem) {
    .title-contain p {
        padding: 3rem 7rem 0rem 7rem;
        max-width: 70rem;
    }

    .title-contain h2 {
        padding: 0rem 7rem 3rem 7rem;
        max-width: 80rem;
    }
}
</style>
