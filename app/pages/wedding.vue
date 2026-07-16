<script lang="ts" setup>
import ImagePost from '~/components/Gallery/ImagePost.vue';
import Hero from '~/components/Hero.vue';
import md1 from '~/resources/hochzeitsfotografie.md?raw';
import md2 from '~/resources/hochzeitsfotografie-leistungen.md?raw';
import md3 from '~/resources/hochzeitsfotograf-freiburg.md?raw';
import { cosplayImages } from '~/resources/imageSrc/cosplay';
import { weddingPlans } from '~/resources/buyBoxes/wedding';
</script>

<template>
    <div>
        <Hero
            image="/Logo_Adrian_Sailer_Art.png"
            title="Hochzeiten"
            subtitle="Eure Geschichte in Bildern"
            description="Emotionale Hochzeitsfotografie für echte Momente, Gefühle und Erinnerungen."
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
                    <MarkdownRenderer :markdown-content="md1" class="m-medium" />
                </div>
            </div>
   <ImagePost :images="cosplayImages" layout="carousel" />
            <div
                class="flex flex-col md:flex-row gap-small3 py-medium items-start"
            >
                <div class="md:w-1/2 order-2 md:order-1">
                    <MarkdownRenderer :markdown-content="md2" class="m-medium" />
                </div>
              

                <NuxtImg
                    src="/Logo_Adrian_Sailer_Art.png"
                    alt="Adrian Sailer"
                    class="w-full md:w-1/2 h-auto shrink-0 order-1 md:order-2"
                />
            </div>
               <ImagePost :images="cosplayImages" layout="carousel" />
                <div
                class="flex flex-col md:flex-row gap-small3 py-medium items-start"
            >
                <NuxtImg
                    src="/Logo_Adrian_Sailer_Art.png"
                    alt="Adrian Sailer"
                    class="w-full md:w-1/2 h-auto shrink-0"
                />

                <div class="md:w-1/2">
                    <MarkdownRenderer :markdown-content="md3" class="m-medium" />
                </div>
            </div>
        </div>
     
        <BuyBox :plans="weddingPlans" />
    </div>
</template>
