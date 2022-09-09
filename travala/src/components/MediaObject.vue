<script setup>
defineProps({
    path: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: 'media item'
    },
    BgColor: {
        type: String,
        default: 'white'
    }
})
</script>
<template>
    <div class="media-object">
        <div class="media-object__wrapper">
            <div class="media-object__image" :style="{backgroundColor: BgColor}">
                <img :src="path" :alt="alt">
            </div>
            <div class="media-object__content">
                <h4 class="media-object__title">
                    <slot name="title"></slot>
                </h4>
                <p class="media-object__text">
                    <slot name="text"></slot>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "@/sass/components/media-object.scss";
</style>