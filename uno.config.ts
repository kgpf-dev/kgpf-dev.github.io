import {
  defineConfig,
  presetUno,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns'

export default defineConfig({
  theme: {
    fontFamily: {
      georgia: 'Georgia',
    },
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--kgpf-yellow)',
      kgpfBlue: 'var(--kgpf-blue)',
      kgpfYellow: 'var(--kgpf-yellow)',
    },
  },
  content: {
    filesystem: [
      'content/**/*.md',
    ],
  },
  extractors: [
  ],
  presets: [
    presetUno(),
    presetHeroPatterns(),
  ],
  transformers: [
    transformerCompileClass(),
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
