<script setup></script>

<template>
    <NuxtMarquee>
        <div class="slider">
            <div class="text-icon">
                <AtomsBall />
                <h2>Kom in beweging</h2>
            </div>
            <div class="text-icon">
                <AtomsBall />
                <h2>Kom in beweging</h2>
            </div>
            <div class="text-icon">
                <AtomsBall />
                <h2>Kom in beweging</h2>
            </div>
            <div class="text-icon">
                <AtomsBall />
                <h2>Kom in beweging</h2>
            </div>
            <div class="text-icon">
                <AtomsBall />
                <h2>Kom in beweging</h2>
            </div>
        </div>
    </NuxtMarquee>
</template>

<style scoped>
.slider {
    display: flex;
    padding: 5rem 0;
}

.text-icon {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-wrap: nowrap;
    margin-right: 1rem;
}

h2 {
    font-size: 2rem;
    color: var(--secondary-color);
}
</style>