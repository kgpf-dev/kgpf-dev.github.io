<template>
  <div class="h-[4in] flex flex-col items-center justify-center">
    <p class="m-0 text-primary font-sans font-semibold">
      404
    </p>
    <h1 class="m-0 text-3xl">
      Error
    </h1>
    <p class="mt-6">
      Page not found: {{ path }}
    </p>
  </div>
</template>

<script lang="ts" setup>
useHead({ title: '404 Not found' })

const { path } = useRoute()
</script>
