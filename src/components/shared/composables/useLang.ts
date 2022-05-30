import { ref } from "vue";

const langSelected = ref<any>("fa");
if (localStorage.getItem("lang")) {
  langSelected.value = localStorage.getItem("lang");
}
export default function useLang() {
  function changeLang(lang: any) {
    if (lang == "fa") {
      langSelected.value = "fa";
      localStorage.setItem("lang", "fa");
    } else if (lang == "en") {
      langSelected.value = "en";
      localStorage.setItem("lang", "en");
    }
  }
  return {
    changeLang,
    langSelected,
  };
}
