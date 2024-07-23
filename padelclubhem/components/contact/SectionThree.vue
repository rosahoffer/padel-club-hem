<template>
    <section class="contact-container">
        <p class="subtitle-medium">Neem contact op en blijf in beweging!</p>
        <h2>Gegevens</h2>
        <div class="info-contact-container">
            <div class="contact-group">
                <p class="subtitle-bold-uppercase">Adres</p>
                <nuxt-link href="https://g.co/kgs/ae2kT3V" class="secondary-button-black subtitle-medium"
                    aria-label="bekijk onze locatie">
                    Torenweg 44 1607 CP Hem
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.28239 0.452916L14.7293 0.3712C15.309 0.366184 15.783 0.832064 15.788 1.41177L15.8697 10.8586C15.8747 11.4383 15.4088 11.9123 14.8291 11.9174C14.2494 11.9224 13.7754 11.4565 13.7704 10.8768L13.7106 3.96401L2.24266 15.6321C1.83629 16.0455 1.17169 16.0513 0.758226 15.6449C0.344766 15.2386 0.339017 14.574 0.745385 14.1605L12.2133 2.49242L5.30055 2.55222C4.72085 2.55723 4.24684 2.09135 4.24182 1.51165C4.23681 0.93194 4.70269 0.457931 5.28239 0.452916Z"
                            fill="var(--background-color)" />
                    </svg>
                </nuxt-link>
            </div>
            <div class="contact-group">
                <p class="subtitle-bold-uppercase">Email</p>
                <nuxt-link href="mailto:info@padelclubhem.nl" class="secondary-button-black subtitle-medium"
                    aria-label="email ons">
                    info@padelclubhem.nl
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.28239 0.452916L14.7293 0.3712C15.309 0.366184 15.783 0.832064 15.788 1.41177L15.8697 10.8586C15.8747 11.4383 15.4088 11.9123 14.8291 11.9174C14.2494 11.9224 13.7754 11.4565 13.7704 10.8768L13.7106 3.96401L2.24266 15.6321C1.83629 16.0455 1.17169 16.0513 0.758226 15.6449C0.344766 15.2386 0.339017 14.574 0.745385 14.1605L12.2133 2.49242L5.30055 2.55222C4.72085 2.55723 4.24684 2.09135 4.24182 1.51165C4.23681 0.93194 4.70269 0.457931 5.28239 0.452916Z"
                            fill="var(--background-color)" />
                    </svg>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    background-color: var(--primary-color);
    padding: 5rem 1.5rem;
}

.contact-container h2 {
    color: var(--background-color);
}

.contact-container p {
    color: var(--background-color);
}

.subtitle-medium {
    text-transform: inherit;
}

.contact-group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid var(--background-color);
    border-top: 2px solid var(--background-color);
    padding: 0.5rem 0;
}

.contact-group:last-of-type {
    border-top: none;
}

.secondary-button-black {
    border: none;
}

.secondary-button-black {
    width: 80%;
}


@media (min-width: 40rem) {

    .contact-container {
        gap: 3rem;
        padding: 8rem 3rem;
    }

    .secondary-button-black {
        width: 70%;
    }
}

@media (min-width: 60rem) {

    .info-contact-container {
        padding: 3rem 0 0 0;
    }

    .contact-group {
        padding: 1rem 0;
    }

}

@media (min-width: 80rem) {

    .secondary-button-black {
        width: 60%;
    }
}

@media (min-width: 120rem) {

    .contact-container {
        padding: 5rem 10rem 0rem 10rem;
    }
}
</style>
