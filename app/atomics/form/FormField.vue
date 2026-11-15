<script setup lang="ts">
import Text from '~/atomics/text/Text.vue';

type FormFieldProps = {
    /** id des Eingabefelds im Slot – verknüpft Label, Hinweis und Fehler */
    id: string;
    label: string;
    required?: boolean;
    hint?: string;
    error?: string;
};

const props = defineProps<FormFieldProps>();

/** An das Eingabefeld weiterreichen: :aria-describedby="describedBy" */
const describedBy = computed(() =>
    [props.hint && `${props.id}-hint`, props.error && `${props.id}-error`]
        .filter(Boolean)
        .join(' ') || undefined
);
</script>

<template>
    <div class="flex flex-col gap-small">
        <label :for="id">
            <Text as="span" variant="label" class="font-bold">
                {{ label }}
                <span v-if="required" aria-hidden="true" class="text-primary">*</span>
                <span v-else class="font-normal opacity-70">(optional)</span>
            </Text>
        </label>

        <Text v-if="hint" :id="`${id}-hint`" variant="caption" class="opacity-70">
            {{ hint }}
        </Text>

        <slot :described-by="describedBy" :invalid="!!error" />

        <Text
            v-if="error"
            :id="`${id}-error`"
            variant="caption"
            color="primary"
            class="font-bold"
        >
            {{ error }}
        </Text>
    </div>
</template>
