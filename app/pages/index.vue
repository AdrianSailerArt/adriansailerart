<script lang="ts" setup>
import { ROUTES } from '~/statics/routes';
import { homeIntro } from '~/resources/intros';
import { homeFaq } from '~/resources/faq/home';

useSeoMeta({
    description:
        'Fotograf aus Sexau bei Freiburg: Hochzeiten von 490 € bis 1.990 €, Portraits ab 149 €, Konzert- und Bandfotos. Studio in Sexau, Shootings im Schwarzwald.'
});
</script>

<template>
    <div>
        <HeroStack
            background-image="/people/Myra.jpg"
            background-alt="Schwarzweiß-Portrait: junge Frau mit hellen Haaren"
            line1="Emotion"
            line2="Menschen"
            line3="Schwarzwald"
            align="left"
            context="Fotograf in Freiburg und im Schwarzwald"
        />
        <PageIntro :paragraphs="homeIntro" />
        <FeatureSection
            image="/hochzeit/Hochzeit-3.jpg"
            image-alt="Schwarzweißfoto eines Brautpaars auf einer Wiese vor Schwarzwaldhügeln"
            title="Hochzeitsfotografie"
            description="Natürliche Bilder, echte Emotionen und Erinnerungen, die euch ein Leben lang begleiten. Ich begleite euren Tag aufmerksam und unaufdringlich, in Freiburg, am Kaiserstuhl und im Schwarzwald. Pakete von 490 € bis 1.990 €, eure Bilder kommen nach 2 bis 4 Wochen."
            button-text="Mehr entdecken & buchen"
            :button-link="ROUTES.WEDDING"
            image-ratio="landscape"
            layout="left"
        />
        <ParallaxSection
            background-image="/people/Charlotte.jpg"
            title="Portraitfotografie"
            description="Zeitlose Portraits mit Fokus auf Persönlichkeit statt steifen Posen. Im Studio in Sexau oder draußen, ab 149 €, dazu Regen-, Trachten- und TFP-Shootings."
            button-text="Schau vorbei"
            height="large"
            :button-link="ROUTES.PEOPLE"
            align="left"
        />
       
      
        <FeatureSection
            image="/concert/KD Wacken 2022.jpg"
            image-alt="Crowdsurfer über dem Publikum vor der Bühne beim Wacken Open Air 2022"
            title="Konzertfotografie"
            description="Von kleinen Clubshows bis hin zum Wacken Open Air halte ich Emotionen, Energie und Atmosphäre fest. Live-Fotos bekommt ihr 1 bis 3 Tage nach der Show, Promo-Shootings für Bands gibt es ab 500 €."
            button-text="Mehr entdecken"
            :button-link="ROUTES.CONCERTS"
            image-ratio="landscape"
            layout="right"
        />
        <FeatureSection
            image="/concert/promotion/Unantastbar Shooting Südtirol 2021.jpg"
            image-alt="Bandfoto Unantastbar: fünf Musiker auf einem Altstadtplatz in Südtirol vor einem mittelalterlichen Uhrturm"
            title="Bandfotos & Promo"
            description="Promo-Shootings für Rock- und Metal-Bands in ganz Deutschland: im Studio oder an einer Location, die zu eurem Sound passt, mit Blitz statt Handy-Gruppenfoto. Ab 500 €, volle Nutzungsrechte bei Namensnennung."
            button-text="Bandfotos ansehen"
            :button-link="ROUTES.BAND_PHOTOGRAPHY"
            image-ratio="portrait"
            layout="left"
        />
        <ParallaxSection
            background-image="/people/Elvira.jpg"
            height="large"
            image-only
        />
        <FeatureSection
            image="/adrian-sailer.jpg"
            image-alt="Adrian Sailer mit Sofortbildkamera im Studio"
            title="Über mich"
            description="Seit über zehn Jahren begleite ich Konzerte, Festivals, Künstler und Menschen mit meiner Kamera. Angefangen hat alles in der Musikszene, wo ich durch meine Arbeit für Tribe Online die ersten Konzerte fotografierte. Was damals als Leidenschaft begann, entwickelte sich schnell zu meinem persönlichen Stil: authentische Bilder mit Atmosphäre, Emotion und Charakter."
            button-text="Über mich"
            :button-link="ROUTES.ABOUT"
            layout="left"
            image-style="frame"
            background="dark"
        />
        <GoogleReviews />
        <FaqList :entries="homeFaq" />
    </div>
</template>
