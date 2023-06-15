<template>
  <div
    :class="{
      // 'grid-cols-[repeat(2,1fr)]',
      // 'xl:grid-cols-[repeat(3,1fr)]',
      // 'grid-cols-[minmax(0,1fr)_1fr]',
      'lg:(grid grid-cols-[minmax(0,1fr)_1fr_minmax(0,1fr)])': links,
      'grid-cols-[repeat(2,auto)]': links,
      'gap-4': links,
    }"
  >
    <template v-if="links">
      <div v-if="links">
        <div class="lg:max-h-[95vh] sticky top-[2.5vh] overflow-scroll">
          <div
            :class="[
              'flex',
              'flex-col',
              'overflow-scroll',
              'lg:max-w-[280px]',
            ]"
          >
            <n-h2 class="font-georgia border-b">
              Table of contents
            </n-h2>
            <n-anchor :show-rail="false" :show-background="false">
              <n-anchor-link
                v-for="link in links"
                :key="link.id"
                :title="link.text"
                :href="`#${link.id}`"
              >
                <n-anchor-link
                  v-for="child in link.children"
                  :key="child.id"
                  :title="child.text"
                  :href="`#${child.id}`"
                />
              </n-anchor-link>
            </n-anchor>
          </div>
        </div>
      </div>
      <n-divider class="!lg:hidden" />
    </template>
    <div
      id="article"
      :class="[
        'font-georgia',
        'max-w-prose',
        'lg:w-prose',
      ]"
    >
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
const { page, toc } = useContent()

const links = computed(() => {
  const extra = page.value.extra
  const links = toc.value.links
  if (Array.isArray(links)) {
    if (extra === 'toc' || (Array.isArray(extra) && extra.includes('toc'))) {
      return links
    }
  }
})

const hueRotateDeg = inject('hueRotateDeg')
</script>
<style>
:root {
  --hue-rotate: v-bind(hueRotateDeg);
}
</style>
