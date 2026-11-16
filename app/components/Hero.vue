<script setup lang="ts">
import Text from '~/atomics/text/Text.vue';

type HeroProps = {
    showLogo?: boolean;
    title: string;
    subtitle: string;
    backgroundImage?: string;
    /** Beschreibung des Titelbilds für Screenreader und Google Bilder */
    backgroundAlt?: string;
    /** Nur für Screenreader und Suchmaschinen: worum es auf der Seite geht */
    context?: string;
};

withDefaults(defineProps<HeroProps>(), {
    backgroundImage: '/images/hero.jpg',
    backgroundAlt: ''
});

</script>

<template>
    <section class="relative flex min-h-screen items-center justify-center overflow-hidden">
        <HeroImage :src="backgroundImage" :alt="backgroundAlt" />

        <div
            class="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            aria-hidden="true"
        />

        <div class="relative z-base mx-auto max-w-4xl px-small4 text-center">
            <Logo
                v-if="showLogo"
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, (min-width: 640px) 224px, 160px"
                class="hero-in mx-auto mb-large h-40 w-40 object-contain sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80"
            />

            <div class="hero-in hero-title inline-block -rotate-1 px-medium py-small4">
                <Text as="h1" variant="h1" color="white">
                    {{ title }}
                    <span v-if="context" class="sr-only"> – {{ context }}</span>
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