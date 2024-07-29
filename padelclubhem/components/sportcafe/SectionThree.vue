<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const carousel = document.querySelector('.image-carousel');
    const imageList = document.querySelector('.image-list');

    // Bepaal de totale breedte van de image list
    const totalWidth = imageList.scrollWidth - carousel.clientWidth;

    // Maak een GSAP animatie die de scroll van de image list koppelt aan de scroll van de carousel
    gsap.to(imageList, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
            trigger: carousel,
            start: 'top 30%',
            end: 'bottom 30%',
            scrub: true,
            pin: true,
            anticipatePin: 1,
        }
    });
});
</script>

<template>
    <section class="image-carousel" id="sfeerimpressie" aria-label="Sfeerimpressie Sportcafe">
        <div class="image-list">
            <div class="image-item" id="image-1">
                <img class="image-list-img" src="assets/images/sportcafe-impressie-binnen.png"
                    alt="Sfeerimpressie Sportcafe Binnen" loading="lazy">
            </div>
            <div class="image-item" id="image-2">
                <img class="image-list-img" src="assets/images/sportcafe-impressie-terras.png"
                    alt="Sfeerimpressie Sportcafe Terras" loading="lazy">
            </div>
            <div class="image-item" id="image-3">
                <img class="image-list-img" src="assets/images/sportcafe-impressie-binnen-2.png"
                    alt="Sfeerimpressie Sportcafe Binnen" loading="lazy">
            </div>
        </div>
    </section>
</template>

<style scoped>
html,
body {
    overflow: hidden;
}

.image-carousel {
    padding: 3rem 0;
    background-color: var(--primary-color);
    overflow: hidden;
    position: relative;
    height: auto;
}

.image-list {
    display: flex;
    width: auto;
    will-change: transform;
}

.image-item {
    flex: 0 0 100vw;
    margin-right: 0.5rem;
}

.image-list-img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
    transition: 0.3s ease all;
}

@media (min-width: 60rem) {
    .image-carousel {
        padding: 5rem 0;
    }

    .image-list-img {
        height: 30rem;
    }
}
</style>