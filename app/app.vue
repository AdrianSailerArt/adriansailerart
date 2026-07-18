<template>
    <NuxtLayout>
        <BlobMenu />

        <Transition
            name="page"
            mode="out-in"
        >
            <NuxtPage :key="$route.fullPath" />
        </Transition>
    </NuxtLayout>
</template>
