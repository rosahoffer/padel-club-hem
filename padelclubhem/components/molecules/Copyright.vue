<template>
    <div class="copyright-container">
        <p>
            Padel Club Hem © 2024 • Powered by
            <nuxt-link href="https://www.instagram.com/contraztmedia" target="_blank">CONTRAZT MEDIA</nuxt-link> •
            <nuxt-link to="/privacybeleid">Privacybeleid</nuxt-link>
            <!-- <nuxt-link to="/">Cookies</nuxt-link> • -->
            <!-- <nuxt-link to="/">Algemene voorwaarden</nuxt-link> -->
        </p>
    </div>

</template>

<style scoped>
.copyright-container p {
    font-size: 0.8rem;
    line-height: 1.2rem;
    color: var(--secondary-color);
    text-decoration: none;
}

.copyright-container a {
    color: var(--secondary-color);
    text-decoration: none;
}

.copyright-container a:hover {
    color: var(--primary-color);
    text-decoration: underline;
}
</style>