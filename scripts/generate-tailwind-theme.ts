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
