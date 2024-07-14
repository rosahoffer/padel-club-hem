<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
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
                <div class="book-button-container" :class="{ 'menu-open': isMenuOpen }">
                    <nuxt-link href="/" class="primary-button" role="link">🏓 Boek een baan!</nuxt-link>
                </div>

                <!-- Menu Toggle Button -->
                <div class="nav__open" @click="toggleMenu">
                    <i :class="{ open: isMenuOpen }"></i>
                    <i :class="{ open: isMenuOpen }"></i>
                </div>

                <!-- The Menu -->
                <div class="nav" :class="{ open: isMenuOpen }" id="navMenu">
                    <div class="bubble-container">
                        <div id="bubble" :class="{ open: isMenuOpen }"></div>
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

.navbar-container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0.8rem 0;
    z-index: 1000;
}

.navbar {
    position: fixed;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem 1rem 0.7rem;
    background-color: var(--navbar-bg-color);
    border-radius: 15px;
}

.logo-container img {
    height: 50px;
    transition: filter 0.3s;
}

.logo-container.menu-open img {
    filter: brightness(0%);
}

.book-button-container .primary-button {
    transition: background-color 0.3s;
}

.book-button-container.menu-open .primary-button {
    background-color: var(--background-color);
    color: var(--primary-color);
    padding: 0.6rem 0.8rem 0.6rem 0.7rem;
}

.nav__open {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s;
    z-index: 15;
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
    opacity: 0;
    overflow: hidden;
    transition: all 0.3s;
    padding: 1rem;
    border-radius: 10px;
}

.nav.open {
    display: flex;
    opacity: 1;
    top: 0;
}

.bubble-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

#bubble {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    background-color: var(--primary-color);
    border-radius: 50%;
    transition: all 0.5s ease;
    z-index: -2;
}

#bubble.open {
    width: 200vw;
    height: 200vh;
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

@media (min-width: 800px) {
    .nav__open {
        display: none;
    }

    .logo-container {
        order: 1;
    }

    .navbar{
        background-color: var(--background-color);
    }

    .nav {
        display: flex;
        position: static;
        width: auto;
        opacity: 1;
        padding: 0;
        align-items: center;
        background-color: var(--navbar-bg-color);
        border-radius: 50px;
        order: 2;
        justify-content: center;
    }

    .nav__items {
        display: flex;
        margin-top: 0;
        flex-direction: row;
    }

    .nav__item {
        margin: 0 10px;
    }

    .nav__link:hover {
        background-color: #575757;
        border-radius: 5px;
    }

    .book-button-container {
        display: block;
        order: 3;
    }
}
</style>
