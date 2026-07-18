<template>
    <NuxtLayout>
        <BlobMenu />

       <!--  <Transition
            name="page"
            mode="out-in"
        >
          
        </Transition> -->
          <NuxtPage :key="$route.fullPath" />
    </NuxtLayout>
</template>
