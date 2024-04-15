<template>
  <div class="lg:ml-1 flex items-center text-white hover:text-kgpf-yellow-500 group">
    <div class="flex lg:transition-transform lg:duration-300 lg:group-hover:-translate-x-1">
      <slot name="shifts" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
