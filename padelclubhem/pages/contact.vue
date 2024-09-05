<script setup>
import { ref, onMounted } from 'vue'

// SEO meta gegevens
useSeoMeta({
  title: 'Contact Padelclub Hem - Bereik Ons voor Vragen en Reserveringen',
  meta: [
    { name: 'description', content: 'Neem contact op met Padelclub Hem voor al uw vragen over padel, tennis, reserveringen, ons sportcafé of andere diensten. Vind hier onze contactgegevens en openingstijden.' },
    { name: 'keywords', content: 'Contact Padelclub Hem, padel reserveringen, tennis reserveringen, sportclub contactinformatie, sportcafé Hem, openingstijden Padelclub Hem, locatie padelclub, West-Friesland' },
    { property: 'og:url', content: 'https://www.padelclubhem.nl/contact' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Contact Padelclub Hem - Bereik Ons voor Vragen en Reserveringen' },
    { property: 'og:description', content: 'Neem contact op met Padelclub Hem voor vragen over padel, tennis, reserveringen, en ons sportcafé. Vind hier onze locatie en openingstijden.' },
    { property: 'og:image', content: 'https://www.padelclubhem.nl/_nuxt/bereik-ons-image.D4VR9-C3.png' },
    { name: 'address', content: 'Torenweg 44, 1607 CP Hem, Nederland' },
    { name: 'geo.region', content: 'NL-NH' },
    { name: 'geo.placename', content: 'Hem' },
    { property: 'business:contact_data:street_address', content: 'Torenweg 44' },
    { property: 'business:contact_data:postal_code', content: '1607 CP' },
    { property: 'business:contact_data:locality', content: 'Hem' },
    { property: 'business:contact_data:country_name', content: 'Nederland' },
    { property: 'openingHours', content: 'ma-vr 07:00 t/m 24:00 uur, za-zo 8:00 t/m 23:00 uur' }
  ]
});
</script>

<template>
    <main aria-label="Hoofdinhoud Contact">
        <HeaderMainHeader />
        <ContactSectionOne />
        <ContactSectionTwo />
        <ContactSectionThree />
        <FooterMainFooter />
    </main>
</template>