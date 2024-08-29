<script setup lang="ts">
import { ref, onMounted } from 'vue';

const faqs = ref<any[]>([]);
const openFaq = ref<number | null>(null);

onMounted(async () => {
    try {
        const response = await fetch('/api/faqs');
        if (!response.ok) throw new Error('Network response was not ok.');
        const data = await response.json();
        if (!data) throw new Error('No data received');
        faqs.value = data;
    } catch (error) {
        console.error('Failed to fetch faqs:', error);
    }
});

const toggleFaq = (faqId: number) => {
    openFaq.value = openFaq.value === faqId ? null : faqId;
};

const isOpen = (faqId: number) => openFaq.value === faqId;
</script>


<template>
    <section>
        <div class="title-contain">
            <p class="subtitle-medium">vind hier je jouw antwoorden</p>
            <h2>Wat Wil Je Weten?</h2>
        </div>
        <div class="subtitle-small" v-if="faqs.length === 0">Er zijn op dit moment nog geen vragen beschikbaar.
            Houd onze website in de gaten voor nieuwe vragen. Voor vragen kun je mailen naar <nuxt-link
                class="contact-link" href="mailto:info@padelclubhem.nl">info@padelclubhem.nl</nuxt-link>.
        </div>
        <div v-else>
            <ul class="faqs">
                <li v-for="faq in faqs" :key="faq.id" class="faq-item">
                    <div class="faq-info" :class="{ 'active': isOpen(faq.id) }" @click="toggleFaq(faq.id)" :aria-controls="'faq-details-' + faq.id" tabindex="0">
                        <div class="title-svg-flex">
                            <p class="subtitle-medium">{{ faq.vraag }}</p>
                            <svg class="faq-arrow" width="16" height="22" viewBox="0 0 16 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M15.5386 14.6683L8.85843 21.3485C8.4485 21.7584 7.78387 21.7584 7.37394 21.3485L0.693755 14.6683C0.283826 14.2584 0.283826 13.5937 0.693755 13.1838C1.10369 12.7739 1.76831 12.7739 2.17824 13.1838L7.0665 18.0721L7.0665 1.7118C7.0665 1.13207 7.53646 0.662109 8.11619 0.662109C8.69592 0.662109 9.16588 1.13207 9.16588 1.7118L9.16588 18.0721L14.0541 13.1838C14.4641 12.7739 15.1287 12.7739 15.5386 13.1838C15.9486 13.5937 15.9486 14.2584 15.5386 14.6683Z"
                                    fill="#CBFD3C" />
                            </svg>
                        </div>
                    </div>
                    <transition name="fade">
                        <div v-if="isOpen(faq.id)" :id="'faq-details' + faq.id" class="faq-details">
                            <div class="flex-faq-details">
                                <p class="faq-description">{{ faq.antwoord }}</p>
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

.faqs {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    border-top: 2px solid var(--secondary-color);
}

.faq-item {
    border-bottom: 2px solid var(--secondary-color);
}

.faq-info {
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
    width: 100%;
}

.faq-info.active .faq-arrow {
    transform: rotate(180deg);
}

.faq-info.active path {
    fill: var(--secondary-color);
}

.faq-arrow {
    transition: transform 0.3s ease, fill 0.3s ease;
}

.subtitle-medium {
    display: flex;
    justify-content: left;
    text-transform: inherit
}

.faq-description {
    font-size: 0.8rem;
    line-height: 1.5rem;
    padding: 0.5rem 0 1rem 0;
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

}

@media (min-width: 60rem) {

    .faqs {
        max-width: 80rem;
        margin: 0 auto;
        margin-top: 5rem;
    }

    .faq-info {
        padding: 1.5rem 0
    }

    .faq-details {
        display: flex;
        max-width: 50rem;
    }

    .flex-faq-details {
        display: flex;
        flex-direction: column;
        max-width: 30rem;
    }

    .faq-description {
        font-size: 0.9rem;
        line-height: 1.6rem;
        padding: 0 0 1.5rem 0;
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
