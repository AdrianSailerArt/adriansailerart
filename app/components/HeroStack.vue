<script setup lang="ts">
import Text from '~/atomics/text/Text.vue';

type HeroStackProps = {
    backgroundImage?: string;
    line1: string;
    line2: string;
    line3: string;
    align?: 'left' | 'right';
};

const props = withDefaults(defineProps<HeroStackProps>(), {
    align: 'left'
});
</script>

<template>
    <section
        class="relative flex min-h-screen items-end overflow-hidden bg-cover bg-center"
        :style="{
            backgroundImage: `url('${props.backgroundImage || '/images/hero.jpg'}')`
        }"
    >
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/30" />

        <!-- Content -->
        <div
            class="relative z-fixed w-full px-small4 pb-medium2 md:pb-large3 md:ml-large2"
            :class="
                props.align === 'right'
                    ? 'flex justify-end'
                    : 'flex justify-start'
            "
        >
            <div
                class="flex flex-col gap-small"
                :class="
                    props.align === 'right'
                        ? 'items-end text-right'
                        : 'items-start text-left'
                "
            >
                <Text variant="display" color="primary" class="hero-word">
                    {{ props.line1 }}
                </Text>

                <Text variant="display" color="white" class="hero-word">
                    {{ props.line2 }}
                </Text>

                <Text variant="display" color="white" class="hero-word">
                    {{ props.line3 }}
                </Text>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero-word {
    text-transform: uppercase;

    text-shadow: var(--shadow-inner);

    transition: transform 0.25s ease;
}

.hero-word:hover {
    transform: translateX(4px);
}

@media (min-width: 640px) {
    .hero-word {
        font-size: clamp(3rem, 8vw, 6rem);
    }
}

@media (max-width: 639px) {
    .hero-word {
        font-size: clamp(2.5rem, 12vw, 4rem);
    }
}
</style>
