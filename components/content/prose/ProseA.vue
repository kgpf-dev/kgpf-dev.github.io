<template>
  <nuxt-link :href="href" :target="target" #="{ navigate, href }" custom>
    <n-a v-bind="$attrs" :href="href" @click="navigate">
      <slot>
        {{ href }}
      </slot>
    </n-a>
  </nuxt-link>
</template>
<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})
</script>
