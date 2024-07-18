<template>
    <div class="wrapper">
        <section class="intro-content">
            <p class="subtitle-medium">Sportaanbod</p>
            <h1>Let's Play!</h1>
            <p>Bij Padel Club Hem bieden we een breed scala aan sportmogelijkheden voor iedereen. Of je nu een
                doorgewinterde speler bent of net begint, bij ons kun je zowel padellen als tennissen op topniveau.</p>
        </section>
        <div class="ball-separator-wrapper">
            <div class="ball-separator">
                <MoleculesBallSeparator />
                <MoleculesBallSeparator />
                <MoleculesBallSeparator />
                <MoleculesBallSeparator />
            </div>
        </div>
        <section>
            <div class="image-wrapper">
                <div class="image-overlay">
                    <div class="image-container">
                        <img src="/assets/images/man-playing-padel-two.png"
                            alt="Afbeelding man die aan het paddellen is" loading="lazy" width="100%" height="100%">
                    </div>
                    <div class="green-separator"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.intro-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    background-color: var(--background-color);
    padding: 11rem 1.5rem 3rem 1.5rem;
}

.intro-content h2 {
    color: var(--primary-color);
}

.intro-content p {
    color: var(--secondary-color);
}

.ball-separator-wrapper {
    overflow: hidden;
    width: 100%;
    height: 7rem;
}

.ball-separator {
    display: flex;
    gap: 1rem;
    object-fit: cover;
    width: 100%;
    height: 100%;
}

@media (min-width: 40rem) {
    .intro-content {
        gap: 3rem;
        padding: 11rem 3rem 3rem 3rem;
    }
}

@media (min-width: 60rem) {
    .wrapper {
        display: flex;
        gap: 3rem;
    }
}
</style>
