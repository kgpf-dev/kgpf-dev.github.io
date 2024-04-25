const makeTel = (label: string) => {
  const href = `tel:${label.replaceAll(/[()-\s]/g, '')}`
  return { label, href }
}

const RUNTIME_CONFIG = {
  public: {
    seo: {
      title: 'K&G Public Finance',
    },
    emailjs: {
      serviceId: 'service_cyfvchj',
      templateId: 'template_l4rw42j',
      publicKey: 'RGG5-wqs3eeIeXasy',
    },
    kgpf: {
      copyrightYear: 2024,
      phone: makeTel('(760) 510-0290'),
      phoneTollFree: makeTel('(888) 510-0290'),
      fax: makeTel('(760) 510-0288'),
      office: {
        address: '334 Via Vera Cruz, Suite 256',
        cityStateZip: 'San Marcos, California 92078',
        mapsUrl: 'https://maps.app.goo.gl/m7KF3K1gjFVoH4c2A',
      },
    },
  },
}

export default defineNuxtConfig({
  devtools: {
    enabled: (
      true
      // false
    ),
  },
  runtimeConfig: RUNTIME_CONFIG,
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  css: ['@/assets/css/main.css'],
  colorMode: { preference: 'light' },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    // '@nuxtjs/sitemap',
  ],
  ssr: true,
  content: { documentDriven: true },
  // site: { url: 'http://192.168.1.92:3000' }, // WARNING:
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     failOnError: true,
  //     routes: [
  //       '/',
  //       // '/sitemap.xml',
  //     ],
  //   },
  // },
})
