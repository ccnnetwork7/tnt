<template>
  <div>
    <NavbarDesktop :data="data" class="hidden xl:flex z-[100]" />
    <NavbarMobile :data="data" class="xl:hidden z-[100]" />
  </div>
</template>

<script setup lang="ts">
import NavbarDesktop from "./NavbarDesktop.vue";
import NavbarMobile from "./NavbarMobile.vue";

const props = defineProps<{
  data: any;
}>();
</script>

<style scoped></style>
