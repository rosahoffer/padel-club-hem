<template>
    <section>
        <h2>Promoot je bedrijf op onze banen!</h2>
        <p>Laat jouw bedrijf stralen op het hart van onze club. Sluit je aan als baansponsor!</p>
        <nuxt-link href="/partners" class="primary-button-black">Word Baansponsor</nuxt-link>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    padding: 4rem 1.5rem;
    text-align: center;
}

h2{
    color: var(--background-color);
}

p{
    color: var(--background-color);
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