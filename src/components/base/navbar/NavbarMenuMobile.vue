<template>
  <div class="xl:hidden z-[1000] fixed w-screen h-screen bg-[#202020]">

    <div class="container mx-auto p-4 flex flex-col items-center h-full justify-between">

      <div class="flex items-center justify-start w-full">
        <img src="/imgs/icons/close-white.png" alt="" @click="close()" class="cursor-pointer">
      </div>


      <div class="mb-3">
        <p v-for="(item, index) of data.navigation_items"
           :key="index"
           class="text-center text-2xl font-bold my-8 cursor-pointer" @click="onNavItemClick(item.link, item.blank)">
          {{ item.title }}
        </p>
      </div>


      <!-- <PancakeSwapButton class="mr-0 my-0" :link="data.get_ccn_button_link"/> -->
    </div>

  </div>
</template>

<script setup lang="ts">
import PancakeSwapButton from '../../shared/components/PancakeSwapButton.vue'

const props = defineProps<{
  data: any
}>()

const emits = defineEmits<{
  (e: "close"): void
}>()

function close() {
  emits('close')
}

function onNavItemClick(link: string, blank: boolean) {
  window.open(link, blank ? '_blank' : '_self')
  close()
}

</script>

<style scoped>
.logo-box-shadow {
  box-shadow: 0 2px 12px 0 rgba(255, 16, 16, 0.24);
}
</style>
