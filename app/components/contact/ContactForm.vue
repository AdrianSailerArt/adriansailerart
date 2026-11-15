<script setup lang="ts">
import Button from '~/atomics/button/Button.vue';
import FormField from '~/atomics/form/FormField.vue';
import Text from '~/atomics/text/Text.vue';
import { contactInformation } from '~/resources/contactInformation';
import { inquiryPackages, inquiryTopics } from '~/resources/inquiry';

type Inquiry = {
    name: string;
    email: string;
    phone: string;
    topic: string;
    package: string;
    date: string;
    location: string;
    message: string;
};

type Channel = 'mail' | 'whatsapp';

const route = useRoute();
// ?package=classic aus den Paket-Links der Hochzeitsseite
const requestedPackage = inquiryPackages.find(
    (item) => item.toLowerCase() === String(route.query.package ?? '').toLowerCase()
);

const form = reactive<Inquiry>({
    name: '',
    email: '',
    phone: '',
    topic: requestedPackage ? 'Hochzeit' : '',
    package: requestedPackage ?? '',
    date: '',
    location: '',
    message: ''
});

const errors = reactive<Partial<Record<keyof Inquiry, string>>>({});
const sentVia = ref<Channel | null>(null);
const copied = ref(false);
const formElement = ref<HTMLFormElement | null>(null);

const isWedding = computed(() => form.topic === 'Hochzeit');

const validate = () => {
    errors.name = form.name.trim() ? undefined : 'Bitte gib deinen Namen an.';
    errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
        ? undefined
        : 'Bitte gib eine gültige E-Mail-Adresse an, z. B. name@beispiel.de.';
    errors.topic = form.topic ? undefined : 'Bitte wähle aus, worum es geht.';
    errors.message = form.message.trim() ? undefined : 'Bitte schreib mir kurz, was du dir vorstellst.';

    return !Object.values(errors).some(Boolean);
};

const formatDate = (value: string) =>
    value ? new Date(`${value}T12:00:00`).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '';

const subject = computed(() =>
    `Anfrage ${form.topic}${isWedding.value && form.package ? ` – ${form.package}` : ''}`
);

const messageText = computed(() =>
    [
        'Hallo Adrian,',
        '',
        `ich interessiere mich für: ${form.topic}${isWedding.value && form.package ? ` (Paket: ${form.package})` : ''}`,
        form.date ? `Wunschtermin: ${formatDate(form.date)}` : null,
        form.location.trim() ? `Ort: ${form.location.trim()}` : null,
        '',
        form.message.trim(),
        '',
        'Viele Grüße',
        form.name.trim(),
        [form.email.trim(), form.phone.trim()].filter(Boolean).join(' · ')
    ]
        .filter((line) => line !== null)
        .join('\n')
);

const focusFirstError = async () => {
    await nextTick();
    formElement.value?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
};

const send = (channel: Channel) => {
    if (!validate()) {
        sentVia.value = null;
        focusFirstError();
        return;
    }

    if (channel === 'mail') {
        window.location.href = `mailto:${contactInformation.mail}?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(messageText.value)}`;
    } else {
        window.open(
            `${contactInformation.whatsapp}?text=${encodeURIComponent(messageText.value)}`,
            '_blank',
            'noopener'
        );
    }

    copied.value = false;
    sentVia.value = channel;
};

const copyMessage = async () => {
    try {
        await navigator.clipboard.writeText(messageText.value);
        copied.value = true;
    } catch {
        copied.value = false;
    }
};

const errorCount = computed(() => Object.values(errors).filter(Boolean).length);
</script>

<template>
    <form
        ref="formElement"
        novalidate
        class="flex flex-col gap-medium"
        aria-describedby="contact-form-note"
        @submit.prevent="send('mail')"
    >
        <div class="grid gap-medium md:grid-cols-2">
            <FormField id="contact-name" v-slot="{ describedBy, invalid }" label="Name" required :error="errors.name">
                <input
                    id="contact-name"
                    v-model="form.name"
                    class="form-control"
                    type="text"
                    autocomplete="name"
                    required
                    :aria-invalid="invalid"
                    :aria-describedby="describedBy"
                >
            </FormField>

            <FormField id="contact-email" v-slot="{ describedBy, invalid }" label="E-Mail" required :error="errors.email">
                <input
                    id="contact-email"
                    v-model="form.email"
                    class="form-control"
                    type="email"
                    autocomplete="email"
                    inputmode="email"
                    required
                    :aria-invalid="invalid"
                    :aria-describedby="describedBy"
                >
            </FormField>

            <FormField
                id="contact-phone"
                v-slot="{ describedBy }"
                label="Telefon"
                hint="Falls ich dich lieber anrufen soll."
            >
                <input
                    id="contact-phone"
                    v-model="form.phone"
                    class="form-control"
                    type="tel"
                    autocomplete="tel"
                    :aria-describedby="describedBy"
                >
            </FormField>

            <FormField id="contact-topic" v-slot="{ describedBy, invalid }" label="Worum geht es?" required :error="errors.topic">
                <select
                    id="contact-topic"
                    v-model="form.topic"
                    class="form-control"
                    required
                    :aria-invalid="invalid"
                    :aria-describedby="describedBy"
                >
                    <option value="" disabled>Bitte wählen</option>
                    <option v-for="topic in inquiryTopics" :key="topic" :value="topic">
                        {{ topic }}
                    </option>
                </select>
            </FormField>

            <FormField v-if="isWedding" id="contact-package" v-slot="{ describedBy }" label="Paket">
                <select
                    id="contact-package"
                    v-model="form.package"
                    class="form-control"
                    :aria-describedby="describedBy"
                >
                    <option value="">Noch unklar</option>
                    <option v-for="item in inquiryPackages" :key="item" :value="item">
                        {{ item }}
                    </option>
                </select>
            </FormField>

            <FormField id="contact-date" v-slot="{ describedBy }" label="Wunschtermin">
                <input
                    id="contact-date"
                    v-model="form.date"
                    class="form-control"
                    type="date"
                    :aria-describedby="describedBy"
                >
            </FormField>

            <FormField id="contact-location" v-slot="{ describedBy }" label="Ort" hint="z. B. Freiburg, Kaiserstuhl oder Studio in Sexau">
                <input
                    id="contact-location"
                    v-model="form.location"
                    class="form-control"
                    type="text"
                    autocomplete="address-level2"
                    :aria-describedby="describedBy"
                >
            </FormField>
        </div>

        <FormField id="contact-message" v-slot="{ describedBy, invalid }" label="Nachricht" required :error="errors.message">
            <textarea
                id="contact-message"
                v-model="form.message"
                class="form-control"
                rows="6"
                required
                :aria-invalid="invalid"
                :aria-describedby="describedBy"
            />
        </FormField>

        <!-- Sammelmeldung für Screenreader -->
        <p class="sr-only" aria-live="assertive">
            {{ errorCount ? `${errorCount} ${errorCount === 1 ? 'Feld ist' : 'Felder sind'} noch nicht ausgefüllt.` : '' }}
        </p>

        <Text id="contact-form-note" variant="caption" class="opacity-70">
            Das Formular speichert nichts auf dieser Website. Es erstellt nur eine fertige Nachricht in deinem
            E-Mail-Programm oder in WhatsApp, die du dort selbst abschickst. Mehr dazu in der
            <NuxtLink to="/datenschutz" class="underline underline-offset-2">Datenschutzerklärung</NuxtLink>.
        </Text>

        <div class="flex flex-wrap gap-medium">
            <Button type="submit">Per E-Mail senden</Button>
            <Button variant="outlined" @click="send('whatsapp')">Per WhatsApp senden</Button>
        </div>

        <div
            aria-live="polite"
            class="empty:hidden"
        >
            <div v-if="sentVia" class="border-2 border-black p-medium">
                <Text variant="bodySemibold">
                    {{ sentVia === 'mail'
                        ? 'Dein E-Mail-Programm sollte sich jetzt mit der fertigen Nachricht geöffnet haben. Bitte dort noch auf „Senden“ tippen.'
                        : 'WhatsApp sollte sich jetzt mit der fertigen Nachricht geöffnet haben. Bitte dort noch auf „Senden“ tippen.' }}
                </Text>
                <Text class="mt-small3">
                    Hat sich nichts geöffnet? Kopiere die Nachricht und schick sie an
                    <a :href="`mailto:${contactInformation.mail}`" class="underline underline-offset-2">{{ contactInformation.mail }}</a>
                    oder ruf mich an unter
                    <a :href="`tel:${contactInformation.telLink}`" class="underline underline-offset-2">{{ contactInformation.tel }}</a>.
                </Text>
                <Button variant="text" class="mt-small3 px-none" @click="copyMessage">
                    {{ copied ? 'Nachricht kopiert ✓' : 'Nachricht kopieren' }}
                </Button>
            </div>
        </div>
    </form>
</template>
