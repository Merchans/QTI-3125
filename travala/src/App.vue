<script setup>
import MainFooter from './components/MainFooter.vue'
import HeroSection from './components/HeroSection.vue'
import MainHeader from './components/MainHeader.vue'

</script>

<template>
  <div>
    <HeroSection>
      <MainHeader />
    </HeroSection>
    <MainFooter />
  </div>
</template>

<style lang="sass">
  @use "@/sass/main.scss"
</style>
