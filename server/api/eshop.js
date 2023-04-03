export default defineEventHandler((event) => {

    const { name = "shopper" } = getQuery(event)

    return {
        message: `Hello, ${name}`
    }

})