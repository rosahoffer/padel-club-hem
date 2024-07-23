<template>
    <div class="contain">
        <div class="flex">
            <AtomsMainLogo />
            <MoleculesFooterLinks />
        </div>
        <div class="flex-two">
            <MoleculesSocialMediaIcons />
            <MoleculesCopyright />
        </div>
    </div>
</template>

<style scoped>
.contain {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 4rem 1.5rem 1.5rem 1.5rem;
}

.flex-two {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

@media (min-width: 60rem) {

    .contain {
        padding: 4rem 3rem 2rem 3rem;
    }

    .flex {
        display: flex;
        align-items: center;
        gap: 4rem;
    }

    .flex-two {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: flex-end;
    }
}

@media (min-width: 80rem) {

    .flex {
        display: flex;
        align-items: center;
        gap: 8rem;
    }
}

@media (min-width: 120rem) {

    .contain {
        padding-left: 10rem;
        padding-right: 10rem;
    }

}
</style>