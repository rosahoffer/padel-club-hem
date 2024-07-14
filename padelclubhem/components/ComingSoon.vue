<script setup></script>

<template>
    <div class="coming-soon-container">
        <div>
            <nuxt-link class="logo-container">
                <img src="assets/images/padelclubhem-logo.png" alt="Logo Padel Club Hem" />
            </nuxt-link>
        </div>
        <h1>Coming Soon</h1>
        <h3 class="subtitle-bold-lowercase">Bereid je voor op een nieuwe sportieve ervaring!</h3>
        <p>Welkom bij Padel Club Hem! We werken hard om onze nieuwe sportfaciliteit klaar te maken en we kunnen niet
            wachten om jullie te verwelkomen.
        </p>

        <div class="cta-buttons">
            <nuxt-link href="https://www.instagram.com/padelclubhem/" class="primary-button">🚀 Volg ons op social
                media</nuxt-link>
            <nuxt-link href="mailto:info@padelclubhem.nl" class="cta-button subtitle-bold-lowercase">Neem contact op</nuxt-link>
        </div>
    </div>
    <section>
        <p>Padel Club Hem | Torenweg 44, 1607 CP Hem</p>
    </section>
</template>

<style scoped>

.coming-soon-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem 1rem;
}

.logo-container img {
    height: 50px;
}

h1 {
    font-size: 1.8rem;
    line-height: 1.8rem;
    color: var(--primary-color);
}

h4 {
    color: var(--secondary-color);
}

.cta-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
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

section {
    padding: 1rem;
    background-color: var(--primary-color);
}

section p {
    color: var(--background-color);
    font-size: 0.7rem;
    line-height: 1rem;
}

@media (min-width: 800px) {
    .coming-soon-container {
        width: 800px;
        height: 90vh;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    h1{
        font-size: 3rem;
        line-height: 3rem;
    }
}
</style>