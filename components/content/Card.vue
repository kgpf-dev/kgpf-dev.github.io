<template>
  <UCard :ui="uiDefu" class="card">
    <template v-if="$slots.header" #header>
      <!-- <ContentSlot :use="$slots.header" unwrap /> -->
      <slot name="header" />
    </template>
    <slot />
    <template v-if="$slots.footer" #footer>
      <!-- <ContentSlot :use="$slots.footer" unwrap /> -->
      <div>
        <slot name="footer" />
      </div>
      <div>
        {{ props }}
      </div>
    </template>
  </UCard>
</template>

<script lang="ts">
import { defu } from 'defu'

const DEFAULT_UI = {
  shadow: 'transition-shadow duration-300 hover:shadow-lg',
}
</script>

<script lang="ts" setup>
const props = defineProps<{
  ui?: any
}>()
const uiDefu = computed(() => defu(props.ui, DEFAULT_UI))
</script>
