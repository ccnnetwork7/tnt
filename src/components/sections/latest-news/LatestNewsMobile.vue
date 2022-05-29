<template>
  <div class="bg-[#360b6e]">
    <div class="container mx-auto flex flex-col justify-center items-center">
      <p class="text-4xl font-bold text-center my-16">{{ data.title }}</p>

      <div class="flex justify-center items-center carousel w-[90%] h-[450px] max-w-[400px]"
          @touchstart="startTouch($event)"
          @touchend="endTouch($event)">

        <transition
            :name="slideDirection"
            class="carousel-slide"
            v-for="(item, index) of data.posts.slice(0,4)"
            :key="index"
        >
          <PostPreview
              v-show="currentIndex === index"
              :key="index"
              :post="item"
              class="carousel-slider my-4 mx-3"/>
        </transition>
      </div>

      <div class="flex">
        <div
            v-for="(item, index) of data.posts.slice(0,4)"
            :class="`h-[10px] w-[10px] ${index===currentIndex?'bg-[#360b6e]':'bg-[#4abc8c]'} rounded-full mx-2 xl:hidden`"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PostPreview from '../../shared/components/PostPreview.vue'
import Post from "../../shared/models/Post";
import {ref} from "vue";

const props = defineProps<{
  data: {
    title: string,
    posts: Post[]
  }
}>()


const currentIndex = ref<number>(0)
const slideDirection = ref<string>('slide-right')


function next() {
  currentIndex.value++
  if (currentIndex.value >= 4) {
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
