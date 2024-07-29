<template>
    <section>
        <h2>Zin om te smashen?</h2>
        <p>Daag je vrienden uit voor een wedstrijd!</p>
        <nuxt-link href="/" class="primary-button-grey">Boek een baan</nuxt-link>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);
    padding: 4rem 1.5rem;
    text-align: center;
}

h2{
    color: var(--tertiary-color);
}

p{
    color: var(--tertiary-color);
}

@media (min-width: 40rem) {
    section {
        gap: 1rem;
        padding: 4rem 3rem;
    }
}

@media (min-width: 60rem) {
    section {
        gap: 1.5rem;
        padding: 5rem 10rem;
    }

    section p {
        max-width: 30rem;
    }
}

@media (min-width: 80rem) {
    section {
        padding: 7rem 15rem;
    }
}

@media (min-width: 90rem) {
    section {
        padding: 8rem 25rem;
    }
}

</style>