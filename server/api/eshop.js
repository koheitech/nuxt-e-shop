export default defineEventHandler(async (event) => {

    // handle query params
    // const { name = "shopper" } = getQuery(event)

    // handle post data
    // const { age } = await readBody(event)

    // api call with private key
    // use $fetch instead of useFetch for server route
    // useFetch is a wrapper function of $fetch
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=PzxTdBKn6vhs3AHrbH0gvjntsnAEvRxzXAb4oboH')

    return {
        data
    }
})
