<template>
  <n-el>
    <content-slot :use="$slots.default" unwrap="p" />
    <!-- <slot /> -->
  </n-el>
</template>
