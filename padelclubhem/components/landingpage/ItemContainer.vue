<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const landingPage = ref<any>(null);
const openItems = ref<{ [key: string]: boolean }>({});

const toggleItem = (item: string) => {
    openItems.value[item] = !openItems.value[item];
};

const isOpen = (item: string) => {
    return !!openItems.value[item];
};

// Computed property to get all available items that have content
const items = computed(() => {
    if (!landingPage.value) return [];
    return Object.keys(landingPage.value.itemContainer)
        .filter((key) => key.startsWith('item')) // Filter keys that start with 'item'
        .map((key) => ({ key, ...landingPage.value.itemContainer[key] })) // Map to an array of objects
        .filter((item) => item.itemTitel || item.itemBeschrijving?.html); // Only include items with a title or description
});

onMounted(async () => {
    const slug = route.params.slug as string;
    try {
        const response = await fetch(`/api/landingpaginas`);
        if (!response.ok) throw new Error('Network response was not ok.');
        const data = await response.json();
        const item = data.find((n: any) => n.slug === slug);
        if (!item) throw new Error('landingPage item niet gevonden');
        landingPage.value = item;
    } catch (error) {
        console.error('Failed to fetch landingPage:', error);
    }
});
</script>

<template>
    <section v-if="landingPage" class="item-container">
        <div class="title-contain">
            <p>{{ landingPage.itemContainer.subtitel }}</p>
            <h3>{{ landingPage.itemContainer.titel }}</h3>
        </div>

        <div>
            <ul class="items">
                <!-- Dynamically generated items based on available data with content -->
                <li v-for="(item, index) in items" :key="item.key" class="item">
                    <div class="item-info" :class="{ 'active': isOpen(item.key) }" @click="toggleItem(item.key)"
                        :aria-controls="item.key + '-details'" tabindex="0">
                        <div class="ball">
                            <svg width="60" height="59" viewBox="0 0 60 59" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M56.6038 41.133C56.2693 41.8957 56.01 42.5243 55.7257 43.1445C52.9911 49.0868 48.5923 53.3278 42.7301 56.1691C40.8317 57.091 39.962 57.0575 39.2344 54.7861C33.6063 37.1937 21.9153 25.5856 4.4205 19.8276C2.33819 19.1404 1.65244 18.2938 2.85667 16.0477C6.00105 10.1891 10.5002 5.89787 16.3959 2.89736C18.336 1.90836 18.8796 2.3861 19.4817 4.30542C24.2819 19.7773 34.3088 30.6898 48.8181 37.5709C50.6412 38.4342 52.6315 38.9622 54.5549 39.6159C55.4246 39.9093 56.4031 40.0266 56.6038 41.1246V41.133Z"
                                    fill="#CBFD3C" />
                                <path
                                    d="M32.8217 58.8373C15.4776 60.6451 0.0255687 47.1492 0 30.3209C0 27.5218 0.656263 26.8053 3.52848 27.6134C16.8668 31.354 30.171 45.433 32.8302 58.8373H32.8217Z"
                                    fill="#CBFD3C" />
                                <path
                                    d="M27.1698 0.391121C44.5652 -1.99809 60.9011 12.4881 59.9613 29.4809C59.893 30.73 60.2945 32.2222 57.757 31.736C44.6848 29.2294 29.0836 13.3683 27.1698 0.391121Z"
                                    fill="#CBFD3C" />
                            </svg>
                        </div>
                        <div class="title-svg-flex">
                            <p class="subtitle-medium">{{ item.itemTitel }}</p>
                            <svg class="item-arrow" width="16" height="22" viewBox="0 0 16 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M15.5386 14.6683L8.85843 21.3485C8.4485 21.7584 7.78387 21.7584 7.37394 21.3485L0.693755 14.6683C0.283826 14.2584 0.283826 13.5937 0.693755 13.1838C1.10369 12.7739 1.76831 12.7739 2.17824 13.1838L7.0665 18.0721L7.0665 1.7118C7.0665 1.13207 7.53646 0.662109 8.11619 0.662109C8.69592 0.662109 9.16588 1.13207 9.16588 1.7118L9.16588 18.0721L14.0541 13.1838C14.4641 12.7739 15.1287 12.7739 15.5386 13.1838C15.9486 13.5937 15.9486 14.2584 15.5386 14.6683Z"
                                    fill="#CBFD3C" />
                            </svg>
                        </div>
                    </div>
                    <transition name="fade">
                        <div v-if="isOpen(item.key)" :id="item.key + '-description'" class="item-description">
                            <div class="description" v-html="item.itemBeschrijving.html"></div>
                        </div>
                    </transition>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>

/* item container  */

.item-container {
    padding: 5rem 1.5rem;
}

.title-contain {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    background-color: var(--background-color);
    padding-bottom: 3rem;
}

.title-contain h3 {
    color: var(--secondary-color);
}

.items {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    border-top: 2px solid var(--secondary-color);
}

.item {
    border-bottom: 2px solid var(--secondary-color);
}

.item-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 1rem 0;
    transition: background-color 0.3s ease;
}

.ball svg {
    width: 1rem;
    height: 1rem;
}

.title-svg-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
}

.item-info.active .item-arrow {
    transform: rotate(180deg);
}

.item-info.active path {
    fill: var(--secondary-color);
}

.item-arrow {
    transition: transform 0.3s ease, fill 0.3s ease;
}

.subtitle-bold-uppercase {
    color: var(--primary-color);
}

.subtitle-medium {
    display: flex;
    justify-content: left;
}

.item-description {
    font-size: 0.8rem;
    line-height: 1.5rem;
    color: var(--secondary-color);
    padding-bottom: 1.5rem
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

@media (min-width: 40rem) {

}

@media (min-width: 60rem) {

    .items {
        max-width: 80rem;
        margin: 0 auto;
        margin-top: 5rem;
    }

    .item-info {
        padding: 1.5rem 0
    }

    .ball svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    .title-svg-flex {
        width: 60rem;
    }

    .item-details {
        display: flex;
        max-width: 50rem;
    }

}

@media (min-width: 80rem) {
}

@media (min-width: 120rem) {

}
</style>
