<template>
  <UContainer class="mt-6 mb-12">
    <main class="prose prose-sm sm:prose-base">
      <template v-if="showTitle || prevInfo || nextInfo || showToc">
        <h1 v-if="showTitle" class="not-prose mb-4 text-2xl text-kgpf-blue-800">
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
        <div v-if="page?.banner" class="w-full h-[2in] my-8 flex justify-center rounded shadow overflow-hidden">
          <img
            :src="page.banner.src"
            :alt="page.banner.alt"
            :class="page.banner.class"
            class="w-full object-cover"
          >
        </div>
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
// const headMeta = useHeadMeta()
const { page, prev, next, toc } = useContent() as { [key: string]: Ref }

// const showTitle = computed(() => !!(headMeta.value.title && !page.value?.noTitle))
const showTitle = computed(() => !!(page.value?.title && !page.value?.noTitle))

const prevInfo = computed(() => navInfo(page, prev))
const nextInfo = computed(() => navInfo(page, next))
const showToc = computed(() => !!(page.value?.toc && toc.value?.links?.length))
</script>
