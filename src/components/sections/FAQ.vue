<template>
  <div class="flex items-center justify-center container mx-auto">
    <Accordion :items="data"/>
  </div>
</template>

<script setup lang="ts">
import Accordion from '../shared/components/Accordion.vue'
import AccordionItem from "../shared/models/AccordionItem";

const props = defineProps<{
  data: AccordionItem[]
}>()
</script>

<style scoped>

</style>
