<script setup lang="ts">
/**
 * Bild und Text nebeneinander (ab md), auf dem Handy untereinander mit dem Bild zuerst.
 * Mit `reverse` steht das Bild ab md rechts. Das Seitenverhältnis kommt aus den Bilddateien,
 * damit beim Laden nichts springt. Text kommt über den Default-Slot.
 */
type ImageTextProps = {
    src: string;
    alt: string;
    reverse?: boolean;
};

defineProps<ImageTextProps>();
</script>

<template>
    <div class="flex flex-col md:flex-row gap-small3 py-medium items-start">
        <NuxtImg
            :src="src"
            :alt="alt"
            :style="getImageAspectStyle(src)"
            preset="static"
            sizes="xs:100vw lg:50vw 2xl:50vw"
            loading="lazy"
            :class="['w-full md:w-1/2 h-auto shrink-0', reverse && 'md:order-2']"
        />

        <div :class="['w-full md:w-1/2', reverse && 'md:order-1']">
            <slot />
        </div>
    </div>
</template>
