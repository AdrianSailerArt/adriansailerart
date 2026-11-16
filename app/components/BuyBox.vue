<script setup lang="ts">
import Link from '~/atomics/link/Link.vue';
import Icon from '~/atomics/icons/Icon.vue';
import Sheet from '~/atomics/Sheet.vue';
import Tag from '~/atomics/Tag.vue';
import Text from '~/atomics/text/Text.vue';
import type { Plan } from '~/types';
import { ROUTES } from '~/statics/routes';

type BuyBoxProps = {
    plans: Array<Plan>;
    /** Ziel der Buchen-Buttons, sonst das Anfrageformular mit vorausgewähltem Paket */
    inquiryLink?: string;
};

const props = defineProps<BuyBoxProps>();

const linkFor = (plan: Plan) =>
    props.inquiryLink ?? `${ROUTES.CONTACT}/?package=${encodeURIComponent(plan.name.toLowerCase())}`;
</script>

<template>
    <div class="relative isolate">
        <div
            :class="[
                'mx-auto grid max-w-xl grid-cols-1 gap-medium2 px-medium sm:gap-small4 sm:mt-large4',
                plans.length > 1 && 'xl:max-w-7xl xl:grid-cols-3 xl:px-none'
            ]"
        >
            <Sheet
                v-for="(plan, planIndex) in plans"
                :key="plan.name"
                v-reveal="planIndex * 120"
                :class="[
                    'pricing-card ',
                    plan.highlight
                        ? 'pricing-card-highlight bg-primaryLightenTwo text-white scale-105 z-fixed'
                        : 'hover:-translate-y-small'
                ]"
            >
                <Tag
                    v-if="plan.highlight"
                    color="secondary"
                    class="absolute -top-4 left-1/2 -translate-x-1/2 -rotate-2 z-fixed"
                >
                    <span aria-hidden="true">⭐</span> Empfohlen
                </Tag>

                <Text as="h3" variant="h3" color="inherit">
                    {{ plan.name }}
                </Text>

                <div class="mt-medium flex items-end gap-small2">
                    <span class="text-6xl font-black leading-none">
                        <span aria-hidden="true">{{ plan.priceFrom ? 'ab ' : '' }}€{{ plan.price }}</span>
                        <span class="sr-only">{{ plan.priceFrom ? 'ab ' : '' }}{{ plan.price }} Euro</span>
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
                       <Icon name="Check"/>

                        <Text color="inherit">
                            {{ feature }}
                        </Text>
                    </li>
                </ul>

                <Link
                    fluid
                    :variant="plan.highlight ? 'standard' : 'outlined'"
                    class="mt-medium2 xl:mt-large4"
                    :aria-label="`Paket ${plan.name} anfragen`"
                    :to="linkFor(plan)"
                >
                    Jetzt buchen
                </Link>
            </Sheet>
        </div>
    </div>
</template>

<style scoped>


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
