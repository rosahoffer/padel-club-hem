<script setup>
import { ref, onMounted } from 'vue'

// SEO meta gegevens
useSeoMeta({
  title: 'Sportaanbod bij Padel Club Hem - Padel, Tennis, Padel Pingpong en Shuffleboard',
  meta: [
    { name: 'description', content: 'Ontdek het veelzijdige sportaanbod bij Padel Club Hem. Van padel en tennis tot padel pingpong en shuffleboard, wij bieden een breed scala aan sportactiviteiten voor elke speler.' },
    { name: 'keywords', content: 'sportaanbod, padel, tennis, padelbaan boeken, tennisbaan boeken, padel pingpong, shuffleboard, sportclub West-Friesland, Padel Club Hem' },
    { property: 'og:url', content: 'https://www.padelclubhem.nl/sportaanbod' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Sportaanbod bij Padel Club Hem' },
    { property: 'og:description', content: 'Ontdek het veelzijdige sportaanbod bij Padel Club Hem. Van padel en tennis tot padel pingpong en shuffleboard, wij bieden een breed scala aan sportactiviteiten voor elke speler.' },
    { property: 'og:image', content: 'https://www.padelclubhem.nl/_nuxt/man-playing-padel.BqebgGe_.jpg' },
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
    <main aria-label="Hoofdinhoud Sportaanbod">
        <HeaderMainHeader />
        <SportaanbodSectionOne />
        <SportaanbodSectionTwo />
        <FooterMainFooter />
    </main>
</template>