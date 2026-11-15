import type { FaqEntry } from '~/types';

/** Gibt Fragen und Antworten einer Seite als schema.org FAQPage aus */
export const useFaqSchema = (entries: Array<FaqEntry>) => {
    useSchemaOrg([
        {
            '@type': 'FAQPage',
            mainEntity: entries.map((entry) => ({
                '@type': 'Question',
                name: entry.question,
                acceptedAnswer: { '@type': 'Answer', text: entry.answer }
            }))
        }
    ]);
};
