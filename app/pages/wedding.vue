<script lang="ts" setup>
import ImagePost from '~/components/Gallery/ImagePost.vue';
import Hero from '~/components/Hero.vue';
import md1 from '~/resources/hochzeitsfotografie.md?raw';
import md2 from '~/resources/hochzeitsfotografie-leistungen.md?raw';
import md3 from '~/resources/hochzeitsfotograf-freiburg.md?raw';

import { weddingPlans } from '~/resources/buyBoxes/wedding';
import { hochzeitImages } from '~/resources/imageSrc/hochzeit';
</script>

<template>
    <div>
        <HeroStack
            background-image="/hochzeit/Hochzeit-5.jpg"
            line1="Liebe"
            line2="Emotionen"
            line3="Leidenschaft"
            align="left"
        />
       
        <div class="my-none mx-auto">
            <div
                class="flex flex-col md:flex-row gap-small3 py-medium items-start"
            >
                <NuxtImg
                    src="/hochzeit/Hochzeit-2.jpg"
                    alt="Adrian Sailer"
                    class="w-full md:w-1/2 h-auto shrink-0"
                />

                <div class="md:w-1/2">
                    <MarkdownRenderer
                        :markdown-content="md1"
                        class="m-medium"
                    />
                </div>
            </div>
            <ImagePost :images="hochzeitImages" layout="carousel" />
            <div
                class="flex flex-col md:flex-row gap-small3 py-medium items-start"
            >
                <div class="md:w-1/2 order-2 md:order-1">
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

                <div class="md:w-1/2">
                    <MarkdownRenderer
                        :markdown-content="md3"
                        class="m-medium"
                    />
                </div>
            </div>
        </div>

        <BuyBox :plans="weddingPlans" />
    </div>
</template>
