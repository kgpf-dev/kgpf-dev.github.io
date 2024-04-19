<template>
  <NuxtLayout>
    <div>Foo</div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({ documentDriven: false })
useHead({ title: 'Todo' })
// useHeadMeta().value = { title: 'Todo Things' }
</script>
