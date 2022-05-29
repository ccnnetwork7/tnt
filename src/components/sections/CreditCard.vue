<template>
  <div class="bg-red--theme">
    <div class="container px-8 md:px-0 mx-auto flex flex-col lg:flex-row justify-evenly py-16">
      <div class="mb-5 lg:mb-0">
        <p class="mb-10 font-black text-[30px] xl:text-[40px] 2xl:text-[59px] leading-[110%] max-w-[321px] xl:max-w-[454px] 2xl:max-w-[665px]">{{ data.title }}</p>
        <p class="font-bold text-[20px] mb-2">{{ data.list_title }}</p>
        <ul class="pl-5 mb-10">
          <li class="list-disc" v-for="(item, index) of data.bullet_list" :key="index">{{ item }}</li>
        </ul>
        <!-- btn-->
        <div
             class="mx-auto md:mx-0 w-fit py-3 px-6 bg-gradient-to-t from-[#349418] to-[#33DF3E] rounded-md cursor-pointer">
          <p class="text-base md:text-[21px] font-medium" @click="greenBtnClickHandler()">{{data.green_btn_title}}</p>
        </div>
        <!-- btn-end -->
      </div>

      <div class="flex items-center justify-center">
        <img :src="data.image" alt="" class="w-[332px] h-[290px] lg:w-[380px] lg:h-[333px] 2xl:w-[556px] 2xl:h-[487px]">
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any
}>()


function greenBtnClickHandler(){
  window.open(props.data.green_btn_link, '_blank')
}
</script>

<style scoped lang="scss">

</style>
