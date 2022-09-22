<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useCardsFilterStore } from '../../src/stores/cardsFilter'

const cities = useCardsFilterStore();
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
            <RouterLink to="/cappadocia" class="hero__link hero__link--active"
              >Buy</RouterLink
            >
          </li>
          <li class="hero__item">
            <RouterLink to="/cappadocia" class="hero__link">Sell</RouterLink>
          </li>
          <li class="hero__item">
            <RouterLink to="/cappadocia" class="hero__link">Rent</RouterLink>
          </li>
        </ul>
      </div>
      <ul class="hero-sub__list">
        <li class="hero-sub__item">
          <h3 class="hero-sub__title">Locations</h3>
          <p class="hero-sub__desc">Select your city</p>
          <ul>
            <li :key="city.id" v-for="city in cities.DestinationCities" @click="cities.removeCity(city.id)">
                {{city.name}} <span v-if="city.isActive">x</span>
            </li>
          </ul>
        </li>
        <svg
          class="hero-sub__line"
          width="1"
          height="50"
          viewBox="0 0 1 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="50" stroke="#BDBDBD" />
        </svg>
        <li class="hero-sub__item">
          <h3 class="hero-sub__title">Property Type</h3>
          <p class="hero-sub__desc">Choose your property type</p>
        </li>
        <svg
          class="hero-sub__line"
          width="1"
          height="50"
          viewBox="0 0 1 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="50" stroke="#BDBDBD" />
        </svg>
        <li class="hero-sub__item">
          <h3 class="hero-sub__title">Rent Range</h3>
          <p class="hero-sub__desc">Choose a range</p>
        </li>
        <li class="hero-sub__item">
          <a href="#" class="button button--black button--big">Search</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="sass">
@use "@/sass/components/hero-section.scss"
</style>
