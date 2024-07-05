<script setup></script>

<template>
    <main>
        <nav class="navbar">
            <div>
                <nuxt-link href="/" class="nav__link logo"><img src="assets/images/padelclubhem-logo.png" alt="Logo Padel Club Hem"></nuxt-link>
            </div>

            <input type="checkbox" id="nav" class="hidden" />
            <label for="nav" class="nav__open"><i></i><i></i><i></i></label>
            <div class="nav">
                <ul class="nav__items">
                    <li class="nav__item">
                        <nuxt-link href="/" class="nav__link">Sportaanbod</nuxt-link>
                    </li>
                    <li class="nav__item">
                        <nuxt-link href="/" class="nav__link">Toernooien</nuxt-link>
                    </li>
                    <li class="nav__item">
                        <nuxt-link href="/" class="nav__link">Lessen</nuxt-link>
                    </li>
                    <li class="nav__item">
                        <nuxt-link href="/" class="nav__link">Business</nuxt-link>
                    </li>
                    <li class="nav__item">
                        <nuxt-link href="/sportaanbod" class="nav__link">Contact</nuxt-link>
                    </li>
                </ul>
            </div>

            <div>
                <nuxt-link href="/" class="book-button" role="link">🏓 Boek een baan!</nuxt-link>
            </div>
        </nav>
    </main>
</template>

<style scoped>
:root {
    /* COLORS */

    --primary-color: #cbfd3c;
    --secondary-color: #ffeae3;
    --tertiary-color: #414141;
    --background-color: #262626;
    --navbar-bg-color: #4b4b4b;
}

main {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 15px;
}

.logo img {
    width: 5rem;
}

.navbar {
    position: fixed;
    display: flex;
    align-items: center;
    top: 1rem;
    width: 95%;
    padding: 1rem 1.5rem;
    background-color: red;
    border-radius: 15px;
    z-index: 1000;
}

.book-button {
    width: 10rem;
}

.hidden {
    display: none;
}

.nav__items {
    width: 100%;
    list-style: none;
    background-color: var(--navbar-bg-color);
    border-radius: var(--border-radius);
}

.nav__link {
    color: var(--shades);
    text-decoration: none;
}

.brand {
    margin: 0;
    font-size: 1.45em;
}

.brand a {
    padding: 10px 15px;
    text-align: center;
    display: block;
}

.logo {
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    line-height: inherit;
}

.logo::before {
    display: inline-block;
    vertical-align: top;
}

.nav__items {
    margin-top: 5px;
}

.brand .nav__link,
.nav__items .nav__link {
    padding: 10px 15px;
    text-align: center;
    display: block;
}

.nav__items .nav__link {
    color: var(--shades);
    font-size: 0.99rem;
}

.nav__items .nav__link:hover {
    color: var(--secondary);
}

@media (min-width: 800px) {

    .navbar,
    .nav__items {
        display: flex;
    }

    .navbar {
        flex-direction: column;
        align-items: center;
    }

    .navbar {
        flex-direction: row;
        justify-content: space-between;
    }
}

@media screen and (max-width: 799px) {
    .nav {
        position: fixed;
        top: 0;
        left: -100%;
        height: 100%;
        width: 100%;
        z-index: -1;
        background-color: var(--primary-color);
        opacity: 0;
        transition: all 0.3s ease;
    }

    .nav .nav__items {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        padding-inline-start: 0;
    }

    .nav .nav__items .nav__item {
        display: block;
        float: none;
        width: 100%;
        text-align: right;
        margin-bottom: 10px;
    }

    .nav .nav__items .nav__item:nth-child(1) a {
        transition-delay: 0.2s;
    }

    .nav .nav__items .nav__item:nth-child(2) a {
        transition-delay: 0.3s;
    }

    .nav .nav__items .nav__item:nth-child(3) a {
        transition-delay: 0.4s;
    }

    .nav .nav__items .nav__item:nth-child(4) a {
        transition-delay: 0.5s;
    }

    .nav .nav__items .nav__item:not(:first-child) {
        margin-left: 0;
    }

    .nav .nav__items .nav__item .nav__link {
        padding: 10px 25px;
        opacity: 0;
        color: var(--shades);
        font-size: 24px;
        font-weight: 600;
        transform: translateY(-20px);
        transition: all 0.3s ease;
    }

    .nav .nav__items .nav__item .nav__link:hover {
        color: pink;
    }

    .nav__open {
        position: absolute;
        right: 10px;
        top: 16px;
        display: block;
        width: 48px;
        height: 48px;
        cursor: pointer;
        z-index: 9999;
        border-radius: 50%;
    }

    .nav__open i {
        display: block;
        width: 20px;
        height: 2px;
        background-color: var(--primary-color);
        border-radius: 2px;
        margin-left: 14px;
    }

    .nav__open i:nth-child(1) {
        margin-top: 16px;
    }

    .nav__open i:nth-child(2) {
        margin-top: 4px;
        opacity: 1;
    }

    .nav__open i:nth-child(3) {
        margin-top: 4px;
    }
}

#nav:checked+.nav__open {
    transform: rotate(45deg);
}

#nav:checked+.nav__open i {
    background-color: var(--background-color);
    transition: transform 0.2s ease;
}

#nav:checked+.nav__open i:nth-child(1) {
    transform: translateY(6px) rotate(180deg);
}

#nav:checked+.nav__open i:nth-child(2) {
    opacity: 0;
}

#nav:checked+.nav__open i:nth-child(3) {
    transform: translateY(-6px) rotate(90deg);
}

#nav:checked~.nav {
    transform: translateX(100%);
    opacity: 1;
    z-index: 9990;
}

#nav:checked~.nav ul li a {
    opacity: 1;
    transform: translateY(0);
}
</style>
