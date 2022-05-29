<template>
  <div class="pt-5">
    <img src="/imgs/icons/poly/red.svg" alt="" class="mb-3 mx-auto">

    <p class="text-4xl text-center font-bold mb-3">Partners</p>
    <div class="bg-white">
      <div ref="scrollContainer" class="flex overflow-x-auto scrolling-partners py-20 justify-center">
        <img v-for="(item, index) of data" :key="index" :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

const props = defineProps<{
  data: any
}>()

const previousScrollPosition = ref<number>(0)
const scrollDirection = ref<string>("ltr")
const scrollContainer = ref()
onMounted(() => {

  setInterval(() => {

    if (scrollDirection.value === "ltr") {
      scrollContainer.value.scrollLeft++

      if (previousScrollPosition.value > 0 && previousScrollPosition.value === scrollContainer.value.scrollLeft) {
        scrollDirection.value = "rtl"
      }
      previousScrollPosition.value = scrollContainer.value.scrollLeft

    } else if (scrollDirection.value === "rtl") {

      previousScrollPosition.value = scrollContainer.value.scrollLeft
      scrollContainer.value.scrollLeft--

      if (previousScrollPosition.value === scrollContainer.value.scrollLeft) {
        scrollDirection.value = "ltr"
      }
    }


  }, 10)
})


</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrolling-partners::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrolling-partners {
  scrollbar-width: none; /* Firefox */
}
</style>
