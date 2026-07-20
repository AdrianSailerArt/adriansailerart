<script lang="ts" setup>
import Text from '~/atomics/text/Text.vue';
import ImagePost from '~/components/Gallery/ImagePost.vue';
import Tab from '~/components/Tab.vue';
import { peopleImages } from '~/resources/imageSrc/people';
import { regenImages } from '~/resources/imageSrc/regen';
import { trachtImages } from '~/resources/imageSrc/tracht';

useSeoMeta({
    title: 'Portraitfotografie | Adrian Sailer Art',
    ogTitle: 'Portraitfotograf Freiburg & Schwarzwald',
    description:
        'Natürliche Portraits für Privatpersonen, Paare und Business. Authentische Bilder mit Persönlichkeit.',
    ogDescription: 'Portraitfotografie in Freiburg und dem Schwarzwald.',
    keywords:
        'Portraitfotograf Freiburg, Business Portrait, Paarshooting, People Fotografie',
    //  ogImage: '/images/social/portrait.jpg',

    ogType: 'article'
});
</script>
<template>
    <div>
        <Hero
            image="/Logo_Adrian_Sailer_Art.png"
            title="People Gallerie"
            subtitle="Menschen & Emotionen"
            background-image="/people/Elvira-2.jpg"
        />
        <div class="mx-auto px-medium my-medium">
            <Tab :tabs="['Portaits', 'Regenschooting', 'Trachten']">
                <template #tab-0>
                    <div>
                        <Text class="pl-medium pt-medium" variant="display"
                            >Portaits</Text
                        >
                        <Text class="pl-medium pt-medium" variant="bodySemibold"
                            >Lorem Ipsum</Text
                        >
                        <ImagePost :images="peopleImages" layout="grid" />
                    </div>
                </template>

                <template #tab-1>
                    <div>
                        <Text class="pl-medium pt-medium" variant="display"
                            >Regenschooting</Text
                        >
                        <Text class="pl-medium pt-medium" variant="bodySemibold"
                            >Lorem Ipsum</Text
                        >
                        <ImagePost :images="regenImages" layout="masonry" />
                    </div>
                </template>
                <template #tab-2>
                    <div>
                        <Text class="pl-medium pt-medium" variant="display"
                            >Trachten</Text
                        >
                        <Text class="pl-medium pt-medium" variant="bodySemibold"
                            >Lorem Ipsum</Text
                        >
                        <ImagePost :images="trachtImages" layout="feature" />
                    </div>
                </template>
            </Tab>
        </div>
    </div>
</template>
