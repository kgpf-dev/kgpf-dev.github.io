<template>
  <ULink :to="to" class="flex items-center gap-1.5">
    <UIcon v-if="icon" :name="icon" />
    <span>{{ label }}</span>
  </ULink>
</template>

<script lang="ts" setup>
defineProps<{
  label: string
  to: string
  icon?: string
}>()
</script>
