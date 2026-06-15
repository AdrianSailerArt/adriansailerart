<script setup lang="ts">
import Text from '~/atomics/text/Text.vue';

type Plan = {
    name: string;
    price: number;
    description: string;
    features: string[];
};
const plans: Array<Plan> = [
    {
        name: 'Hobby',
        price: 29,
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
            class="mx-auto grid max-w-xl grid-cols-1 items-center gap-y-small3 sm:mt-large4 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-4"
        >
            <div
                v-for="(plan, index) in plans"
                :class="[
                    (index + 1) % 2 === 0 ? '-py-medium border-2 ' : '',
                    index === 0
                        ? 'rounded-l-rounded'
                        : index === plans.length - 1
                          ? 'rounded-r-rounded'
                          : ''
                ]"
                class="bg-secondary h-full p-medium ring-1 ring-white/10 sm:mx-8 sm:p-10 lg:mx-none"
            >
                <Text as="h3" variant="h3"> {{ plan.name }} </Text>
                <div class="mt-small4 flex items-baseline gap-x-small3">
                    <Text variant="price">${{ plan.price }}</Text>
                    <Text variant="caption">/month</Text>
                </div>
                <Text class="mt-small4" variant="bodyMedium">
                    {{ plan.description }}
                </Text>
                <ul
                    role="list"
                    class="mt-medium space-y-small3"
                    v-for="(feature, index) in plan.features"
                >
                    <li class="flex gap-x-small3">
                        <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            data-slot="icon"
                            aria-hidden="true"
                            class="h-6 w-5 flex-none text-indigo-400"
                        >
                            <path
                                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                            />
                        </svg>
                        <Text> {{ feature }} </Text>
                    </li>
                </ul>
                <button href="#">Get started today</button>
            </div>
        </div>
    </div>
</template>
