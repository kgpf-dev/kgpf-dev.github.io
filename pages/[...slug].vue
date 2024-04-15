<template>
  <div class="document-driven-page">
    <NuxtLayout :name="layout as LayoutKey || 'default'">
      <ContentRenderer
        v-if="page"
        :key="(page as any)._id"
        :value="page"
        :data="data"
      >
        <template #empty="{ value }">
          <DocumentDrivenEmpty :value="value" />
        </template>
      </ContentRenderer>
      <DocumentDrivenNotFound v-else />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig, useContent, useContentHead, useRequestEvent } from '#imports'
import type { LayoutKey } from '#build/types/layouts'

const config = useRuntimeConfig()
const { page, layout } = useContent()

const data = ref({
  phoneLabel: config.public.kgpf.phone.label,
  phoneHref: config.public.kgpf.phone.href,
})

// Page not found, set correct status code on SSR
if (!(page as any).value && import.meta.server) {
  const event = useRequestEvent()
  if (event) {
    event.node.res.statusCode = 404
  }
}

if (config.public.content.contentHead) {
  useContentHead(page)
}
</script>