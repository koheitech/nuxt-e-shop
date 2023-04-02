<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero laboriosam corrupti exercitationem magnam quae! Blanditiis beatae, sint laboriosam, ratione perferendis libero praesentium fugit sapiente quidem id sit, delectus officiis nesciunt.</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
</script>

<style scoped>

</style>