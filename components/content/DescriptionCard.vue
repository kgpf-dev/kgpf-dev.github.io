<template>
  <n-card
    class="my-4"
    :hoverable="hoverable"
    :embedded="embedded"
  >
    <template #header>
      <div>
        <content-slot :use="$slots.header" unwrap="p" />
      </div>
      <div v-if="$slots.extra" class="text-sm">
        <content-slot :use="$slots.extra" unwrap="p" />
      </div>
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
