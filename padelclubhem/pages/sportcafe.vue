<script setup>
import { ref, onMounted } from 'vue'

// SEO meta gegevens
useSeoMeta({
  title: 'Sportcafé bij Padel Club Hem - Gezellig Eten, Drinken en Sportkijken',
  meta: [
    { name: 'description', content: 'Bezoek het sportcafé van Padel Club Hem voor een gezellige sfeer, heerlijke drankjes, snacks, en live sportuitzendingen. Geniet van sportwedstrijden en een ontspannen omgeving met vrienden en familie.' },
    { name: 'keywords', content: 'sportcafé, eten en drinken, live sportuitzendingen, sportbar, gezellige sfeer, borrelen, gezonde lunch, Padel Club Hem, West-Friesland' },
    { property: 'og:url', content: 'https://www.padelclubhem.nl/sportcafe' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Sportcafé bij Padel Club Hem - Gezelligheid en Sport' },
    { property: 'og:description', content: 'Geniet van een gezellige sfeer, heerlijke drankjes, snacks, en live sportuitzendingen in het sportcafé van Padel Club Hem. Perfect voor ontspanning met vrienden en familie.' },
    { property: 'og:image', content: 'https://www.padelclubhem.nl/_nuxt/sportcafe-impressie-3.DX-PlRlU.png' },
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
    <main aria-label="Hoofdinhoud Sportcafé">
        <HeaderMainHeader />
        <SportcafeSectionOne />
        <SportcafeTextContainer />
        <SportcafeSectionTwo />
        <SportcafeSectionThree />
        <FooterMainFooter />
    </main>
</template>