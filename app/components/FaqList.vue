<script setup lang="ts">
import Text from '~/atomics/text/Text.vue';
import type { FaqEntry } from '~/types';

/**
 * Häufige Fragen als aufklappbare Liste. Antworten stehen immer im HTML,
 * damit Suchmaschinen und KI-Assistenten sie lesen können. Gibt zusätzlich FAQPage-Schema aus.
 */
const props = withDefaults(defineProps<{ entries: Array<FaqEntry>; title?: string }>(), {
    title: 'Häufige Fragen'
});

useFaqSchema(props.entries);
</script>

<template>
    <section aria-labelledby="faq-title" class="mx-auto max-w-4xl px-small4 py-large flex flex-col gap-medium">
        <Text id="faq-title" as="h2" variant="display">{{ title }}</Text>
        <div class="flex flex-col border-t border-black">
            <details v-for="entry in entries" :key="entry.question" class="faq-item border-b border-black">
                <summary class="flex items-center justify-between gap-small4 py-small5 cursor-pointer">
                    <Text as="h3" variant="bodySemibold">{{ entry.question }}</Text>
                    <span aria-hidden="true" class="faq-icon text-primary shrink-0">+</span>
                </summary>
                <Text as="p" class="pb-small5">{{ entry.answer }}</Text>
            </details>
        </div>
    </section>
</template>

<style scoped>
summary {
    list-style: none;
    min-height: 44px;
}

summary::-webkit-details-marker {
    display: none;
}

summary:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}

.faq-icon {
    font-size: 1.5rem;
    line-height: 1;
    transition: transform 0.2s ease;
}

.faq-item[open] .faq-icon {
    transform: rotate(45deg);
}

@media (prefers-reduced-motion: reduce) {
    .faq-icon {
        transition: none;
    }
}
</style>
