<script lang="ts" setup>
import Text from '~/atomics/text/Text.vue';
import ImagePost from '~/components/Gallery/ImagePost.vue';
import bandMd from '~/resources/markdown/bandfotografie.md?raw';
import referencesMd from '~/resources/markdown/bandfotografie-referenzen.md?raw';
import { promotionImages } from '~/resources/imageSrc/promotion';
import { bandIntro } from '~/resources/intros';
import { bandPlans } from '~/resources/buyBoxes/bands';
import { bandProcess } from '~/resources/process/bands';
import { bandFaq } from '~/resources/faq/bands';
import { ROUTES } from '~/statics/routes';

const heroImage = '/concert/promotion/ANORAK 2026.jpg';
const heroAlt = 'Bandfoto ANORAK: Sängerin im schwarzen Korsett und drei Musiker in einer dunklen Industriehalle';

useSocialImage(heroImage, heroAlt);

useServiceSchema(
    'Bandfotografie',
    'Promo-Shootings für Rock- und Metal-Bands in ganz Deutschland, im Studio in Sexau bei Freiburg oder on Location, mit vollen Nutzungsrechten bei Namensnennung.',
    bandPlans,
    ['Deutschland']
);

useSeoMeta({
    title: 'Bandfotograf Rock & Metal – Promo-Shootings',
    ogTitle: 'Bandfotos & Promo-Shootings für Rock und Metal',
    description:
        'Bandfotograf aus Freiburg für Rock und Metal: Promo-Shootings ab 500 € in ganz Deutschland, volle Nutzungsrechte bei Namensnennung.',
    ogDescription: 'Promo-Shootings für Rock- und Metal-Bands in ganz Deutschland, ab 500 €.',
    keywords: 'Bandfotograf, Bandfotos, Promo-Shooting Band, Bandshooting, Bandfotograf Freiburg, Metal Bandfotos, Rock Band Fotograf',
    ogType: 'website'
});
</script>

<template>
    <div class="overflow-x-hidden">
        <Hero
            show-logo
            title="Bandfotos & Promo"
            subtitle="Rock & Metal, deutschlandweit"
            :background-image="heroImage"
            :background-alt="heroAlt"
            context="Bandfotograf für Promo-Shootings von Rock- und Metal-Bands"
        />

        <PageIntro :paragraphs="bandIntro" />

        <section aria-labelledby="band-gallery" class="mx-auto px-small4 sm:px-medium my-medium">
            <Text id="band-gallery" as="h2" variant="display" class="pl-medium pt-medium">
                Promo-Shootings
            </Text>
            <ImagePost :images="promotionImages" layout="grid" />
        </section>

        <ImageText
            src="/concert/promotion/Behind the Scenes Promo-Shooting.webp"
            alt="Adrian Sailer beim Promo-Shooting mit der Rockband Unantastbar, mit Blitz in einer leeren Konzerthalle"
        >
            <MarkdownRenderer :markdown-content="bandMd" chip-lists class="m-medium" />
        </ImageText>

        <BuyBox :plans="bandPlans" :inquiry-link="`${ROUTES.CONTACT}/?topic=band`" />

        <ProcessSteps
            title="So läuft's ab"
            :steps="bandProcess"
            link-text="Shooting anfragen"
            :link-to="`${ROUTES.CONTACT}/?topic=band`"
        />

        <ImageText
            src="/concert/promotion/Kissin Dynamite Generation Goodbye Cover.webp"
            alt="Albumcover Kissin' Dynamite – Generation Goodbye – Dynamite Nights mit einem Live-Foto von Adrian Sailer"
            reverse
        >
            <MarkdownRenderer :markdown-content="referencesMd" class="m-medium" />
        </ImageText>

        <FaqList :entries="bandFaq" />
    </div>
</template>
