<template>
  <div class="w-full">
    <p class="text-2xl font-bold text-center">{{ data.title }}</p>

    <div
        class="flex justify-center items-center carousel h-[200px] w-[353px] mx-auto lg:w-[529px] lg:h-[300px] 3xl:w-[875px] 3xl:h-[496px]"
        @touchstart="startTouch($event)"
        @touchend="endTouch($event)">

      <transition
          :name="slideDirection"
          class="carousel-slide"
          v-for="(item, index) of data.slides"
          :key="index"
      >
        <div
            v-show="currentIndex === index"
            :key="index"
            class="carousel-slider my-4 mx-3 border border-[#FF1616] rounded-xl flex flex-col justify-end">

          <img :src="item.img" alt="" class="w-full h-full object-cover object-center rounded-xl" draggable="false">
          <div class="bg-gradient-to-b from-transparent to-black/40 p-4 absolute w-full">
            <p class="text-xs lg:text-xl mb-3 font-bold">{{ item.title }}</p>
            <p class="text-xs max-w-[540px]">{{ item.caption }}</p>
          </div>
        </div>
      </transition>
    </div>

    <div class="flex justify-center">
      <div
          v-for="(item, index) of data.slides"
          :class="`cursor-pointer h-[10px] w-[10px] ${index===currentIndex?'bg-[#FF0000]':'bg-[#750303]'} rounded-full mx-2`"
          @click="goToSliderByIndex(index)"
      ></div>
    </div>


  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const props = defineProps<{
  data: any
}>()


const currentIndex = ref<number>(0)
const slideDirection = ref<string>('slide-right')


function next() {
  currentIndex.value++
  if (currentIndex.value >= 3) {
    currentIndex.value = 0
  }
  slideDirection.value = 'slide-right'
}

function prev() {
  currentIndex.value--
  if (currentIndex.value < 0) {
    currentIndex.value = 3
  }
  slideDirection.value = 'slide-left'
}

function goToSliderByIndex(index: number) {
  slideDirection.value = index > currentIndex.value ? 'slide-right' : 'slide-left'

  currentIndex.value = index
}

const touchstartX = ref<number>(0)
const touchstartY = ref<number>(0)
const touchendX = ref<number>(0)
const touchendY = ref<number>(0)

function handleGesture() {
  if (touchendX.value < touchstartX.value) {
    next()
  }

  if (touchendX.value > touchstartX.value) {
    prev()
  }
}


function startTouch(event: TouchEvent) {
  touchstartX.value = event.changedTouches[0].screenX
  touchstartY.value = event.changedTouches[0].screenY
}

function endTouch(event: TouchEvent) {
  touchendX.value = event.changedTouches[0].screenX
  touchendY.value = event.changedTouches[0].screenY
  handleGesture()
}

</script>

<style scoped lang="scss">
.slide-left-enter-active {
  animation: slide-left-in 0.5s ease-in;
}

.slide-left-leave-active {
  animation: slide-left-out 0.5s ease-in;
}

.slide-right-enter-active {
  animation: slide-right-in 0.5s ease-in;
}

.slide-right-leave-active {
  animation: slide-right-out 0.5s ease-in;
}

@keyframes slide-right-out {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes slide-right-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-left-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-left-out {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}


.carousel {
  position: relative;
  overflow: hidden;
  z-index: 10;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  img {
    width: 100%;
    height: 100%;
  }

}
</style>
