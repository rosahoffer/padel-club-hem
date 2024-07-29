<template>
    <section>
        <h2>Serveer je vragen aan ons!</h2>
        <p>Heb je vragen, suggesties
            of wil je gewoon hallo zeggen?
            We staan klaar om je te helpen!</p>
        <nuxt-link href="/contact" class="primary-button">Stuur een bericht</nuxt-link>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    background-color: var(--tertiary-color);
    padding: 5rem 1.5rem;
    text-align: center;
}

@media (min-width: 40rem) {
    section {
        gap: 2rem;
        padding: 7rem 3rem;
    }
}

@media (min-width: 60rem) {
    section {
        gap: 3rem;
        padding: 8rem 10rem;
    }

    section p {
        max-width: 30rem;
    }
}

@media (min-width: 80rem) {
    section {
        gap: 3em;
        padding: 8rem 15rem;
    }
}

@media (min-width: 90rem) {
    section {
        gap: 3em;
        padding: 10rem 25rem;
    }
}

</style>