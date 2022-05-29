<template>
  <div class="bg-[#360b6e] w-full flex flex-col items-center py-10">

    <p class="text-4xl font-bold mb-5">حامیان پروژه</p>
    <p class="font-light text-center text-xs xl:text-xl">صرافی های بیشتر به زودی اضافه خواهند شد</p>

    <div ref="scrollContainer" class="flex overflow-x-auto scrolling-partners">
      <img class="cursor-pointer" v-for="(item, index) of data" :key="index" :src="item[0]" alt="" @click="imgClickHandler(index)">
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

const props = defineProps<{
  data: any
}>()

function imgClickHandler(index: string|number) {
  window.open(props.data[index][1], "_blank");
}
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
