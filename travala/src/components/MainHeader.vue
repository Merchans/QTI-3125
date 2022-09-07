<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainLogo from './MainLogo.vue'
import MainNavigation from './MainNavigation.vue'
</script>
<template>
    <header class="main-nav wrapper">
        <MainLogo>Travala</MainLogo>
        <MainNavigation />
        <MainNavigation :showCta="true" />
    </header>
</template>