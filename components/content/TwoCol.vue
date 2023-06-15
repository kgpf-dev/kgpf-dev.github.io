<template>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <slot />
    </div>
    <div>
      <slot name="break" />
    </div>
  </div>
</template>
