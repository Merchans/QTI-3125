<script setup>
    import LabelStick from './LabelStick.vue'
</script>
<template>
    <div class="big-card">
        <div class="big-card__wrapper">
            <h3 class="big-card__title">
                Get Experience Which are fun
            </h3>
            <div class="big-card__text">
                <p>With travala you can get the best experience on holiday travel, and we always update the latest and
                    best destinations in the world</p>
            </div>
            <div class="big-card__image">
                <div class="big-card__image--wrapper">
                    <LabelStick text="Turkey"/>
                </div>
                <img src="images/turkey.png" alt="Turkey">
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    @use "@/sass/components/big-card.scss";
</style>