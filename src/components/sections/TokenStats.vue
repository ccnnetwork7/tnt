<template>
  <div class="container mx-auto">
    <img src="/imgs/icons/poly/red.svg" alt="" class="mb-6 mx-auto">
    <p class="text-3xl xl:text-4xl text-center font-bold mb-16">{{ data.keywords.token_stats }}</p>

    <div class="flex flex-col-reverse xl:flex-row items-center justify-evenly">

      <div
          class="border-[#FF1616] border flex flex-col justify-between p-4 pb-8 m-5 xl:mx-10 h-full xl:w-[initial] rounded-2xl shadow-[0_0_60px_0_rgba(166,3,3,0.8)] w-[350px]">
        <p class="font-light xl:text-[2rem] mb-2">{{ data.keywords.price }}</p>
        <div class="flex items-center">
          <p class="text-4xl xl:text-7xl mr-1 2xl:mr-5">{{ data.values.price }}</p>
          <img :src="data.is_number_color_red? '/imgs/icons/poly/red.svg': '/imgs/icons/poly/green.svg'"
               alt="" width="16" height="16"
               :class="data.is_number_color_red? 'rotate-180':''" class="mr-2">
          <p class="xl:text-2xl" :class="data.is_number_color_red?'text-[#A60303]':'text-[#00FF00]'">
            {{ data.values.fluctuation }}</p>
        </div>
      </div>

      <div>
        <div>
          <!--        row 1-->
          <p class="mx-5 xl:mx-10 font-light text-xs whitespace-nowrap xl:text-xl mb-2">Token Name</p>
          <p class="mx-5 xl:mx-10 text-xl xl:text-[2rem]">Crypto Currency Network</p>

        </div>

        <div class="flex justify-center xl:justify-start">
          <!--        row 2-->
          <div class="mx-5 xl:mx-10 my-5">
            <p class="font-light text-xs whitespace-nowrap xl:text-xl mb-2">{{ data.keywords.token_name }}</p>
            <p class="text-xl xl:text-[2rem]">{{ data.values.token_name }}</p>
          </div>
          <div class="mx-5 xl:mx-10 my-5">
            <p class="font-light xl:text-xl mb-2">{{ data.keywords.market_cap }}</p>
            <p class="text-xl xl:text-[2rem]">{{ data.values.market_cap }}</p>
          </div>
          <div class="mx-5 xl:mx-10 my-5">
            <p class="font-light xl:text-xl mb-2">{{ data.keywords.volume24h }}</p>
            <p class="text-xl xl:text-[2rem]">{{ data.values.volume24h }}</p>
          </div>
        </div>


        <div class="flex justify-between xl:justify-start">
          <!--        row 2-->
          <div class="mx-5 xl:mx-10 my-5">
            <p class="font-light xl:text-xl mb-2">{{ data.keywords.token_supply }}</p>
            <p class="text-xl xl:text-[2rem]">{{ data.values.token_supply }}</p>
          </div>
          <div class="mx-5 xl:mx-10 my-5">
            <p class="font-light xl:text-xl mb-2">{{ data.keywords.market_rank }}</p>
            <p class="text-xl xl:text-[2rem]">{{ data.values.market_rank }}</p>
          </div>
        </div>


        <div class="flex flex justify-center">

          <div
              class="w-full flex justify-between items-center mx-5 xl:mx-10 px-6 py-4 bg-gradient-to-t from-[#A60303] to-[#FF0000] shadow-[0_0_60px_0_rgba(166,3,3,0.8)] rounded-2xl">

            <div class="flex items-center">
              <img src="/imgs/features/icons8-fire.svg" alt="" width="32" height="32" class="mr-4">
              <p class="font-light text-sm whitespace-nowrap xl:text-xl">{{ data.keywords.token_burnt }}</p>
            </div>

            <p class="text-base xl:text-[2rem]">{{ data.values.token_burnt }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: {
    keywords: {
      token_name: string
      market_cap: string
      volume24h: string
      token_supply: string
      market_rank: string
      price: string
      token_stats: string
      token_burnt: string
    },
    values: {
      token_name: string
      market_cap: string
      volume24h: string
      token_supply: string
      market_rank: string
      price: string
      fluctuation: string
      token_burnt: string
    },
    is_number_color_red: boolean
  }
}>()
</script>

<style scoped>
</style>
