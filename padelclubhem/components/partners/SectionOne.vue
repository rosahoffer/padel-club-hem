<script>
import { gsap } from 'gsap';

export default {
    mounted() {
        const timeline = gsap.timeline();
        timeline.from(".intro-content", { duration: 1, y: -50, opacity: 0, ease: "bounce.out" })
            .from(".section-image-wrapper", { duration: 1, y: 50, opacity: 0, ease: "power2.out" }, "-=0.5")
            .from(".scroll-down-container-wrapper", { duration: 1, y: 20, opacity: 0, ease: "bounce.out" }, "-=0.5")
            .from(".ball-separator-wrapper", { duration: 1, x: -50, opacity: 0, ease: "power2.out" }, "-=0.5");
    }
}
</script>

<template>
    <div class="wrapper">
        <section class="intro-content">
            <p class="subtitle-medium">Partners</p>
            <h1>Partners</h1>
            <p>Coming Soon! Houd onze website in de gaten. Voor vragen kun je mailen naar
                <a class="p-link-two" href="mailto:info@padelclubhem.nl">info@padelclubhem.nl</a>.
            </p>
        </section>

        <div class="ball-separator-wrapper">
            <div class="ball-separator">
                <MoleculesBallSeparator />
                <MoleculesBallSeparator />
                <MoleculesBallSeparator />
                <MoleculesBallSeparator />
            </div>
        </div>
    </div>
</template>

<style scoped>
.intro-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    background-color: var(--background-color);
    padding: 11rem 1.5rem 3rem 1.5rem;
}

.intro-content h2 {
    color: var(--primary-color);
}

.intro-content p {
    color: var(--secondary-color);
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
    width: 150%;
    height: 150%;
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

.p-link-two {
    color: var(--primary-color);
    font-weight: 300;
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
}

@media (min-width: 60rem) {
    .wrapper {
        position: relative;
        display: flex;
        justify-content: space-between;
        height: 100vh;
        padding-top: 3rem;
    }

    .intro-content>p {
        max-width: 35rem;
    }

    .image-overlay img {
        width: 150%;
        height: 150%;
    }

    .ball-separator-wrapper {
        display: none;
    }

    .section-image-wrapper {
        width: 100%;
        height: auto;
        margin-top: auto;
    }

    .scroll-down-container-wrapper {
        top: -3rem;
        right: 5rem;
    }
}

@media (min-width: 80rem) {

    .section-image-wrapper {
        width: 80%;
        height: auto;
        margin-top: auto;
    }

    .intro-content>p {
        max-width: 40rem;
    }

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
}
</style>
