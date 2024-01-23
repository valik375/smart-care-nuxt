// https://nuxt.com/docs/api/configuration/nuxt-config
import dynamicImport from 'vite-plugin-dynamic-import'
export default defineNuxtConfig({
  app: {
    pageTransition: false,
    layoutTransition: false,
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon_16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon_32.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon_48.png' },
        { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon_64.png' },
        { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/favicon_128.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon_192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon_512.png' },
        { rel: 'canonical', href: 'https://www.thecaresmart.com' },
      ]
    }
  },
  site: {
    url: 'thecaresmart.com',
    path: '/sitemap.xml',
    hostname: 'http://localhost:3000',
    gzip: true,
    cacheTime: '1000 * 60 * 15',
    exclude: [],
  },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  // sitemap: {
  //   url: 'thecaresmart.com',
  //   path: '/sitemap.xml',
  //   hostname: 'http://localhost:3000',
  //   gzip: true,
  //   cacheTime: '1000 * 60 * 15',
  //   exclude: [],
  // },
  runtimeConfig: {
    public: {
      gtagId: 'GTM-5PPVS337',
    }
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  modules: [
    'nuxt-swiper',
    'nuxt3-meta-pixel',
    'nuxt-simple-sitemap'
  ],
  facebook: {
    track: 'PageView',
    pixelId: '820912996241451',
    autoPageView: true,
    disabled: false
  },
  image: {
    dir: 'assets',
  },
  devtools: {
    enabled: true
  },
  vite: {
    plugins: [
      dynamicImport()
    ],
  },
  buildModules: [
    '@nuxtjs/google-analytics'
  ]
})
