import path from 'path';

import { BREAKPOINT_TOKENS } from '../app/styles/breakpoints';
import { colors } from '../app/styles/colors';
import { FontStyles } from '../app/styles/fontTypes';
import { formElementHeight } from '../app/styles/forms';
import { radius } from '../app/styles/radius';
import { shadows } from '../app/styles/shadows';
import { spacing } from '../app/styles/spacing';
import { text } from '../app/styles/text';
import { zIndex } from '../app/styles/zIndex';

type TokenRecord = Record<string, string | number>;

function normalizeValue(v: string | number): string {
    return typeof v === 'number' ? String(v) : v;
}

function toThemeBlock(prefix: string, record: TokenRecord, withInitialReset = false): string {
    const lines: string[] = [];

    if (withInitialReset) {
        lines.push(`  --${prefix}-*: initial;`);
    }

    for (const [key, value] of Object.entries(record)) {
        // keys sollen exakt bleiben (primaryDarkenOne etc.)
        lines.push(`  --${prefix}-${key}: ${normalizeValue(value)};`);
    }

    return lines.join('\n');
}

const OUT_FILE = path.resolve('app/assets/css/tailwind.generated.css');

const extraThemeLines: string[] = [
    // Font
    `  --font-sans: "Geist", "Geist Fallback", ui-sans-serif, system-ui, sans-serif;`,

    // Legacy text token aliases used by the app components
    '  --body-base-font-size: var(--text-base);',
    '  --body-base-line-height: 1.5;',
    '  --body-base-font-weight: 400;',
    '  --dashboard-overline-font-size: var(--text-xs);',
    '  --dashboard-overline-line-height: 1rem;',
    '  --dashboard-overline-letter-spacing: 0.12em;',
    '  --dashboard-overline-font-weight: 700;',
    '  --link-text-font-size: var(--text-base);',
    '  --link-text-line-height: 1.5;',
    '  --link-text-letter-spacing: 0.02em;',
    '  --link-text-font-weight: 600;',
    '  --title-font-size: var(--text-3xl);',
    '  --title-line-height: 1.2;',
    '  --title-letter-spacing: -0.02em;',
    '  --title-font-weight: 700;',
    '  --subtitle-font-size: var(--text-xl);',
    '  --subtitle-line-height: 1.4;',
    '  --subtitle-letter-spacing: 0.01em;',
    '  --subtitle-font-weight: 600;',
    '  --caption-font-size: var(--text-xs);',
    '  --caption-line-height: 1.25;',
    '  --caption-letter-spacing: 0.02em;',
    '  --caption-font-weight: 500;',
    '  --label-font-size: var(--text-sm);',
    '  --label-line-height: 1.25;',
    '  --label-letter-spacing: 0.01em;',
    '  --label-font-weight: 500;',
    '  --font-weight-heading: 700;',
    '  --display-large-font-size: var(--text-7xl);',
    '  --display-large-line-height: 1.1;',
    '  --display-font-size: var(--text-6xl);',
    '  --display-line-height: 1.1;',
    '  --h1-font-size: var(--text-6xl);',
    '  --h1-line-height: 1.1;',
    '  --h1-letter-spacing: -0.02em;',
    '  --h2-font-size: var(--text-4xl);',
    '  --h2-line-height: 1.15;',
    '  --h2-letter-spacing: -0.01em;',
    '  --h3-font-size: var(--text-3xl);',
    '  --h3-line-height: 1.2;',
    '  --h3-letter-spacing: -0.01em;',
    '  --h4-font-size: var(--text-2xl);',
    '  --h4-line-height: 1.25;',
    '  --h4-letter-spacing: 0;',
    '  --h5-font-size: var(--text-xl);',
    '  --h5-line-height: 1.3;',
    '  --h5-letter-spacing: 0;',
    '  --h6-font-size: var(--text-lg);',
    '  --h6-line-height: 1.4;',
    '  --h6-letter-spacing: 0;',

    // Animation alias
    `  --animate-tilt: tilt 10s infinite linear;`,

    `  --text-title: ${FontStyles.title.fontSize};`,
    `  --text-title--line-height: ${FontStyles.title.lineHeight};`,
    `  --text-title--letter-spacing: ${FontStyles.title.letterSpacing};`,
    `  --text-title--font-weight: ${FontStyles.title.fontWeight};`,

    `  --text-overline: ${FontStyles.overline.fontSize};`,
    `  --text-overline--line-height: ${FontStyles.overline.lineHeight};`,
    `  --text-overline--letter-spacing: ${FontStyles.overline.letterSpacing};`,
    `  --text-overline--font-weight: ${FontStyles.overline.fontWeight};`
];

/**
 * Keyframes/Utilities, die du bisher in der CSS-Datei hattest
 * (kannst du drin lassen oder rausziehen)
 */
const keyframes = `
  @keyframes tilt {
    0%,
    50%,
    100% { transform: rotate(0deg); }
    25% { transform: rotate(5deg); }
    75% { transform: rotate(-5deg); }
  }
`.trim();

/**
 * Zusammensetzen
 */
const css = [
    '/*',
    '=================================================',
    '!!! AUTO-GENERATED FILE — DO NOT EDIT BY HAND !!!',
    '=================================================',
    '*/',
    '',
    '@import "tailwindcss";',
    '',
   // '@import "./index.css";',
    '',
    '@custom-variant dark (&:is(.dark *));',
    '',
    '@theme {',

    toThemeBlock('text', text as TokenRecord, false),

    toThemeBlock('color', colors as TokenRecord, true),
    '',
    toThemeBlock('shadow', shadows as TokenRecord, true),
    '',
    toThemeBlock('radius', radius as TokenRecord, true),
    '',
    toThemeBlock('z-index', zIndex as TokenRecord, true),
    '',
    toThemeBlock('spacing', spacing as TokenRecord, false),
    '',
    toThemeBlock('breakpoint', BREAKPOINT_TOKENS as TokenRecord, true),
    '',
    '',

    ...extraThemeLines,
    '',
    // heights aus forms.ts
    toThemeBlock('height', formElementHeight as TokenRecord, false),
    '',
    keyframes
        .split('\n')
        .map((l) => `  ${l}`)
        .join('\n'),
    '}'
].join('\n');

await Bun.write(OUT_FILE, css);
console.log(`✅ Tailwind v4 theme generated: ${OUT_FILE}`);
