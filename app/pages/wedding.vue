<script lang="ts" setup>
import ImagePost from '~/components/Gallery/ImagePost.vue';
import Hero from '~/components/Hero.vue';
import md from '~/resources/about.md?raw';
import { cosplayImages } from '~/resources/imageSrc/cosplay';
import { weddingPlans } from '~/resources/buyBoxes/wedding';
</script>

<template>
    <div>
        <Hero
            image="/Logo_Adrian_Sailer_Art.png"
            title="Cosplay Gallerie"
            subtitle="Cosplay & Fantasy"
            description="Entdecken Sie die besten Produkte und Dienstleistungen für Ihre Bedürfnisse."
            background-image="/cosplay/Keira Metz - Anna Rosa-2.jpg"
        />
        <div class="my-none mx-auto">
            <div
                class="flex flex-col md:flex-row gap-small3 py-medium items-start"
            >
                <NuxtImg
                    src="/Logo_Adrian_Sailer_Art.png"
                    alt="Adrian Sailer"
                    class="w-full md:w-1/2 h-auto shrink-0"
                />

                <div class="md:w-1/2">
                    <MarkdownRenderer :markdown-content="md" class="m-medium" />
                </div>
            </div>

            <div
                class="flex flex-col md:flex-row gap-small3 py-medium items-start"
            >
                <div class="md:w-1/2 order-2 md:order-1">
                    <MarkdownRenderer :markdown-content="md" class="m-medium" />
                </div>

                <NuxtImg
                    src="/Logo_Adrian_Sailer_Art.png"
                    alt="Adrian Sailer"
                    class="w-full md:w-1/2 h-auto shrink-0 order-1 md:order-2"
                />
            </div>
        </div>
        <ImagePost :images="cosplayImages" layout="grid" />
        <BuyBox :plans="weddingPlans" />
    </div>
</template>
