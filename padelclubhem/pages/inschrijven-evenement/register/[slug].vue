<template>
    <div>
        <RegisterForm :event-slug="eventSlug" :event-name="eventName" />
    </div>
</template>

<script setup>
import RegisterForm from '../../components/evenementen/RegisterForm.vue';
import { ref, onMounted } from 'vue';

const route = useRoute();
const eventSlug = ref(route.params.slug);
const eventName = ref('');

onMounted(async () => {
    try {
        const response = await fetch(`/api/events/${eventSlug.value}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.title) {
            eventName.value = data.title;
        } else {
            throw new Error('Event data is missing title.');
        }

    } catch (error) {
    }
});
</script>