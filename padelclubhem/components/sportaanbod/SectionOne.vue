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
            <p class="subtitle-medium">Sportaanbod</p>
            <h1>Let's Play!</h1>
            <p>Bij Padelclub Hem bieden we een breed scala aan sportmogelijkheden voor iedereen. Of je nu een
                doorgewinterde speler bent of net begint, bij ons kun je zowel padellen als tennissen op topniveau.</p>
        </section>
        <div class="ball-separator-wrapper">
            <div class="ball-separator">
                <MoleculesBallSeparator />
                <MoleculesBallSeparator />
                <MoleculesBallSeparator />
                <MoleculesBallSeparator />
            </div>
        </div>
        <section class="section-image-wrapper">
            <div class="image-wrapper">
                <div class="image-overlay">
                    <div class="image-container">
                        <img src="/assets/images/man-playing-padel.jpg"
                            alt="Afbeelding man die aan het paddellen is" loading="lazy" width="100%" height="100%">
                    </div>
                    <div class="green-separator"></div>
                </div>
            </div>
            <div class="scroll-down-container-wrapper">
                <div class="scroll-down-container">
                    <AtomsRacketScrollDown />
                </div>
            </div>
        </section>
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
    height: 20rem;
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

.image-overlay img {
    width: 100%;
    height: 100%;
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

    .ball-separator-wrapper {
        position: absolute;
        bottom: 0;
        height: 6rem;
    }

    .section-image-wrapper {
        width: 100%;
        height: auto;
        margin-top: auto;
    }

    .image-overlay {
        width: 100%;
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

    .image-overlay {
        width: 100%;
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
