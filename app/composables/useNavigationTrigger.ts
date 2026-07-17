export const useNavigationTrigger = () => {
    const isOpen = useState('isOpen', () => false);

    const setOpen = () => (isOpen.value = true);
    const setClosed = () => (isOpen.value = false);
    return { isOpen, setOpen, setClosed };
};
