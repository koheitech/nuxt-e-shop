export default defineEventHandler(async (event) => {

    // handle query params
    const { name = "shopper" } = getQuery(event)

    // handle post data
    const { age } = await readBody(event)

    return {
        message: `Hello, ${name}`,
        shopper: {
            name,
            age,
        }
    }
})
