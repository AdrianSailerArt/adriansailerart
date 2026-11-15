<script lang="ts" setup>
import Text from '~/atomics/text/Text.vue';
import Icon from '~/atomics/icons/Icon.vue';
import ContactForm from '~/components/contact/ContactForm.vue';
import { contactInformation } from '~/resources/contactInformation';

useSocialImage('/hochzeit/Hochzeit-3.jpg', 'Schwarzweißfoto eines Brautpaars auf einer Wiese vor Schwarzwaldhügeln');

useSeoMeta({
    title: 'Kontakt & Anfrage',
    ogTitle: 'Kontakt – Adrian Sailer Art',
    description:
        'Fotoshooting oder Hochzeitsreportage anfragen: per Formular, E-Mail, Telefon oder WhatsApp. Fotograf aus Sexau bei Freiburg.',
    ogType: 'website'
});
</script>

<template>
    <div class="mx-auto max-w-5xl px-small4 py-large">
        <div v-reveal class="mb-large inline-block -rotate-1 border border-black px-medium py-small4">
            <Text as="h1" variant="h1">Kontakt & Anfrage</Text>
        </div>

        <Text v-reveal variant="bodySemibold" class="mb-large max-w-3xl leading-relaxed">
            Erzähl mir kurz, was du vorhast: Hochzeit, Portrait, Konzert oder Cosplay. Ich melde mich
            in der Regel innerhalb weniger Tage bei dir.
        </Text>

        <div class="grid gap-large lg:grid-cols-[2fr_1fr]">
            <ContactForm />

            <aside aria-labelledby="direct-contact-title" class="flex flex-col gap-small4">
                <Text id="direct-contact-title" as="h2" variant="h4">Lieber direkt?</Text>

                <a :href="`tel:${contactInformation.telLink}`" class="contact-link">
                    <Icon name="Phone" color="inherit" size="small5" />
                    {{ contactInformation.tel }}
                </a>
                <a
                    :href="contactInformation.whatsapp"
                    class="contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    WhatsApp
                    <span class="sr-only">(öffnet in neuem Tab)</span>
                </a>
                <a :href="`mailto:${contactInformation.mail}`" class="contact-link">
                    <Icon name="Mail" color="inherit" size="small5" />
                    {{ contactInformation.mail }}
                </a>
                <a
                    :href="contactInformation.instagram"
                    class="contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon name="PlatformInstagram" color="inherit" size="small5" />
                    Instagram
                    <span class="sr-only">(öffnet in neuem Tab)</span>
                </a>

                <Text class="mt-small4 opacity-70">
                    Studio: {{ contactInformation.address.street }}, {{ contactInformation.address.city }}
                </Text>
            </aside>
        </div>
    </div>
</template>

<style scoped>
.contact-link {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-small2);
    min-height: 2.75rem;
    font-weight: 700;
    text-underline-offset: 3px;
}

.contact-link:hover,
.contact-link:focus-visible {
    text-decoration: underline;
}
</style>
