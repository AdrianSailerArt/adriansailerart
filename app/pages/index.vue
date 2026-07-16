<script lang="ts" setup>
import { ROUTES } from '~/statics/routes';
</script>

<template>
    <div>
        <HeroStack
            background-image="/people/Myra.jpg"
            line1="Emotion"
            line2="Menschen"
            line3="Schwarzwald"
            align="left"
        />
        <FeatureSection
            image="/people/Vintage-2.jpg"
            title="Wedding Fotogragfie"
            description="Text für Hochzeiten"
            button-text="Mehr entdecken & buchen"
            :button-link="ROUTES.WEDDING"
            image-ratio="landscape"
            layout="left"
        />
        <ParallaxSection
            background-image="/people/Myra.jpg"
            title="Portraitfotografie"
            description="Authentische Bilder mit Charakter und Persönlichkeit."
            button-text="Termin buchen"
            height="large"
            button-link="/kontakt"
            align="left"
        />
        <FeatureSection
            image="/people/Vintage-2.jpg"
            title="Portraitfotografie"
            description="Zeitlose Portraits mit Fokus auf Persönlichkeit statt steifen Posen. Gemeinsam schaffen wir natürliche Bilder mit Charakter."
            button-text="Mehr erfahren"
            :button-link="ROUTES.PEOPLE"
            layout="right"
            image-ratio="square"
            image-style="rounded"
            background="light"
        />
        <ParallaxSection
            background-image="/people/Elvira.jpg"
            height="large"
            image-only
        />
        <FeatureSection
            image="/people/Vintage-2.jpg"
            title="Konzertfotografie"
            description="Von kleinen Clubshows bis hin zu Festivals halte ich Emotionen, Energie und Atmosphäre in einzigartigen Bildern fest."
            button-text="Mehr entdecken"
            :button-link="ROUTES.WEDDING"
            image-ratio="landscape"
            layout="left"
        />
        <FeatureSection
            image="/adrian-sailer.jpg"
            title="Über mich"
            description="Von kleinen Clubshows bis hin zu Festivals halte ich Emotionen, Energie und Atmosphäre in einzigartigen Bildern fest."
            button-text="Referenzen"
            :button-link="ROUTES.ABOUT"
            layout="left"
            image-style="frame"
            background="dark"
        />
    </div>
</template>
