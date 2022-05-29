<template>
  <div>
    <HeroDesktop :data="data" class="hidden xl:flex"/>
    <HeroMobile :data="data" class="xl:hidden"/>
  </div>
</template>

<script setup lang="ts">
import HeroDesktop from './HeroDesktop.vue'
import HeroMobile from './HeroMobile.vue'

const props = defineProps<{
  data: any
}>()
</script>

<style scoped>

</style>
