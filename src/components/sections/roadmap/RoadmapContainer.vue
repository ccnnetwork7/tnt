<template>
  <div>
    <RoadmapDesktop :data="data" class="hidden xl:flex"/>
    <RoadmapMobile :data="data" class="xl:hidden"/>
  </div>
</template>

<script setup lang="ts">
import RoadmapDesktop from './RoadmapDesktop.vue'
import RoadmapMobile from './RoadmapMobile.vue'

const props = defineProps<{
  data: any
}>()

</script>

<style scoped>

</style>
