// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Volkswagen Golf GTI Mk8 Photo Gallery | @rohgti',
      meta: [
          { name: 'description', content: 'Explore a high-quality photo gallery of the Volkswagen Golf GTI Mk8 by @rohgti. Featuring exterior shots, details, and styling highlights.'},
      ],
      htmlAttrs: {
        lang: 'en',
      },
    }
  }
})
