<script lang="ts" setup>
import Text from '~/atomics/text/Text.vue';

type HeroProps = {
    image: string;
    title: string;
    subtitle: string;
    description: string;
};

const props = defineProps<HeroProps>();
</script>

<template>
    <div
        class="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
        style="background-image: url('/images/hero.jpg')"
    >
      <div class="absolute top-0 right-0 bottom-0 left-0 backdrop-blur-[4px] opacity-50"></div>


        <div class="px-small4 sm:px-medium sm:py-large z-fixed">
            <div class="text-center">
                <div>
                    <NuxtImg
                        src="/Logo_Adrian_Sailer_Art.png"
                        alt="Adrian Sailer Art"
                        class="mx-auto mb-4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96"
                    />
                    <div
                        class="border border-white rounded-r-minimal "
                    >
                        <Text
                            class="shape"
                            as="h1"
                            variant="h1"
                            color="primary"
                        >
                            {{ title }}
                        </Text>
                    </div>
                 
                    <Text as="h2" variant="h2" color="standard" class="mt-small4 ">
                        {{ subtitle }}
                    </Text>
                </div>
                <Text variant="bodyMedium" class="mt-small4">
                    {{ description }}
                </Text>
            </div>
        </div>
    </div>
</template>
<style scoped>
.shape {
    border-shape: polygon(0 0, 18% 0, 5% 100%, 0 100%) circle(0);
    border-color: white;
    padding: 1rem;
    width: fit-content;
    transition: 1.3s;
}
</style>
