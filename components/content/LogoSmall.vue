<template>
  <div
    class="w-[100px] relative flex justify-center items-center font-georgia text-4xl group"
    @mouseover="hovering = true"
    @mouseleave="hovering = false"
  >
    <transition-group name="logo">
      <n-el
        key="K"
        tag="div"
        :class="[
          'text-kgpf-yellow',
          'transition-all',
          'duration-350',
          // 'group-hover:opacity-70',
        ]"
      >
        K
      </n-el>
      <n-el v-if="hovering" key="&" class="left-0 text-3xl text-stone-400">
        &
      </n-el>
      <n-el
        key="G"
        tag="div"
        :class="[
          'text-kgpf-yellow',
          'transition-all',
          'duration-350',
          // 'group-hover:opacity-70',
        ]"
      >
        G
      </n-el>
      <n-el
        key="PF"
        tag="div"
        :class="[
          'text-white',
          'transition-all',
          'duration-350',
          // 'group-hover:opacity-70',
          // 'group-hover:translate-x-2',
          'group-hover:ml-2',
        ]"
      >
        PF
      </n-el>
    </transition-group>
  </div>
</template>
<script lang="ts" setup>
const hovering = ref(false)
</script>
<style>
.logo-move,
.logo-enter-active,
.logo-leave-active {
  transition: all 0.5s ease;
}
.logo-enter-from,
.logo-leave-to {
  opacity: 0;
}
.logo-enter-from {
  transform: translateX(-50%);
}
.logo-leave-active {
  position: absolute;
}
</style>
