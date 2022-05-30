<template>
  <div class="fixed w-full">
    <div
      class="relative mx-auto bg-[#4abc8c] flex content-center items-center rounded-b-3xl h-[115px] shadow-lg shadow-white/10"
    >
      <!--      big logo-->
      <div
        class="absolute xl:left-5 2xl:left-10 3xl:left-20 bg-grey--theme w-[235px] h-[145px] rounded-b-2xl flex items-center justify-center logo-box-shadow"
      >
        <img
          class="text-white text-3xl text-center h-full leading-[80px] w-[180px] h-[90px]"
          src="/imgs/icons/logo-tnt.png"
          alt=""
        />
      </div>

      <!--      items-->
      <div
        class="flex h-full items-center xl:ml-[250px] 2xl:ml-[320px] 3xl:ml-[320px]"
      >
        <div
          class="m-2 mr-6 flex gap-2 bg-slate-100 p-1 rounded-xl text-gray-800"
        >
          <div
            :class="{
              'activeLang text-white': useLang().langSelected.value == 'en',
            }"
            class="px-2 py-1 rounded-xl cursor-pointer"
            @click="useLang().changeLang('en')"
          >
            EN
          </div>
          <div
            :class="{
              'activeLang text-white': useLang().langSelected.value == 'fa',
            }"
            class="px-2 py-1 rounded-xl cursor-pointer"
            @click="useLang().changeLang('fa')"
          >
            FA
          </div>
        </div>
        <div
          class="cursor-pointer flex items-center h-full pb-[8px] hover:pb-0 hover:border-b-8 border-[#a60303] mx-4"
          v-for="(item, index) of data.navigation_items"
          :key="index"
        >
          <p
            class="text-xs text-center h-full leading-[115px] whitespace-nowrap"
            style="font-size: 1.1rem"
            @click="onNavItemClick(item.link, item.blank)"
          >
            {{ item.title }}
          </p>
        </div>
      </div>

      <!-- <PancakeSwapButton class="mx-auto ml-1" :link="data.get_ccn_button_link"/> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import PancakeSwapButton from "../../shared/components/PancakeSwapButton.vue";
import useLang from "../../shared/composables/useLang";

const props = defineProps<{
  data: any;
}>();

function onNavItemClick(link: string, blank: boolean) {
  window.open(link, blank ? "_blank" : "_self");
}
</script>

<style scoped>
.logo-box-shadow {
  box-shadow: 0 2px 12px 0 rgba(255, 16, 16, 0.24);
}
.activeLang {
  background-color: #360b6e;
}
</style>
