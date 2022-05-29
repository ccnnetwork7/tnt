<template>
  <transition name="fade">
    <div v-if="isToastActive"
         class="fixed bottom-20 bg-white text-black flex items-center min-w-[300px]  rounded right-1/2 translate-x-1/2 p-4 shadow-xl cursor-pointer"
         @click="terminateToast()">
      <p class="text-center w-full">{{ toastText }}</p>
    </div>
  </transition>
</template>

<script setup lang="ts">
import useToast from "../composables/useToast";

const {isToastActive, toastText, terminateToast} = useToast()
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
