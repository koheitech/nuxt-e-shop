<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quasi esse odit, magnam tempore quam fugit. Laudantium vero fugit voluptate, suscipit ex quaerat ullam, explicabo neque sapiente consequatur obcaecati? Dolor?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quasi esse odit, magnam tempore quam fugit. Laudantium vero fugit voluptate, suscipit ex quaerat ullam, explicabo neque sapiente consequatur obcaecati? Dolor?</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/eshop?name=foobar', {
        method: 'post',
        body: { age: 30 }
    })
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>