<template>
  <div id="infobuttons" class="container mx-auto xl:w-[1000px] content-center justify-center px-3">

    <div class="bg-[#ea424c] py-2 h-[60px] rounded cursor-pointer w-full xl:w-[300px] mx-auto"
         :class="index === 2 ? 'col-span-2 xl:col-span-1' : ''"
         v-for="(item, index) of data.buttons" :key="index">
      <p class="text-center leading-[45px] text-xl" @click="openLink(item.link)">{{ item.text }}</p>
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
