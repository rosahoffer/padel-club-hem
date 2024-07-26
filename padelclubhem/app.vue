<template>
  <div>
    <TennisBallLoader v-if="loading" />
    <div v-else>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// SEO meta gegevens
useSeoMeta({
  title: 'Padelclub Hem - Boek een Padel- of Tennisbaan in West-Friesland',
  meta: [
    { name: 'description', content: 'Ontdek de gezelligste indoor sportclub in West-Friesland. Boek vandaag nog een padelbaan of tennisbaan bij Padelclub Hem en beleef sport op topniveau.' },
    { name: 'keywords', content: 'padellen, tennissen, padelbaan boeken, tennisbaan boeken, padelbaan huren, tennisbaan huren, padellen West-Friesland, tennissen West-Friesland, Padelclub Hem, Padelclub Hem' },
    { property: 'og:url', content: 'https://www.padelclubhem.nl' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Padelclub Hem' },
    { property: 'og:description', content: 'Ontdek de gezelligste indoor sportclub in West-Friesland. Boek vandaag nog een padelbaan of tennisbaan bij Padelclub Hem en beleef sport op topniveau.' },
    { property: 'og:image', content: 'https://www.padelclubhem.nl/_nuxt/padelclubhem-logo.D4sbnd6b.png' },
    { name: 'address', content: 'Torenweg 44, 1607 CP Hem, Nederland' },
    { name: 'geo.region', content: 'NL-NH' },
    { name: 'geo.placename', content: 'Hem' },
    { property: 'business:contact_data:street_address', content: 'Torenweg 44' },
    { property: 'business:contact_data:postal_code', content: '1607 CP' },
    { property: 'business:contact_data:locality', content: 'Hem' },
    { property: 'business:contact_data:country_name', content: 'Nederland' },
    { property: 'openingHours', content: 'ma-vr 07:00 t/m 24:00 uur, za-zo 8:00 t/m 23:00 uur' }
  ]
})

// Loading state
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.page-enter-from,
.page-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.page-enter-to,
.page-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
