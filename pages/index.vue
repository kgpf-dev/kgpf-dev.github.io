<template>
  <main class="lg:px-0 px-4 lg:mb-12 mb-6 flex flex-col items-center lg:gap-6 gap-3">
    <AppCarousel :interval="5000" size-class="w-full h-[3.5in]" class="lg:block hidden" />
    <img class="lg:hidden w-full mt-6 mb-3 max-w-screen-sm" src="/img/logo/large.svg" alt="KGPF logo">
    <!-- Koppel & Gruber Public Finance has specialized in financial consulting to public agencies in California since 2004. -->
    <div class="max-w-screen-lg flex flex-col items-center gap-3">
      <UDivider class="lg:hidden" />
      <h2 class="text-xl sm:text-2xl text-center small-caps">
        Servicing California since 2004
      </h2>
      <UDivider :icon="DIVIDER_ICON" />
      <div class="contents sm:text-lg text-justify">
        <p>
          Privately held by its two founding partners <span class="whitespace-nowrap">Scott Koppel</span> and <span class="whitespace-nowrap">Lyn Gruber</span>,
          our greatest concern is the satisfaction of our clients and their constituents, not shareholders.
        </p>
        <p>
          As advocates for public agencies, we strongly value the unique cuture and practices of each individual client,
          striving to seamlessly integrate ourselves as a valuable addition to your staff and effectively bring your public finance goals to fruition.
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
const DIVIDER_ICON = 'i-heroicons-building-library'
</script>

<script lang="ts" setup>
definePageMeta({ documentDriven: false })
useHead({ title: 'K&G Public Finance' })
</script>
