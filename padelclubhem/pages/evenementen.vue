<script setup>
import { ref, onMounted } from 'vue'

// SEO meta gegevens
useSeoMeta({
  title: 'Evenementen & Competities bij Padelclub Hem - Toernooien, Wedstrijden en Meer',
  meta: [
    { name: 'description', content: 'Blijf op de hoogte van alle toernooien, competities, wedstrijden en speciale evenementen bij Padelclub Hem. Van beginnerstoernooien tot professionele wedstrijden, er is altijd iets te beleven.' },
    { name: 'keywords', content: 'evenementen, competities, padel toernooien, tennis toernooien, sportwedstrijden, Padelclub Hem, wintercompetitie padel, sportevenementen West-Friesland' },
    { property: 'og:url', content: 'https://www.padelclubhem.nl/evenementen' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Evenementen & Competities bij Padelclub Hem' },
    { property: 'og:description', content: 'Blijf op de hoogte van alle toernooien, competities, wedstrijden en speciale evenementen bij Padelclub Hem. Van beginnerstoernooien tot professionele wedstrijden, er is altijd iets te beleven.' },
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
    <main aria-label="Hoofdinhoud Evenementen">
        <HeaderMainHeader />
        <EvenementenSectionOne />
        <EvenementenSectionTwo />
        <EvenementenSectionThree />
        <FooterMainFooter />
    </main>
</template>