<template>
  <nav class="footer-menu" aria-label="menu links onder aan de website">
    <div>
      <h3>Menu</h3>
      <ul>
        <li>
          <nuxt-link to="/sportaanbod" class="nav__link">Sportaanbod</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/evenementen" class="nav__link">Evenementen</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/lessen" class="nav__link">Lessen</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/business" class="nav__link">Business</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/sportcafe" class="nav__link">Sportcafé</nuxt-link>
        </li>
      </ul>
    </div>
    <div>
      <h3>Info</h3>
      <ul>
        <li>
          <nuxt-link to="/over-ons" class="nav__link">Over ons</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/nieuws" class="nav__link">Nieuws</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" class="nav__link">Contact</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/partners" class="nav__link">Partners</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/vacatures" class="nav__link">Vacatures</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/faq" class="nav__link">FAQ</nuxt-link>
        </li>
      </ul>
    </div>
    <div>
      <h3>Contact</h3>
      <address>
        <p>
          <nuxt-link href="mailto:info@padelclubhem.nl" class="contact__link">info@padelclubhem.nl</nuxt-link><br>
          <nuxt-link href="tel:+31615482416" class="contact__link">+31615482416</nuxt-link><br>
          <nuxt-link href="https://g.co/kgs/ae2kT3V" class="contact__link" aria-label="bekijk onze locatie">
            Torenweg 44<br>1607 CP Hem
          </nuxt-link>
        </p>
      </address>
    </div>
    <div>
      <h3>Openingstijden</h3>
      <p>Banen: ma-vr 07:00 t/m 24:00 uur</p>
      <p>Sportcafé: Vanaf 12 oktober ma-vr 07:00 t/m 12:00 & 16:00 t/m 23:00</p>
      <p>Za-zo 08:00 t/m 23:00 uur</p>
    </div>
  </nav>
</template>


<style scoped>
.footer-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 0;
  background-color: var(--background-color);
  color: var(--text-color);
}

h3 {
  font-size: 1rem;
  letter-spacing: 0.8px;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

ul {
  font-size: 0.8rem;
  line-height: 1.8rem;
  list-style-type: none;
  padding-left: 0;
}

.nav__link,
.contact__link,
p {
  font-size: 0.8rem;
  line-height: 1.8rem;
  color: var(--secondary-color);
  text-decoration: none;
}

.nav__link:hover,
.contact__link:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

address {
  font-style: normal;
}

@media (min-width: 40rem) {

  .footer-menu {
    flex-direction: row;
    gap: 1rem;
  }

}

@media (min-width: 60rem) {

  .footer-menu {
    flex-direction: row;
    justify-content: left;
    gap: 2.5rem;
  }
}

@media (min-width: 80rem) {

  .footer-menu {
    gap: 5rem;
  }
}
</style>