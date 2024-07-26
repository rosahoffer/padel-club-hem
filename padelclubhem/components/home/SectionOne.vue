<template>
    <section>
        <div class="intro-container">
            <h1 class="fly-in">Welkom bij Padelclub Hem</h1>
            <p class="fly-in">Indoor sport voor iedere doelgroep op de gezelligste club in West-Friesland!</p>
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

.intro-container h1 {
    padding: 0 1.5rem;
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

/* Animations */
@keyframes flyIn {
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes bounceIn {
    0% {
        opacity: 0;
        transform: translateY(100%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.fly-in {
    animation: flyIn 0.5s ease-in-out forwards;
}

/* BREAKPOINT TABLET  */

@media (min-width: 40rem) {

    .intro-container h1 {
        font-size: 4.5rem;
        line-height: 4.5rem;
        max-width: 40rem;
        margin: 0 auto;
    }

    .intro-container p {
        padding: 0 3rem;
    }
}

/* BREAKPOINT DESKTOP  */

@media (min-width: 80rem) {

    .intro-container h1 {
        font-size: 7rem;
        line-height: 7rem;
        max-width: 60rem;
    }

    .intro-container p {
        padding: 0 12rem;
    }
}
</style>
