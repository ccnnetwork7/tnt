<template>
  <div class="flex flex-col justify-center items-center max-w-[340px] mx-auto">
    <div class="bg-[#a60303] shadow-lg shadow-[#a60303]/70 w-[60px] h-[60px] xl:w-[122px] xl:h-[122px] rounded-full flex items-center justify-center mb-5">
      <img :src="icon" alt="" class="w-[32px] h-[32px] xl:w-[initial] xl:h-[initial]">
    </div>
    <p class="text-xs xl:text-xl mb-3">{{ title }}</p>
    <p class="text-sm xl:text-[initial] whitespace-pre-line font-light">{{ caption }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  caption: string
  icon: string
}>()
</script>

<style scoped>

</style>
