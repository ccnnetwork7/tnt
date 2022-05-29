<template>
  <div class="container mx-auto flex flex-col items-center">
    <img src="/imgs/icons/poly/red.svg" alt="" class="mb-6">

    <p class="text-2xl xl:text-4xl font-bold text-center mx-5 mb-5"> {{ data.amazing_design }}</p>
    <p class="text-center p-3 xl:max-w-[1000px] text-sm xl:text-xl whitespace-pre-line mb-32">
      {{ data.description }}
    </p>

    <InfoButtons class="mb-20" :data="data.info_buttons"/>

    <p class="text-4xl font-bold mb-16">Targets</p>
    <div class="w-full grid grid-cols-2 xl:grid-cols-3 gap-y-32 items-start">
      <FeatureItem v-for="(item,index) of data.features"
                   :key="index" :title="item.title" :caption="item.caption" :icon="item.icon"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import FeatureItem from '../shared/components/FeatureItem.vue'
import InfoButtons from '../sections/InfoButtons.vue'

const props = defineProps<{
  data: any
}>()

</script>

<style scoped>

</style>
