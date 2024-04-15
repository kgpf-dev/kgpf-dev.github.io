<template>
  <div class="relative min-h-screen flex flex-col items-center">
    <AppHeader :use-dropdowns="useDropdowns" class="mb-8" />
    <div class="flex-1 m-auto">
      <slot />
    </div>
    <AppFooter class="lg:mt-16 mt-8" />
  </div>
</template>

<script lang="ts" setup>
import { useGrid } from 'vue-screen'

const grid = useGrid('tailwind')

const useDropdowns = computed(() => grid.lg)
</script>

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
