<template>
    <section>
        <h2>Serveer je vragen aan ons!</h2>
        <p>Heb je vragen, suggesties
            of wil je gewoon hallo zeggen?
            We staan klaar om je te helpen!</p>
        <nuxt-link href="/" class="primary-button">Stuur een bericht</nuxt-link>
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

</style>