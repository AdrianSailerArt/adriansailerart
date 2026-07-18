<script setup lang="ts">
import Text from '~/atomics/text/Text.vue';

type HeroProps = {
    image?: string;
    title: string;
    subtitle: string;
    backgroundImage?: string;
};

defineProps<HeroProps>();
</script>

<template>
    <section
        class="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center"
        :style="
            backgroundImage
                ? `background-image: url('${backgroundImage}')`
                : `background-image: url('/images/hero.jpg')`
        "
    >
        <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div class="relative z-fixed mx-auto max-w-4xl px-small4 text-center">
            <NuxtImg
                v-if="image"
                :src="image"
                alt="Adrian Sailer Art"
                class="mx-auto mb-large h-40 w-40 object-contain sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80"
            />
            <div class="hero-title inline-block -rotate-1 px-medium py-small4">
                <Text as="h1" variant="h1" color="primary">
                    {{ title }}
                </Text>
            </div>
            <Text as="h2" variant="h2" class="mt-medium" color="info">
                {{ subtitle }}
            </Text>
        </div>
    </section>
</template>

<style scoped>
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
