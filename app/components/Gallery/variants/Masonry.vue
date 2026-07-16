<script lang="ts" setup>
import type { MediumReference } from '~/types';
import type { EmitGalleryType } from './types';

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
                    <NuxtImg
                        v-if="group[0]"
                        :src="group[0].media"
                        class="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                        @click="emit('imageClick', group[0], groupIndex * 6)"
                    />

                    <div
                        v-if="group.length > 1"
                        class="grid grid-cols-2 gap-small2"
                    >
                        <NuxtImg
                            v-for="(image, index) in group.slice(1, 3)"
                            :key="index"
                            :src="image.media"
                            class="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                            @click="
                                emit(
                                    'imageClick',
                                    image,
                                    groupIndex * 6 + index + 1
                                )
                            "
                        />
                    </div>
                </div>

                <!-- Rechte Spalte -->

                <div class="flex-1 flex flex-col gap-small2">
                    <div
                        v-if="group.length > 3"
                        class="grid grid-cols-2 gap-small2"
                    >
                        <NuxtImg
                            v-for="(image, index) in group.slice(3, 5)"
                            :key="index"
                            :src="image.media"
                            class="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                            @click="
                                emit(
                                    'imageClick',
                                    image,
                                    groupIndex * 6 + index + 3
                                )
                            "
                        />
                    </div>

                    <NuxtImg
                        v-if="group[5]"
                        :src="group[5].media"
                        class="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                        @click="
                            emit('imageClick', group[5], groupIndex * 6 + 5)
                        "
                    />
                </div>
            </div>
        </template>
    </div>
</template>
