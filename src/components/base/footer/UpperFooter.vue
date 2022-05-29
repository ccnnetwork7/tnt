<template>
  <div class="bg-[#4abc8c] w-full relative">

    <div class="container mx-auto flex flex-col xl:flex-row justify-between items-center 2xl:p-10 py-20">


      <div style="background-color:#038aa6b3;"
          class="absolute right-2/4 -top-10 rounded-full bg-grey--theme w-[80px] aspect-square cursor-pointer flex flex-col justify-center items-center
          translate-x-1/2
          shadow-xl shadow-[#6ccbe7]/80 hover:shadow-none transition delay-150 duration-300 ease-in-out border-[#eea24e] hover:border-4 hover:bg-white"
          @click="scrollUp"
          @mouseenter="btnUpHover=true"
          @mouseleave="btnUpHover=false">
        <img :src="btnUpHover?'/imgs/icons/footer-arrow-red.svg':'/imgs/icons/footer-arrow.svg'" alt="">
      </div>

      <!--col1-->
      <div class="xl:w-1/2 flex flex-col xl:flex-row">


        <div class="flex flex-col items-center mb-10 xl:block xl:mr-10 xl:mb-0">
          <p class="mb-6 xl:mb-4 font-black text-xl">{{ data['follow_us'] }}</p>
          <div class="mb-8 flex xl:mb-4">
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
          <!-- <button
              class="flex my-auto cursor-pointer h-fit rounded-lg pnk-btn font-bold flex items-center justify-between drop-shadow hover:shadow-lg hover:shadow-[#a60303]/60 transition delay-150 duration-300 ease-in-out"
              @click="openPnkSwp()">
            <span class="px-4 whitespace-nowrap">{{ data['pnckswp_text'] }}</span>
            <span class="h-[50px] w-[75px] inline-flex justify-center bg-[#B12222] rounded-r-lg">
           <img src="/imgs/icons/pancakeswap.svg" alt="" width="32" height="32">
      </span>
          </button> -->
        </div>


        <div class="flex flex-col justify-center items-center xl:items-start">
          <p class="font-black mb-4 text-xl">{{ data['write_us'] }}</p>
          <p class="font-bold mb-4">{{ data['support_email'] }}</p>
          <p class="font-bold mb-4">{{ data['partnership_email'] }}</p>
        </div>
      </div>


      <div class="border-t-2 border-[#A60303] pt-14 mt-14 flex flex-col justify-center items-center
      xl:w-1/2 xl:border-none xl:pt-0 xl:mt-0 xl:block mx-8 xl:mx-0 xl:pl-8">
        <img src="/imgs/icons/tnt-logo-165x75-white.png" alt="" class="mb-4">
        <p class="mb-2 text-sm font-black xl:text-xl">T A T A L O O - P A Y M E N T - N E T W O R K</p>
        <p class="mb-2 font-black">{{ data['raising_awareness'] }}</p>
        <p>{{ data['team_purpose'] }}</p>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const props = defineProps<{
  data: any
}>()


const btnUpHover = ref<boolean>(false)

function openPnkSwp() {
  window.open(props.data.pnckswp_link, '_blank');
}

function socialClick(link: string) {
  window.open(link, '_blank')
}

function scrollUp() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

</script>

<style scoped>
.pnk-btn {
  background-color: #a60303;
  min-width: 300px;
  min-height: 50px;
  line-height: 50px;
}
</style>
