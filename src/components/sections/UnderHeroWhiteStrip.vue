<template>
  <div class="bg-white">
    <div class="container mx-auto flex items-center justify-center py-10 px-3">
     <p class="text-[1.2rem] xl:text-[2rem] text-[#202020] font-bold text-center">{{data.text}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any
}>()
</script>
