<template>
    <section class="contact-container">
            <p class="subtitle-medium">Stel je vraag</p>
            <h2>Smash Ons Een Bericht</h2>
        <MoleculesContactForm />
    </section>
</template>

<style scoped>
.contact-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    background-color: var(--background-color);
    padding: 5rem 1.5rem;
}

.contact-container h2 {
    color: var(--secondary-color);
}

@media (min-width: 40rem) {
    .contact-container {
        gap: 3rem;
        padding: 8rem 3rem;
    }
}

@media (min-width: 120rem) {

    h2, p {
        padding: 3rem 10rem 3rem;
    }
}
</style>
