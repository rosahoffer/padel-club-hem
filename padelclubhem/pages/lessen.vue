<script setup>
import { ref, onMounted } from 'vue'

// SEO meta gegevens
useSeoMeta({
  title: 'Lessen bij Padelclub Hem - Lessen en Meer',
  meta: [
    { name: 'description', content: 'Blijf op de hoogte van onze lessen bij Padelclub Hem. Van beginnerstoernooien tot professionele wedstrijden, er is altijd iets te beleven.' },
    { name: 'keywords', content: 'lessen, competities, padel toernooien, tennis toernooien, sportwedstrijden, Padelclub Hem, wintercompetitie padel, sportlessen West-Friesland' },
    { property: 'og:url', content: 'https://www.padelclubhem.nl/lessen' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Lessen bij Padelclub Hem' },
    { property: 'og:description', content: 'Blijf op de hoogte van onze lessen bij Padelclub Hem. Van beginnerstoernooien tot professionele wedstrijden, er is altijd iets te beleven.' },
    { property: 'og:image', content: 'https://www.padelclubhem.nl/_nuxt/playing-padel-orange.CNQYwvZ6.jpg' },
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
    <main aria-label="Hoofdinhoud Lessen">
        <HeaderMainHeader />
        <LessenSectionOne />
        <LessenSectionTwo />
        <LessenSectionThree />
        <FooterMainFooter />
    </main>
</template>