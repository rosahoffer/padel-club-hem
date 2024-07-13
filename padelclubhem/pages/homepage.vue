<script setup>
import ScrollSeparator from '~/components/molecules/ScrollSeparator.vue';
</script>

<template>
    <main>
        <section>
            <div class="intro-container">
                <h1>Welkom bij Padel Club Hem</h1>
                <p>Indoor sport voor iedere doelgroep op de gezelligste club in West-Friesland!</p>
                <div class="scroll-separator">
                    <ScrollSeparator />
                </div>
            </div>
        </section>
        <section>
            <!-- Je volgende sectie content hier -->
        </section>
    </main>
</template>

<style scoped>
:root {
    /* COLORS */
    --primary-color: #cbfd3c;
    --secondary-color: #ffeae3;
    --tertiary-color: #414141;
    --background-color: #262626;
    --navbar-bg-color: #4b4b4b;

    /* RADIUS  */
    --border-radius: 25px;
    --hook-radius: 5px;
}

section {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.intro-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 3rem;
}

.scroll-separator {
    position: absolute;
    bottom: 0;
    width: 100%;
}

</style>
