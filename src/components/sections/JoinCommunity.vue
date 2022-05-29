<template>
  <div

      class="max-w-[80vw] xl:container mx-auto flex flex-col justify-center items-center mt-5
      border-[#FF1616] border rounded-3xl
      shadow-xl
      background
">


    <div class="w-full flex flex-col justify-center items-center py-10 rounded-lg ">
      <p class="text-xl xl:text-4xl font-bold text-center xl:mb-[initial] xl:my-10 text-center">{{ data.title }}</p>
      <p class="p-7 xl:p-2 whitespace-pre-line max-w-[660px] text-center mb-10 font-bold xl:text-2xl">{{ data.bodyText }}</p>
      <div class="flex items-center justify-center mb-10">
        <img v-for="(item, index) of data.socials"
             :key="index"
             :src="item.icon"
             alt=""
             @click="socialClick(item.link)"
             width="30"
             height="30"
             class="mx-4 cursor-pointer"
        >
      </div>
      <p class="text-sm xl:text-base text-[#A8A8A7]">Copyright © {{ new Date().getFullYear() }} CCN. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any
}>()

function socialClick(link: string) {
  window.open(link, '_blank')
}
</script>

<style scoped lang="scss">
.background{
  @media (min-width: 1280px){
    background: linear-gradient(rgba(32, 32, 32, 0.7), rgba(32, 32, 32, 0.7)), url('/imgs/join-community.png') no-repeat center;
    background-size: contain;
  }

  @media (min-width: 1536px){
    background: url('/imgs/join-community.png') no-repeat center;
    background-size: contain;
  }
}
</style>
