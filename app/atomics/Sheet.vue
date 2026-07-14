<template>
    <div
        class="sheet relative border border-black bg-gray30 rounded-none -rotate-1 transition-all duration-200"
    >
        <slot />
    </div>
</template>

<style scoped>
.sheet {
    padding: 2rem;
    transform: rotate(-1deg);
}

.sheet:nth-child(even) {
    transform: rotate(1deg);
}

.sheet::after {
    content: '';
    position: absolute;
    left: 6px;
    bottom: 6px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    border: 1px solid black;
    pointer-events: none;
    transition: all 0.2s ease;
}

.sheet:hover {
    transform: translateY(-6px) rotate(-1deg);
}

.sheet:nth-child(even):hover {
    transform: translateY(-6px) rotate(1deg);
}

.sheet:hover::after {
    left: 3px;
    bottom: 3px;
}
</style>
