<script setup lang="ts">
import Button from '~/atomics/button/Button.vue';
import Text from '~/atomics/text/Text.vue';

type Plan = {
    name: string;
    price: number;
    description: string;
    features: Array<string>;
    highlight?: boolean;
};


const plans: Array<Plan> = [
    {
        name: 'Hobby',
        price: 29,
        highlight: true,
        description:
            "The perfect plan if you're just getting started with our product.",
        features: ['25 products']
    },
    {
        name: 'Growth',
        price: 99,
        description: 'A plan that scales with your rapidly growing business.',
        features: ['100 products', '100 products'], 
    },
    {
        name: 'Scale',
        price: 249,
        description:
            'Advanced features for scaling your business to the enterprise level.',
        features: ['Unlimited products']
    },
    {
        name: 'Enterprise',
        price: 499,
        description:
            'Dedicated support and infrastructure for your enterprise needs.',
        features: ['Unlimited products', 'Dedicated support']
    }
];
</script>

<template>
    <div class="relative isolate">
        <div
            class="mx-auto grid max-w-xl grid-cols-1 gap-2 sm:mt-large4 lg:max-w-6xl lg:grid-cols-4"
        >
            <div
                v-for="(plan, index) in plans"
                :key="plan.name"
                :class="[
                    'relative transition-all duration-300',
                    plan.highlight
                        ? 'min-h-96'
                        : ''
                ]"
                class="rounded-rounded bg-gray30 ring-1 ring-white/10 hover:inputShadow hover:shadow-primary"
                :style="plan.highlight ? {
                    padding: '2rem'
                } : {
                    padding: '2rem'
                }"
            >
                <!-- Highlight Badge -->
                <div v-if="plan.highlight" class="absolute -top-small4 left-1/2 -translate-x-1/2">
                    <Text class="inline-block rounded-full px-small4 py-small  text-white border bg-info">
                        ⭐ Empfohlen
                    </Text>
                </div>

                <Text as="h3" variant="h3" >
                    {{ plan.name }}
                </Text>

                <div :class="plan.highlight ? 'mt-small4' : 'mt-medium'" class="flex items-baseline gap-x-2">
                    <span :class="plan.highlight ? 'text-7xl' : 'text-4xl'" class="font-semibold ">
                        €{{ plan.price }}
                    </span>
                    <Text variant="caption">/Monat</Text>
                </div>

                <Text :class="plan.highlight ? 'mt-small3' : 'mt-small5'" class="leading-relaxed">
                    {{ plan.description }}
                </Text>

                <ul role="list" :class="plan.highlight ? 'mt-medium space-y-small2' : 'mt-medium space-y-small4'">
                    <li v-for="(feature, idx) in plan.features" :key="idx" class="flex gap-small3">
                        <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            data-slot="icon"
                            aria-hidden="true"
                            class="h-5 w-5 flex-none text-info mt-smtall"
                        >
                            <path
                                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                            />
                        </svg>
                        <Text >{{ feature }}</Text>
                    </li>
                </ul>

                <Button
                    fluid
                    :variant="plan.highlight ? 'standard': 'outlined'"
                    :class="plan.highlight ? 'mt-small4' : 'mt-medium'"
                >
                   Buchen
                </Button>
            </div>
        </div>
    </div>
</template>
