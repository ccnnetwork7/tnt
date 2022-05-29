<template>
  <div class="py-[150px] px-6 min-h-screen bg-[#A60303]">
    <div class="container mx-auto flex flex-col justify-center">
      <p class="text-center text-xl">{{ data.c_news_network }}</p>
      <p class="text-center text-3xl font-black">{{ data.heading_biggest }}</p>
      <p class="text-center ">{{ data.subheading }}</p>
      <img src="/imgs/hero.png" alt="">

      
      <div class="mb-8">
        <div class="bg-white shadow-sm rounded flex py-2 px-3 mb-3 drop-shadow-md">
          <img src="/imgs/icons/bsc_hero.svg" alt="BSC Logo" class="select-none mr-3">
          <p class="text-[#102d40] select-text text-[10px] ">{{ data.bsc_addr }}</p>
        </div>

        <div class="mb-5 bg-[#102d40] rounded flex flex-col justify-center px-10 py-2 drop-shadow-lg cursor-pointer"
             @click="copyWalletAddr()">
          <p class="font-medium text-center">{{ data.copy_addr_btn_text }}</p>
        </div>

        <div
            class="w-full mx-auto md:mx-0 w-fit py-2 px-2 bg-gradient-to-t from-[#349418] to-[#33DF3E] rounded-md cursor-pointer">
          <p class="text-[15px] font-medium text-center" @click="greenBtnClickHandler()">
            {{ data.green_btn_title }}</p>
        </div>

        <div class="mt-3">
          <div
            class="w-full mx-auto md:mx-0 w-fit py-2 px-2 bg-gradient-to-t from-purple-900 to-purple-800 rounded-md cursor-pointer"
          >
            <p
              class="text-base md:text-[15px] font-medium text-center"
              @click="purpleBtnClickHandler()"
            >
              {{ data.purple_btn_title }}
            </p>
          </div>
        </div>

        <div class="mt-3">
          <div
            class="w-full mx-auto md:mx-0 w-fit py-2 px-2 bg-gradient-to-t from-[#ff9414] to-[#fbac4d] rounded-md cursor-pointer"
          >
            <p
              class="text-base md:text-[15px] font-medium text-center"
              @click="orangeBtnClickHandler()"
            >
              {{ data.orange_btn_title }}
            </p>
          </div>
        </div>

        <div class="mt-3">
          <div
            class="w-full mx-auto md:mx-0 w-fit py-5 px-2 bg-gradient-to-t from-[#0b59da] to-[#2292AE] rounded-md cursor-pointer"
          >
            <p
              class="text-base md:text-[17px] font-medium text-center"
              @click="blueBtnClickHandler()"
            >
              {{ data.blue_btn_title }}
            </p>
          </div>
        </div>
      </div>


      <div class="grid grid-cols-2 sm:grid-cols-5 gap-7 justify-items-center w-[fit-content] mx-auto">
        <SocialBox v-for="(item,index) of data.socials"
                   :key="index"
                   :icon="item.icon"
                   :text="item.title"
                   :link="item.link"
                   ></SocialBox>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import SocialBox from '../../shared/components/SocialBox.vue'
import useToast from "../../shared/composables/useToast";

const {createToast} = useToast()

const props = defineProps<{
  data: any
}>()

function greenBtnClickHandler(){
  window.open(props.data.green_btn_link, '_blank')
}

function purpleBtnClickHandler() {
  window.open(props.data.purple_btn_link, "_blank");
}

function orangeBtnClickHandler() {
  window.open(props.data.orange_btn_link, "_blank");
}

function blueBtnClickHandler() {
  window.open(props.data.blue_btn_link, "_blank");
}

function copyWalletAddr() {
  navigator.clipboard.writeText(props.data.bsc_addr)
      .then(function () {
        createToast('Copied!', 2)
      }, function () {
        console.error("Copying to clipboard failed.")
      });
}

</script>

<style scoped>

</style>
