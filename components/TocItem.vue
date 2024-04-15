<template>
  <li>
    <ULink :to="`#${link.id}`">
      {{ link.text }}
    </ULink>
    <ul v-if="link.children?.length">
      <TocItem v-for="child in link.children" :key="child.text" :link="child" />
    </ul>
  </li>
</template>

<script lang="ts" setup>
import type { TocLink } from '@nuxt/content/types'

defineProps<{ link: TocLink }>()
</script>
