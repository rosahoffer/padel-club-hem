<script setup>
import ScrollDown from '~/components/atoms/ScrollDown.vue';
</script>

<template>
    <div class="scroll-down-separator">
        <div class="circle">
            <ScrollDown />
        </div>
    </div>
</template>

<style scoped>

.scroll-down-separator {
    width: 100%;
    height: 1rem;
    background-color: var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0 5rem 0;
}

.circle {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);
    width: 130px;
    height: 130px;
    border-radius: 50%;
}

</style>