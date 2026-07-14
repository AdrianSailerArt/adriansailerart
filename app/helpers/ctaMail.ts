export const createMailtoCta = (planName: string) => () => {
   if (!import.meta.client) {
        return;
    }

    const subject = `Anfrage für ${planName}`;
    const body = `Hallo Adrian,\n\nich habe Interesse an deinem Paket "${planName}" und würde mich gerne bei dir melden.\n\nViele Grüße`;

    window.location.href = `mailto:adriansailer@me.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};