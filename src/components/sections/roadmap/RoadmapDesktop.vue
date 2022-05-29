<template>
  <div class="container mx-auto flex flex-col justify-center items-center mt-5">

    <div
        class="w-full py-10 rounded-lg shadow-[0_0_60px_0_rgba(166,3,3,0.8)] bg-gradient-to-t from-[#A60303] to-[#202020]">
      <p class="text-4xl font-bold text-center my-10">{{ data.title }}</p>

      <div class="flex  justify-center">

        <div class="mr-6">
          <div v-for="(item, index) of data.steps" :key="index"
               @click="selectStep(index)"
               :class="index===selectedIndex? 'bg-white text-[#A60303]':''"
               class="py-2 px-14 my-4 border border-white rounded cursor-pointer whitespace-nowrap">
            Phase {{ index + 1 }}
          </div>
        </div>


        <div class="pt-4 flex">

          <transition name="fade" v-for="(step, index) of data.steps">

            <div :key="index" v-if="index===selectedIndex" class="max-w-[600px]">
              <p class="text-3xl">Phase {{ index + 1 }} - {{ step.title }}</p>

              <div v-for="(item, i) of step.items" :key="i" class="flex justify-start items-start my-3">
                <img src="/imgs/icons/checkbox.svg" alt="" class="w-[32px] h-[32px] object-center mr-3">
                <p class="text-2xl font-medium">{{ item }}</p>
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
