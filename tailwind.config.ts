import type { Config } from 'tailwindcss'

const KGPF_BLUE = {
  50: '#f3f6fb',
  100: '#e4ebf5',
  200: '#cfddee',
  300: '#adc7e3',
  400: '#86aad4',
  500: '#6a8ec7',
  600: '#5677ba',
  700: '#4c65a9',
  800: '#3e4f82',
  900: '#39486f',
  950: '#262d45',
}

const KGPF_YELLOW = {
  50: '#f9f8f7',
  100: '#f3efed',
  200: '#eae2de',
  300: '#dbcdc6',
  400: '#c5afa4',
  500: '#a98b7c',
  600: '#977a6b',
  700: '#7e6457',
  800: '#6a554a',
  900: '#5a4a42',
  950: '#2f2520',
}

const KGPF_SLATE = {
  50: '#f6f7f9',
  100: '#ecedf2',
  200: '#d5d8e2',
  300: '#b0b6c9',
  400: '#858eab',
  500: '#667191',
  600: '#4e5673',
  700: '#434961',
  800: '#3a3f52',
  900: '#333747',
  950: '#22242f',
}

export default <Partial<Config>> {
  content: [
    './components/**/*.vue',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        'kgpf-blue': KGPF_BLUE,
        'kgpf-yellow': KGPF_YELLOW,
        'kgpf-slate': KGPF_SLATE,
      },
      width: {
        prose: '65ch',
      },
    },
  },
}
