<script setup lang="ts">
import { ref } from 'vue';
import Text from '@/atomics/text/Text.vue';

type TabsProps = {
    initActiveTab?: number;
    tabs: Array<string>;
};

type EmitProps = {
    (e: 'update:activeTab', index: number): void;
};

const props = defineProps<TabsProps>();
const emit = defineEmits<EmitProps>();

const activeIndex = ref(props.initActiveTab ?? 0);

const uid = useId();
const tabRefs = ref<Array<HTMLButtonElement>>([]);

const selectTab = (index: number) => {
    activeIndex.value = index;
    emit('update:activeTab', index);
};

// Pfeiltasten / Home / End laut WAI-ARIA Tabs-Pattern
const handleKeydown = (e: KeyboardEvent, index: number) => {
    const last = props.tabs.length - 1;
    let target: number | null = null;

    if (e.key === 'ArrowRight') target = index === last ? 0 : index + 1;
    if (e.key === 'ArrowLeft') target = index === 0 ? last : index - 1;
    if (e.key === 'Home') target = 0;
    if (e.key === 'End') target = last;

    if (target === null) return;

    e.preventDefault();
    selectTab(target);
    tabRefs.value[target]?.focus();
};
</script>

<template>
    <div class="flex flex-col w-full">
        <div class="-mb-px relative">
            <div class="flex flex-wrap gap-small2 sm:gap-small3" role="tablist">
                <button
                    v-for="(tab, index) in tabs"
                    :id="`${uid}-tab-${index}`"
                    :key="index"
                    ref="tabRefs"
                    type="button"
                    role="tab"
                    :aria-selected="activeIndex === index"
                    :aria-controls="`${uid}-panel-${index}`"
                    :tabindex="activeIndex === index ? 0 : -1"
                    class="tab-button relative whitespace-nowrap px-small2 py-small3 sm:px-small4"
                    :class="{ 'is-active': activeIndex === index }"
                    @click="selectTab(index)"
                    @keydown="handleKeydown($event, index)"
                >
                    <Text
                        variant="linkText"
                        :color="activeIndex === index ? 'white' : 'inherit'"
                    >
                        {{ tab }}
                    </Text>
                </button>
            </div>
        </div>

        <div class="tab-content relative p-small">
            <div
                v-for="(_, index) in tabs"
                :id="`${uid}-panel-${index}`"
                :key="index"
                v-show="activeIndex === index"
                role="tabpanel"
                :aria-labelledby="`${uid}-tab-${index}`"
                class="relative tab-panel"
            >
                <slot :name="'tab-' + index" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.tab-button {
    position: relative;
    border: 1px solid var(--color-black);
    background: var(--color-background);
    color: var(--color-black);
    cursor: pointer;
    transition:
        background-color 200ms ease,
        color 200ms ease;
}

.tab-button::after {
    content: '';
    position: absolute;
    left: var(--spacing-small);
    bottom: var(--spacing-small);

    width: calc(100% - 1px);
    height: calc(100% - 1px);

    border: 1px solid var(--color-black);
    pointer-events: none;
    transition: all 200ms ease-in-out;
}

.tab-button:hover::after,
.tab-button:focus-visible::after {
    left: 2px;
    bottom: 2px;
}

.tab-button.is-active {
    background: var(--color-primary);
    color: var(--color-white);
}

.tab-button.is-active::after {
    left: 2px;
    bottom: 2px;
}

.tab-content {
    position: relative;
    border: 1px solid var(--color-black);
    background: var(--color-background);
}

.tab-content::after {
    content: '';
    position: absolute;
    left: var(--spacing-small);
    bottom: var(--spacing-small);

    width: calc(100% - 1px);
    height: calc(100% - 1px);

    border: 1px solid var(--color-black);
    pointer-events: none;
}

.tab-panel {
    animation: tabIn 0.4s ease both;
}

@keyframes tabIn {
    from {
        opacity: 0;
        translate: 0 12px;
    }
}
</style>