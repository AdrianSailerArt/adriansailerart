<script lang="ts" setup>
import ImagePost from '~/components/Gallery/ImagePost.vue';
import { cosplayImages } from '~/resources/imageSrc/cosplay';

useSocialImage('/cosplay/Viking-3.jpg', 'Wikinger-Cosplay: Kriegerin mit Widderhörnern und Federschmuck');

useSeoMeta({
    title: 'Cosplay Fotografie',
    ogTitle: 'Cosplay Fotografie',
    description:
        'Cosplay-Shootings voller mystischer Welten und Fantasy – inszeniert mit gezieltem Licht und cineastischer Bildsprache.',
    ogType: 'article'
});
</script>
<template>
    <div>
        <Hero
            image="/Logo_Adrian_Sailer_Art.png"
            title="Cosplay Galerie"
            subtitle="Mystische Welten & Fantasy"
        
            background-image="/cosplay/Viking-3.jpg"
        />
        <ImagePost :images="cosplayImages" layout="grid" />
    </div>
</template>
