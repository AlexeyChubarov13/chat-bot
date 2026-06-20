export default defineNuxtConfig({
    compatibilityDate: '2026-06-16',
    modules: ['@pinia/nuxt'],
    css: ['~/assets/style.css'],
    devServer: {
        host: '0.0.0.0'
    },
    runtimeConfig: {
        dadataApiKey: process.env.DADATA_API_KEY || ''
    }
})
