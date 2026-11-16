<script lang="ts" setup>
import schlossbergMd from '~/resources/markdown/fotospots-freiburg/schlossberg.md?raw';
import theaterMd from '~/resources/markdown/fotospots-freiburg/theater.md?raw';
import altstadtMd from '~/resources/markdown/fotospots-freiburg/altstadt.md?raw';
import shootingMd from '~/resources/markdown/fotospots-freiburg/shooting.md?raw';
import { photoSpotsFreiburgIntro } from '~/resources/intros';
import { photoSpotsFreiburgFaq } from '~/resources/faq/photoSpotsFreiburg';
import { freiburgSpots } from '~/resources/photoSpots';

const heroImage = '/nature/freiburg nacht.jpg';
const heroAlt = 'Freiburg bei Nacht vom Schlossberg, in der Mitte das beleuchtete Münster';

useSocialImage(heroImage, heroAlt);
usePhotoSpotSchema(freiburgSpots);

useSeoMeta({
    title: 'Fotospots Freiburg: Schlossberg & Altstadt',
    ogTitle: 'Fotospots in Freiburg',
    description:
        'Die besten Fotospots in Freiburg vom Fotografen: Kanonenplatz auf dem Schlossberg, Theater im Regen und Altstadt, mit Zeiten, Anfahrt und Einstellungen.',
    ogDescription: 'Schlossberg, Theater und Altstadt: wo, wann und wie du in Freiburg die besten Fotos machst.',
    keywords: 'Fotospots Freiburg, Fotografieren Freiburg, Schlossberg Freiburg Aussicht, Kanonenplatz, Fotoshooting Freiburg',
    ogType: 'article'
});
</script>

<template>
    <div class="overflow-x-hidden">
        <Hero
            title="Fotospots Freiburg"
            subtitle="Schlossberg, Theater & Altstadt"
            :background-image="heroImage"
            :background-alt="heroAlt"
            context="Fotospots in Freiburg im Breisgau, vorgestellt vom Fotografen Adrian Sailer"
        />

        <PageIntro :paragraphs="photoSpotsFreiburgIntro" />

        <div class="mx-auto max-w-full">
            <ImageText
                src="/nature/freiburg nacht.jpg"
                alt="Freiburg bei Nacht vom Kanonenplatz auf dem Schlossberg, in der Mitte das beleuchtete Münster"
            >
                <MarkdownRenderer :markdown-content="schlossbergMd" class="m-medium" />
            </ImageText>

            <ImageText
                src="/nature/Theater Freiburg.jpg"
                alt="Schwarzweiß: Theater Freiburg im Regen, Passanten mit Regenschirm laufen vorbei"
                reverse
            >
                <MarkdownRenderer :markdown-content="theaterMd" class="m-medium" />
            </ImageText>

            <div class="mx-auto max-w-4xl px-small4">
                <MarkdownRenderer :markdown-content="altstadtMd" />
                <MarkdownRenderer :markdown-content="shootingMd" />
            </div>
        </div>

        <FaqList :entries="photoSpotsFreiburgFaq" />
    </div>
</template>
