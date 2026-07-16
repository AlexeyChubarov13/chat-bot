export default defineNuxtConfig({
    compatibilityDate: '2026-06-16',
    modules: ['@pinia/nuxt', '@nuxt/icon' ],
    css: ['~/assets/style.css'],
    devServer: {
        host: '0.0.0.0'
    },
    icon: {
        mode: 'svg',
        customCollections: [
          {
            prefix: 'ui',
            dir: './app/assets/icons/ui'
          }
        ]
    },
    runtimeConfig: {
        dadataApiKey: process.env.DADATA_API_KEY || ''
    }
})
