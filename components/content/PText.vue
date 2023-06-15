<template>
  <n-text :depth="depth">
    <content-slot :use="$slots.default" unwrap="p" />
  </n-text>
</template>
<script lang="ts" setup>
defineProps<{
  depth?: 1 | 2 | 3 | '1' | '2' | '3'
}>()
</script>
