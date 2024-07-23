<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    // Animatie voor service-card-two - achtergrondkleur en tekstkleur aanpassen
    gsap.to('.service-card-two', {
        backgroundColor: 'var(--background-color)',
        scrollTrigger: {
            trigger: '.service-card-two',
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            onEnter: () => {
                document.querySelectorAll('.service-card-two h3, .service-card-two p, .service-card-two a').forEach(element => {
                    element.style.color = 'var(--primary-color)';
                });
            },
            onLeaveBack: () => {
                document.querySelectorAll('.service-card-two h3, .service-card-two p, .service-card-two a').forEach(element => {
                    element.style.color = 'var(--background-color)';
                });
            }
        },
    })

    // Animatie voor service-card-three - achtergrondkleur en tekstkleur aanpassen
    gsap.to('.service-card-three', {
        backgroundColor: 'var(--secondary-color)',
        scrollTrigger: {
            trigger: '.service-card-three',
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            onEnter: () => {
                document.querySelectorAll('.service-card-three h3, .service-card-three p, .service-card-three a').forEach(element => {
                    element.style.color = 'var(--tertiary-color)';
                });
            },
            onLeaveBack: () => {
                document.querySelectorAll('.service-card-three h3, .service-card-three p, .service-card-three a').forEach(element => {
                    element.style.color = 'var(--background-color)';
                });
            }
        },
    })
})
</script>



<template>
    <section class="services-contain">
        <div class="intro-text">
            <p class="subtitle-medium">Voor de eerste keer bij ons op locatie?</p>
            <h2>Ontdek ons aanbod</h2>
        </div>
        <section class="service-card service-card-one">
            <div class="image-wrapper-service-card">
                <div class="image-overlay-service-card">
                    <div class="image-container-service-card">
                        <img src="/assets/images/playing-padel.jpg" alt="Afbeelding van evenementen" loading="lazy"
                            width="100%" height="100%">
                    </div>
                </div>
            </div>
            <div class="information-service-card">
                <p class="subtitle-bold-lowercase">Doe mee aan onze leuke evenementen!</p>
                <h3>Evenementen</h3>
                <p>Ontdek onze leuke evenementen waar je jouw vaardigheden kunt laten zien en nieuwe vrienden kunt
                    maken. Of
                    je nu een beginner bent of een ervaren speler, er zijn evenementen voor iedereen!</p>
                <nuxt-link href="/evenementen" class="secondary-button subtitle-medium"
                    aria-label="Bekijk onze evenementen">
                    Bekijk onze evenementen
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.28239 0.452916L14.7293 0.3712C15.309 0.366184 15.783 0.832064 15.788 1.41177L15.8697 10.8586C15.8747 11.4383 15.4088 11.9123 14.8291 11.9174C14.2494 11.9224 13.7754 11.4565 13.7704 10.8768L13.7106 3.96401L2.24266 15.6321C1.83629 16.0455 1.17169 16.0513 0.758226 15.6449C0.344766 15.2386 0.339017 14.574 0.745385 14.1605L12.2133 2.49242L5.30055 2.55222C4.72085 2.55723 4.24684 2.09135 4.24182 1.51165C4.23681 0.93194 4.70269 0.457931 5.28239 0.452916Z"
                            fill="#414141" />
                    </svg>
                </nuxt-link>
            </div>
        </section>
        <section class="service-card service-card-two">
            <div class="image-wrapper-service-card">
                <div class="image-overlay-service-card">
                    <div class="image-container-service-card">
                        <img src="/assets/images/playing-padel.jpg" alt="Afbeelding van evenementen" loading="lazy"
                            width="100%" height="100%">
                    </div>
                </div>
            </div>
            <div class="information-service-card">
                <p class="subtitle-bold-lowercase">Verbeter je spel met professionele lessen</p>
                <h3>Lessen</h3>
                <p>Bij Padel Club Hem bieden we een breed scala aan lessen om je spel naar een hoger niveau te tillen.
                    Of je nu een beginner bent die de basisprincipes wil leren of een gevorderde speler die zijn
                    techniek wil verfijnen, onze professionele leraren staan voor je klaar. We werken zowel met
                    padelscholen, tennisscholen als onze eigen leraren.</p>
                <nuxt-link href="/lessen" class="secondary-button-green subtitle-medium"
                    aria-label="Bekijk onze lessen">
                    Ontdek onze lessen
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.28239 0.452916L14.7293 0.3712C15.309 0.366184 15.783 0.832064 15.788 1.41177L15.8697 10.8586C15.8747 11.4383 15.4088 11.9123 14.8291 11.9174C14.2494 11.9224 13.7754 11.4565 13.7704 10.8768L13.7106 3.96401L2.24266 15.6321C1.83629 16.0455 1.17169 16.0513 0.758226 15.6449C0.344766 15.2386 0.339017 14.574 0.745385 14.1605L12.2133 2.49242L5.30055 2.55222C4.72085 2.55723 4.24684 2.09135 4.24182 1.51165C4.23681 0.93194 4.70269 0.457931 5.28239 0.452916Z"
                            fill="var(--primary-color)" />
                    </svg>
                </nuxt-link>
            </div>
        </section>
        <section class="service-card service-card-three">
            <div class="image-wrapper-service-card">
                <div class="image-overlay-service-card">
                    <div class="image-container-service-card">
                        <img src="/assets/images/playing-padel.jpg" alt="Afbeelding van evenementen" loading="lazy"
                            width="100%" height="100%">
                    </div>
                </div>
            </div>
            <div class="information-service-card">
                <p class="subtitle-bold-lowercase">Ontdek hoe jouw bedrijf kan profiteren van onze faciliteiten</p>
                <h3>Business</h3>
                <p>Wekelijkse sportsessies voor teambuilding, sponsormogelijkheden voor bedrijfszichtbaarheid,
                    toernooien, en netwerkmogelijkheden in een sportieve omgeving.
                    ontdek de zakelijke voordelen</p>
                <nuxt-link href="/business" class="secondary-button subtitle-medium"
                    aria-label="Bekijk onze business pagina">
                    Ontdek de zakelijke voordelen
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.28239 0.452916L14.7293 0.3712C15.309 0.366184 15.783 0.832064 15.788 1.41177L15.8697 10.8586C15.8747 11.4383 15.4088 11.9123 14.8291 11.9174C14.2494 11.9224 13.7754 11.4565 13.7704 10.8768L13.7106 3.96401L2.24266 15.6321C1.83629 16.0455 1.17169 16.0513 0.758226 15.6449C0.344766 15.2386 0.339017 14.574 0.745385 14.1605L12.2133 2.49242L5.30055 2.55222C4.72085 2.55723 4.24684 2.09135 4.24182 1.51165C4.23681 0.93194 4.70269 0.457931 5.28239 0.452916Z"
                            fill="#414141" />
                    </svg>
                </nuxt-link>
            </div>
        </section>
    </section>
</template>

<style scoped>
.services-contain {
    background-color: var(--primary-color);
}

h2,
h3,
p {
    color: var(--background-color);
}

.intro-text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 3rem 1.5rem 0 1.5rem;
    background-color: var(--primary-color);
}

.service-card {
    height: auto;
    transition: background-color 0.3s, color 0.3s;
    padding: 5rem 1.5rem;
}

.service-card-one {
    height: auto;
    transition: background-color 0.3s, color 0.3s;
}

.information-service-card {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0 0 0;
}

@media (min-width: 40rem) {

    .intro-text {
        gap: 3rem;
        padding: 5rem 3rem 0 3rem;
    }

    .service-card {
        padding: 5rem 3rem;
    }

    .image-overlay-service-card {
        width: 100%;
        height: 20rem;
    }
}

@media (min-width: 60rem) {

    .intro-text {
        gap: 3rem;
        padding: 5rem 3rem 0 3rem;
    }

    .intro-text h2 {
        max-width: 40rem;
    }


    .service-card {
        display: flex;
        gap: 4rem;
        padding: 5rem 3rem;
    }

    .image-overlay-service-card {
        width: 25rem;
        height: 23rem;
    }

    .image-overlay-service-card img {
        width: 150%;
        height: 150%;
    }

    .information-service-card {
        margin: 0;
        max-width: 30rem;
    }
}

@media (min-width: 80rem) {

    .intro-text {
        padding: 8rem 3rem 3rem 3rem;
    }

    .intro-text h2 {
        max-width: 60rem;
    }

    .service-card {
        gap: 6rem;
        padding: 7rem 3rem;
    }

    .image-overlay-service-card {
        width: 35rem;
        height: 25rem;
    }

    .image-overlay-service-card img {
        width: 150%;
        height: 150%;
    }

    .information-service-card {
        max-width: 40rem;
    }
}

@media (min-width: 90rem) {

    .service-card {
        gap: 8rem;
        padding: 8rem 3rem;
    }

    .image-overlay-service-card {
        width: 45rem;
        height: 30rem;
    }

    .image-overlay-service-card img {
        width: 150%;
        height: 150%;
    }

    .information-service-card {
        max-width: 45rem;
        gap: 4rem;
    }
}

@media (min-width: 100rem) {

    .intro-text {
        padding-left: 10rem;
        padding-right: 10rem;
    }

    .service-card {
        padding: 10rem;
    }
}
</style>
