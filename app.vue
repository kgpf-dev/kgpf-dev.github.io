<template>
  <div class="relative min-h-screen flex flex-col items-center">
    <AppHeader />
    <div class="flex-1 m-auto">
      <NuxtPage />
    </div>
    <AppFooter />
    <UNotifications />
  </div>
</template>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
