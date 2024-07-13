<script setup>
import ScrollSeparator from '~/components/molecules/ScrollSeparator.vue';
</script>

<template>
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
            <nuxt-link href="/" class="secondary-button">Bekijk ons sportaanbod</nuxt-link>
        </section>
    </main>
</template>

<style scoped>
:root {
    /* COLORS */
    --primary-color: #cbfd3c;
    --secondary-color: #ffeae3;
    --tertiary-color: #414141;
    --background-color: #262626;
    --navbar-bg-color: #4b4b4b;

    /* RADIUS  */
    --border-radius: 25px;
    --hook-radius: 5px;
}

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

.intro-container p{
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
    padding: 0 1.5rem;
}

.container-two > h2, p {
    color: var(--tertiary-color);
}

.container-two p {
    margin-top: 2rem;
}
</style>
