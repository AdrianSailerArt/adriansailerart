<script lang="ts" setup>

type HeroProps = {
  title: string
  subtitle: string
  description: string
  
}

const props = defineProps<HeroProps>()
</script>


<template>

<div class="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center" style="background-image:url('/images/hero.jpg');">
  <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-50"></div>
  
  <div class="px-4 sm:px-6 lg:px-8 z-10">
        <div class="text-center">
          <h2 class="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
            <span class="text-indigo-600 font-bold">{{ title }}</span> {{ subtitle }}
          </h2>
          <p class="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
           {{ description }}
          </p>
        
        </div>
      </div>
  
</div>



</template>