<script lang="ts" setup>
import Text from '~/atomics/text/Text.vue';
import ImagePost from '~/components/Gallery/ImagePost.vue';
import Tab from '~/components/Tab.vue';
import type { LayoutProps } from '~/components/Gallery/variants/types';
import type { MediumReference } from '~/types';
import { natureIntro } from '~/resources/intros';
import { natureFaq } from '~/resources/faq/nature';
import natureMd from '~/resources/markdown/naturfotografie.md?raw';
import {
    islandImages,
    kanadaImages,
    lofotenImages,
    schwarzwaldImages,
    suedtirolImages
} from '~/resources/imageSrc/nature';

useSocialImage('/nature/Krai Woog Gumpen.jpg', 'Wasserfall Krai-Woog-Gumpen im Schwarzwald zwischen moosigen Felsen');

useSeoMeta({
    title: 'Naturfotografie Schwarzwald & Reisen',
    ogTitle: 'Naturfotografie aus dem Schwarzwald und von Reisen',
    description:
        'Wasserfälle, Wälder und Nachthimmel im Schwarzwald, dazu Landschaften aus Südtirol, Island, von den Lofoten und aus Kanada.',
    ogDescription: 'Naturfotografie aus dem Schwarzwald, Südtirol, Island, Norwegen und Kanada.',
    keywords:
        'Naturfotografie Schwarzwald, Landschaftsfotografie, Burgbachwasserfall, Hünersedel, Lofoten, Island',
    ogType: 'website'
});

type Region = {
    tab: string;
    title: string;
    text: string;
    images: Array<MediumReference>;
    layout: LayoutProps;
};

const regions: Array<Region> = [
    {
        tab: 'Schwarzwald',
        title: 'Schwarzwald & Freiburg',
        text: 'Wasserfälle wie der Burgbachwasserfall und die Krai-Woog-Gumpen, der Hünersedel unter der Milchstraße und Freiburg bei Nacht – meine Heimat vor der Haustür.',
        images: schwarzwaldImages,
        layout: 'masonry'
    },
    {
        tab: 'Südtirol',
        title: 'Südtirol',
        text: 'Die Drei Zinnen in den Dolomiten, einmal im weiten Panorama und einmal durch eine Felshöhle gesehen.',
        images: suedtirolImages,
        layout: 'grid'
    },
    {
        tab: 'Island',
        title: 'Island',
        text: 'Wasserfälle, Höhlen, schwarzer Sand und Berge unter grauem Himmel – Bilder von einer Reise im Jahr 2021.',
        images: islandImages,
        layout: 'masonry'
    },
    {
        tab: 'Lofoten',
        title: 'Lofoten',
        text: 'Steile Berge, türkise Buchten, rote Fischerhütten und Schafe an der Küste – Norwegen im Jahr 2024.',
        images: lofotenImages,
        layout: 'masonry'
    },
    {
        tab: 'Kanada',
        title: 'Kanada',
        text: 'Lynn Canyon bei Vancouver, ein Wal vor Tofino und ein Sonnenuntergang in Ucluelet auf Vancouver Island.',
        images: kanadaImages,
        layout: 'grid'
    }
];
</script>

<template>
    <div>
        <Hero
            show-logo
            title="Natur & Landschaft"
            subtitle="Wälder, Berge & Meer"
            background-image="/nature/Krai Woog Gumpen.jpg"
            context="Naturfotografie aus dem Schwarzwald und von Reisen"
        />
        <PageIntro :paragraphs="natureIntro" />
        <div class="mx-auto px-small4 sm:px-medium my-medium">
            <Tab :tabs="regions.map((region) => region.tab)">
                <template v-for="(region, index) in regions" :key="region.tab" #[`tab-${index}`]>
                    <div>
                        <Text as="h2" class="pl-medium pt-medium" variant="display">
                            {{ region.title }}
                        </Text>
                        <Text class="pl-medium pt-medium" variant="bodySemibold">
                            {{ region.text }}
                        </Text>
                        <ImagePost :images="region.images" :layout="region.layout" />
                    </div>
                </template>
            </Tab>
        </div>

        <div class="mx-auto max-w-4xl px-small4">
            <MarkdownRenderer :markdown-content="natureMd" />
        </div>

        <FaqList :entries="natureFaq" />
    </div>
</template>
