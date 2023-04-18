import {useJerStore} from "./JerStore";
export default function useStore() {
    return {
        jer: useJerStore(),
    }
}