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

// Loading state
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
});
</script>
