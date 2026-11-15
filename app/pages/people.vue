<script lang="ts" setup>
import Text from '~/atomics/text/Text.vue';
import ImagePost from '~/components/Gallery/ImagePost.vue';
import Tab from '~/components/Tab.vue';
import { peopleImages } from '~/resources/imageSrc/people';
import { regenImages } from '~/resources/imageSrc/regen';
import { trachtImages } from '~/resources/imageSrc/tracht';
import { peopleIntro } from '~/resources/intros';
import { portraitPlans } from '~/resources/buyBoxes/people';
import { peopleFaq } from '~/resources/faq/people';
import portraitMd from '~/resources/markdown/portraitfotografie.md?raw';

useSocialImage('/people/Elvira-2.jpg', 'Studioportrait: Frau mit roten Haaren auf einer Holzkiste neben Leiter und Scheinwerfer');

useServiceSchema('Portraitfotografie', 'Portraits für Privatpersonen, Paare und Business sowie Regenshootings und Trachtenportraits im Studio in Sexau und im Schwarzwald.', portraitPlans);

useSeoMeta({
    title: 'Portraitfotograf Freiburg & Schwarzwald',
    ogTitle: 'Portraitfotograf Freiburg & Schwarzwald',
    description:
        'Portraitfotograf bei Freiburg: Shooting ab 149 € im Studio in Sexau oder im Schwarzwald. Auch Regen-, Trachten- und TFP-Shootings.',
    ogDescription: 'Portraitfotografie in Freiburg und dem Schwarzwald.',
    keywords:
        'Portraitfotograf Freiburg, Business Portrait, Paarshooting, People Fotografie',

    ogType: 'website'
});
</script>
<template>
    <div>
        <Hero
            show-logo
            title="People Galerie"
            subtitle="Menschen & Emotionen"
            background-image="/people/Elvira-2.jpg"
            context="Portraitfotograf in Freiburg und im Schwarzwald"
        />
        <PageIntro :paragraphs="peopleIntro" />
        <div class="mx-auto px-small4 sm:px-medium my-medium">
            <Tab :tabs="['Portraits', 'Regenshooting', 'Trachten']">
                <template #tab-0>
                    <div>
                        <Text as="h2" class="pl-medium pt-medium" variant="display"
                            >Portraits</Text
                        >
                        <Text class="pl-medium pt-medium" variant="bodySemibold"
                            >Zeitlose Portraits mit Fokus auf Persönlichkeit statt steifen Posen. Gemeinsam schaffen wir natürliche Bilder mit Charakter.</Text
                        >
                        <ImagePost :images="peopleImages" layout="grid" />
                    </div>
                </template>

                <template #tab-1>
                    <div>
                        <Text as="h2" class="pl-medium pt-medium" variant="display"
                            >Regenshooting</Text
                        >
                        <Text class="pl-medium pt-medium" variant="bodySemibold"
                            >Aufwendige Regenshootings in meinem Studio in Sexau – mit gezieltem Licht, kreativen Sets und einer cineastischen Bildsprache.</Text
                        >
                        <ImagePost :images="regenImages" layout="masonry" />
                    </div>
                </template>
                <template #tab-2>
                    <div>
                        <Text as="h2" class="pl-medium pt-medium" variant="display"
                            >Trachten</Text
                        >
                        <Text class="pl-medium pt-medium" variant="bodySemibold"
                            >Traditionen und Heimat des Schwarzwaldes – fernab von Klischees und immer mit dem Blick für die kleinen Details.</Text
                        >
                        <ImagePost :images="trachtImages" layout="feature" />
                    </div>
                </template>
            </Tab>
        </div>

        <div class="mx-auto max-w-4xl px-small4">
            <MarkdownRenderer :markdown-content="portraitMd" chip-lists />
        </div>

        <FaqList :entries="peopleFaq" />
        <GoogleReviews />
    </div>
</template>
