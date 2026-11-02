<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';

import Text from '~/atomics/text/Text.vue';
import Link from '~/atomics/link/Link.vue';

type ParallaxSectionProps = {
    backgroundImage: string;

    title?: string;
    description?: string;

    buttonText?: string;
    buttonLink?: string;

    height?: 'screen' | 'large' | 'medium';

    align?: 'left' | 'center' | 'right';

    overlay?: boolean;

    /**
     * Nur Bild anzeigen
     */
    imageOnly?: boolean;
};

const props = withDefaults(defineProps<ParallaxSectionProps>(), {
    height: 'screen',
    align: 'center',
    overlay: true,
    imageOnly: false
});

const optimizedImage = useOptimizedImage();

// Bild ist per scale-150 vergrößert, daher etwas breiter laden
const backgroundImageUrl = computed(() =>
    optimizedImage(props.backgroundImage, 2560)
);

const section = ref<HTMLElement | null>(null);
const offset = ref(0);

let frame = 0;

const handleScroll = () => {
    if (frame) return;

    // Pro Frame nur einmal rechnen
    frame = requestAnimationFrame(() => {
        frame = 0;

        if (!section.value) return;

        const rect = section.value.getBoundingClientRect();

        const scrollPosition = window.innerHeight - rect.top;

        offset.value = scrollPosition * 0.15;
    });
};

onMounted(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, {
        passive: true
    });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    cancelAnimationFrame(frame);
});

const heightClass = computed(() => {
    switch (props.height) {
        case 'large':
            return 'min-h-[80vh]';

        case 'medium':
            return 'min-h-[60vh]';

        default:
            return 'min-h-screen';
    }
});

const alignClass = computed(() => {
    switch (props.align) {
        case 'left':
            return 'justify-start text-left';

        case 'right':
            return 'justify-end text-right';

        default:
            return 'justify-center text-center';
    }
});

const hasContent = computed(() => {
    return props.title || props.description || props.buttonText;
});
</script>

<template>
    <section
        ref="section"
        class="relative flex items-center overflow-hidden"
        :class="heightClass"
    >
        <!-- Parallax Image -->
        <div
            aria-hidden="true"
            class="absolute inset-0 scale-150 bg-cover bg-center will-change-transform"
            :style="{
                backgroundImage: `url('${backgroundImageUrl}')`,
                transform: `translateY(${offset}px)`
            }"
        />

        <!-- Overlay nur wenn Inhalt vorhanden -->
        <div
            v-if="overlay && hasContent"
            aria-hidden="true"
            class="absolute inset-0 bg-black/40"
        />

        <!-- Content -->
        <div
            v-if="hasContent && !imageOnly"
            class="relative z-background mx-auto flex w-full max-w-screen-2xl px-small4"
            :class="alignClass"
        >
            <div v-reveal class="min-w-0 max-w-3xl">
                <Text
                    v-if="title"
                    as="h2"
                    variant="h1"
                    color="primary"
                    class="parallax-title"
                >
                    {{ title }}
                </Text>

                <Text
                    v-if="description"
                    variant="bodyMedium"
                    color="white"
                    class="mt-medium"
                >
                    {{ description }}
                </Text>

                <Link
                    v-if="buttonText && buttonLink"
                    class="mt-large"
                    :to="buttonLink"
                >
                    {{ buttonText }}
                </Link>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Lange Wörter (z. B. „Portraitfotografie“) auf dem Handy umbrechen statt abschneiden */
.parallax-title {
    hyphens: auto;
    overflow-wrap: break-word;
}

@media (max-width: 639px) {
    .parallax-title {
        font-size: clamp(2rem, 10vw, 3rem) !important;
    }
}
</style>
