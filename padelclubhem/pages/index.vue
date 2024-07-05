<template>
    <main>
        <Header/>
        <section>
            <div>
                <h1>Welkom bij Padel Club Hem!</h1>
                <p>Reserveer nu je padelbaan en begin je avontuur vandaag nog!</p>
                <nuxt-link href="/" class="book-button" role="link">🏓 Boek een baan!</nuxt-link>
            </div>
        </section>
        <section class="two">
            <div>
                <h1>Welkom bij Padel Club Hem!</h1>
                <p>Reserveer nu je padelbaan en begin je avontuur vandaag nog!</p>
                <nuxt-link href="/" class="book-button" role="link">🏓 Boek een baan!</nuxt-link>
            </div>
        </section>
    </main>
</template>

<style scoped>
section {
    padding-top: 20rem;
    height: 100vh;
}


.two{
    background-color: var(--primary-color);
}

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
}
</style>
