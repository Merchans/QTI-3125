<script setup>
import MainFooter from './components/MainFooter.vue'
import HeroSection from './components/HeroSection.vue'
import MainHeader from './components/MainHeader.vue'
import MainIntro from './components/MainIntro.vue'
import LogoSection from './components/LogoSection.vue'
</script>

<template>
  <div>
    <HeroSection>
      <MainHeader />
    </HeroSection>
    <MainIntro />
    <LogoSection />
    <MainFooter />
  </div>
</template>

<style lang="sass">
  @use "@/sass/main.scss"
</style>
