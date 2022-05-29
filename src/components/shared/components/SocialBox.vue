<template>
  <div
      class="rounded-lg border-2 border-white h-[110px] w-[100px] flex flex-col items-center justify-center cursor-pointer"
      @click="openSocialTab()">
    <img :src="icon" alt="" class="mb-3">

    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
  text: string
  link: string
}>()


function openSocialTab() {
  window.open(props.link, '_blank');
}
</script>

<style scoped>

</style>
