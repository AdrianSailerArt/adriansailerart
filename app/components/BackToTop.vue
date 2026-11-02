<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import Button from '~/atomics/button/Button.vue';
import Icon from '~/atomics/icons/Icon.vue';

const visible = ref(false);

const onScroll = () => {
    visible.value = window.scrollY > window.innerHeight;
};

const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    document.getElementById('main-content')?.focus({ preventScroll: true });
};

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
});
</script>

<template>
    <Transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0 translate-y-small4"
        leave-active-class="transition-all duration-200"
        leave-to-class="opacity-0 translate-y-small4"
    >
        <div
            v-if="visible"
            class="fixed bottom-medium right-medium z-fixed"
        >
            <Button
                class="w-10 h-10"
                aria-label="Nach oben scrollen"
                @click="scrollToTop"
            >
                <Icon name="ArrowUp" color="inherit" />
            </Button>
        </div>
    </Transition>
</template>
