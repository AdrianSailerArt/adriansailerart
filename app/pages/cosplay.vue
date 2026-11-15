<script lang="ts" setup>
import ImagePost from '~/components/Gallery/ImagePost.vue';
import { cosplayImages } from '~/resources/imageSrc/cosplay';
import { cosplayIntro } from '~/resources/intros';
import { cosplayFaq } from '~/resources/faq/cosplay';
import cosplayMd from '~/resources/markdown/cosplayfotografie.md?raw';

useSocialImage('/cosplay/Viking-3.jpg', 'Wikinger-Cosplay: Kriegerin mit Widderhörnern und Federschmuck');

useServiceSchema('Cosplay-Fotografie', 'Cosplay-Shootings mit gezieltem Licht und cineastischer Bildsprache, im Studio in Sexau bei Freiburg oder an passenden Orten draußen.');

useSeoMeta({
    title: 'Cosplay-Fotograf Freiburg & Schwarzwald',
    ogTitle: 'Cosplay Fotografie',
    description:
        'Cosplay-Fotograf bei Freiburg: TFP-Shootings bei Ideen, die mich begeistern, im Studio oder draußen im Schwarzwald. Bilder nach 1–2 Wochen.',
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

        <div class="mx-auto max-w-4xl px-small4">
            <MarkdownRenderer :markdown-content="cosplayMd" chip-lists />
        </div>

        <FaqList :entries="cosplayFaq" />
    </div>
</template>
