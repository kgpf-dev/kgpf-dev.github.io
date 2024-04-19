import { useState } from 'nuxt/app'
// import { useHead } from 'nuxt/app'
// type Head = Parameters<typeof useHead>[0]

type Head = any

export const useHeadMeta = () => useState<Head>('head-meta')
