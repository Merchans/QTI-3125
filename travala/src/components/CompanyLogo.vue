<script setup>
defineProps({
    path: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: 'Compeny Logo'
    },
})
</script>
    
<template>
    <div class="company-logo">
        <img :src="path" :alt="alt">
    </div>
</template>

<style lang="scss">
@use "@/sass/components/company-logo.scss";
</style>