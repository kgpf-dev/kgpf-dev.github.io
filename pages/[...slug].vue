<template>
  <div class="document-driven-page">
    <NuxtLayout :name="page?.layout as LayoutKey || 'default'">
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

const { page } = useContent()
const config = useRuntimeConfig()
const site = config.public.site

useSeoMeta({
  // ogTitle: 'Foo',
  // ogTitle: site.name,
  // ogImage: site.image,
  twitterImage: site.image,
})

defineOgImageComponent('NuxtSeo', {
  title: site.name,
  description: page.value?.title,
  icon: 'i-heroicons-building-library',
  theme: '#3e4f82',
  siteName: site.url,
})

// Bound data accessible within content.
const pageData = ref({
  phoneLabel: config.public.kgpf.phone.label,
  phoneHref: config.public.kgpf.phone.href,
  phoneTollFreeLabel: config.public.kgpf.phoneTollFree.label,
  phoneTollFreeHref: config.public.kgpf.phoneTollFree.href,
  faxLabel: config.public.kgpf.fax.label,
  faxHref: config.public.kgpf.fax.href,
})

// Page not found, set correct status code on SSR.
if (!page.value && import.meta.server) {
  const event = useRequestEvent()
  if (event) {
    event.node.res.statusCode = 404
  }
} else if (config.public.content.contentHead) {
  useContentHead(page.value!)
}
</script>
