<template>
  <main class="lg:w-prose lg:px-0 px-3">
    <template v-if="showTitle">
      <div>
        <h1 class="m-0">
          {{ page.title }}
        </h1>
        <PrevNext
          v-if="showPrevNext && (prevInfo || nextInfo)"
          :prev="prevInfo"
          :next="nextInfo"
          class="mt-3"
        />
      </div>
      <hr>
    </template>
    <PrevNext v-else-if="showPrevNext" :prev="prevInfo" :next="nextInfo" />
    <template v-if="toc && page?.toc && toc.links?.length">
      <div class="flex sm:justify-center">
        <UCard :ui="{ base: 'sm:w-auto w-full' }">
          <template #header>
            Table of contents
          </template>
          <ul>
            <TocItem v-for="link in toc.links" :key="link.text" :link="link" />
          </ul>
        </UCard>
      </div>
      <hr>
    </template>
    <slot />
  </main>
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
</script>

<script lang="ts" setup>
const { page, prev, next, toc } = useContent() as { [key: string]: Ref }

const showTitle = computed(() => !!page.value?.title && !page.value.noTitle)
const showPrevNext = computed(() => !!page.value && isOrdered(page.value._file))
const showPrev = computed(() => !!prev.value && neighborly(page.value._path, prev.value._path))
const showNext = computed(() => !!next.value && neighborly(page.value._path, next.value._path))

const prevInfo = computed(() => {
  if (showPrev.value) {
    return { path: prev.value._path, title: prev.value.title }
  }
})

const nextInfo = computed(() => {
  if (showNext.value) {
    return { path: next.value._path, title: next.value.title }
  }
})
</script>

<style lang="postcss">
main h1 {
  @apply text-2xl;
  @apply text-kgpf-blue-800;
}

main h2 { @apply text-xl }
main h3 { @apply text-lg }

main h1,
main h2,
main h3,
main h4,
main h5,
main h6 {
  @apply my-6;
}

main h1 a,
main h2 a,
main h3 a,
main h4 a,
main h5 a,
main h6 a {
  color: initial;
}

main hr {
  @apply my-6;
}

main p {
  @apply my-4;
}

main ul {
  @apply pl-6;
  @apply list-disc;
  /* @apply list-inside; */
}

main li {
  @apply my-2;
}

main li ul,
main li ol {
  @apply mt-2;
}

main img {
  @apply rounded;
  @apply shadow;
}

main .card {
  @apply my-4;
}

main div > *:first-child:not(img,ul,ol) {
  @apply mt-0;
  /* @apply text-blue-500; */
}

main div > *:last-child:not(img,ul,ol) {
  @apply mb-0;
  /* @apply bg-red-100; */
}

.question {
  @apply pl-2;
  @apply border-l-4;
  @apply italic;
  @apply border-gray-400;
  @apply text-gray-500;
}
</style>
