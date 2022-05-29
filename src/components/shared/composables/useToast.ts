import {readonly, ref} from "vue";

const toastText = ref<string>()
const isToastActive = ref<boolean>()


export default function useToast() {

    function createToast(text: string, timeoutInSeconds: number) {
        toastText.value = text
        isToastActive.value = true

        setTimeout(() => {
            isToastActive.value = false
            toastText.value = ""
        }, timeoutInSeconds * 1000)

    }

    function terminateToast(){
        isToastActive.value = false
        toastText.value = ""
    }

    return {
        createToast,
        terminateToast,
        toastText: readonly(toastText),
        isToastActive: readonly(isToastActive)
    }
}
