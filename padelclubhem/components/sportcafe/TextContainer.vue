<template>
    <section class="text-container">
        <h3>Welkom bij het Sportcafé</h3>
        <div class="introductie-flex">
            <p>Bij ons kun je genieten van een echte sportkroegsfeer. Volg bijvoorbeeld de Formule 1-races, juich voor
                het
                Nederlands elftal tijdens hun wedstrijden, bewonder de spectaculaire rally’s van de padellers op het
                wereldniveau en geniet uiteraard van de spelers op Roland Garros of Wimbledon! We bieden je ultiem
                sportplezier met een heerlijk biertje, wijntje of frisje erbij.
            </p>
            <p>Naast het borrelen kun je bij ons ook terecht voor een gezonde lunch. En natuurlijk ontbreekt een
                bittergarnituurtje ook niet. We zijn dagelijks geopend en 's ochtends kun je bij ons genieten van de
                beste
                koffie en thee, compleet met een lekkernij erbij. </p>
        </div>
    </section>
</template>


<style scoped>
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

.introductie-flex {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

@media (min-width: 40rem) {

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
}

@media (min-width: 80rem) {}

@media (min-width: 120rem) {}
</style>
