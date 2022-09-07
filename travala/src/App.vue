<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import MainLogo from './components/MainLogo.vue'
import MainNavigation from './components/MainNavigation.vue'
import MainFooter from './components/MainFooter.vue'

</script>

<template>
  <div>
    <section class="hero">
      <header class="main-nav wrapper">
        <MainLogo>Travala</MainLogo>
        <MainNavigation />
        <MainNavigation :showCta="true" />
      </header>
    </section>
    <MainFooter />
  </div>
</template>

<style lang="sass">
  @use "@/sass/main.scss"
</style>
