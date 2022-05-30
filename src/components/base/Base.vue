<template>
  <div
    :dir="useLang().langSelected.value == 'fa' ? 'rtl' : 'ltr'"
    class="text-white select-none"
    :class="{
      'font-sans': useLang().langSelected.value == 'en',
      'font-vazir': useLang().langSelected.value == 'fa',
    }"
    v-if="loaded"
  >
    <transition name="fade">
      <NavbarMenuMobile
        v-if="isNavMenuActive"
        @close="isNavMenuActive = false"
        :data="data.navbar"
      />
    </transition>

    <div class="min-h-[100vh]">
      <Navbar :data="data.navbar" />
      <Hero :data="data.hero" id="hero" />
      <UnderHeroWhiteStrip :data="data.underhero_white_strip" />
      <!-- <LatestNewsAndMilstone :data="data.latest_news_and_milestones" id="news-and-milestones"/> -->
      <LatestNews class="mb-20" :data="posts" id="latestnews" />
      <Exchanges class="mb-20" :data="data.listed_here" id="exchanges" />
      <Features class="mb-20" :data="data.features" id="targets" />
      <!-- <IntroVideo class="mb-20" :data="data.intro_video" id="introvid"/> -->
      <!-- <ApplicationCTA class="mb-20" :data="data.application_cta" id="application"/> -->
      <Values class="mb-20" :data="data.values" id="values" />
      <!-- <CreditCard :data="data.credit_card" class="mb-20" id="credit-card"/> -->
      <!-- <TokenStats class="mb-20" :data="stats" id="tokenstats"/> -->
      <!-- <UnderTokenStatsWhiteStrip :data="data.under_token_stats_white_strip" class="mb-20"/> -->
      <OurTokenomics class="mb-20" :data="data.tokenomics" id="ourtokenomics" />
      <!-- <TokenDistribution class="mb-20" :data="data.token_distribution" id="token-distribution"/> -->
      <!-- <RoadMap class="mb-20" :data="data.roadmap" id="roadmap"/> -->
      <!-- <Collaboration class="mb-20" :data="data.collaboration"/> -->
      <FAQ class="mb-20" :data="data.faq.items" id="faq" />
      <ContactUs class="mb-32" :data="data.contact" id="contact" />
      <!-- <JoinCommunity class="mb-40" :data="data.community_cta" id="joincommunity"/> -->
      <ToastMessage class="z-[100]" />
    </div>
    <FooterContainer :data="data.footer" />
  </div>
</template>

<script setup lang="ts">
import CreditCard from "./../sections/CreditCard.vue";
import TokenDistribution from "./../sections/TokenDistribution.vue";
import Collaboration from "./../sections/Collaboration.vue";
import UnderTokenStatsWhiteStrip from "./../sections/UnderTokenStatsWhiteStrip.vue";
import LatestNewsAndMilstone from "../sections/news-and-milestone/LatestNewsAndMilstone.vue";
import Values from "./../sections/Values.vue";
import Navbar from "./navbar/NavbarContainer.vue";
import UnderHeroWhiteStrip from "../sections/UnderHeroWhiteStrip.vue";
import FooterContainer from "./footer/FooterContainer.vue";
import FAQ from "../sections/FAQ.vue";
import Features from "../sections/Features.vue";
import Hero from "../sections/hero/HeroContainer.vue";
import RoadMap from "../sections/roadmap/RoadmapContainer.vue";
import Exchanges from "../sections/Exchanges.vue";
import ApplicationCTA from "../sections/ApplicationCTA.vue";
import TokenStats from "../sections/TokenStats.vue";
import OurTokenomics from "../sections/OurTokenomics.vue";
import LatestNews from "../sections/latest-news/LatestNewsContainer.vue";
import ContactUs from "../sections/ContactUs.vue";
import JoinCommunity from "../sections/JoinCommunity.vue";
import NavbarMenuMobile from "./navbar/NavbarMenuMobile.vue";
import IntroVideo from "./../sections/IntroVideo.vue";
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import ToastMessage from "../shared/components/ToastMessage.vue";
import useNavMenu from "../shared/composables/useNavMenu";
import useLang from "../shared/composables/useLang";

const { isNavMenuActive } = useNavMenu();

let loaded = ref(false);
const data = ref();
const posts = ref();
const stats = ref();
const lang = useLang().langSelected;

watch(lang, async (newLang, old) => {
  // @ts-ignore-next-line
  if (newLang == "en") {
    axios
      .all([
        axios.get("/data/data_en.json").then((response) => {
          data.value = response.data;
        }),

        axios.get("/data/posts.json").then((response) => {
          posts.value = response.data;
        }),

        axios.get("/data/stats.json").then((response) => {
          stats.value = response.data;
        }),
      ])
      .then(() => (loaded.value = true));
    // @ts-ignore-next-line
  } else if (newLang == "fa") {
    axios.all([
      axios.get("/data/data.json").then((response) => {
        data.value = response.data;
      }),

      axios.get("/data/posts.json").then((response) => {
        posts.value = response.data;
      }),

      axios.get("/data/stats.json").then((response) => {
        stats.value = response.data;
      }),
    ]);
  }
});
if (lang.value == "fa") {
  axios
    .all([
      axios.get("/data/data.json").then((response) => {
        data.value = response.data;
      }),

      axios.get("/data/posts.json").then((response) => {
        posts.value = response.data;
      }),

      axios.get("/data/stats.json").then((response) => {
        stats.value = response.data;
      }),
    ])
    .then(() => (loaded.value = true));
} else if (lang.value == "en") {
  axios
    .all([
      axios.get("/data/data_en.json").then((response) => {
        data.value = response.data;
      }),

      axios.get("/data/posts.json").then((response) => {
        posts.value = response.data;
      }),

      axios.get("/data/stats.json").then((response) => {
        stats.value = response.data;
      }),
    ])
    .then(() => (loaded.value = true));
}

onMounted(() => {
  if (window.location.hash) {
    setTimeout(() => {
      console.log("BOOOO", window.location.hash);
      window.open(window.location.hash, "_self");
    }, 500);
  }
});
</script>

<style scoped>
.fade-enter-active {
  display: block;
  transition: opacity 0.3s ease;
}

.fade-leave-active {
  display: none;
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
