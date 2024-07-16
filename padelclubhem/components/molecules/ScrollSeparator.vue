<script setup></script>

<template>
    <div class="scroll-down-separator">
        <div class="circle">
            <AtomsScrollDown />
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