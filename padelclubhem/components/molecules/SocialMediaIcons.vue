<template>
    <div class="social-media-container">
        <ul>
            <li>
                <nuxt-link class="facebook" href="https://www.facebook.com/profile.php?id=61560566112040">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="instagram" href="https://www.instagram.com/padelclubhem">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
ul {
    display: flex;
}

ul li {
    list-style: none;
}

ul li a {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    text-align: center;
    text-decoration: none;
    color: var(--primary-color);
    margin-right: 1rem;
    transition: 0.5s;
}

ul li a span {
    position: absolute;
    transition: transform 0.5s;
}

ul li a span:nth-child(1),
ul li a span:nth-child(3) {
    width: 100%;
    height: 2px;
    background: var(--primary-color);
}

ul li a span:nth-child(1) {
    top: 0;
    left: 0;
    transform-origin: right;
}

ul li a:hover span:nth-child(1) {
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s;
}

ul li a span:nth-child(3) {
    bottom: 0;
    left: 0;
    transform-origin: left;
}

ul li a:hover span:nth-child(3) {
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
}

ul li a span:nth-child(2),
ul li a span:nth-child(4) {
    width: 2px;
    height: 100%;
    background: var(--primary-color);
}

ul li a span:nth-child(2) {
    top: 0;
    left: 0;
    transform: scale(0);
    transform-origin: bottom;
}

ul li a:hover span:nth-child(2) {
    transform: scale(1);
    transform-origin: top;
    transition: transform 0.5s;
}

ul li a span:nth-child(4) {
    top: 0;
    right: 0;
    transform: scale(0);
    transform-origin: top;
}

ul li a:hover span:nth-child(4) {
    transform: scale(1);
    transform-origin: bottom;
    transition: transform 0.5s;
}

.facebook:hover {
    color: var(--primary-color);
}

.facebook:hover span {
    background: var(--primary-color);
}

.instagram:hover {
    color: var(--primary-color);
}

.instagram:hover span {
    background: var(--primary-color);
}
</style>