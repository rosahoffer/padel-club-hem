<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isMenuOpen = ref(false);
const isMenuClosing = ref(false);

function toggleMenu() {
    if (isMenuOpen.value) {
        isMenuClosing.value = true;
        setTimeout(() => {
            isMenuOpen.value = false;
            isMenuClosing.value = false;
        }, 300); // Match this duration to the slideOut animation duration
    } else {
        isMenuOpen.value = true;
    }
}

function handleResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1250) {
        isMenuOpen.value = true;
    } else {
        isMenuOpen.value = false;
    }
}

let debounceTimer;
function debounce(fn, delay) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        fn();
    }, delay);
}

onMounted(() => {
    window.addEventListener('resize', () => debounce(handleResize, 200));
    handleResize();
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', () => debounce(handleResize, 200));
});
</script>

<template>
    <main>
        <div class="navbar-container">
            <nav class="navbar">
                <!-- Logo Section -->
                <div class="logo-container" :class="{ 'menu-open': isMenuOpen }">
                    <nuxt-link href="/homepage" class="nav__link logo main-logo" id="logo">
                        <img src="assets/images/padelclubhem-logo.png" alt="Logo Padel Club Hem" />
                    </nuxt-link>
                </div>

                <!-- Booking Button Section -->
                <div class="wrapper">
                    <div class="book-button-container" :class="{ 'menu-open': isMenuOpen }">
                        <nuxt-link href="/" class="primary-button" role="link">🏓 Boek een baan!</nuxt-link>
                    </div>

                    <!-- Menu Toggle Button -->
                    <button class="nav__open" @click="toggleMenu" :aria-expanded="isMenuOpen" aria-controls="navMenu" aria-label="Toggle menu">
                        <i :class="{ open: isMenuOpen }"></i>
                        <i :class="{ open: isMenuOpen }"></i>
                    </button>
                </div>

                <!-- The Menu -->
                <div class="nav" :class="{ open: isMenuOpen, closing: isMenuClosing }" id="navMenu">
                    <div>
                        <div :class="{ open: isMenuOpen }"></div>
                    </div>
                    <ul class="nav__items">
                        <li class="nav__item">
                            <nuxt-link href="/" class="nav__link" @click="toggleMenu">Sportaanbod</nuxt-link>
                        </li>
                        <li class="nav__item">
                            <nuxt-link href="/" class="nav__link" @click="toggleMenu">Evenementen</nuxt-link>
                        </li>
                        <li class="nav__item">
                            <nuxt-link href="/" class="nav__link" @click="toggleMenu">Lessen</nuxt-link>
                        </li>
                        <li class="nav__item">
                            <nuxt-link href="/" class="nav__link" @click="toggleMenu">Business</nuxt-link>
                        </li>
                        <li class="nav__item">
                            <nuxt-link href="/" class="nav__link" @click="toggleMenu">Sportcafé</nuxt-link>
                        </li>
                        <li class="nav__item">
                            <nuxt-link href="/" class="nav__link" @click="toggleMenu">Contact</nuxt-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </main>
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
    padding: 0.5rem 1.5rem 0.3rem 0.5rem;
    background-color: var(--background-color);
    border-radius: 15px;
    margin: 1.5rem 0;
}

.logo-container img {
    height: 50px;
    transition: filter 0.3s;
    margin-bottom: 0.5rem;
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
}

.book-button-container.menu-open .primary-button {
    background-color: var(--background-color);
    color: var(--primary-color);
    padding: 0.6rem 0.8rem 0.6rem 0.7rem;
    border: none;
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
    margin: 4px 0;
    transition: all 0.3s;
}

.nav__open i.open:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
    background-color: var(--background-color);
}

.nav__open i.open:nth-child(2) {
    transform: translateY(-4px) rotate(-45deg);
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
    overflow: hidden;
    transition: all 0.3s;
    padding: 1rem;
    border-radius: 10px;
}

.nav.open {
    display: flex;
    animation: slideIn 0.3s ease-in-out;
}

.nav.closing {
    animation: slideOut 0.3s ease-in-out;
}

.nav__items {
    list-style: none;
    margin: 6rem 0 0 0;
    text-align: left;
    transition: opacity 0.5s ease;
    opacity: 0;
}

.nav.open .nav__items {
    opacity: 1;
}

.nav__item {
    padding: 0.3rem 0;
}

.nav__link {
    font-size: 1.3rem;
    color: var(--background-color);
    text-decoration: none;
    text-transform: lowercase;
    font-weight: 600;
    padding: 1rem;
    display: block;
    transition: background-color 0.3s;
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
        margin-left: 1rem;
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
        margin-left: 4rem;
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
    }

    .nav__link:hover,
    .nav__link:focus-visible {
        color: var(--primary-color);
        border-color: var(--primary-color);
        transform: scale(1.05);
    }

    .nav__link:focus {
        color: var(--primary-color);
    }
}
</style>
