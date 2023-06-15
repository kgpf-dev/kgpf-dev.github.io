<template>
  <n-card
    class="my-4"
    :hoverable="hoverable"
    :embedded="embedded"
  >
    <template #header>
      <content-slot :use="$slots.header" unwrap="p" />
    </template>
    <slot />
  </n-card>
</template>
<script lang="ts" setup>
defineProps<{
  hoverable?: boolean
  embedded?: boolean
}>()
</script>
