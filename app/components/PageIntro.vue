<script setup lang="ts">
import Text from '~/atomics/text/Text.vue';

type PageIntroProps = {
    /** Absätze des Einleitungstexts */
    paragraphs: Array<string>;
};

defineProps<PageIntroProps>();
</script>

<template>
    <section v-reveal class="mx-auto max-w-4xl px-small4 pt-large text-center" aria-label="Einleitung">
        <Text
            v-for="paragraph in paragraphs"
            :key="paragraph"
            as="p"
            variant="bodySemibold"
            class="mt-small4 first:mt-none leading-relaxed"
        >
            {{ paragraph }}
        </Text>
    </section>
</template>
