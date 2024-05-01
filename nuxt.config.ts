const makeTel = (label: string) => {
  const href = `tel:${label.replaceAll(/[()-\s]/g, '')}`
  return { label, href }
}

const SITE = {
  // WARNING: Change the URL once custom domain is setup
  url: (
    // 'kgpf.net'
    'kgpf-dev.github.io'
    // 'localhost:3000'
  ),
  name: 'Koppel & Gruber Public Finance',
  description: 'Servicing California since 2004',
  icon: '/favicon.ico',
  image: '/img/logo/small.png',
}

const RUNTIME_CONFIG = {
  public: {
    site: SITE,
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
  site: {
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
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
    '@nuxtjs/seo',
    'nuxt-icon',
  ],
  content: { documentDriven: true },
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
