<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: rotateY(-90deg) scale(0.5);
}
</style>
