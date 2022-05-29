<template>
  <button
      class="flex my-auto mr-3 cursor-pointer h-fit rounded-lg pnk-btn font-bold flex items-center justify-between drop-shadow hover:shadow-lg hover:shadow-[#a60303]/60 transition delay-150 duration-300 ease-in-out"
      @click="openTab()">
    <span class="px-4 whitespace-nowrap 2xl:hidden">CCN NEWS</span>
    <span class="px-4 whitespace-nowrap hidden 2xl:inline">CCN NEWS</span>
    <span class="h-[50px] p-3 inline-flex justify-center bg-[#B12222] rounded-r-lg">
         <img src="/imgs/icons/pancakeswap.svg" alt="" width="32" height="32">
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  link: string
}>()

function openTab() {
  window.open(props.link, '_blank');
}
</script>

<style scoped>
.pnk-btn {
  background-color: #a60303;
  /*min-width: 300px;*/
  min-height: 50px;
  line-height: 50px;
}
</style>
