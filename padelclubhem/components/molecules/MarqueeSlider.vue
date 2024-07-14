<script setup>
import Ball from '~/components/atoms/Ball.vue';
</script>

<template>
    <NuxtMarquee>
        <div class="slider">
            <div class="text-icon">
                <Ball />
                <h2>Kom in beweging</h2>
            </div>
            <div class="text-icon">
                <Ball />
                <h2>Kom in beweging</h2>
            </div>
            <div class="text-icon">
                <Ball />
                <h2>Kom in beweging</h2>
            </div>
        </div>
    </NuxtMarquee>
</template>

<style scoped>
.slider {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
}

.text-icon {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-wrap: nowrap;
}

h2 {
    font-size: 2rem;
    color: var(--secondary-color);
}
</style>