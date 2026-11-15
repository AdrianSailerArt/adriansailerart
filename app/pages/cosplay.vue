<script lang="ts" setup>
import ImagePost from '~/components/Gallery/ImagePost.vue';
import { cosplayImages } from '~/resources/imageSrc/cosplay';
import { cosplayIntro } from '~/resources/intros';

useSocialImage('/cosplay/Viking-3.jpg', 'Wikinger-Cosplay: Kriegerin mit Widderhörnern und Federschmuck');

useServiceSchema('Cosplay-Fotografie', 'Cosplay-Shootings mit gezieltem Licht und cineastischer Bildsprache im Studio in Sexau bei Freiburg.');

useSeoMeta({
    title: 'Cosplay-Fotograf Freiburg & Schwarzwald',
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
            context="Cosplay-Fotograf im Schwarzwald"
        />
        <PageIntro :paragraphs="cosplayIntro" />
        <ImagePost :images="cosplayImages" layout="grid" />
    </div>
</template>
