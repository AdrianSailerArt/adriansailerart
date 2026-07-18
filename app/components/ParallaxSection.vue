<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';

import Text from '~/atomics/text/Text.vue';
import Button from '~/atomics/button/Button.vue';

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

const config = useRuntimeConfig();

const backgroundImageUrl = computed(() => {
    return `${config.app.baseURL}${props.backgroundImage.replace(/^\//, '')}`;
});

const section = ref<HTMLElement | null>(null);
const offset = ref(0);

const handleScroll = () => {
    if (!section.value) return;

    const rect = section.value.getBoundingClientRect();

    const scrollPosition = window.innerHeight - rect.top;

    offset.value = scrollPosition * 0.15;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll, {
        passive: true
    });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
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
            class="absolute inset-0 scale-150 bg-cover bg-center will-change-transform"
            :style="{
                backgroundImage: `url('${backgroundImageUrl}')`,
                transform: `translateY(${offset}px)`
            }"
        />

        <!-- Overlay nur wenn Inhalt vorhanden -->
        <div
            v-if="overlay && hasContent"
            class="absolute inset-0 bg-black/40"
        />

        <!-- Content -->
        <div
            v-if="hasContent && !imageOnly"
            class="relative z-background mx-auto flex w-full max-w-screen-2xl px-small4"
            :class="alignClass"
        >
            <div class="max-w-3xl">
                <Text v-if="title" as="h2" variant="h1" color="primary">
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

                <Button
                    v-if="buttonText"
                    class="mt-large"
                    @click="navigateTo(buttonLink)"
                >
                    {{ buttonText }}
                </Button>
            </div>
        </div>
    </section>
</template>
