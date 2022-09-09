<script setup>
import BigCard from './BigCard.vue'
import MainList from './MainList.vue'
</script>
<template>
    <section class="intro">
        <div class="wrapper">
            <div class="intro__wrapper">
                <BigCard />
                <MainList />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use "@/sass/components/main-intro.scss";
</style>