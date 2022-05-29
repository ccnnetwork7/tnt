<template>
  <div>
    <div @click="showDialog=true">
      <img :src="post.image" alt=""
           class="w-[400px] h-[230px] rounded-xl object-contain object-center box-shadow-post mb-6 cursor-pointer">
      <p class="text-2xl mb-3 text-center xl:text-[2rem] font-medium cursor-pointer">{{ post.title }}</p>
      <p class="font-medium text-center xl:text-xl cursor-pointer">{{ post.caption }}</p>

    </div>
    <transition name="fade">
      <PostViewerDialog :post="post" v-show="showDialog" @close="close"/>
    </transition>
  </div>
</template>

<script setup lang="ts">
import PostViewerDialog from '../../shared/components/PostViewerDialog.vue'
import Post from "../models/Post";
import {ref} from "vue";

const props = defineProps<{
  post: Post
}>()

const showDialog = ref<boolean>(false)

function close() {
  showDialog.value = false
}
</script>

<style scoped>
.box-shadow-post {
  box-shadow: 0 2px 32px 0 #f5d39a;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
