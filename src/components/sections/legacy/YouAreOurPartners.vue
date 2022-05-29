<template>
  <div class="bg-[#a60303]">
    <div class="container mx-auto grid grid-cols-1 xl:grid-cols-2 items-center p-4 xl:p-0">

      <!--  left side-->
      <div class="flex flex-col justify-center">
        <p class="text-4xl font-bold mb-4 pt-20 xl:pt-0">{{ data.title }}</p>
        <p class="break-words whitespace-pre-line mb-10">{{ data.description }}</p>

        <div class="grid grid-cols-2 xl:grid-cols-3 items-start">
          <div v-for="(item,index) of data.items" :key="index" class="flex flex-col justify-center items-center xl:items-start">
            <div class="w-fit flex flex-col justify-center items-center">
              <div class="rounded-full border-white border-8 mb-3 w-[100px] h-[100px] flex flex-col justify-center">
                <p class="text-center text-2xl font-bold">{{ item.percentage }}</p>
              </div>
              <p class="whitespace-pre-line font-light text-sm max-w-[100px] break-words">{{ item.caption }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <!--  right side-->
        <img :src="data.img" alt="">
      </div>

    </div>
  </div>

</template>

<script setup lang="ts">
const props = defineProps<{
  data: any
}>()
</script>

<style scoped>

</style>
