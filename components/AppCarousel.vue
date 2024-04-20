<template>
  <div class="relative" :class="sizeClass">
    <UCarousel
      ref="carousel"
      v-slot="{ item }: { item: VNode }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="border-b overflow-hidden"
      indicators
      @mouseover="carouselHovering = true"
      @mouseleave="carouselHovering = false"
    >
      <div class="flex" :class="sizeClass">
        <component :is="item" class="w-full" />
      </div>
    </UCarousel>
    <UToggle
      v-model="carouselAuto"
      class="absolute right-0 bottom-0 m-3"
      :ui="{
        strategy: 'override',
        active: 'bg-gray-200/50',
        inactive: 'bg-gray-200/50',
        container: {
          base: 'pointer-events-none relative inline-block rounded-full shadow transform ring-0 transition ease-in-out duration-200',
          active: {
            '2xs': 'translate-x-2 rtl:-translate-x-2 bg-primary',
            xs: 'translate-x-2.5 rtl:-translate-x-2.5 bg-primary',
            sm: 'translate-x-3 rtl:-translate-x-3 bg-primary',
            md: 'translate-x-4 rtl:-translate-x-4 bg-primary',
            lg: 'translate-x-5 rtl:-translate-x-5 bg-primary',
            xl: 'translate-x-6 rtl:-translate-x-6 bg-primary',
            '2xl': 'translate-x-7 rtl:-translate-x-7 bg-primary',
          },
          inactive: 'translate-x-0 rtl:-translate-x-0 bg-white',
        },
      }"
      @mouseover="toggleHovering = true"
      @mouseleave="toggleHovering = false"
    />
  </div>
</template>

<script lang="ts" setup>
import { UCarousel } from '#components'

const props = defineProps<{
  interval: number
  sizeClass: string
}>()

const items: VNode[] = [
  h('img', {
    src: '/img/logo/large.svg',
    alt: 'KGPF logo',
    class: 'py-8 object-contain',
    draggable: false,
  }),
  h('img', {
    src: '/img/houses-large.jpg',
    alt: 'Houses',
    class: 'object-cover',
    draggable: false,
  }),
  h('img', {
    src: '/img/school-track.jpg',
    alt: 'School (track)',
    class: 'object-cover',
    draggable: false,
  }),
  // firetruck
  h('img', {
    src: '/img/school-interior.jpg',
    alt: 'School (interior)',
    class: 'object-cover',
    draggable: false,
  }),
  // water district
  h('img', {
    src: '/img/school-exterior.jpg',
    alt: 'School (exterior)',
    class: 'object-cover',
    draggable: false,
  }),
]

const carousel = ref<typeof UCarousel>()
const carouselHovering = ref(false)
const toggleHovering = ref(false)
const carouselAuto = ref(true)
const intervalIds = ref<NodeJS.Timeout[]>([])

const carouselAutoUpdate = () => {
  if (!(carouselHovering.value || toggleHovering.value) && carouselAuto.value) {
    intervalIds.value.push(setInterval(() => {
      if (!carousel.value) {
        return
      }
      if (carousel.value.page === carousel.value.pages) {
        return carousel.value.select(0)
      }
      carousel.value.next()
    }, props.interval))
  } else {
    while (intervalIds.value.length) {
      clearInterval(intervalIds.value.pop())
    }
  }
}

watch([carouselHovering, toggleHovering, carouselAuto], carouselAutoUpdate)
onMounted(carouselAutoUpdate)
</script>
