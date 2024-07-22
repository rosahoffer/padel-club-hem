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
    /* Zorg ervoor dat je een achtergrondkleur definieert */
    z-index: 9999;
}

.tennis-ball-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: init 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards,
        moveDown 1s 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards,
        moveUp 1s 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.tennis-ball {
    position: absolute;
    animation: spin 1.5s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes init {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes moveDown {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(300px);
    }
}

@keyframes moveUp {
    0% {
        transform: translateY(300px);
    }

    100% {
        transform: translateY(0);
    }
}

@media (max-width: 600px) {
    .tennis-ball-wrapper {
        /* Pas hier de waarden aan voor kleinere schermen */
        animation: init 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards,
                   moveDown 1s 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards,
                   moveUp 1s 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    .tennis-ball {
        animation: spin 1s linear infinite; /* Versnel de rotatie op kleinere schermen */
    }
}
</style>