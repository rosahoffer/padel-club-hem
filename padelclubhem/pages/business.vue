<script setup>
import { ref, onMounted } from 'vue'

// SEO meta gegevens
useSeoMeta({
  title: 'Zakelijke Arrangementen bij Padelclub Hem - Teambuilding en Bedrijfsuitjes',
  meta: [
    { name: 'description', content: 'Organiseer een uniek bedrijfsuitje of teambuilding activiteit bij Padelclub Hem. Ontdek onze speciale zakelijke arrangementen, sponsoring mogelijkheden en voordelen voor bedrijven.' },
    { name: 'keywords', content: 'bedrijfsuitjes, teambuilding, zakelijke arrangementen, bedrijfsactiviteiten, sponsoring, sportclub, Padelclub Hem, West-Friesland, sportieve uitjes' },
    { property: 'og:url', content: 'https://www.padelclubhem.nl/business' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Zakelijke Arrangementen bij Padelclub Hem' },
    { property: 'og:description', content: 'Ontdek de mogelijkheden voor bedrijfsuitjes, teambuilding en sponsoring bij Padelclub Hem. Profiteer van sportieve activiteiten en zakelijke voordelen.' },
    { property: 'og:image', content: 'https://www.padelclubhem.nl/_nuxt/business-image.hYKFcXxj.png' },
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
    <main aria-label="Hoofdinhoud Business">
        <HeaderMainHeader />
        <BusinessSectionOne />
        <BusinessSectionTwo />
        <BusinessSectionThree />
        <FooterMainFooter />
    </main>
</template>