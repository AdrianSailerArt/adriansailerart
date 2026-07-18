<script setup lang="ts">
import Text from '~/atomics/text/Text.vue';
import Button from '~/atomics/button/Button.vue';

type FeatureSectionProps = {
    image: string;
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;

    /**
     * Bild links oder rechts
     */
    layout?: 'left' | 'right';

    /**
     * Bildformat
     */
    imageRatio?: 'square' | 'portrait' | 'landscape';

    /**
     * Inhalt vertikal ausrichten
     */
    verticalAlign?: 'top' | 'center' | 'bottom';

    /**
     * Hintergrundfarbe
     */
    background?: 'white' | 'light' | 'dark';

    /**
     * Bildstil
     */
    imageStyle?: 'clean' | 'rounded' | 'frame';
};

const props = withDefaults(defineProps<FeatureSectionProps>(), {
    layout: 'left',
    imageRatio: 'portrait',
    verticalAlign: 'center',
    background: 'white',
    imageStyle: 'clean'
});

const imageRatioClass = computed(() => {
    switch (props.imageRatio) {
        case 'square':
            return 'aspect-square';

        case 'landscape':
            return 'aspect-[16/10]';

        default:
            return 'aspect-[4/5]';
    }
});

const alignClass = computed(() => {
    switch (props.verticalAlign) {
        case 'top':
            return 'items-start';

        case 'bottom':
            return 'items-end';

        default:
            return 'items-center';
    }
});

const backgroundClass = computed(() => {
    switch (props.background) {
        case 'light':
            return 'bg-gray20';

        case 'dark':
            return 'bg-gray50';

        default:
            return 'bg-white';
    }
});

const imageClass = computed(() => {
    switch (props.imageStyle) {
        case 'rounded':
            return 'rounded-rounded';

        case 'frame':
            return 'border-box p-small4';

        default:
            return '';
    }
});
</script>

<template>
    <section class="py-large lg:py-large3 transition-colors" :class="backgroundClass">
        <div class="mx-auto max-w-screen-2xl px-small4">
            <div
                class="grid gap-medium lg:grid-cols-2 lg:gap-large3"
                :class="[
                    alignClass,
                    layout === 'right'
                        ? 'lg:[&>*:first-child]:order-2'
                        : ''
                ]"
            >
                <!-- Image -->
                <div>
                    <NuxtImg
                     preset="static"
                        :src="image"
                        :alt="title"
                        class="h-full w-full object-cover"
                        :class="[imageRatioClass, imageClass]"
                    />
                </div>

                <!-- Content -->
                <div class="flex flex-col justify-center max-w-xl">
                    <Text as="h2" variant="h2" class="mb-medium">
                        {{ title }}
                    </Text>

                    <Text
                        variant="bodySemibold"
                        class="mb-large opacity-80 leading-relaxed"
                    >
                        {{ description }}
                    </Text>

                    <div v-if="buttonText">
                        <Button color="primary" fluid @click="navigateTo(buttonLink)">
                            {{ buttonText }} 
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
img {
    transition:
        transform 0.5s ease,
        filter 0.5s ease;
}

section:hover img {
    transform: scale(1.02);
}

.border-box {
    background: white;
    box-shadow: 0 12px 40px rgb(0 0 0 / 8%);
}
</style>
