<script lang="ts" setup>
import ImagePost from '~/components/Gallery/ImagePost.vue';
import { concertImages } from '~/resources/imageSrc/concet';
import Text from '~/atomics/text/Text.vue';
import { concertIntro } from '~/resources/intros';

useSocialImage('/concert/BossHoss.jpg', 'The BossHoss mit Gitarre im grünen Bühnenlicht');

useServiceSchema('Konzertfotografie', 'Live- und Konzertfotografie für Bands, Künstler und Veranstalter im Schwarzwald, in Freiburg und deutschlandweit.');

useSeoMeta({
    title: 'Konzertfotograf Freiburg & Schwarzwald',
    ogTitle: 'Live- & Konzertfotograf',
    description:
        'Dynamische Konzertfotografie für Bands, Festivals und Veranstalter. Energiegeladene Live-Momente professionell festgehalten.',
    ogDescription: 'Konzertfotografie aus dem Schwarzwald und deutschlandweit.',
    keywords:
        'Konzertfotograf, Festivalfotografie, Bandfotografie, Livefotografie',

    ogType: 'article'
});
</script>
<template>
    <div>
        <Hero
            show-logo
            title="Konzerte und Artist Galerie"
            subtitle="Einzigartige Momente & Energie"
            background-image="/concert/BossHoss.jpg"
            context="Konzertfotograf aus dem Schwarzwald"
        />
        <PageIntro :paragraphs="concertIntro" />
        <div class="mx-auto px-small4 sm:px-medium my-medium">
            <Tab :tabs="['On Stage', 'Promotion']">
                <template #tab-0>
                    <ImagePost :images="concertImages" layout="grid"
                /></template>
                <template #tab-1>
                    <Text class="p-medium" variant="bodySemibold">Coming soon</Text>
                </template>
            </Tab>
        </div>
    </div>
</template>
