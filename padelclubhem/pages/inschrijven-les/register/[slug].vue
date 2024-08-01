<template>
    <div>
        <RegisterForm :les-slug="lesSlug" :les-name="lesName" />
    </div>
</template>

<script setup>
import RegisterForm from '@/components/lessen/RegisterForm.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const lesSlug = ref(route.params.slug);
const lesName = ref('');

onMounted(async () => {
    try {
        const response = await fetch(`/api/lessen/${lesSlug.value}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.titel) {
            lesName.value = data.titel;
        } else {
            throw new Error('les data is missing title.');
        }

    } catch (error) {
        console.error('Error fetching les data:', error);
    }
});
</script>
