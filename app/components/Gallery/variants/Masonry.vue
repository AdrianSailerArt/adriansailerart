<script lang="ts" setup>
import { computed } from 'vue';
import type { MediumReference } from '~/types';
import type { EmitGalleryType } from './types';
import Text from '~/atomics/text/Text.vue';

const props = defineProps<{
    images: Array<MediumReference>;
}>();

const emit = defineEmits<EmitGalleryType>();

const imageGroups = computed(() => {
    const groups = [];

    for (let i = 0; i < props.images.length; i += 6) {
        groups.push(props.images.slice(i, i + 6));
    }

    return groups;
});
</script>

<template>
    <div class="flex flex-col gap-small2">
        <template v-for="(group, groupIndex) in imageGroups" :key="groupIndex">
            <div class="flex flex-col md:flex-row gap-small2">

                <!-- Linke Spalte -->
                <div class="flex-1 flex flex-col gap-small2">

                    <div
                        v-if="group[0]"
                        class="relative overflow-hidden group cursor-pointer"
                        @click="emit('imageClick', group[0], groupIndex * 6)"
                    >
                        <NuxtImg
                            :src="group[0].media"
                            :alt="group[0].alt"
                             preset="static"
                            class="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div
                            class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        >
                            <div class="px-small4 py-small3 bg-black/30 backdrop-blur-md">
                                <Text color="white">
                                    {{ group[0].title }}
                                </Text>
                            </div>
                        </div>
                    </div>


                    <div
                        v-if="group.length > 1"
                        class="grid grid-cols-2 gap-small2"
                    >
                        <div
                            v-for="(image, index) in group.slice(1, 3)"
                            :key="image.id"
                            class="relative overflow-hidden group cursor-pointer"
                            @click="
                                emit(
                                    'imageClick',
                                    image,
                                    groupIndex * 6 + index + 1
                                )
                            "
                        >
                            <NuxtImg
                                :src="image.media"
                                :alt="image.alt"
                                 preset="static"
                                class="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div
                                class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                            >
                                <div class="px-small4 py-small3 bg-black/30 backdrop-blur-md">
                                    <Text color="white">
                                        {{ image.title }}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <!-- Rechte Spalte -->
                <div class="flex-1 flex flex-col gap-small2">

                    <div
                        v-if="group.length > 3"
                        class="grid grid-cols-2 gap-small2"
                    >
                        <div
                            v-for="(image, index) in group.slice(3, 5)"
                            :key="image.id"
                            class="relative overflow-hidden group cursor-pointer"
                            @click="
                                emit(
                                    'imageClick',
                                    image,
                                    groupIndex * 6 + index + 3
                                )
                            "
                        >
                            <NuxtImg
                                :src="image.media"
                                :alt="image.alt"
                                 preset="static"
                                class="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div
                                class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                            >
                                <div class="px-small4 py-small3 bg-black/30 backdrop-blur-md">
                                    <Text color="white">
                                        {{ image.title }}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div
                        v-if="group[5]"
                        class="relative overflow-hidden group cursor-pointer"
                        @click="
                            emit('imageClick', group[5], groupIndex * 6 + 5)
                        "
                    >
                        <NuxtImg
                            :src="group[5].media"
                            :alt="group[5].alt"
                             preset="static"
                            class="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div
                            class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        >
                            <div class="px-small4 py-small3 bg-black/30 backdrop-blur-md">
                                <Text color="white">
                                    {{ group[5].title }}
                                </Text>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </template>
    </div>
</template>