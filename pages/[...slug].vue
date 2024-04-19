<template>
  <div class="document-driven-page">
    <NuxtLayout :name="page!.layout as LayoutKey || 'default'">
      <ContentRenderer
        v-if="page"
        :key="(page as any)._id"
        :value="page"
        :data="pageData"
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
import type { LayoutKey } from '#build/types/layouts'

// const headMeta = useHeadMeta()
const config = useRuntimeConfig()
const { page } = useContent()

// Bound data accessible within content.
const pageData = ref({
  phoneLabel: config.public.kgpf.phone.label,
  phoneHref: config.public.kgpf.phone.href,
})

// Page not found, set correct status code on SSR.
if (!page.value && import.meta.server) {
  const event = useRequestEvent()
  if (event) {
    event.node.res.statusCode = 404
  }
} else if (config.public.content.contentHead) {
  useContentHead(page.value!)
  // headMeta.value = {
  //   title: page.value!.title,
  // }
}
</script>
