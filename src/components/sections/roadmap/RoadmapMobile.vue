<template>
  <div class="container mx-auto flex flex-col justify-center items-center mt-5">

    <div
        class="w-full py-10 rounded-lg shadow-[0_0_60px_0_rgba(166,3,3,0.8)] bg-gradient-to-t from-[#A60303] to-[#202020]">
      <p class="text-xl xl:text-4xl font-bold text-center my-10">{{ data.title }}</p>

      <div class="w-[250px] mx-auto">
        <div v-for="(item, index) of data.steps" :key="index" @click="selectStep(index)">
          <div :class="index===selectedIndex? 'bg-white text-[#A60303]':''"
               class="py-2 px-14 my-4 border border-white rounded cursor-pointer text-center">
            Phase {{ index + 1 }}
          </div>



          <transition name="fade">
            <div :key="index" class="mx-3" v-if="index===selectedIndex">
              <div v-for="(item, i) of item.items" :key="i" class="flex my-1 items-start">
                <img src="/imgs/icons/checkbox.svg" alt="" class="w-[16px] h-[16px] mr-3">
                <p class="text-xs font-medium">{{ item }}</p>
              </div>
            </div>
          </transition>


        </div>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps<{
  data: any
}>()

const selectedIndex = ref<number>(0)
const showStepInfo = ref<boolean>(true)

function selectStep(index: number) {
  showStepInfo.value = false
  selectedIndex.value = index
  showStepInfo.value = true

}
</script>

<style scoped lang="scss">
.fade-enter-active {
  display: block;
  transition: opacity 1s ease;
}

.fade-leave-active {
  display: none;
  transition: opacity 1s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
