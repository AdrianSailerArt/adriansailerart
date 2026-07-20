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

const selectTab = (index: number) => {
    activeIndex.value = index;
    emit('update:activeTab', index);
};
</script>

<template>
    <div class="flex flex-col w-full">
        <div class="-mb-px relative">
            <div class="flex flex-wrap gap-small3">
                <button
                    v-for="(tab, index) in tabs"
                    :key="index"
                    :aria-label="tab"
                    class="tab-button relative px-small4 py-small3"
                    :class="{ 'is-active': activeIndex === index }"
                    @click="selectTab(index)"
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
                :key="index"
                v-show="activeIndex === index"
                class="relative"
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

</style>