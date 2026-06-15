export const zIndex = {
    below: '-1',
    background: '0',
    base: '1',
    dropdown: '1000',
    sticky: '1100',
    fixed: '1200',
    modalBackdrop: '1300',
    modal: '1400',
    tooltip: '1500'
} as const;

export type Z_Index = keyof typeof zIndex;
