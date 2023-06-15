<template>
  <n-collapse-item :title="title">
    <template #header>
      <slot name="header" />
    </template>
    <slot />
  </n-collapse-item>
</template>
<script lang="ts" setup>
defineProps<{ title?: string }>()
</script>
<style>
.n-collapse-item__header-main * {
  margin: 0;
}
</style>
