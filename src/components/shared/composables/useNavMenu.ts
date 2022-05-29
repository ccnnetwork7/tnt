import {ref} from "vue";

const isNavMenuActive = ref<boolean>(false)


export default function useNavMenu() {
    return {
        isNavMenuActive
    }
}
