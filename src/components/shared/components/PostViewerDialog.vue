<template>
  <div class="w-full h-full fixed left-0 top-0 bg-opacity-30 backdrop-blur bg-white z-[110] p-8 text-black hidden xl:block">
    <div class="container mx-auto">
      <div class="flex items-center justify-start">
        <img src="/imgs/icons/close.png" alt="" @click="close()" class="cursor-pointer">
      </div>
      <div class="flex flex-col justify-center items-center">
        <img :src="post.image" alt="">
        <p class="text-center text-4xl font-bold">{{ post.title }}</p>
        <p class="text-center whitespace-pre-line overflow-y-auto max-w-[500px]">{{ post.full_text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Post from "../models/Post";

const props = defineProps<{
  post: Post
}>()

const emits = defineEmits<{
  (e: 'close'): void
}>()

function close() {
  emits('close')
}
</script>

<style scoped>

</style>
