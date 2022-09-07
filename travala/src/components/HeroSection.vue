<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <section class="hero">
    <slot></slot>
    <div class="hero__content">
      <h1 class="hero__title">Easy way to find a perfect property</h1>
      <p class="hero__desc">
        We provide a complete service for the sale, purchase or rental of real estate
      </p>
      <div class="hero__cta">
        <ul class="hero__list">
          <li class="hero__item">
            <RouterLink to="/cappadocia" class="hero__link">Buy</RouterLink>
          </li>
          <li class="hero__item">
            <RouterLink to="/cappadocia" class="hero__link">Sell</RouterLink>
          </li>
          <li class="hero__item">
            <RouterLink to="/cappadocia" class="hero__link">Rent</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="sass">
@use "@/sass/components/hero-section.scss"
</style>
