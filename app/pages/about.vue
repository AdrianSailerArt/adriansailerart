<script lang="ts" setup>
import md from '~/resources/markdown/about.md?raw';
import { contactInformation } from '~/resources/contactInformation';

const { url } = useSiteConfig();
const base = url.replace(/\/$/, '');

// Eigene Person neben der Firma, damit "Adrian Sailer" und "Adrian Sailer Art" als eine Quelle erkannt werden
useSchemaOrg([
    {
        '@type': 'Person',
        '@id': `${base}/#adrian-sailer`,
        name: 'Adrian Sailer',
        jobTitle: 'Fotograf',
        description: 'Fotograf und Medieninformatiker (B.Sc.) aus Sexau bei Freiburg: Hochzeiten, Portraits, Konzerte, Bands, Cosplay und Natur.',
        image: `${base}/adrian-sailer.jpg`,
        url: `${base}/about/`,
        worksFor: { '@id': `${base}/#identity` },
        knowsAbout: ['Hochzeitsfotografie', 'Portraitfotografie', 'Konzertfotografie', 'Bandfotografie', 'Cosplay-Fotografie', 'Naturfotografie', 'Medieninformatik'],
        sameAs: [contactInformation.instagram, contactInformation.googleProfile]
    }
]);

useSocialImage('/adrian-sailer.jpg', 'Adrian Sailer mit Sofortbildkamera im Studio');

useSeoMeta({
    title: 'Über mich – Fotograf Adrian Sailer',
    ogTitle: 'Über Adrian Sailer',
    description:
        'Adrian Sailer, Fotograf und Medieninformatiker aus Sexau bei Freiburg: über zehn Jahre Konzerte, Bands, Portraits und Hochzeiten, u. a. für Metal Hammer.',
    ogDescription:
        'Mehr über Adrian Sailer und seine fotografische Leidenschaft.',
    keywords: 'Adrian Sailer, Fotograf Freiburg, Fotograf Schwarzwald',

    ogType: 'profile'
});
</script>

<template>
    <div class="my-none mx-auto flex flex-col md:flex-row md:items-start gap-small3 py-medium">
        <NuxtImg
            src="/adrian-sailer.jpg"
            alt="Adrian Sailer mit Sofortbildkamera im Studio"
            width="800"
            height="800"
            preset="static"
            sizes="xs:100vw lg:50vw 2xl:50vw"
            class="w-full md:w-1/2 h-auto shrink-0 md:sticky md:top-20"
        />

        <div class="md:w-1/2">
            <MarkdownRenderer :markdown-content="md" class="m-medium" />
        </div>
    </div>
</template>
