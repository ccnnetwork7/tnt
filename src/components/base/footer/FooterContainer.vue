<template>
  <div class="w-full flex flex-col items-center">
    <UpperFooter :data="data"/>
    <LowerFooter/>
  </div>
</template>

<script setup lang="ts">
import LowerFooter from './LowerFooter.vue'
import UpperFooter from './UpperFooter.vue'

const props = defineProps<{data:any}>()
</script>

<style scoped>

</style>
