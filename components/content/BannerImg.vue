<template>
  <div class="mx-8 h-[100px] rounded shadow-inner shadow-black/20 banner-img-bg bg-center bg-cover saturate-80 contrast-80 sepia-10" />
</template>
<!-- <prose-img :src="src" :alt="alt" class="h-[100px] w-full rounded object-cover saturate-80 contrast-80 sepia-10" /> -->
<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
})

const url = `url('${props.src}')`
</script>
<style scoped>
.banner-img-bg {
  background-image: v-bind(url);
}
</style>
