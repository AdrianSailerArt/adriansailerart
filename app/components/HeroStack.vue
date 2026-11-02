<script setup lang="ts">
import { computed } from 'vue';
import Text from '~/atomics/text/Text.vue';
import Icon from '~/atomics/icons/Icon.vue';

type HeroStackProps = {
    backgroundImage?: string;
    line1: string;
    line2: string;
    line3: string;
    align?: 'left' | 'right';
};

const props = withDefaults(defineProps<HeroStackProps>(), {
    align: 'left'
});

const optimizedImage = useOptimizedImage();

const scrollToContent = () => {
    const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    window.scrollBy({
        top: window.innerHeight * 0.85,
        behavior: reduceMotion ? 'auto' : 'smooth'
    });
};

const backgroundImageUrl = computed(() => {
    return optimizedImage(props.backgroundImage || '/images/hero.jpg');
});
</script>

<template>
    <section
        class="relative flex min-h-screen items-end overflow-hidden"
    >
        <!-- Hintergrund mit langsamem Ken-Burns-Zoom -->
        <div
            aria-hidden="true"
            class="hero-bg absolute inset-0 bg-cover bg-center"
            :style="{
                backgroundImage: `url('${backgroundImageUrl}')`
            }"
        />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/30" aria-hidden="true" />

        <!-- Content -->
        <div
            class="relative z-base w-full px-small4 pb-medium2 md:pb-large3 md:ml-large2"
            :class="
                props.align === 'right'
                    ? 'flex justify-end'
                    : 'flex justify-start'
            "
        >
            <h1
                class="flex flex-col gap-small"
                :class="
                    props.align === 'right'
                        ? 'items-end text-right'
                        : 'items-start text-left'
                "
            >
                <Text
                    as="span"
                    variant="display"
                    color="primary"
                    class="hero-word"
                    style="--i: 0"
                >
                    {{ props.line1 }}
                </Text>

                <Text
                    as="span"
                    variant="display"
                    color="white"
                    class="hero-word"
                    style="--i: 1"
                >
                    {{ props.line2 }}
                </Text>

                <Text
                    as="span"
                    variant="display"
                    color="white"
                    class="hero-word"
                    style="--i: 2"
                >
                    {{ props.line3 }}
                </Text>
            </h1>
        </div>

        <!-- Scroll-Hinweis -->
        <button
            type="button"
            class="scroll-cue absolute bottom-small4 left-1/2 z-base -translate-x-1/2 text-white cursor-pointer p-small2"
            aria-label="Zum Inhalt scrollen"
            @click="scrollToContent"
        >
            <Icon name="ChevronDown" color="inherit" size="medium2" />
        </button>
    </section>
</template>

<style scoped>
.hero-bg {
    animation: kenBurns 24s ease-out forwards;
    transform-origin: 60% 40%;
}

@keyframes kenBurns {
    from {
        transform: scale(1.12);
    }
    to {
        transform: scale(1);
    }
}

.hero-word {
    display: block;
    text-transform: uppercase;
    text-shadow: var(--shadow-inner);
    transition: transform 0.25s ease;
    animation: heroWordIn 0.9s cubic-bezier(.22,1,.36,1) both;
    animation-delay: calc(var(--i) * 180ms + 200ms);
}

@keyframes heroWordIn {
    from {
        opacity: 0;
        translate: -48px 0;
    }
    to {
        opacity: 1;
        translate: 0 0;
    }
}

.hero-word:hover {
    transform: translateX(4px);
}

.scroll-cue {
    animation:
        fadeIn 0.6s ease 1.2s both,
        bounce 2.4s ease-in-out 1.8s infinite;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
}

@keyframes bounce {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(8px);
    }
}

@media (min-width: 640px) {
    .hero-word {
        font-size: clamp(3rem, 8vw, 6rem);
    }
}

/* Text setzt die Größe inline – auf dem Handy muss die Zeile sicher in die Breite passen */
@media (max-width: 639px) {
    .hero-word {
        font-size: clamp(2rem, 11vw, 3rem) !important;
    }
}
</style>
