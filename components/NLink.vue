<template>
  <nuxt-link :to="to" #="{ navigate, href }" custom>
    <n-a v-bind="$attrs" :href="href" @click="navigate">
      <slot>
        {{ to }}
      </slot>
    </n-a>
  </nuxt-link>
</template>
<script lang="ts" setup>
/** Nuxt link and Naive UI anchor wrapper.
 *
 * https://nuxt.com/docs/api/components/nuxt-link#props
 * https://www.naiveui.com/en-US/os/components/typography#router-link.vue
 * */
interface Props { to?: string }

defineProps<Props>()
</script>
