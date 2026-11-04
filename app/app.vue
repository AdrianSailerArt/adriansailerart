<script setup lang="ts">
const config = useRuntimeConfig();

// apple-touch-icon.png in /public wird von nuxt-seo-utils automatisch verlinkt
useHead({
    link: [
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: `${config.app.baseURL}favicon-48.png` },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: `${config.app.baseURL}favicon-192.png` }
    ]
});

// Standard-Vorschaubild, einzelne Seiten überschreiben es
useSocialImage('/people/Myra.jpg', 'Schwarzweiß-Portrait einer jungen Frau – Adrian Sailer Art');

useSeoMeta({
    title: 'Fotograf aus dem Schwarzwald',
    ogTitle: 'Adrian Sailer Art | Hochzeits-, Portrait- & Konzertfotograf',
    description:
        'Professionelle Fotografie aus dem Schwarzwald. Hochzeitsfotografie, Portraits, Konzertfotografie und Naturfotografie – authentische Bilder mit Charakter.',
    ogDescription:
        'Entdecke das Portfolio von Adrian Sailer. Emotionale Hochzeitsreportagen, kreative Portraits, energiegeladene Konzertfotografie und beeindruckende Landschaften aus dem Schwarzwald.',

    keywords:
        'Fotograf Schwarzwald, Fotograf Freiburg, Hochzeitsfotograf Freiburg, Hochzeitsfotograf Schwarzwald, Portraitfotograf Freiburg, Konzertfotograf, Naturfotografie, People Fotografie, Adrian Sailer',

    ogType: 'website',
    ogLocale: 'de_DE',

    author: 'Adrian Sailer',
    robots: 'index, follow',
});
</script>

<template>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
        <BlobMenu />

        <!--  <Transition
            name="page"
            mode="out-in"
        >
            <NuxtPage :key="$route.fullPath" />
        </Transition> -->
        <NuxtPage />
    </NuxtLayout>
</template>
