<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const landingPage = ref<any>(null);

// SEO Meta instellingen
const setSeoMeta = () => {
  useSeoMeta({
    title: landingPage.value?.metaTitle || 'Padelclub Hem - Boek een Padel- of Tennisbaan in West-Friesland',
    meta: [
      {
        name: 'description',
        content: landingPage.value?.metaDescription || 'Ontdek de gezelligste indoor sportclub in West-Friesland. Boek vandaag nog een padelbaan of tennisbaan bij Padelclub Hem en beleef sport op topniveau.',
      },
      {
        name: 'keywords',
        content: 'padellen, tennissen, pingpong padel, shuffleboard, padelbaan boeken, tennisbaan boeken, pingpong padel boeken, padelbaan huren, tennisbaan huren, padellen West-Friesland, tennissen West-Friesland, Padelclub Hem',
      },
    ],
  });
};

onMounted(async () => {
  const slug = route.params.slug as string;
  try {
    const response = await fetch(`/api/landingpaginas`);
    if (!response.ok) throw new Error('Network response was not ok.');
    const data = await response.json();
    const item = data.find((n: any) => n.slug === slug);
    if (!item) throw new Error('landingPage item niet gevonden');
    landingPage.value = item;

    // Stel SEO-meta gegevens in na het ophalen van data
    setSeoMeta();
  } catch (error) {
    console.error('Failed to fetch landingPage:', error);
  }
});

// Reageer op veranderingen in de landingPage-data
watch(landingPage, () => {
  if (landingPage.value) {
    setSeoMeta();
  }
});
</script>

<template>
  <HeaderMainHeader />
    <!-- Intro Container -->
    <LandingpageIntroContainer />

    <!-- Text Container -->
    <LandingpageTextContainer />

    <!-- Item Container -->
    <LandingpageItemContainer />

    <!-- Afbeelding Container -->
    <LandingpageAfbeeldingContainer />

    <!-- CTA Container -->
    <LandingpageCtaContainer />
    <FooterMainHeader />
</template>
