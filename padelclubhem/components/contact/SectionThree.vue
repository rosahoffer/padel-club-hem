<template>
    <section class="contact-container">
        <p class="subtitle-medium">Neem contact op en blijf in beweging!</p>
        <h2>Gegevens</h2>

    </section>
</template>

<style scoped>
.contact-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    background-color: var(--primary-color);
    padding: 5rem 1.5rem;
}

.contact-container h2 {
    color: var(--background-color);
}

.contact-container p {
    color: var(--background-color);
}

@media (min-width: 40rem) {
    .contact-container {
        gap: 3rem;
        padding: 8rem 3rem;
    }
}
</style>
