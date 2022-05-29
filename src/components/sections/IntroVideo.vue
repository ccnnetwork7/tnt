<template>
  <div class="bg-[#a60303]">
    <div class="container mx-auto flex flex-col xl:flex-row justify-between items-center p-10">
      <div class="mb-10 xl:mb-0 xl:max-w-[40%]">
        <p class="text-4xl font-bold mb-3">{{data.title}}</p>
        <p class="whitespace-pre-line">{{data.description}}</p>
      </div>

      <iframe class="rounded-xl w-full xl:max-w-[50%] h-[400px]" :src="data.youtube_embed_src"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any
}>()
</script>

<style scoped>

</style>
