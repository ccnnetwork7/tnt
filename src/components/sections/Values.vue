<template>
  <div class="container mx-auto">
    <p class="text-4xl font-bold text-center mb-16">{{ data.title }}</p>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-y-10 px-3 xl:px-0">

      <div v-for="(item, index) of data.items" :key="index">

        <div class="mb-5 w-[100px] h-[100px] bg-[#038AA6] shadow-[0_0_20px_0_rgba(3,138,166,0.7)] rounded-full flex flex-col justify-center">
          <img :src="item.icon" alt="" class="mx-auto">
        </div>

        <p class="font-medium mb-1">{{ item.title }}</p>
        <p class="font-light pr-6">{{ item.caption }}</p>
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
