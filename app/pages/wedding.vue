<script lang="ts" setup>
import ImagePost from '~/components/Gallery/ImagePost.vue';

import md1 from '~/resources/hochzeitsfotografie.md?raw';
import md2 from '~/resources/hochzeitsfotografie-leistungen.md?raw';
import md3 from '~/resources/hochzeitsfotograf-freiburg.md?raw';

import { weddingPlans } from '~/resources/buyBoxes/wedding';
import { hochzeitImages } from '~/resources/imageSrc/hochzeit';
import Text from '~/atomics/text/Text.vue';
import Sheet from '~/atomics/Sheet.vue';
</script>

<template>
    <div class="overflow-x-hidden">
        <HeroStack
            background-image="/hochzeit/Hochzeit-5.jpg"
            line1="Liebe"
            line2="Emotionen"
            line3="Leidenschaft"
            align="left"
        />

        <div class="mx-auto max-w-full">
            <div
                class="flex flex-col md:flex-row gap-small3 py-medium items-start"
            >
                <NuxtImg
                    src="/hochzeit/Hochzeit-2.jpg"
                    alt="Adrian Sailer"
                    class="w-full md:w-1/2 h-auto shrink-0"
                />

                <div class="w-full md:w-1/2">
                    <MarkdownRenderer
                        :markdown-content="md1"
                        class="m-medium"
                    />
                </div>
            </div>

            <div class="w-full max-w-full overflow-hidden">
                <ImagePost :images="hochzeitImages" layout="carousel" />
            </div>

            <div
                class="flex flex-col md:flex-row gap-small3 py-medium items-start"
            >
                <div class="w-full md:w-1/2 order-2 md:order-1">
                    <MarkdownRenderer
                        :markdown-content="md2"
                        class="m-medium"
                    />
                </div>

                <NuxtImg
                    src="/hochzeit/Hochzeit-9.jpg"
                    alt="Adrian Sailer"
                    class="w-full md:w-1/2 h-auto shrink-0 order-1 md:order-2"
                />
            </div>

            <ParallaxSection
                background-image="/hochzeit/Hochzeit-7.jpg"
                height="large"
                image-only
            />

            <div
                class="flex flex-col md:flex-row gap-small3 py-medium items-start"
            >
                <NuxtImg
                    src="/hochzeit/Hochzeit-4.jpg"
                    alt="Adrian Sailer"
                    class="w-full md:w-1/2 h-auto shrink-0"
                />

                <div class="w-full md:w-1/2">
                    <MarkdownRenderer
                        :markdown-content="md3"
                        class="m-medium"
                    />
                </div>
            </div>

            <div id="buchen">
                <BuyBox :plans="weddingPlans" />
                <div class="mt-large p-large flex items-center-safe">
                    <Sheet>
                        <Text variant="title" color="gray">
                            Nichts dabei? Gerne können wir auch ein
                            individeulles Paket erstellen</Text
                        >
                    </Sheet>
                </div>
            </div>
        </div>
    </div>
</template>
