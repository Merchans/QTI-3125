<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'


const props = defineProps({
    showCta: {
        type: Boolean,
        required: false
    },
    isHamburgerActive: {
        type: Boolean,
        default: false,
    }
});
const isHamburgerActive = ref(false);

const toogleMenu = () => {
    console.log(isHamburgerActive.value);
    isHamburgerActive.value = !isHamburgerActive.value;
};
</script>
        
<template>
    <nav class="nav-bar" :class="{ 'nav-bar--cta': showCta }">
        <ul class="nav-bar__list" v-if="!props.showCta" :class="{ 'nav-bar__list--menu-active': isHamburgerActive }">
            <li class="nav-bar__item">
                <RouterLink to="/" class="nav-bar__link nav-bar__link--active">Home</RouterLink>
            </li>
            <li class="nav-bar__item">
                <RouterLink to="/about" class="nav-bar__link">About</RouterLink>
            </li>
            <li class="nav-bar__item">
                <RouterLink to="/destination" class="nav-bar__link">Destination</RouterLink>
            </li>
            <li class="nav-bar__item">
                <RouterLink to="/contact" class="nav-bar__link">Contact</RouterLink>
            </li>
            <li class="nav-bar__item nav-bar__item--mobile">
                <RouterLink to="/register" class="nav-bar__link nav-bar__link--light">Register</RouterLink>
            </li>
            <li class="nav-bar__item nav-bar__item--mobile button">
                <RouterLink to="/login">Login</RouterLink>
            </li>
        </ul>
        <span class="mobile-burger" :class="{ 'mobile-burger--active': isHamburgerActive }" @click="toogleMenu">
            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" v-if="!isHamburgerActive">
                <path
                    d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
            </svg>
            <svg fill="#ffffff" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" v-else>
                <path
                    d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z" />
            </svg>
        </span>
        <ul class="nav-bar__cta" v-if="props.showCta">
            <li class="nav-bar__item">
                <RouterLink to="/register" class="nav-bar__link nav-bar__link--light">Register</RouterLink>
            </li>
            <li class="button">
                <RouterLink to="/login">Login</RouterLink>
            </li>
        </ul>
    </nav>
</template>
    
<style lang="scss" scoped>
@use "@/sass/components/navigation.scss";
</style>
    
    