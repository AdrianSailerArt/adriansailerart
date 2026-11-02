<script setup lang="ts">
import { computed } from 'vue';
import Text from '~/atomics/text/Text.vue';

type HeroProps = {
    image?: string;
    title: string;
    subtitle: string;
    backgroundImage?: string;
};

const props = defineProps<HeroProps>();

const optimizedImage = useOptimizedImage();

const backgroundImageUrl = computed(() =>
    optimizedImage(props.backgroundImage ?? '/images/hero.jpg')
);
</script>

<template>
    <section
        class="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center"
        :style="{
            backgroundImage: `url('${backgroundImageUrl}')`
        }"
    >
        <div
            class="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            aria-hidden="true"
        />

        <div class="relative z-base mx-auto max-w-4xl px-small4 text-center">
            <NuxtImg
                v-if="image"
                :src="image"
                preset="static"
                alt=""
                width="320"
                height="320"
                densities="x1 x2"
                class="hero-in mx-auto mb-large h-40 w-40 object-contain sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80"
            />

            <div class="hero-in hero-title inline-block -rotate-1 px-medium py-small4">
                <Text as="h1" variant="h1" color="white">
                    {{ title }}
                </Text>
            </div>

            <Text as="p" variant="h2" class="hero-in mt-medium" color="primary">
                {{ subtitle }}
            </Text>
        </div>
    </section>
</template>

<style scoped>
.hero-in {
    animation: heroIn 0.9s cubic-bezier(.22,1,.36,1) both;
}

.hero-in:nth-child(2) {
    animation-delay: 150ms;
}

.hero-in:nth-child(3) {
    animation-delay: 300ms;
}

@keyframes heroIn {
    from {
        opacity: 0;
        translate: 0 24px;
    }
    to {
        opacity: 1;
        translate: 0 0;
    }
}

.hero-title {
    position: relative;
    display: inline-block;
    border: 1px solid white;
    background: rgb(0 0 0 / 20%);
    backdrop-filter: blur(6px);
    transition: transform 0.2s ease;
}

.hero-title::after {
    content: '';
    position: absolute;
    left: 6px;
    bottom: 6px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    border: 1px solid white;
    pointer-events: none;
    transition: all 0.2s ease;
}

.hero-title:hover {
    transform: translateY(-2px) rotate(-1deg);
}

.hero-title:hover::after {
    left: 4px;
    bottom: 4px;
}
</style>