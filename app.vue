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

<script lang="ts" setup>
const { seo } = useRuntimeConfig().public

useSeoMeta({
  description: 'Foo',
  ogTitle: seo.title,
})
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
})
</script>

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
