<template>
    <div>
        <RegisterForm :evenement-slug="evenementSlug" :evenement-name="evenementName" />
    </div>
</template>

<script setup>
import RegisterForm from '@/components/evenementen/RegisterForm.vue';
import { ref, onMounted } from 'vue';

const route = useRoute();
const evenementSlug = ref(route.params.slug);
const evenementName = ref('');

onMounted(async () => {
    try {
        const response = await fetch(`/api/evenementen/${evenementSlug.value}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.titel) {
            evenementName.value = data.titel;
        } else {
            throw new Error('Event data is missing title.');
        }

    } catch (error) {
    }
});
</script>