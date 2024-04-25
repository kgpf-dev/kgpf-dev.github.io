<template>
  <div id="footer" class="w-full lg:px-16 px-4 lg:py-2 py-4 border-t text-sm bg-gray-100 text-gray-500 font-serif bg-[url('~/assets/svg/footer.svg')] bg-clip-padding">
    <div class="lg:grid lg:grid-cols-[auto_1fr_auto] flex flex-col gap-4 items-center">
      <a :href="office.mapsUrl" target="_blank" class="flex flex-col lg:items-center items-start">
        <div class="flex items-center gap-1">
          <span>{{ office.address }}</span>
          <UIcon name="i-heroicons-arrow-top-right-on-square" />
        </div>
        <div>{{ office.cityStateZip }}</div>
      </a>
      <div class="flex flex-col items-center">
        <span>Copyright © {{ copyrightYear }}</span>
        <span>Koppel & Gruber Public Finance</span>
        <span>All Rights Reserved</span>
      </div>
      <div class="flex flex-col lg:items-end items-center">
        <span>Phone: <a :href="phone.href">{{ phone.label }}</a></span>
        <span>Fax: <a :href="fax.href">{{ fax.label }}</a></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { public: { kgpf: { copyrightYear, phone, fax, office } } } = useRuntimeConfig()
</script>
