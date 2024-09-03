<script setup>
import { ref, onMounted } from 'vue'

// SEO meta gegevens
useSeoMeta({
  title: 'Padel- en Tennislessen bij Padelclub Hem - Leer van Professionele Coaches',
  meta: [
    { name: 'description', content: 'Volg padel- en tennislessen bij Padelclub Hem onder begeleiding van professionele coaches. Geschikt voor beginners en gevorderden. Houd onze website in de gaten voor nieuwe lessen.' },
    { name: 'keywords', content: 'padellessen, tennislessen, sportlessen, padel trainingen, tennis trainingen, lessen voor beginners, lessen voor gevorderden, Padelclub Hem, West-Friesland' },
    { property: 'og:url', content: 'https://www.padelclubhem.nl/lessen' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Padel- en Tennislessen bij Padelclub Hem' },
    { property: 'og:description', content: 'Volg padel- en tennislessen bij Padelclub Hem onder begeleiding van professionele coaches. Geschikt voor beginners en gevorderden. Houd onze website in de gaten voor nieuwe lessen.' },
    { property: 'og:image', content: 'http://localhost:3000/_nuxt/assets/images/man-playing-padel-blue.jpg' },
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