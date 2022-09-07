<script setup>
import { computed } from 'vue'
const props = defineProps({
    lightMode: {
        type: Boolean,
        default: false,
    },
    letter: {
        type: String,
        default: 'T',
    },
})
</script>
    
<template>
    <div class="main-logo" :class="{'main-logo--light': lightMode}">

        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="main-logo__img">
            <rect width="50" height="50" rx="25" fill="white" fill-opacity="0.08" />
            <text fill="currentcolor" xml:space="preserve" font-weight="900" letter-spacing="0em">
                <tspan x="18.5" y="31.5455">{{ letter }}</tspan>
            </text>
        </svg>

        <div class="main-logo__text">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "@/sass/components/main-logo.scss";
</style>

