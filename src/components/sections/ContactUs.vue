<template>
  <div class="container mx-auto">
    <p class="text-center text-xl xl:text-4xl font-bold mb-10">{{ data.title }}</p>
    <div class="flex flex-col-reverse xl:flex-row items-center justify-center">

      <div class="flex flex-col justify-center xl:mr-16">

        <p class="xl:text-2xl font-light mb-3 xl:mb-6">{{ data.keywords.your_email }}</p>

        <input v-model="mailSubject" type="text" class="text-black min-w-[80vw] xl:min-w-[450px] rounded p-2 xl:p-4 mb-6">

        <p class="xl:text-2xl font-light mb-3 xl:mb-6">{{ data.keywords.message }}</p>

        <textarea v-model="mailBody" type="text"
                  class="text-black xl:min-w-[450px] min-h-[160px] rounded p-4 mb-6"></textarea>

        <button @click="redirectToMail()"
                class="py-4 px-10 w-fit rounded-lg font-bold bg-[#a60303]
                 drop-shadow hover:shadow-lg hover:shadow-[#a60303]/60 transition
                  delay-150 duration-300 ease-in-out">
          {{ data.keywords.send_btn_text }}
        </button>
      </div>


      <div class="mb-10 xl:mb-[initial]">
        <p class="text-center xl:text-left xl:text-2xl font-light mb-2">{{ data.keywords.for_any_question }}</p>
        <p class="text-center xl:text-left xl:text-2xl font-bold mb-10">{{ data.keywords.support_mail }}</p>
        <p class="text-center xl:text-left xl:text-2xl font-light mb-2">{{ data.keywords.for_business_inq }}</p>
        <p class="text-center xl:text-left xl:text-2xl font-bold">{{ data.keywords.partner_mail }}</p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const props = defineProps<{
  data: any
}>()

const mailSubject = ref<string>("")
const mailBody = ref<string>("")

function redirectToMail() {
  window.open(`mailto:${props.data.keywords.support_mail}?subject=${mailSubject.value}&body=${mailBody.value}`, '_blank')
}
</script>

<style scoped>

</style>
