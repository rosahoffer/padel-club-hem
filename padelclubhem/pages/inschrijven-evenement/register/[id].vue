<template>
    <div>
        <RegisterForm :event-id="eventId" :event-name="eventName" />
    </div>
</template>

<script setup>
import RegisterForm from '../../components/evenementen/RegisterForm.vue';

const route = useRoute();
const eventId = ref(route.params.id);
const eventName = ref('');

onMounted(async () => {
    const response = await fetch(`/api/events/${eventId.value}`);
    const event = await response.json();
    eventName.value = event.title;
});
</script>