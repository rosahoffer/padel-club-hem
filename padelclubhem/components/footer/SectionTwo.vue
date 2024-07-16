<template>
    <div class="slider">
        <NuxtMarquee>
            <div class="text">
                <h2>Join the club</h2>
            </div>
            <div class="text">
                <h2>Join the club</h2>
            </div>
            <div class="text">
                <h2>Join the club</h2>
            </div>
            <div class="text">
                <h2>Join the club</h2>
            </div>
            <div class="text">
                <h2>Join the club</h2>
            </div>
        </NuxtMarquee>
    </div>
</template>

<style scoped>
.slider {
    display: flex;
    gap: 1rem;
    padding: 3rem 0;
    background-color: var(--primary-color);
    border-top: 20px solid var(--secondary-color);
}

.text {
    margin-right: 1rem;
}

h2 {
    color: var(--background-color);
}
</style>