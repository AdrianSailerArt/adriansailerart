<script lang="ts" setup>
import ImagePost from '~/components/Gallery/ImagePost.vue';
import { cosplayImages } from '~/resources/imageSrc/cosplay';
import { cosplayIntro } from '~/resources/intros';

useSocialImage('/cosplay/Viking-3.jpg', 'Wikinger-Cosplay: Kriegerin mit Widderhörnern und Federschmuck');

useServiceSchema('Cosplay-Fotografie', 'Cosplay-Shootings mit gezieltem Licht und cineastischer Bildsprache, im Studio in Sexau bei Freiburg oder an passenden Orten draußen.');

useSeoMeta({
    title: 'Cosplay-Fotograf Freiburg & Schwarzwald',
    ogTitle: 'Cosplay Fotografie',
    description:
        'Cosplay-Shootings voller mystischer Welten und Fantasy – inszeniert mit gezieltem Licht und cineastischer Bildsprache.',
    ogDescription: 'Cosplay-Shootings im Studio bei Freiburg oder draußen im Schwarzwald, mit Licht wie im Film.',
    ogType: 'website'
});
</script>
<template>
    <div>
        <Hero
            show-logo
            title="Cosplay Galerie"
            subtitle="Mystische Welten & Fantasy"
            background-image="/cosplay/Viking-3.jpg"
            context="Cosplay-Fotograf im Schwarzwald"
        />
        <PageIntro :paragraphs="cosplayIntro" />
        <ImagePost :images="cosplayImages" layout="grid" />
    </div>
</template>
