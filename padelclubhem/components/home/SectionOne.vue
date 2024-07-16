<template>
    <section>
        <div class="intro-container">
            <h1>Welkom bij Padel Club Hem</h1>
            <p>Indoor sport voor iedere doelgroep op de gezelligste club in West-Friesland!</p>
            <div class="scroll-separator">
                <MoleculesScrollSeparator />
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.intro-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 3rem;
}

.intro-container p {
    color: var(--secondary-color);
    padding: 0 1.5rem;
}

.scroll-separator {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>
