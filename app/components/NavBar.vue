<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Hamburger from '~/atomics/button/Hamburger.vue';

const visible = ref<boolean>(true);
const scrolled = ref<boolean>(false);

let lastScroll = 0;

const onScroll = () => {
    const current = window.scrollY;

    scrolled.value = current > 10;

    if (current <= 10) {
        visible.value = true;
        lastScroll = current;
        return;
    }

    if (current > lastScroll && current > 80) {
        visible.value = false;
    } else if (current < lastScroll) {
        visible.value = true;
    }

    lastScroll = current;
};

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
});
</script>

<template>
    <header
        :class="[
            'fixed top-0 left-0 right-0 z-sticky transition-transform duration-300',
            visible ? 'translate-y-0' : '-translate-y-full'
        ]"
    >
        <nav
            :class="[
                'transition-colors duration-300',
                scrolled
                    ? 'bg-background/90 backdrop-blur-md shadow-2xl'
                    : 'bg-background'
            ]"
        >
            <div class="mx-auto max-w-7xl px-small2 lg:px-medium">
                <div class="flex h-16 items-center justify-between">
                    <NuxtLink to="/">
                        <NuxtImg
                            src="/Logo_Adrian_Sailer_Art.png"
                            alt="Adrian Sailer Art"
                            class="h-medium4 w-auto"
                        />
                    </NuxtLink>

                    <Hamburger />
                </div>
            </div>
        </nav>
    </header>
</template>
