<template>
    <div>
        <AtomsBallPink class="ball" />
        <AtomsBallPink class="ball" />
        <AtomsBallPink class="ball" />
        <AtomsBallPink class="ball" />
        <AtomsBallPink class="ball" />
        <AtomsBallPink class="ball" />
        <AtomsBallPink class="ball" />
        <AtomsBallPink class="ball" />
        <AtomsBallPink class="ball" />
        <AtomsBallPink class="ball" />
    </div>
</template>

<style scoped>
div {
    display: flex;
    gap: 1rem;
    padding: 1rem 0 4rem 0;
}

.ball {
    animation: spin 10s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
