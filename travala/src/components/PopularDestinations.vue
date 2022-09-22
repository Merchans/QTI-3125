<script setup>
import NavigationButton from './NavigationButton.vue'
import CustomCard from './CustomCard.vue'
import { useCardsFilterStore } from '../../src/stores/cardsFilter'

const cities = useCardsFilterStore();

</script>
<template>
    <section class="popular-destinations wrapper">
        <div class="popular-destinations__wprapper">
            <h4 class="popular-destinations__title">
                Destinations Most Popular
            </h4>
            <div class="popular-destinations__desc">
                <p>
                    Some of the most popular destinations for
                    you visit with a view the beautiful one.
                </p>
            </div>
            <div class="popular-destinations__arrow">
                <NavigationButton />
            </div>
        </div>
        <div class="popular-destinations__cards">
            <CustomCard :key="index" v-for="(destination, index) in cities.DestinationCities" 
                price="150" path="images/turkey-thumbnail.png"
                rating="4.1" :LabelStickText="destination">
                <template #title>
                    Cappadocia
                </template>
                <template #text>
                    The red and orange sand of the desert are very beautiful, let's take a trip here
                </template>
            </CustomCard>
        </div>
    </section>
</template>
<style lang="scss">
@use "@/sass/components/popular-destinations.scss";
</style>