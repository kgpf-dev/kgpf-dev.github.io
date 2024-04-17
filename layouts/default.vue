<template>
  <UContainer>
    <main class="mt-6 lg:mb-12 mb-6 prose prose-sm sm:prose-base">
      <template v-if="showTitle || prevInfo || nextInfo || showToc">
        <h1 v-if="showTitle" class="not-prose mt-6 mb-4 text-2xl text-kgpf-blue-800">
          {{ page.title }}
        </h1>
        <PrevNext v-if="prevInfo || nextInfo" :prev="prevInfo" :next="nextInfo" class="not-prose text-lg" />
        <div v-if="showToc" id="toc" class="prose-ul:my-0 prose-li:my-0">
          <h2 class="not-prose mb-4 text-lg">
            Table of Contents
          </h2>
          <ul>
            <TocItem v-for="link in toc.links" :key="link.text" :link="link" />
          </ul>
        </div>
        <img
          v-if="page.banner"
          :src="page.banner.src"
          :alt="page.banner.alt"
          class="w-full h-[2in] object-cover rounded shadow"
          :class="page.banner.class"
        >
        <hr v-else class="not-prose mt-6 mb-12">
      </template>
      <slot />
    </main>
  </UContainer>
</template>

<script lang="ts">
const splitPath = (path: string): [string, string] => {
  const i = path.lastIndexOf('/') + 1
  const parent = path.substring(0, i)
  const name = path.substring(i, path.length)
  return [parent, name]
}

const neighborly = (lhs: string, rhs: string): boolean => (splitPath(lhs)[0] === splitPath(rhs)[0])

const isOrdered = (path: string): boolean => /^\d+\./.test(splitPath(path)[1])

type NavInfo = {
  path: string
  title: string
}

const navInfo = (page: Ref<any>, nav: Ref<any>): NavInfo | undefined => {
  if (page.value && isOrdered(page.value._file) && nav.value) {
    if (neighborly(page.value._path, nav.value._path)) {
      return {
        path: nav.value._path,
        title: nav.value.title,
      }
    }
  }
}
</script>

<script lang="ts" setup>
const { page, prev, next, toc } = useContent() as { [key: string]: Ref }

const showTitle = computed(() => !!(page.value?.title && !page.value.noTitle))
const prevInfo = computed(() => navInfo(page, prev))
const nextInfo = computed(() => navInfo(page, next))
const showToc = computed(() => !!(page.value?.toc && toc.value?.links?.length))
</script>

<style lang="postcss">
#toc {
}
</style>
