// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // add modules
    modules: ['@nuxtjs/tailwindcss'],
    // add custom meta data here
    app: {
        head: {
            title: 'Nuxt E-shop',
            meta: [
                { name: 'description', content: 'Everything about Nuxt 3' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            ]
        }
    },
    // add API key
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
    }
})
