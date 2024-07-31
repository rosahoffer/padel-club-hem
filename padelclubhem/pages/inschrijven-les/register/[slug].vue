<template>
    <div>
        <RegisterForm :les-slug="lesSlug" :les-name="lesName" />
    </div>
</template>

<script setup>
import RegisterForm from '../../components/lessen/RegisterForm.vue';
import { ref, onMounted } from 'vue';

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

        if (data && data.title) {
            lesName.value = data.title;
        } else {
            throw new Error('les data is missing title.');
        }

    } catch (error) {
    }
});
</script>