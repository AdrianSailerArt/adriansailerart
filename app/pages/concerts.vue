<script lang="ts" setup>
import ImagePost from '~/components/Gallery/ImagePost.vue';
import { concertImages } from '~/resources/imageSrc/concet';
import { promotionImages } from '~/resources/imageSrc/promotion';
import { concertIntro } from '~/resources/intros';
import { concertPlans } from '~/resources/buyBoxes/concerts';
import { concertFaq } from '~/resources/faq/concerts';
import concertMd from '~/resources/markdown/konzertfotografie.md?raw';

useSocialImage('/concert/BossHoss.jpg', 'The BossHoss mit Gitarre im grünen Bühnenlicht');

useServiceSchema('Konzertfotografie', 'Live- und Konzertfotografie sowie Bandfotos für Promotion für Bands, Künstler und Veranstalter im Schwarzwald, in Freiburg und deutschlandweit.', concertPlans);

useSeoMeta({
    title: 'Konzertfotograf Freiburg & Schwarzwald',
    ogTitle: 'Live- & Konzertfotograf',
    description:
        'Konzert- und Bandfotograf bei Freiburg: Live-Fotos 1–3 Tage nach der Show, Promo-Shootings für Bands ab 500 €. Im Schwarzwald und deutschlandweit.',
    ogDescription: 'Konzertfotografie aus dem Schwarzwald und deutschlandweit.',
    keywords:
        'Konzertfotograf, Festivalfotografie, Bandfotografie, Livefotografie',

    ogType: 'website'
});
</script>
<template>
    <div>
        <Hero
            show-logo
            title="Konzerte und Artist Galerie"
            subtitle="Einzigartige Momente & Energie"
            background-image="/concert/BossHoss.jpg"
            background-alt="The BossHoss mit Gitarre im grünen Bühnenlicht"
            context="Konzertfotograf aus dem Schwarzwald"
        />
        <PageIntro :paragraphs="concertIntro" />
        <div class="mx-auto px-small4 sm:px-medium my-medium">
            <Tab :tabs="['On Stage', 'Promotion']">
                <template #tab-0>
                    <ImagePost :images="concertImages" layout="grid"
                /></template>
                <template #tab-1>
                    <ImagePost :images="promotionImages" layout="grid" />
                </template>
            </Tab>
        </div>

        <div class="mx-auto max-w-4xl px-small4">
            <MarkdownRenderer :markdown-content="concertMd" chip-lists />
        </div>

        <FaqList :entries="concertFaq" />
    </div>
</template>
