<!-- this page is routed to `/products` -->
<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products' // layouts set to be products
    })

    // fetch 'data' and name it as 'products'
    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    // overriding meta tags for the specific page
    useHead({
        title: 'Nuxt E-shop | Products page',
        meta: [
            { name: 'description', content: 'Nuxt E-shop products top page'}
        ]
    })
</script>
 
<style scoped>

</style>
