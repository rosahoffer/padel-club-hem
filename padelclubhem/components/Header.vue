<script setup>
import { ref } from "vue";
import gsap from "gsap";

const navToggle = ref(false);

const toggleMenu = () => {
  navToggle.value = !navToggle.value;
  const navMenu = document.getElementById("navMenu");
  const logo = document.getElementById("logo");
  const bubbleContainer = document.querySelector(".bubble-container");

  if (navToggle.value) {
    gsap.to(navMenu, {
      duration: 0.3,
      height: "100vh",
      opacity: 1,
      display: "flex",
      ease: "power2.inOut",
    });
    gsap.to(logo, { duration: 0.3, filter: "brightness(0) invert(1)" });
    bubbleContainer.style.display = "block";
  } else {
    gsap.to(navMenu, {
      duration: 0.3,
      height: "0",
      opacity: 0,
      display: "none",
      ease: "power2.inOut",
    });
    gsap.to(logo, { duration: 0.3, filter: "brightness(1) invert(0)" });
    bubbleContainer.style.display = "none";
  }
};
</script>

<template>
  <main>
    <div class="navbar-container">
      <nav class="navbar">
        <div class="logo-container">
          <nuxt-link href="/" class="nav__link logo" id="logo">
            <img
              src="assets/images/padelclubhem-logo.png"
              alt="Logo Padel Club Hem"
            />
          </nuxt-link>
        </div>

        <div class="book-button-container">
          <nuxt-link href="/" class="book-button" role="link"
            >🏓 Boek een baan!</nuxt-link
          >
        </div>

        <!-- Checkbox for the menu -->
        <input type="checkbox" id="navToggle" class="hidden" />
        <label for="navToggle" class="nav__open">
          <i></i>
          <i></i>
        </label>

        <!-- The menu itself -->
        <div class="nav" id="navMenu">
          <div class="bubble-container">
            <div id="bubble"></div>
          </div>
          <ul class="nav__items">
            <li class="nav__item">
              <nuxt-link href="/sportaanbod" class="nav__link"
                >Sportaanbod</nuxt-link
              >
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
              <nuxt-link href="/" class="nav__link">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </main>
</template>

<style scoped>
:root {
  /* COLORS */
  --primary-color: #cbfd3c;
  /* Groen */
  --secondary-color: #ffeae3;
  --tertiary-color: #414141;
  --background-color: #262626;
  /* Voor logo */
  --navbar-bg-color: #4b4b4b;
}

.navbar-container {
  margin: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--navbar-bg-color); /* Adjust as per your design */
  border-radius: 15px;
}

.logo-container img {
  height: 50px;
  transition: filter 0.3s;
}

.hidden {
  display: none;
}

.nav__open {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s;
}

.nav__open i {
  background: var(--primary-color);
  width: 25px;
  height: 3px;
  margin: 4px 0;
  transition: all 0.3s;
}

.nav {
  display: none;
  flex-direction: column;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--primary-color);
  z-index: 5;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s;
  padding: 1rem;
  border-radius: 10px;
}

.nav__items {
  list-style: none;
  padding: 5rem 0;
  text-align: left;
}

.nav__item {
  margin: 10px 0;
}

.nav__link {
  color: var(--background-color);
  text-decoration: none;
  padding: 10px 20px;
  display: block;
  transition: background-color 0.3s;
}

.nav__link:hover {
  background-color: #575757;
  border-radius: 5px;
}

.hidden:checked + .nav__open + .nav {
  position: absolute;
  display: flex;
  opacity: 0.5;
  top: 0;
}

.hidden:checked + .nav__open i:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}

.hidden:checked + .nav__open i:nth-child(2) {
  transform: translateY(0px) rotate(-45deg);
}

.bubble-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: none; /* Initially hidden */
}

.nav.open .bubble-container {
  display: block; /* Show bubble when menu open */
}

#bubble {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200vw; /* Initial large circle */
  height: 200vh;
  background-color: var(--primary-color);
  border-radius: 50%; /* Circle */
  transition: all 0.3s ease;
  z-index: -2;
}

@media (min-width: 768px) {
  .nav__open {
    display: none; /* Hide hamburger icon on larger screens */
  }

  .nav {
    display: flex; /* Show navbar on larger screens */
    position: static;
    width: auto;
    background-color: transparent;
    opacity: 1;
    padding: 0;
    border-radius: 0;
    flex-direction: row;
    align-items: center;
  }

  .nav__items {
    margin-top: 0;
    flex-direction: row;
  }

  .nav__item {
    margin: 0 10px;
  }

  .book-button-container {
    display: block;
  }

  .logo-container {
    order: 1;
  }

  .nav {
    order: 2;
    justify-content: center;
  }

  .book-button-container {
    order: 3;
  }
}
</style>
