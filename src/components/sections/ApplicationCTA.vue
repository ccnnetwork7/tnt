<template>
  <div>
    <div class="container mx-auto flex flex-col justify-between items-center">
      <img src="/imgs/icons/poly/red.svg" alt="" class="mb-20">

      <div class="mb-28 mx-2">
        <p class="font-medium xl:text-2xl text-center mb-5">{{ data.coming_soon }}</p>
        <p class="font-black text-4xl xl:text-6xl text-center xl:text-left mb-5">{{ data.powerful_app }}</p>
        <p class="font-bold text-sm xl:text-xl text-left">{{ data.you_can_easily }}</p>
        <p class="text-sm xl:text-xl whitespace-pre-line pl-2 text-left">{{ data.points }}</p>
      </div>
    </div>
    <img src="/imgs/app-cta-mobile.png" alt="" class="mx-auto lg:px-12 app-cta-src">
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any
}>()
</script>

<style scoped lang="scss">
.app-cta-src {
  @media (min-width: 640px) {
    content: url("/imgs/application-cta1.png");
  }
}
</style>
