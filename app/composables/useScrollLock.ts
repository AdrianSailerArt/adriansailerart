let locks = 0;
let savedScrollY = 0;

/**
 * Sperrt das Scrollen der Seite, z. B. während Menü oder Lightbox offen sind.
 * `overflow: hidden` allein reicht auf iOS Safari nicht – die Seite scrollt dort
 * trotzdem mit. Deshalb wird der Body fixiert und die Position danach wiederhergestellt.
 */
export const useScrollLock = () => {
    const lock = () => {
        if (!import.meta.client || locks++ > 0) return;

        savedScrollY = window.scrollY;

        Object.assign(document.body.style, {
            position: 'fixed',
            top: `-${savedScrollY}px`,
            left: '0',
            right: '0',
            overflow: 'hidden'
        });
    };

    const unlock = () => {
        if (!import.meta.client || locks === 0 || --locks > 0) return;

        Object.assign(document.body.style, {
            position: '',
            top: '',
            left: '',
            right: '',
            overflow: ''
        });

        window.scrollTo({ top: savedScrollY, behavior: 'instant' });
    };

    return { lock, unlock };
};
