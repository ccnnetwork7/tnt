<template>
  <div class="container mx-auto px-3 flex flex-col xl:flex-row justify-center items-center">
    <div class="mb-5 xl:mb-0 xl:mr-20">
      <p class="font-bold text-4xl whitespace-pre-line">{{ data.title }}</p>
      <p class="whitespace-pre-line">{{ data.description }}</p>
    </div>
    <img :src="data.img" alt="" class="xl:ml-20 border border-[#A60303] shadow-[0_0_25px_0_rgba(166,3,3,0.8)] rounded-xl">
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any
}>()
</script>

<style scoped>

</style>
