<template>
  <prose-h3>
    <n-text depth="3" class="flex items-center gap-0.5">
      <span class="text-2xl">“</span>
      <content-slot :use="$slots.default" unwrap="p" />
      <span class="text-2xl">”</span>
    </n-text>
  </prose-h3>
</template>
