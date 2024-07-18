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

@media (min-width: 60rem) {

    .slider {
        padding: 7rem 0;
    }

    .text-icon {
        gap: 2rem;
        margin-right: 2rem;
    }

    h2 {
        font-size: 3.5rem;
    }

}

@media (min-width: 80rem) {

.slider {
    padding: 8rem 0;
}

}
</style>