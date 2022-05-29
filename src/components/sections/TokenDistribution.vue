<template>
  <div class="container mx-auto flex flex-col items-center justify-center">
    <img src="/imgs/icons/poly/red.svg" alt="" class="mb-20">
    <p class="text-4xl font-bold mb-3 text-center mb-20">{{ data.title }}</p>
    <img src="/imgs/token-mobile.svg" alt="" class="max-h-[400px] lg:max-h-[500px] token-src mb-10">
    <div>
      <div class="flex justify-end items-center mb-1 text-sm font-bold md:hidden" v-for="(item, index) of data.stats" :key="index">
        <p class="mr-1">{{ item.title }}</p>
        <p>{{ item.percent }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any
}>()
</script>

<style scoped lang="scss">
.token-src {
  @media(min-width:768px){
    content: url("/imgs/token-desktop.svg");
  }
}
</style>
