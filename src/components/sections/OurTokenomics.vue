<template>
  <div class="bg-gradient-to-t from-[#4abc8c] to-[#360b6e]">
    <div class="container mx-auto flex flex-col justify-center items-center py-20">
      <p class="xl:text-[30px] mb-5">پاداش</p>
      <p class="font-bold text-xl xl:text-4xl mb-16 xl:mb-5">{{ data.title }}</p>

      <div class="flex flex-col xl:flex-row items-center justify-between mb-10">


        <div class="flex flex-col justify-center items-center mx-3 mb-28 xl:mb-[initial]">
          <div class="flex flex-col xl:flex-row items-center justify-center mb-5 xl:mb-[initial]">
            <img :src="data.item_left.icon" alt="icon" class="mr-4">
            <p class="text-center font-bold text-8xl xl:text-[9.5rem]">{{ data.item_left.percent }}</p>
          </div>
          <p class="whitespace-pre-line text-center max-w-[470px] text-xl" v-html="data.item_left.description"></p>
        </div>


        <div class="flex flex-col justify-center items-center mx-3 mb-28 xl:mb-0">
          <div class="flex flex-col xl:flex-row  items-center justify-center mb-5 xl:mb-[initial]">
            <img :src="data.item_right.icon" alt="icon" class="mr-4">
            <p class="text-center font-bold text-8xl xl:text-[9.5rem]">{{ data.item_right.percent }}</p>
          </div>
          <p class="whitespace-pre-line text-center max-w-[470px] text-xl" v-html="data.item_right.description"></p>
        </div>

      </div>

      <div class="flex flex-col items-center mb-20">
        <div class="flex flex-col xl:flex-row items-center xl:mb-10">
          <img :src="data.item_bottom.icon" alt="" class="mr-3 w-[145px] h-[145px] mb-3 xl:mb-0">
          <p class="text-6xl xl:text-[130px] font-bold mb-3">{{data.item_bottom.number}}</p>
        </div>
        <p class="xl:max-w-[750px] text-center">{{data.item_bottom.description}}</p>

      </div>


      <!-- <div class="flex">
        <div class="bg-[#102d40] mx-2 flex items-center py-3 px-6 rounded cursor-pointer font-light"
             v-for="(item, index) of data.buttons" :key="index" @click="openLink(item.link)">
          <p class="font-medium mr-2">{{ item.title }}</p>
          <img :src="item.icon" alt="">
        </div>
      </div> -->


    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any
}>()


function openLink(link: string) {
  window.open(link, '_blank')
}
</script>

<style scoped>

</style>
