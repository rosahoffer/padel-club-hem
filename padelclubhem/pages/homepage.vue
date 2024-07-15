<script setup>
import ScrollSeparator from '~/components/molecules/ScrollSeparator.vue';
import MarqueeSlider from '~/components/molecules/MarqueeSlider.vue';
</script>

<template>
    <Header />
    <main>
        <section class="container-one">
            <div class="intro-container">
                <h1>Welkom bij Padel Club Hem</h1>
                <p>Indoor sport voor iedere doelgroep op de gezelligste club in West-Friesland!</p>
                <div class="scroll-separator">
                    <ScrollSeparator />
                </div>
            </div>
        </section>
        <section class="container-two">
            <h2>Over de club</h2>
            <p>Bij Padel Club Hem staat beleving voorop. Wij heten je welkom in de community om lekker te
                sporten, sportwedstrijden te kijken of wellicht om een drankje te doen met vrienden of kennissen. Qua
                sportfaciliteiten is er naast padel ook tennis, padel pingpong en een shuffle board. De bar is zoveel
                als mogelijk geopend en er zal altijd sport worden uitgezonden op één van de schermen.</p>
            <nuxt-link href="/" class="secondary-button subtitle-medium">
                Bekijk ons sportaanbod
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.28239 0.452916L14.7293 0.3712C15.309 0.366184 15.783 0.832064 15.788 1.41177L15.8697 10.8586C15.8747 11.4383 15.4088 11.9123 14.8291 11.9174C14.2494 11.9224 13.7754 11.4565 13.7704 10.8768L13.7106 3.96401L2.24266 15.6321C1.83629 16.0455 1.17169 16.0513 0.758226 15.6449C0.344766 15.2386 0.339017 14.574 0.745385 14.1605L12.2133 2.49242L5.30055 2.55222C4.72085 2.55723 4.24684 2.09135 4.24182 1.51165C4.23681 0.93194 4.70269 0.457931 5.28239 0.452916Z"
                        fill="#414141" />
                </svg>
            </nuxt-link>
            <nuxt-link href="/" class="secondary-button subtitle-medium">
                Benieuwd naar onze locatie?
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.28239 0.452916L14.7293 0.3712C15.309 0.366184 15.783 0.832064 15.788 1.41177L15.8697 10.8586C15.8747 11.4383 15.4088 11.9123 14.8291 11.9174C14.2494 11.9224 13.7754 11.4565 13.7704 10.8768L13.7106 3.96401L2.24266 15.6321C1.83629 16.0455 1.17169 16.0513 0.758226 15.6449C0.344766 15.2386 0.339017 14.574 0.745385 14.1605L12.2133 2.49242L5.30055 2.55222C4.72085 2.55723 4.24684 2.09135 4.24182 1.51165C4.23681 0.93194 4.70269 0.457931 5.28239 0.452916Z"
                        fill="#414141" />
                </svg>
            </nuxt-link>
        </section>
        <section class="image-wrapper">
            <div class="image-overlay">
                <div class="image-container">
                    <img src="/assets/images/man-playing-padel.png" alt="Afbeelding man die aan het paddellen is"
                        loading="lazy" width="100%" height="100%">
                </div>
                <div class="green-separator"></div>
            </div>
        </section>
        <section>
            <MarqueeSlider/>
        </section>
    </main>
    <Footer />
</template>

<style scoped>

.container-one {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.intro-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 3rem;
}

.intro-container p {
    color: var(--secondary-color);
    padding: 0 1.5rem;
}

.scroll-separator {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.container-two {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--secondary-color);
    padding: 0 1.5rem 3rem 1.5rem;
}

.container-two>h2,
p {
    color: var(--tertiary-color);
}

.container-two p {
    margin: 2rem 0;
}

.secondary-button:last-child {
    border-top: none;
}
</style>
