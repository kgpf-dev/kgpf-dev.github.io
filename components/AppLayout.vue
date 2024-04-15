<template>
  <div class="relative min-h-screen flex flex-col items-center">
    <AppHeader class="mb-8" />
    <div class="flex-1 m-auto">
      <slot />
    </div>
    <AppFooter class="lg:mt-16 mt-8" />
  </div>
</template>

<style lang="postcss">
html {
  /* font-family: Georgia, 'Times New Roman', Times, serif; */
  font-size: 14pt;
  @apply scroll-smooth;
  @apply text-gray-700;
  @apply font-serif;
}

html:is(.dark) {
  @apply text-gray-400;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
