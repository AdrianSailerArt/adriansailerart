<script setup lang="ts">
import Text from '~/atomics/text/Text.vue';
import Sheet from '~/atomics/Sheet.vue';
import Link from '~/atomics/link/Link.vue';
import type { ProcessStep } from '~/types';

type ProcessStepsProps = {
    title: string;
    steps: Array<ProcessStep>;
    linkText?: string;
    linkTo?: string;
};

defineProps<ProcessStepsProps>();
</script>

<template>
    <section class="mx-auto max-w-screen-2xl px-small4 py-large" aria-labelledby="process-title">
        <Text id="process-title" v-reveal as="h2" variant="h2" class="mb-large text-center">
            {{ title }}
        </Text>

        <ol class="grid gap-large sm:grid-cols-2 lg:grid-cols-4 lg:gap-medium2">
            <li
                v-for="(step, index) in steps"
                :key="step.title"
                v-reveal="index * 150"
                class="step relative"
            >
                <Sheet class="h-full">
                    <span class="step-number" aria-hidden="true">
                        {{ String(index + 1).padStart(2, '0') }}
                    </span>

                    <Text as="h3" variant="h4" class="mt-small4">
                        <span class="sr-only">Schritt {{ index + 1 }}: </span>
                        {{ step.title }}
                    </Text>

                    <Text class="mt-small3 leading-relaxed">
                        {{ step.description }}
                    </Text>
                </Sheet>
            </li>
        </ol>

        <div v-if="linkText && linkTo" v-reveal class="mt-large flex justify-center">
            <Link :to="linkTo">
                {{ linkText }}
            </Link>
        </div>
    </section>
</template>

<style scoped>
.step-number {
    display: block;
    font-size: var(--text-7xl);
    font-weight: 900;
    line-height: 1;
    color: var(--color-primary);
}

/* Karten abwechselnd kippen – Sheet allein sieht das nicht, da jede Karte in einem eigenen <li> steckt */
.step:nth-child(even) :deep(.sheet) {
    transform: rotate(1deg);
}

.step:nth-child(even) :deep(.sheet:hover) {
    transform: translateY(-6px) rotate(1deg);
}

/* Verbindungspfeil zwischen den Schritten (nur Desktop) */
@media (min-width: 1280px) {
    .step:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 50%;
        right: calc(var(--spacing-medium2) / -2 - 6px);
        width: 12px;
        height: 12px;
        border-top: 2px solid var(--color-black);
        border-right: 2px solid var(--color-black);
        transform: translateY(-50%) rotate(45deg);
        z-index: 1;
    }
}
</style>
