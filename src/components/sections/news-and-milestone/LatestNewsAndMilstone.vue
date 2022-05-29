<template>
  <div class="container mx-auto flex flex-col xl:flex-row justify-between items-center py-20">
    <Slider class="mb-5 xl:mb-0"  :data="data.news"/>
    <Slider :data="data.milestones"/>
  </div>
</template>

<script setup lang="ts">
import Slider from './Slider.vue'

const props = defineProps<{
  data: any
}>()
</script>

<style scoped>

</style>
