export const colors = {
    background: '#E4E4E4',
    backgroundDark: '#2C2C2C',
    darkComponent: '#1A1A1A',
    component: '#F0F0F0',
    black: '#000000',
    white: '#FFFFFF',

    primary: '#922625',
    primaryDarkenOne: '#6E1D1B',
    primaryDarkenTwo: '#451211',
    primaryLightenOne: '#BF3230',
    primaryLightenTwo: '#E83D3A',

    secondary: '#9BADDB',
    secondaryDarkenOne: '#485166',
    secondaryDarkenTwo: '#2B303D',
    secondaryLightenOne: '#65718F',
    secondaryLightenTwo: '#8291B8',

    success: '#00B26B',
    successDarkenOne: '#00995C',
    successDarkenTwo: '#007A49',
    successLightenOne: '#33CC85',
    successLightenTwo: '#66E0A3',


    warning: '#FFBF00',
    warningDarkenOne: '#CC9900',
    warningDarkenTwo: '#996B00',
    warningLightenOne: '#FFD24D',
    warningLightenTwo: '#FFE680',


    info: '#1E6FBF',
    infoDarkenOne: '#155A99',
    infoDarkenTwo: '#0E3E66',
    infoLightenOne: '#4D97D9',
    infoLightenTwo: '#80B7E6',

   
    error: '#D93030',
    errorDarkenOne: '#B32424',
    errorDarkenTwo: '#7A1717',
    errorLightenOne: '#E67373',
    errorLightenTwo: '#F2A6A6',

    gray5: '#F5F5F7',
    gray10: '#ECECEC',
    gray15: '#E6E8EB',
    gray20: '#D8D8D8',
    gray30: '#C2C6CC',
    gray40: '#B0B0B0',
    gray50: '#8A9199',
    gray55: '#888888',
    gray70: '#4A515B',
    gray90: '#1D1D1F'
} as const;

export type ColorName = keyof typeof colors;
