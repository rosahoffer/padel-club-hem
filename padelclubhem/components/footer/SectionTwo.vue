<template>
    <NuxtMarquee>
        <div class="slider">
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
        </div>
    </NuxtMarquee>
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

@media (min-width: 60rem) {

    .slider {
        padding: 5rem 0;
    }

    h2 {
        font-size: 5rem;
    }
}

@media (min-width: 80rem) {

.slider {
    padding: 7rem 0;
}

h2 {
    font-size: 6rem;
}
}
</style>