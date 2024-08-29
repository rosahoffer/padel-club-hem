<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';

const isMenuOpen = ref(false);
const isInfoMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

function toggleInfoMenu(event) {
    event.stopPropagation(); // Voorkom dat het evenement verder wordt verspreid

    const screenWidth = window.innerWidth;

    if (isInfoMenuOpen.value) {
        // Sluit het Info-menu
        gsap.to('.info-menu', {
            height: 0,
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                isInfoMenuOpen.value = false;
                gsap.to('.info-button svg', {
                    rotate: 0,
                    duration: 0.3,
                });
            },
        });
    } else {
        // Open het Info-menu
        isInfoMenuOpen.value = true;
        const animationProps = screenWidth >= 1250
            ? { height: 'auto', opacity: 1, duration: 0.3 }
            : { height: 'auto', opacity: 1, duration: 0.3 };

        gsap.fromTo('.info-menu', { height: 0, opacity: 0 }, animationProps);

        gsap.to('.info-button svg', {
            rotate: 90,
            duration: 0.3,
        });
    }
}


function handleResize() {
    const screenWidth = window.innerWidth;
    const shouldOpen = screenWidth >= 1250;

    if (isMenuOpen.value !== shouldOpen) {
        isMenuOpen.value = shouldOpen;
    }
}

function debounce(fn, delay) {
    let debounceTimer;
    return function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(fn, delay);
    };
}

const debouncedResizeHandler = debounce(handleResize, 200);

onMounted(() => {
    window.addEventListener('resize', debouncedResizeHandler);
    handleResize();
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', debouncedResizeHandler);
});
</script>



<template>
    <div class="navbar-container">
        <nav class="navbar">
            <!-- Logo Section -->
            <div class="logo-container" :class="{ 'menu-open': isMenuOpen }">
                <nuxt-link href="/homepage" class="logo" id="logo" aria-label="Ga naar de homepagina">
                    <img src="assets/images/padelclubhem-logo.png" alt="Logo Padelclub Hem" />
                </nuxt-link>
            </div>

            <!-- Booking Button Section -->
            <div class="wrapper">
                <div class="book-button-container" :class="{ 'menu-open': isMenuOpen }">
                    <nuxt-link href="/" class="primary-button">🏓 Boek een baan!</nuxt-link>
                </div>

                <!-- Menu Toggle Button -->
                <button class="nav__open" @click="toggleMenu" :aria-expanded="isMenuOpen" aria-controls="navMenu"
                    aria-label="Open menu">
                    <i :class="{ open: isMenuOpen }"></i>
                    <i :class="{ open: isMenuOpen }"></i>
                </button>
            </div>

            <!-- The Menu -->
            <div class="nav" :class="{ open: isMenuOpen }" id="navMenu">
                <ul class="nav__items">
                    <li class="nav__item">
                        <nuxt-link href="/sportaanbod" class="nav__link" @click="toggleMenu">Sportaanbod</nuxt-link>
                    </li>
                    <li class="nav__item">
                        <nuxt-link href="/evenementen" class="nav__link" @click="toggleMenu">Evenementen</nuxt-link>
                    </li>
                    <li class="nav__item">
                        <nuxt-link href="/lessen" class="nav__link" @click="toggleMenu">Lessen</nuxt-link>
                    </li>
                    <li class="nav__item">
                        <nuxt-link href="/business" class="nav__link" @click="toggleMenu">Business</nuxt-link>
                    </li>
                    <li class="nav__item">
                        <nuxt-link href="/sportcafe" class="nav__link" @click="toggleMenu">Sportcafé</nuxt-link>
                    </li>
                    <li class="nav__item">
                        <button class="nav__link info-button" @click="toggleInfoMenu">
                            Info
                            <svg width="22" height="16" viewBox="0 0 22 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M14.6254 0.736158L21.3056 7.41635C21.7156 7.82628 21.7156 8.49091 21.3056 8.90084L14.6254 15.581C14.2155 15.991 13.5509 15.991 13.1409 15.581C12.731 15.1711 12.731 14.5065 13.1409 14.0965L18.0292 9.20828H1.66895C1.08923 9.20828 0.619263 8.73832 0.619263 8.15859C0.619263 7.57886 1.08923 7.1089 1.66895 7.1089H18.0292L13.1409 2.22065C12.731 1.81072 12.731 1.14609 13.1409 0.736158C13.5509 0.326228 14.2155 0.326228 14.6254 0.736158Z"
                                    fill="#262626" />
                            </svg>
                        </button>
                        <ul class="info-menu" :class="{ open: isInfoMenuOpen }">
                            <li><nuxt-link href="/over-ons" class="nav__link" @click="toggleMenu">Over Ons</nuxt-link>
                            </li>
                            <li><nuxt-link href="/nieuws" class="nav__link" @click="toggleMenu">Nieuws</nuxt-link>
                            </li>
                            <li><nuxt-link href="/contact" class="nav__link" @click="toggleMenu">Contact</nuxt-link>
                            </li>
                            <li><nuxt-link href="/contact" class="nav__link" @click="toggleMenu">Partners</nuxt-link>
                            </li>
                            <li><nuxt-link href="/vacatures" class="nav__link"
                                    @click="toggleMenu">Vacatures</nuxt-link>
                            </li>
                            <li><nuxt-link href="/faq" class="nav__link" @click="toggleMenu">FAQ</nuxt-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>


<style scoped>
@keyframes slideIn {
    0% {
        transform: translateY(-50%);
        top: 1rem;
        opacity: 0;
    }

    80% {
        transform: translateY(0%);
        opacity: 1;
    }

    100% {
        transform: translateY(0);
    }
}

@keyframes slideOut {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-100%);
        opacity: 0;
    }
}

.navbar-container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 1000;
}

.navbar {
    position: fixed;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 1.5rem 1rem 0.5rem;
    background-color: var(--navbar-bg-color);
    border-radius: 15px;
    margin: 1.5rem 0;
}

.logo-container img {
    height: 50px;
    transition: filter 0.3s;
    margin: 0 0 0.5rem 1rem;
}

.logo-container.menu-open img {
    filter: brightness(0%);
}

.wrapper {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.book-button-container .primary-button {
    transition: background-color 0.3s;
    padding: 0.4rem 0.6rem 0.4rem 0.5rem;
}

.book-button-container.menu-open .primary-button {
    background-color: black;
    color: var(--primary-color);
    border: solid 2px var(--background-color);
}

.nav__open {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s;
    z-index: 15;
    border: none;
    background: none;
    padding: 0;
}

.nav__open i {
    background: var(--primary-color);
    border-radius: var(--border-radius);
    width: 25px;
    height: 3px;
    margin: 3px 0;
    transition: all 0.3s;
}

.nav__open i.open:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
    background-color: var(--background-color);
}

.nav__open i.open:nth-child(2) {
    transform: translateY(-2px) rotate(-45deg);
    background-color: var(--background-color);
}

.nav {
    display: none;
    flex-direction: column;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--primary-color);
    z-index: 5;
    transition: all 0.3s;
    padding: 1rem;
    border-radius: 10px;
}

.nav.open {
    display: flex;
    animation: slideIn 0.3s ease-in-out;
    overflow-y: auto;
}

.nav.closing {
    animation: slideOut 0.3s ease-in-out;
}

.nav__items {
    list-style: none;
    margin: 5rem 0 0 0;
    text-align: left;
}

.nav.open .nav__items {
    opacity: 1;
}

.nav__item {
    padding: 0;
}

.nav__link {
    font-size: 1.2rem;
    color: var(--background-color);
    text-decoration: none;
    text-transform: lowercase;
    font-weight: 600;
    padding: 0.7rem 0.5rem;
    display: block;
    transition: background-color 0.3s;
    text-transform: capitalize;
}

.primary-button {
    z-index: 16;
}

.logo-container {
    z-index: 17;
}

.nav__items {
    z-index: 18;
}

/* Existing styles */

.nav.open {
    min-height: 100px;
}

.info-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0.7rem 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
}

.info-menu {
    height: 0;
    opacity: 0;
    transition: height 0.3s ease, opacity 0.3s ease;
    list-style-type: none;
}

/* Bij uitbreiding wordt de hoogte automatisch aangepast */
.info-menu.open {
    display: flex;
    flex-direction: column;
}

.info-menu .nav__link {
    padding: 0.3rem 0.5rem;
    font-size: 1rem;
    font-weight: 300;
}

.nav__item.info-button svg {
    transform: rotate(90deg);
}


@media (min-width: 1250px) {
    .nav__open {
        display: none;
    }

    .logo-container img {
        height: 60px;
    }

    .logo-container {
        order: 1;
    }

    .wrapper {
        order: 3;
    }

    .book-button-container {
        display: block;
    }

    .logo-container.menu-open img {
        filter: brightness(100%);
    }

    .book-button-container.menu-open .primary-button {
        background-color: var(--primary-color);
        color: var(--background-color);
        padding: 0.5rem 1rem;
        margin: 0 2rem 0 1rem;
        font-size: 1rem;
        min-width: 12rem;
    }

    .navbar {
        background-color: var(--background-color);
        width: 95%;
        padding: 1rem 1.5rem;
        margin: 2rem 0;
    }

    .nav {
        display: flex;
        position: static;
        width: auto;
        padding: 0rem 0.5rem;
        background-color: var(--navbar-bg-color);
        border-radius: var(--border-radius);
        order: 2;
        margin-left: 5rem;
    }

    .nav__items {
        display: flex;
        gap: 0.2rem;
        margin: 0;
    }

    .nav__link {
        font-size: 1rem;
        font-weight: 400;
        color: var(--secondary-color);
        padding: 0.3rem 1rem;
        border: 2px solid transparent;
        border-radius: var(--border-radius);
        transition: all 0.3s ease;
        text-transform: lowercase;
    }

    .nav__link:hover,
    .nav__link:focus-visible {
        color: var(--primary-color);
        border-color: var(--primary-color);
        transform: scale(1.05);
    }

    .nav__item a:focus,
    .nav__item a:active {
        color: var(--primary-color);
        font-weight: 600;
    }

    .nav.open {
        display: flex;
        animation: none;
    }

    .nav.closing {
        animation: none;
    }

    .info-menu {
        position: absolute;
        top: 90%;
        width: auto;
        background-color: var(--navbar-bg-color);
        border-radius: var(--border-radius);
        z-index: 20;
        padding: 1rem;
        list-style-type: none;
        border: 2px solid var(--primary-color);
    }


    .info-menu .nav__link {
        text-transform: capitalize;
    }

    .info-menu.open {
        height: auto;
    }

    .nav.open {
        display: flex;
        justify-content: center;
        min-height: 3rem;
    }

    .info-menu .nav__link:hover,
    .info-menu .nav__link:focus-visible {
        color: var(--primary-color);
        border-color: var(--navbar-bg-color);
        transform: scale(1.05);
    }

    .info-button svg path {
        fill: var(--primary-color);
        transition: fill 0.3s ease;
    }

}
</style>
