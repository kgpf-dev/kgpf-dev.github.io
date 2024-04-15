<template>
  <div class="flex justify-between gap-8 text-sm">
    <div>
      <ULink v-if="prev" :to="prev.path" class="flex items-center gap-2 text-left">
        <UIcon name="i-heroicons-arrow-left" />
        <span>{{ prev.title }}</span>
      </ULink>
    </div>
    <div>
      <ULink v-if="next" :to="next.path" class="flex items-center gap-2 text-right">
        <span>{{ next.title }}</span>
        <UIcon name="i-heroicons-arrow-right" />
      </ULink>
    </div>
  </div>
</template>

<script lang="ts">
type Info = {
  path: string
  title: string
}
</script>

<script lang="ts" setup>
defineProps<{
  prev?: Info
  next?: Info
}>()
</script>
