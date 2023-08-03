// dynamic server route depending on the currency code
// in this demo app, we are use GBP as the code.
export default defineEventHandler(async (event) => {

    const { code } = event.context.params

    // destructuring the `currencyKey` which is mapped in nuxt.config.ts
    const { currencyKey } = useRuntimeConfig()

    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`

    const { data } = await $fetch(uri)

    return data
})
