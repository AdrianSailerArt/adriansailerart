<script setup lang="ts">
import Text from '~/atomics/text/Text.vue';
import Sheet from '~/atomics/Sheet.vue';
import Link from '~/atomics/link/Link.vue';
import { contactInformation } from '~/resources/contactInformation';
import { googleRating, testimonials } from '~/resources/testimonials';

/**
 * Kundenstimmen aus dem Google-Profil mit Gesamtbewertung und Hinweis zur Echtheit
 * (Pflichtangabe nach § 5b Abs. 3 UWG, wenn Bewertungen gezeigt werden).
 */
withDefaults(defineProps<{ title?: string }>(), {
    title: 'Stimmen auf Google'
});

const formatRating = (value: number) => value.toLocaleString('de-DE', { maximumFractionDigits: 1 });
const stars = (rating: number) => '★'.repeat(rating) + '☆'.repeat(5 - rating);
</script>

<template>
    <section aria-labelledby="testimonials-title" class="mx-auto max-w-7xl px-small4 py-large flex flex-col gap-medium">
        <div class="flex flex-col gap-small3">
            <Text id="testimonials-title" as="h2" variant="display">{{ title }}</Text>
            <Text variant="bodySemibold">
                <span aria-hidden="true" class="text-primary">★</span>
                {{ formatRating(googleRating.average) }} von 5 Sternen bei {{ googleRating.count }} Rezensionen
            </Text>
        </div>

        <ul class="grid gap-medium sm:grid-cols-2 lg:grid-cols-4">
            <li v-for="item in testimonials" :key="item.author" class="flex">
                <Sheet class="flex flex-col gap-small4 w-full">
                    <Text as="p" variant="label" color="primary">
                        <span aria-hidden="true">{{ stars(item.rating) }}</span>
                        <span class="sr-only">{{ item.rating }} von 5 Sternen</span>
                    </Text>
                    <blockquote class="m-0">
                        <Text as="p">„{{ item.text }}“</Text>
                    </blockquote>
                    <Text as="p" variant="caption" color="gray" class="mt-auto">
                        {{ item.author }} · Google · {{ item.year }}
                    </Text>
                </Sheet>
            </li>
        </ul>

        <div class="flex flex-col md:flex-row md:items-center gap-small4">
            <Link
                :to="contactInformation.googleProfile"
                target="_blank"
                rel="noopener noreferrer"
            >
                Alle Rezensionen auf Google
                <span class="sr-only">(öffnet in neuem Tab)</span>
            </Link>
            <Text as="p" variant="caption" color="gray">
                Auswahl, Texte unverändert aus meinem Google-Profil, Stand {{ googleRating.checkedAt }}.
                Google und ich prüfen nicht, ob Rezensionen von Kundinnen und Kunden stammen.
            </Text>
        </div>
    </section>
</template>
