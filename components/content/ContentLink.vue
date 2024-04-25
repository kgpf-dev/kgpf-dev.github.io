<template>
  <ULink :to="to">
    {{ label }}
  </ULink>
</template>

<script lang="ts" setup>
defineProps<{
  to: string
  label: string
}>()
</script>
