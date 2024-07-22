<template>
    <section class="services-contain">
        <article>
            <section class="service-card card-one-bg">
                <div class="information-service-card card-one">
                    <h2>Ontdek Padel</h2>
                    <p>Padel is een dynamische en snelgroeiende sport die leuk is voor alle leeftijden en niveaus. Onze
                        moderne padelbanen bieden de perfecte omgeving voor zowel recreatieve spelers als competitieve
                        toernooien.</p>
                    <nuxt-link href="/" class="secondary-button subtitle-medium" aria-label="Bekijk ons sportaanbod">
                        Boek een padelbaan
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M5.28239 0.452916L14.7293 0.3712C15.309 0.366184 15.783 0.832064 15.788 1.41177L15.8697 10.8586C15.8747 11.4383 15.4088 11.9123 14.8291 11.9174C14.2494 11.9224 13.7754 11.4565 13.7704 10.8768L13.7106 3.96401L2.24266 15.6321C1.83629 16.0455 1.17169 16.0513 0.758226 15.6449C0.344766 15.2386 0.339017 14.574 0.745385 14.1605L12.2133 2.49242L5.30055 2.55222C4.72085 2.55723 4.24684 2.09135 4.24182 1.51165C4.23681 0.93194 4.70269 0.457931 5.28239 0.452916Z"
                                fill="#414141" />
                        </svg>
                    </nuxt-link>
                </div>
            </section>
            <div class="image-overlay-service-card">
                <div class="image-container-service-card">
                    <img src="/assets/images/padel-image.png" alt="Afbeelding van evenementen" loading="lazy"
                        width="100%" height="100%">
                </div>
            </div>
        </article>
        <article>
            <section class="service-card card-two-bg">
                <div class="information-service-card card-two">
                    <h2>Speel Tennis</h2>
                    <p>Padel is een dynamische en snelgroeiende sport die leuk is voor alle leeftijden en niveaus. Onze
                        moderne padelbanen bieden de perfecte omgeving voor zowel recreatieve spelers als competitieve
                        toernooien.</p>
                    <nuxt-link href="/" class="secondary-button-white subtitle-medium"
                        aria-label="Bekijk ons sportaanbod">
                        Boek een tennisbaan
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M5.28239 0.452916L14.7293 0.3712C15.309 0.366184 15.783 0.832064 15.788 1.41177L15.8697 10.8586C15.8747 11.4383 15.4088 11.9123 14.8291 11.9174C14.2494 11.9224 13.7754 11.4565 13.7704 10.8768L13.7106 3.96401L2.24266 15.6321C1.83629 16.0455 1.17169 16.0513 0.758226 15.6449C0.344766 15.2386 0.339017 14.574 0.745385 14.1605L12.2133 2.49242L5.30055 2.55222C4.72085 2.55723 4.24684 2.09135 4.24182 1.51165C4.23681 0.93194 4.70269 0.457931 5.28239 0.452916Z"
                                fill="#FFEAE3" />
                        </svg>
                    </nuxt-link>
                </div>
            </section>
            <div class="image-overlay-service-card">
                <div class="image-container-service-card">
                    <img src="/assets/images/tennis-image.png" alt="Afbeelding van evenementen" loading="lazy"
                        width="100%" height="100%">
                </div>
            </div>
        </article>
    </section>
</template>

<style scoped>
.services-contain {
    background-color: var(--background-color);
}

article {
    width: 100%;
}

.service-card {
    padding: 3rem 1.5rem;
}

.image-overlay-service-card {
    height: 25rem;
}

.information-service-card {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;
}

.card-one-bg {
    background-color: var(--secondary-color);
}

.card-one h2,
.card-one p {
    color: var(--tertiary-color);
}

.card-two-bg {
    background-color: var(--tertiary-color);
}

.card-two h2,
.card-two p {
    color: var(--secondary-color);
}

@media (min-width: 40rem) {

    .service-card {
        padding: 5rem 3rem;
    }
}

@media (min-width: 60rem) {

    article {
        width: 100%;
        height: 35rem;
        display: flex;
        flex-direction: row-reverse;
    }

    article:nth-child(2) {
        flex-direction: row;
    }

    .service-card {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .image-overlay-service-card {
        width: 50%;
        height: auto;
    }

    .information-service-card {
        margin: 0;
        gap: 3rem;
    }
}

@media (min-width: 80rem) {

    article {
        height: 45rem;
    }

    .information-service-card {
        max-width: 40rem;
    }
}
</style>
