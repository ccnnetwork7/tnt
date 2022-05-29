<template>
  <div>
    <LatestNewsMobile :data="data" class="xl:hidden"/>
    <LatestNewsDesktop :data="data" class="hidden xl:flex"/>
  </div>
</template>

<script setup lang="ts">
import LatestNewsMobile from "./LatestNewsMobile.vue"
import LatestNewsDesktop from "./LatestNewsDesktop.vue"
import Post from "../../shared/models/Post";

const props = defineProps<{
  data: {
    title: string,
    posts: Post[]
  }
}>()

</script>

<style scoped lang="scss">

</style>
