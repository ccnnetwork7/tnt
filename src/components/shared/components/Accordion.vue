<template>
  <div>
    <div v-for="(item, index) of items"
         :key="index"
         @click="openItem(index)"
         class="w-[90vw] xl:w-[1000px] cursor-pointer">

      <div class="flex justify-between items-center border-b-2 border-white p-3 xl:p-4"
      :class="item.isOpen?'bg-[#707070]':''">

        <p class="font-light text-base xl:text-2xl">{{ item.title }}</p>
        <img v-if="item.isOpen" src="/imgs/icons/chevron-up.svg" alt="indicator">
        <img v-if="!item.isOpen" src="/imgs/icons/chevron-up.svg" class="rotate-180" alt="indicator">

      </div>
      <transition name="fade">

      <p v-if="item.isOpen" class="p-3 min-h-[120px] w-full font-thin text-[#A8A8A8]">{{ item.description }}</p>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import AccordionItem from "../models/AccordionItem";

const props = defineProps<{
  items: AccordionItem[]
}>()


function openItem(index: number) {
  for (let item of props.items) {
    item.isOpen = false
  }
  props.items[index].isOpen = true
}
</script>

<style scoped lang="scss">
.fade-enter-active {
  display: block;
  transition: opacity 0.3s ease;
}

.fade-leave-active {
  display: none;
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
