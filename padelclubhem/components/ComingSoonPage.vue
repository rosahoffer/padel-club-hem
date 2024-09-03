<template>
    <div class="wrapper">
        <section class="intro-content">
            <h1>Coming Soon!</h1>
            <p>Welkom bij Padelclub Hem! We zijn druk bezig met het ontwikkelen van nieuwe spannende secties voor onze
                website. Binnenkort kun je hier alles vinden over:
            </p>
        </section>
        <section class="aanbod-content">
            <ul>
                <li>
                    <p class="subtitle-bold-uppercase">Evenementen</p>
                    <p>Blijf op de hoogte van alle toernooien, wedstrijden en speciale
                        evenementen die we organiseren. Van beginnerstoernooien tot professionele wedstrijden, er is
                        voor
                        ieder wat wils. </p>
                </li>
                <li>
                    <p class="subtitle-bold-uppercase">Lessen</p>
                    <p>Of je nu een nieuwkomer bent of je vaardigheden wilt verbeteren, onze
                        professionele coaches staan klaar om je te helpen. Onze lessen zijn binnenkort beschikbaar voor
                        alle
                        niveaus. </p>
                </li>
                <li>
                    <p class="subtitle-bold-uppercase">Business</p>
                    <p>Ben je op zoek naar een unieke locatie voor je bedrijfsuitje of
                        teambuilding activiteit? Binnenkort kun je hier alles vinden over onze speciale zakelijke
                        arrangementen en aanbiedingen.</p>
                </li>
            </ul>
        </section>

        <section class="cta-buttons">
                <nuxt-link href="https://www.instagram.com/padelclubhem/" class="primary-button">🚀 Volg ons op social
                    media</nuxt-link>
                <nuxt-link href="mailto:info@padelclubhem.nl" class="cta-button subtitle-bold-lowercase">Neem contact
                    op</nuxt-link>
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

.subtitle-bold-uppercase {
    margin: 2rem 0 1rem 0;
}

.aanbod-content {
    background-color: var(--primary-color);
    padding: 3rem 1.5rem;
}

.aanbod-content h3,
p {
    color: var(--background-color);
}

ul {
    list-style-type: none;
    margin: 1rem 0;
}


li {
    margin: 1rem 0;
}

.cta-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 4rem 1.5rem;
}

.primary-button {
    max-width: fit-content;
}

.cta-button {
    background-color: var(--background-color);
    border: var(--background-color);
    color: var(--primary-color);
    text-decoration: underline;
    font-size: 0.7rem;
    display: block;
    display: flex;
    align-items: center;
}

.cta-button:hover {
    text-decoration: none;
}

@media (min-width: 40rem) {
    .intro-content {
        gap: 3rem;
        padding: 11rem 3rem 3rem 3rem;
    }
}
</style>
