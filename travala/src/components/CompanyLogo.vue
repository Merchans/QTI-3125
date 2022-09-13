<script setup>
defineProps({
    path: {
        type: String,
        required: true
    },
    url: {
        type: String,
        default: '#'
    },
    alt: {
        type: String,
        default: 'Compeny Logo'
    },
})
</script>
    
<template>
    <div class="company-logo">
        <a :href="url" target="_blank">
            <img :src="path" :alt="alt">
        </a>
    </div>
</template>

<style lang="scss">
@use "@/sass/components/company-logo.scss";
</style>