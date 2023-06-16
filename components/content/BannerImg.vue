<template>
  <div class="mx-8 h-[100px] flex rounded shadow-inner shadow-black/20">
    <prose-img :src="src" :alt="alt" class="-z-1 flex-1 rounded object-cover saturate-80 contrast-80 sepia-10" />
  </div>
</template>
<!-- <div class="mx-8 h-[100px] rounded shadow-inner shadow-black/20 banner-img-bg bg-center bg-cover saturate-80 contrast-80 sepia-10" /> -->
<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
})
</script>
