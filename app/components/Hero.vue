<script lang="ts" setup>
import Text from '~/atomics/text/Text.vue';

type HeroProps = {
    title: string;
    subtitle: string;
    description: string;
};

const props = defineProps<HeroProps>();
</script>

<template>
    <div
        class="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
        style="background-image: url('/images/hero.jpg')"
    >
        <div
            class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-50"
        ></div>

        <div class="px-4 sm:px-6 lg:px-8 z-10">
            <div class="text-center">
                <div>
                    <Text as="h1" variant="h1" color="primary">
                        {{ title }}
                    </Text>
                    <Text as="h2" variant="h2" color="standard">
                        {{ subtitle }}
                    </Text>
                </div>
                <Text variant="bodyMedium" class="mt-3">
                    {{ description }}
                </Text>
            </div>
        </div>
    </div>
</template>
