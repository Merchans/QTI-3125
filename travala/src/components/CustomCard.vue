<script setup>
    import LabelStick from './LabelStick.vue';
    defineProps({
        link: {
            type: String,
            default: '#'
        },
        buttonText: {
            type: String,
            default: 'Ticket booking'
        },
        price: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: 'destinations'
        },
    })
    </script>
<template>
    <div class="card">
        <div class="card__img">
            <img :src="path" :alt="alt">
            <div class="card__labels">
            <LabelStick :rating="true" text="5.0" />
            <LabelStick text="Turkey" />
            </div>
            <div class="card__play-button">
                <LabelStick :isPlayButton="true" />
            </div>
        </div>
        <div class="card__content">
            <h4 class="card__title">
                <slot name="title"></slot>
            </h4>
            <p class="card__desc">
              <slot name="text"></slot>
            </p>
            <div class="card__meta">
                <div class="card__price">
                    <small>Price</small> <br>
                    <strong>$ {{price}}</strong><small>/Person</small>
                </div>
                <div class="card__cta">
                    <a :href="link" class="button button--purple">
                        {{buttonText}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@use "@/sass/components/custom-card.scss";
</style>