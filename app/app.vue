<script setup lang="ts">
const config = useRuntimeConfig();

const faviconUrl = computed(() => {
    return `${config.app.baseURL}favicon.png`;
});

useSeoMeta({
    title: 'Adrian Sailer Art | Fotograf aus dem Schwarzwald',
    ogTitle: 'Adrian Sailer Art | Hochzeits-, Portrait- & Konzertfotograf',
    description:
        'Professionelle Fotografie aus dem Schwarzwald. Hochzeitsfotografie, Portraits, Konzertfotografie und Naturfotografie – authentische Bilder mit Charakter.',
    ogDescription:
        'Entdecke das Portfolio von Adrian Sailer. Emotionale Hochzeitsreportagen, kreative Portraits, energiegeladene Konzertfotografie und beeindruckende Landschaften aus dem Schwarzwald.',

    keywords:
        'Fotograf Schwarzwald, Fotograf Freiburg, Hochzeitsfotograf Freiburg, Hochzeitsfotograf Schwarzwald, Portraitfotograf Freiburg, Konzertfotograf, Naturfotografie, People Fotografie, Adrian Sailer',

    ogImage: faviconUrl,
    twitterImage: faviconUrl,

    ogType: 'website',
    ogLocale: 'de_DE',

    author: 'Adrian Sailer',
    robots: 'index, follow',
});
</script>

<template>
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
