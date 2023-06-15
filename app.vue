<template>
  <client-only>
    <!-- <n-theme-editor> -->
    <n-config-provider>
      <n-global-style />
      <n-message-provider>
        <n-el
          :class="[
            'relative',
            'min-h-screen',
            'flex',
            'flex-col',
            'items-center',
          ]"
        >
          <n-back-top :right="100" />
          <div
            id="header"
            :class="[
              'py-4',
              'w-full',
              'flex',
              'justify-center',
              'bg-hero-topography-white/20',
              'bg-kgpf-blue',
              // 'bg-blend-luminosity',
              'bg-blend-screen',
              // 'border-b',
            ]"
          >
            <div class="relative px-32 flex flex-col sm:flex-row gap-2 sm:gap-8 items-center justify-between">
              <transition-group name="header">
                <n-el v-if="!isHome" key="logo" class="left-0">
                  <nuxt-link to="/" @click="menuSelection = null">
                    <logo-small />
                  </nuxt-link>
                </n-el>
                <n-menu
                  key="menu"
                  v-model:value="menuSelection"
                  :options="menuOptions"
                  :dropdown-props="{
                    showArrow: true,
                  }"
                  mode="horizontal"
                />
              </transition-group>
            </div>
          </div>
          <div
            class="
            flex-1
            w-full
            flex
            flex-col
            items-center
            px-4
            "
          >
            <div class="flex-1 py-8">
              <nuxt-page />
            </div>
          </div>
          <div id="footer" class="relative p-4 w-full border-t bg-hero-topography-slate-500/10 font-georgia">
            <!-- <n-divider id="footer-divider"> -->
            <!--   <div class=""> -->
            <!--     <img src="/img/logo.png" alt="KGPF logo" class="h-[2cm]"> -->
            <!--     Kopper & Gruber Public Finance -->
            <!--   </div> -->
            <!-- </n-divider> -->
            <div class="grid grid-cols-3 gap-8 items-center">
              <n-text :depth="3">
                <p>334 Via Vera Cruz, Suite 256</p>
                <p>San Marcos, California 92078</p>
              </n-text>
              <n-text :depth="3" class="text-center">
                <p>Copyright © 2023 Koppel & Gruber Public Finance</p>
                <p>All Rights Reserved</p>
              </n-text>
              <n-text :depth="3" class="text-right">
                <p>Phone: <a href="tel:7605100290">(760) 510-0290</a></p>
                <p>Fax: <a href="tel:7605100288">(760) 510-0288</a></p>
              </n-text>
            </div>
          </div>
          <div class="fixed top-0 left-0 p-1 w-[200px] group">
            <n-slider
              v-model:value="hueRotate"
              :min="0"
              :max="180"
              class="transition opacity-0 group-hover:opacity-100"
            />
          </div>
        </n-el>
      </n-message-provider>
    </n-config-provider>
    <!-- </n-theme-editor> -->
  </client-only>
</template>
<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import { NIcon, NThemeEditor } from 'naive-ui'
import {
  // Main
  BuildingBank as ServicesIcon,
  BuildingCommunity as OwnersIcon,
  Book as GlossaryIcon,
  Award as LeadershipIcon,
  Mail as ContactIcon,
  // Services
  // Map as GISIcon,
} from '@vicons/tabler'
import { NuxtLink } from '#components'

const { page } = useContent()

const menuSelection = ref<string | null>(null)
const isHome = computed(() => page.value?._path === '/')

const hueRotate = ref(0)
const hueRotateDeg = computed(() => `${hueRotate.value}deg`)
provide('hueRotateDeg', hueRotateDeg)

const iconRenderer = (icon: Component) => () => h(NIcon, null, { default: () => h(icon) })
const linkRenderer = (to: string, text: string) => () => h(NuxtLink, { to }, { default: () => text })

const menuOptions: MenuOption[] = [
  {
    key: 'services',
    icon: iconRenderer(ServicesIcon),
    label: 'Services',
    children: [
      {
        key: 'special-districts',
        label: linkRenderer(
          '/services/special-districts',
          'Special districts',
        ),
      },
      {
        key: 'fee-studies',
        label: linkRenderer(
          '/services/fee-studies',
          'Developer fee studies',
        ),
      },
      {
        key: 'ongoing-reporting',
        label: linkRenderer(
          '/services/ongoing-reporting',
          'Ongoing reporting',
        ),
      },
      {
        key: 'gis',
        label: linkRenderer(
          '/services/gis',
          'GIS services',
        ),
      },
      {
        key: 'arbitrage-compliance',
        label: linkRenderer(
          '/services/arbitrage-compliance',
          'Arbitrage compliance',
        ),
      },
      {
        key: 'prop-218-notification',
        label: linkRenderer(
          '/services/prop-218-notification',
          'Proposition 218 notification',
        ),
      },
    ],
  },
  {
    key: 'faq',
    icon: iconRenderer(OwnersIcon),
    label: linkRenderer(
      '/owners/faq',
      'FAQ',
    ),
  },
  {
    key: 'glossary',
    icon: iconRenderer(GlossaryIcon),
    label: linkRenderer(
      '/glossary',
      'Glossary',
    ),
  },
  {
    key: 'leadership',
    icon: iconRenderer(LeadershipIcon),
    label: linkRenderer(
      '/leadership',
      'Leadership',
    ),
  },
  {
    key: 'contact',
    icon: iconRenderer(ContactIcon),
    label: linkRenderer(
      '/contact',
      'Contact us',
    ),
  },
]
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.header-move,
.header-enter-active,
.header-leave-active {
  transition: all 0.5s ease;
}
.header-enter-from,
.header-leave-to {
  opacity: 0;
}
.header-enter-from {
  transform: translateX(-50%);
}
.header-leave-active {
  position: absolute;
}

#footer-divider {
  position: absolute;
  margin: 0;
  /* padding: 1rem 0; */
  inset: auto 0;
  top: -1rem;
}
</style>
