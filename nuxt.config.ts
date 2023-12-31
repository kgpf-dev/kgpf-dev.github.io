import type { GlobalThemeOverrides, CustomThemeCommonVars } from 'naive-ui'

const KGPF_BLUE = '#3e4f82'
const KGPF_YELLOW = '#a98b7c'

const PRIMARY_COLOR = KGPF_BLUE
const SECONDARY_COLOR = KGPF_YELLOW

type ThemeOverrides = GlobalThemeOverrides & {
  common: CustomThemeCommonVars & {
    kgpfBlue: string
    kgpfYellow: string
  }
}

const THEME_OVERRIDES: ThemeOverrides = {
  common: {
    primaryColor: PRIMARY_COLOR,
    kgpfBlue: KGPF_BLUE,
    kgpfYellow: KGPF_YELLOW,
    primaryColorHover: PRIMARY_COLOR,
  },
  BackTop: {
    iconColorHover: PRIMARY_COLOR,
  },
  Typography: {
    pFontSize: '12pt',
    liFontSize: '12pt',
    aTextColor: SECONDARY_COLOR,
  },
  Menu: {
    itemTextColor: 'white',
    itemIconColor: 'white',
    itemTextColorHorizontal: 'white',
    itemIconColorHorizontal: 'white',
    itemTextColorActive: SECONDARY_COLOR,
    itemIconColorActive: SECONDARY_COLOR,
    itemTextColorHoverHorizontal: SECONDARY_COLOR,
    itemIconColorHoverHorizontal: SECONDARY_COLOR,
    itemTextColorActiveHorizontal: SECONDARY_COLOR,
    itemIconColorActiveHorizontal: SECONDARY_COLOR,
    itemTextColorActiveHoverHorizontal: SECONDARY_COLOR,
    itemIconColorActiveHoverHorizontal: SECONDARY_COLOR,
    itemTextColorChildActiveHorizontal: SECONDARY_COLOR,
    itemIconColorChildActiveHorizontal: SECONDARY_COLOR,
    itemTextColorChildActiveHoverHorizon: SECONDARY_COLOR,
    itemIconColorChildActiveHoverHorizon: SECONDARY_COLOR,
    itemTextColorChildActiveHoverHorizontal: SECONDARY_COLOR,
    itemIconColorChildActiveHoverHorizontal: SECONDARY_COLOR,
  },
}

export default defineNuxtConfig({
  // ssr: false,
  nitro: {
    prerender: {
      crawlLinks: true,
    },
    preset: 'service-worker',
    // preset: 'github-pages',
  },
  modules: [
    '@nuxt/content',
    '@huntersofbook/naive-ui-nuxt',
    '@unocss/nuxt',
    // 'vue-recaptcha/nuxt',
  ],
  content: {
    documentDriven: true,
  },
  css: ['@unocss/reset/tailwind-compat.css'],
  app: { pageTransition: { name: 'page', mode: 'out-in' } },
  naiveUI: {
    themeOverrides: THEME_OVERRIDES,
  },
})
