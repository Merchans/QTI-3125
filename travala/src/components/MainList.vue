<script setup>
import MediaObject from './MediaObject.vue'
</script>
<template>
    <ul class="main-list">
        <li class="main-list__item">
            <MediaObject path="images/valet.svg" alt="Valer" BgColor="#f7f4ff">
                <template #title>
                    Affordable prices
                </template>
                <template #text>
                    We provide some very affordable prices compared to others.
                </template>
            </MediaObject>
        </li>
        <li class="main-list__item">
            <MediaObject path="images/3-friends.svg" alt="3 Friends" BgColor="#fefaee">
                <template #title>
                    Unforgettable experience
                </template>
                <template #text>
                    We provide a vacation experience that will be unforgettable.
                </template>
            </MediaObject>
        </li>
        <li class="main-list__item">
            <MediaObject path="images/heart.svg" alt="Heart" BgColor="#f7f4ff">
                <template #title>
                    Very Friendly Service
                </template>
                <template #text>
                    We will provide excellent and friendly service for the sake of our customers.
                </template>
            </MediaObject>
        </li>
    </ul>
</template>
<style lang="scss">
@use "@/sass/components/main-list.scss";
</style>