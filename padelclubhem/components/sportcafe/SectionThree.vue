<template>
    <section class="image-carousel" id="sfeerimpressie" aria-label="Sfeerimpressie Sportcafe">
        <div class="image-list">
            <div class="image-item" id="image-1">
                <img class="image-list-img" src="assets/images/sportcafe-impressie-binnen.png"
                    alt="Sfeerimpressie Sportcafe Binnen" loading="lazy">
            </div>
            <div class="image-item" id="image-2">
                <img class="image-list-img" src="assets/images/sportcafe-impressie-terras.png"
                    alt="Sfeerimpressie Sportcafe Terras" loading="lazy">
            </div>
            <div class="image-item" id="image-3">
                <img class="image-list-img" src="assets/images/sportcafe-impressie-binnen-2.png"
                    alt="Sfeerimpressie Sportcafe Binnen" loading="lazy">
            </div>
        </div>
    </section>
</template>

<style scoped>
.image-carousel {
    padding: 3rem 0;
    background-color: var(--primary-color);
}

.image-list {
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    grid-row-start: 2;
}

.image-item {
    display: flex;
    min-width: 80vw;
    margin-right: 0.5rem;
}

.image-item:last-child {
    margin-right: 0;
}

.image-list-img {
    object-fit: cover;
    transition: 0.3s ease all;
    margin: 0;
    width: 100%;
    height: 15rem;
}

@media (min-width: 60rem) {
    .image-carousel {
        padding: 5rem 0;
    }

    .image-item {
        margin-right: 1rem;
    }

    .image-list-img {
        object-fit: cover;
        transition: 0.3s ease all;
        margin: 0;
        width: 100%;
        height: 30rem;
    }
}
</style>