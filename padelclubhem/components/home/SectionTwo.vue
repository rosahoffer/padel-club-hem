<template>
    <div class="wrapper">
        <section class="intro-content">
            <h2>Over de club</h2>
            <p>Welkom bij Padel Club Hem, waar jouw sportbeleving centraal staat! Of je nu zin hebt in het sporten,
                kijken van een sportwedstrijd of gewoon wilt ontspannen met een drankje en een hapje samen met vrienden
                of familie, bij ons zit je goed. Qua sportfaciliteiten is er naast padel ook tennis, padel pingpong en
                een shuffleboard. En maak gebruik van ons drank- & eetaanbod in het sportcafé! Kom langs en ervaar het
                zelf!
            </p>
            <nuxt-link href="/sportaanbod" class="secondary-button subtitle-medium" aria-label="Bekijk ons sportaanbod">
                Bekijk ons sportaanbod
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.28239 0.452916L14.7293 0.3712C15.309 0.366184 15.783 0.832064 15.788 1.41177L15.8697 10.8586C15.8747 11.4383 15.4088 11.9123 14.8291 11.9174C14.2494 11.9224 13.7754 11.4565 13.7704 10.8768L13.7106 3.96401L2.24266 15.6321C1.83629 16.0455 1.17169 16.0513 0.758226 15.6449C0.344766 15.2386 0.339017 14.574 0.745385 14.1605L12.2133 2.49242L5.30055 2.55222C4.72085 2.55723 4.24684 2.09135 4.24182 1.51165C4.23681 0.93194 4.70269 0.457931 5.28239 0.452916Z"
                        fill="#414141" />
                </svg>
            </nuxt-link>
            <nuxt-link href="/over-ons" class="secondary-button subtitle-medium"
                aria-label="Benieuwd naar onze locatie?">
                Benieuwd naar onze locatie?
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.28239 0.452916L14.7293 0.3712C15.309 0.366184 15.783 0.832064 15.788 1.41177L15.8697 10.8586C15.8747 11.4383 15.4088 11.9123 14.8291 11.9174C14.2494 11.9224 13.7754 11.4565 13.7704 10.8768L13.7106 3.96401L2.24266 15.6321C1.83629 16.0455 1.17169 16.0513 0.758226 15.6449C0.344766 15.2386 0.339017 14.574 0.745385 14.1605L12.2133 2.49242L5.30055 2.55222C4.72085 2.55723 4.24684 2.09135 4.24182 1.51165C4.23681 0.93194 4.70269 0.457931 5.28239 0.452916Z"
                        fill="#414141" />
                </svg>
            </nuxt-link>
        </section>
        <section>
            <div class="image-wrapper">
                <div class="image-overlay">
                    <div class="image-container">
                        <img src="/assets/images/man-playing-padel.jpg" alt="Afbeelding man die aan het paddellen is"
                            width="100%" height="100%">
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
    background-color: var(--secondary-color);
    padding: 0 1.5rem 3rem 1.5rem;
}

.intro-content h2,
p {
    color: var(--tertiary-color);
}

.intro-content p {
    margin: 2rem 0;
}

.secondary-button:last-child {
    border-top: none;
}

.image-overlay {
    width: 100%;
    height: 25rem;
    display: flex;
    align-items: center;
}


/* BREAKPOINT TABLET  */

@media (min-width: 40rem) {

    .intro-content {
        padding: 2rem 3rem 3rem 3rem;
    }

    .intro-content p {
        margin: 2.5rem 0;
    }
}

@media (min-width: 60rem) {

    .wrapper {
        display: flex;
        flex-direction: row;
        background-color: var(--secondary-color);
    }

    .intro-content h2,
    p {
        max-width: 35rem;
        margin-top: -2.4rem;
    }

    .image-overlay {
        width: 30rem;
        height: 40rem;
    }

    .secondary-button {
        max-width: 35rem;
    }
}

/* BREAKPOINT DESKTOP  */

@media (min-width: 80rem) {

    .wrapper {
        padding: 3rem 0 0 3rem;
    }

    .intro-content {
        padding: 0;
        width: 60%;
        padding-right: 4rem;
    }

    .intro-content h2,
    p {
        max-width: 50rem;
        margin-top: -0.5rem;
    }

    .intro-content p {
        margin: 5rem 0;
    }

    .image-overlay {
        width: 45rem;
        height: 50rem;
    }

    .secondary-button {
        max-width: 50rem;
        padding: 1.5rem 0;
    }
}

@media (min-width: 90rem) {

    .image-overlay {
        height: 45rem;
    }
}

@media (min-width: 120rem) {
    .wrapper {
        padding: 5rem 10rem 0rem 10rem;
    }
}
</style>
