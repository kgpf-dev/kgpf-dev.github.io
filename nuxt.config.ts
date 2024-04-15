const EMAILJS = {
  serviceId: 'service_cyfvchj',
  templateId: 'template_l4rw42j',
  publicKey: 'RGG5-wqs3eeIeXasy',
}

const PHONE = '(760) 510-0290'
const FAX = '(760) 510-0288'
const OFFICE = {
  address: '334 Via Vera Cruz, Suite 256',
  cityStateZip: 'San Marcos, California 92078',
  mapsUrl: 'https://maps.app.goo.gl/m7KF3K1gjFVoH4c2A',
}

const makeTel = (label: string) => `tel:${label.replaceAll(/[()-\s]/g, '')}`

export default defineNuxtConfig({
  devtools: {
    enabled: (
      true
      // false
    ),
  },
  runtimeConfig: {
    public: {
      // TODO: https://nuxt.com/docs/guide/going-further/runtime-config#environment-variables
      emailjs: EMAILJS,
      kgpf: {
        phone: {
          label: PHONE,
          href: makeTel(PHONE),
        },
        fax: {
          label: FAX,
          href: makeTel(FAX),
        },
        office: OFFICE,
      },
    },
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  css: ['@/assets/css/main.css'],
  colorMode: {
    preference: 'light',
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/sitemap',
  ],
  content: {
    documentDriven: (
      true
      // false
    ),
  },
  ssr: true,
  site: {
    url: 'http://192.168.1.92:3000', // WARNING:
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      // concurrency: 1,
      failOnError: (
        true
        // false
      ),
      routes: [
        '/',
        '/sitemap.xml',
      ],
    },
  },
})
