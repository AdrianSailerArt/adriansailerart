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
            image="/hochzeit/Hochzeit-3.jpg"
            title="Wedding Fotogragfie"
            description="Text für Hochzeiten"
            button-text="Mehr entdecken & buchen"
            :button-link="ROUTES.WEDDING"
            image-ratio="landscape"
            layout="left"
        />
        <ParallaxSection
            background-image="/people/Charlotte.jpg"
            title="Portraitfotografie"
            description="Zeitlose Portraits mit Fokus auf Persönlichkeit statt steifen Posen. Gemeinsam schaffen wir natürliche Bilder mit Charakter."
            button-text="Schau vorbei"
            height="large"
            :button-link="ROUTES.PEOPLE""
            align="left"
        />
       
      
        <FeatureSection
            image="/concert/KD Wacken 2022.jpg"
            title="Konzertfotografie"
            description="Von kleinen Clubshows bis hin zu Festivals halte ich Emotionen, Energie und Atmosphäre in einzigartigen Bildern fest."
            button-text="Mehr entdecken"
            :button-link="ROUTES.WEDDING"
            image-ratio="landscape"
            layout="right"
        />  <ParallaxSection
            background-image="/people/Elvira.jpg"
            height="large"
            image-only
        />
        <FeatureSection
            image="/adrian-sailer.jpg"
            title="Über mich"
            description="Seit über zehn Jahren begleite ich Konzerte, Festivals, Künstler und Menschen mit meiner Kamera. Angefangen hat alles in der Musikszene, wo ich durch meine Arbeit für Tribe Online die ersten Konzerte fotografierte. Was damals als Leidenschaft begann, entwickelte sich schnell zu meinem persönlichen Stil: authentische Bilder mit Atmosphäre, Emotion und Charakter."
            button-text="Über mich"
            :button-link="ROUTES.ABOUT"
            layout="left"
            image-style="frame"
            background="dark"
        />
    </div>
</template>
