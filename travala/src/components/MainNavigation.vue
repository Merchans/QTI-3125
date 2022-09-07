<script setup>
import { RouterLink, RouterView } from 'vue-router'
const props = defineProps({
    showCta: {
        type: Boolean,
        required: false
    }
})
</script>
        
<template>
    <nav class="nav-bar">
        <ul class="nav-bar__list" v-if="!props.showCta">
            <li class="nav-bar__item">
                <RouterLink to="/" class="nav-bar__link nav-bar__link--active">Home</RouterLink>
            </li>
            <li class="nav-bar__item">
                <RouterLink to="/about" class="nav-bar__link">About</RouterLink>
            </li>
            <li class="nav-bar__item">
                <RouterLink to="/destination" class="nav-bar__link">Destination</RouterLink>
            </li>
            <li class="nav-bar__item">
                <RouterLink to="/contact" class="nav-bar__link">Contact</RouterLink>
            </li>
        </ul>
        <ul class="nav-bar__cta" v-if="props.showCta">
            <li class="nav-bar__item">
                <RouterLink to="/register" class="nav-bar__link nav-bar__link--light">Register</RouterLink>
            </li>
            <li class="button">
                <RouterLink to="/login">Login</RouterLink>
            </li>
        </ul>
    </nav>
</template>
    
<style lang="scss" scoped>
@use "@/sass/components/navigation.scss";
</style>
    
    