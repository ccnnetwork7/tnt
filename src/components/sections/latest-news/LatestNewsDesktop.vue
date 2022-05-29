<template>
  <div class="container mx-auto flex flex-col justify-center items-center">
    <p class="text-4xl font-bold text-center my-16">{{ data.title }}</p>
    <div class="flex justify-center items-center">
      <PostPreview v-for="(item, index) of data.posts.slice(0,4)" :key="index"
                   :post="item"
                   class="mx-2"/>
    </div>

  </div>
</template>

<script setup lang="ts">
import PostPreview from '../../shared/components/PostPreview.vue'
import Post from "../../shared/models/Post";

const props = defineProps<{
  data: {
    title: string,
    posts: Post[]
  }
}>()
</script>

<style scoped>

</style>
