<template>
    <div class="wrapper">
        <section class="intro-content">
            <p class="subtitle-medium">Sportaanbod</p>
            <h2>Let's Play</h2>
            <p>Bij Padel Club Hem bieden we een breed scala aan sportmogelijkheden voor iedereen. Of je nu een doorgewinterde speler bent of net begint, bij ons kun je zowel padellen als tennissen op topniveau.</p>
        </section>
        <section>
            <div class="image-wrapper">
                <div class="image-overlay">
                    <div class="image-container">
                        <img src="/assets/images/man-playing-padel.png" alt="Afbeelding man die aan het paddellen is"
                            loading="lazy" width="100%" height="100%">
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
    gap: 2rem;
    background-color: var(--background-color);
    padding: 10rem 1.5rem 3rem 1.5rem;
}

.intro-content h2 {
    color: var(--primary-color);
}

.intro-content p {
    color: var(--secondary-color);
}



</style>
