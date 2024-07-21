<template>
    <div class="loader">
        <div class="tennis-ball-wrapper">
            <div class="tennis-ball">
                <AtomsBall />
            </div>
        </div>
    </div>
</template>

<style scoped>
.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--background-color);
    z-index: 9999;
}

.tennis-ball-wrapper {
    position: relative;
    animation: bounce 2s infinite;
}

.tennis-ball {
    animation: spin 1s infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-150px);
    }

    60% {
        transform: translateY(-75px);
    }
}
</style>