<script lang="ts" setup>
import ImagePost from '~/components/Gallery/ImagePost.vue';

import md1 from '~/resources/markdown/hochzeitsfotografie.md?raw';
import md2 from '~/resources/markdown/hochzeitsfotografie-leistungen.md?raw';
import md3 from '~/resources/markdown/hochzeitsfotograf-freiburg.md?raw';

import { weddingPlans } from '~/resources/buyBoxes/wedding';
import { weddingProcess } from '~/resources/process/wedding';
import { weddingFaq } from '~/resources/faq/wedding';
import { hochzeitImages } from '~/resources/imageSrc/hochzeit';
import Text from '~/atomics/text/Text.vue';
import Sheet from '~/atomics/Sheet.vue';
import Link from '~/atomics/link/Link.vue';
import { ROUTES } from '~/statics/routes';

useSocialImage('/hochzeit/Hochzeit-5.jpg', 'Brautpaar küsst sich auf einer Wiese mit Bergpanorama');

useServiceSchema('Hochzeitsfotografie', 'Hochzeitsreportagen vom Standesamt bis zur ganztägigen Begleitung in Freiburg, am Kaiserstuhl und im Schwarzwald.', weddingPlans);

useSeoMeta({
    title: 'Hochzeitsfotograf Freiburg & Schwarzwald',
    ogTitle: 'Hochzeitsfotograf Schwarzwald & Freiburg',
    description:
        'Hochzeitsfotograf aus Sexau bei Freiburg: Pakete von 490 € bis 1.990 €, Bilder nach 2–4 Wochen. Freiburg, Kaiserstuhl und Schwarzwald.',
    ogDescription:
        'Emotionale Hochzeitsfotografie mit natürlichen Bildern und echten Momenten.',
    keywords:
        'Hochzeitsfotograf Freiburg, Hochzeitsfotograf Schwarzwald, Hochzeitsreportage, Hochzeit Baden-Württemberg',

    ogType: 'website'
});
</script>

<template>
    <div class="overflow-x-hidden">
        <HeroStack
            background-image="/hochzeit/Hochzeit-5.jpg"
            background-alt="Brautpaar küsst sich auf einer Wiese mit Bergpanorama"
            line1="Liebe"
            line2="Emotionen"
            line3="Leidenschaft"
            align="left"
            context="Hochzeitsfotograf in Freiburg und im Schwarzwald"
        />

        <div class="mx-auto max-w-full">
            <ProcessSteps
                title="So läuft's ab"
                :steps="weddingProcess"
                link-text="Pakete ansehen"
                link-to="#buchen"
            />

            <ImageText
                src="/hochzeit/Hochzeit-2.jpg"
                alt="Lächelnde Braut mit buntem Brautstrauß im Grünen"
            >
                <MarkdownRenderer :markdown-content="md1" class="m-medium" />
            </ImageText>

            <div class="w-full max-w-full overflow-hidden">
                <ImagePost :images="hochzeitImages" layout="carousel" />
            </div>

            <ImageText
                src="/hochzeit/Hochzeit-9.jpg"
                alt="Schwarzweißfoto: Brautpaar tanzt auf einer Wiese"
                reverse
            >
                <MarkdownRenderer :markdown-content="md2" chip-lists class="m-medium" />
            </ImageText>

            <ParallaxSection
                background-image="/hochzeit/Hochzeit-7.jpg"
                height="large"
                image-only
            />

            <ImageText
                src="/hochzeit/Hochzeit-4.jpg"
                alt="Brautpaar im verschneiten, nebligen Winterwald"
            >
                <MarkdownRenderer :markdown-content="md3" chip-lists class="m-medium" />
            </ImageText>

            <div id="buchen">
                <BuyBox :plans="weddingPlans" />
                <div class="mt-large p-large flex items-center-safe">
                    <Sheet v-reveal>
                        <Text variant="title" color="gray">
                            Nichts dabei? Gerne können wir auch ein
                            individuelles Paket erstellen</Text
                        >
                        <Link
                            class="mt-medium"
                            aria-label="Individuelles Paket anfragen"
                            :to="`${ROUTES.CONTACT}/?package=individuell`"
                        >
                            Jetzt anfragen
                        </Link>
                    </Sheet>
                </div>
            </div>

            <FaqList :entries="weddingFaq" />
        </div>
    </div>
</template>
