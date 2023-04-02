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
</script>

<style scoped>

</style>