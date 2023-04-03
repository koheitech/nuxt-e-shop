<template>
    <div>
        <ProductDetails :product="product"/>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    const { id } = useRoute().params
    const uri = `https://fakestoreapi.com/products/${id}`

    // Nuxt does not fetch new data to save the SSR by default
    // Thus, we need to explicitly set key as the second arguments to fetch new data for every time
    const { data: product } = await useFetch(uri, { key: id })

    // We cannot catch error since we cannot know the error until we know that we could not fetch the data
    // In this case, we can check the result in backend and throw a custom error
    if (!product.value) {
        // fatal: true is for explicitly checking the client-side error
        throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
    }
</script>

<style scoped>

</style>