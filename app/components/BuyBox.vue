<script setup lang="ts">
import Button from '~/atomics/button/Button.vue';
import Tag from '~/atomics/Tag.vue';
import Text from '~/atomics/text/Text.vue';
import type { Plan } from '~/types';

defineProps<{
    plans: Array<Plan>;
}>();
</script>

<template>
    <div class="relative isolate">
        <div
            class="mx-auto grid max-w-xl grid-cols-1 gap-small4 sm:mt-large4 xl:max-w-7xl xl:grid-cols-4"
        >
            <div
                v-for="plan in plans"
                :key="plan.name"
                :class="[
                    'pricing-card relative border border-black bg-gray30 rounded-none -rotate-1 transition-all duration-200',
                    plan.highlight
                        ? 'pricing-card-highlight bg-primaryLightenTwo text-white scale-105 z-fixed'
                        : 'hover:-translate-y-small'
                ]"
            >
                <Tag
                    color="secondary"
                    v-if="plan.highlight"
                    class="absolute -top-4 left-1/2 -translate-x-1/2 -rotate-2 z-fixed"
                >
                    ⭐ Empfohlen
                </Tag>

                <Text as="h3" variant="h3" color="inherit">
                    {{ plan.name }}
                </Text>

                <div class="mt-medium flex items-end gap-small2">
                    <span class="text-6xl font-black leading-none">
                        €{{ plan.price }}
                    </span>
                </div>

                <Text class="mt-small4 leading-relaxed" color="inherit">
                    {{ plan.description }}
                </Text>

                <ul role="list" class="mt-medium space-y-small3">
                    <li
                        v-for="(feature, idx) in plan.features"
                        :key="idx"
                        class="flex items-start gap-small3"
                    >
                        <svg
                            class="mt-1 h-5 w-5 shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                            />
                        </svg>

                        <Text color="inherit">
                            {{ feature }}
                        </Text>
                    </li>
                </ul>

                <Button
                    fluid
                    :variant="plan.highlight ? 'standard' : 'outlined'"
                    class="mt-large4"
                >
                    Jetzt buchen
                </Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pricing-card {
    padding: 2rem;
    transform: rotate(-1deg);
}

.pricing-card:nth-child(even) {
    transform: rotate(1deg);
}

.pricing-card::after {
    content: '';
    position: absolute;
    left: 6px;
    bottom: 6px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    border: 1px solid black;
    pointer-events: none;
    transition: all 0.2s ease;
}

.pricing-card:hover {
    transform: translateY(-6px) rotate(-1deg);
}

.pricing-card:nth-child(even):hover {
    transform: translateY(-6px) rotate(1deg);
}

.pricing-card:hover::after {
    left: 3px;
    bottom: 3px;
}

.pricing-card-highlight {
    transform: rotate(-2deg) scale(1.05);
}

.pricing-card-highlight:hover {
    transform: translateY(-8px) rotate(-2deg) scale(1.05);
}

.pricing-card-highlight::after {
    left: 8px;
    bottom: 8px;
}

.pricing-card-highlight:hover::after {
    left: 4px;
    bottom: 4px;
}
</style>
