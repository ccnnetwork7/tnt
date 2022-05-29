<template>
  <div class="w-full fixed">
    <div
        class="relative mx-auto container bg-[#4abc8c] flex content-center items-center rounded-b-3xl h-[100px] shadow-lg shadow-white/10">

      <div
          class="absolute left-8  bg-grey--theme w-[133px] h-[125px] rounded-b-2xl flex items-center justify-center logo-box-shadow">
        <img class="text-white text-3xl text-center h-full w-[180px] h-[90px] px-4"
             src="/imgs/icons/tnt-logo-mobile.png"
             alt="">
      </div>

      <div class="w-full px-4 flex justify-start">
        <!-- <img src="/imgs/icons/pnckswp-mobile.svg" alt="" class="mx-3 cursor-pointer" @click="onNavItemClick(data.get_ccn_button_link, true)"> -->
        <img src="/imgs/icons/humberger-menu.svg" alt="" class="mx-3 cursor-pointer" @click="isNavMenuActive=true">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import useNavMenu from "../../shared/composables/useNavMenu";

const {isNavMenuActive} = useNavMenu()
const props = defineProps<{
  data: any
}>()

function onNavItemClick(link: string, blank: boolean) {
  window.open(link, blank ? '_blank' : '_self')
}
</script>

<style scoped>
.logo-box-shadow {
  box-shadow: 0 2px 12px 0 rgba(255, 16, 16, 0.24);
}
</style>
