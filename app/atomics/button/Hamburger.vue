<script setup lang="ts">
import Button from './Button.vue';

const { isOpen, setClosed, setOpen } = useNavigationTrigger();

const trigger =()=>{
    if(isOpen.value){
        setClosed();
    } else {
        setOpen();
    }
}
</script>

<template>
    <Button
        class="z-modal w-10 h-10 flex items-center justify-center"
        :aria-label="isOpen ? 'Menü schließen' : 'Menü öffnen'"
        :aria-expanded="isOpen"
        aria-controls="main-menu"
        @click="trigger"
    >
        <div class="relative w-8 h-6" aria-hidden="true">
            <span
                class="absolute left-0 top-0 w-full h-0.5 bg-white transition-all duration-300"
                :class="isOpen ? 'translate-y-[11px] rotate-45' : ''"
            />
            <span
                class="absolute left-0 top-[11px] w-full h-0.5 bg-white transition-all duration-300"
                :class="isOpen ? 'opacity-0' : ''"
            />
            <span
                class="absolute left-0 bottom-0 w-full h-0.5 bg-white transition-all duration-300"
                :class="isOpen ? '-translate-y-[11px] -rotate-45' : ''"
            />
        </div>
    </Button>
</template>
