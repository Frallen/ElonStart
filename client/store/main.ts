import {createError, fillerPage} from "~/composables/mixins";
import {NavigationType, PageType} from "~/types/main";

interface stateType {
    isLoading: boolean
    Navigation: NavigationType
    Page: PageType
}

export const useMain = defineStore("useMain", {
    state: (): stateType => ({
        isLoading: false,
        Navigation: {} as NavigationType,
        Page: {} as PageType
    }),
    getters: {},
    actions: {
        async getNavigation() {
            setLoading(true)
            let {data, error} = await useFetch(
                `${useRuntimeConfig().public.strapi.url}/api/navigation?${populate()}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            if (error.value) {
                createError()
            } else {
                this.Navigation = data.value as NavigationType
            }
            setLoading(false)
        },
        async preparePage(route: string) {
            setLoading(true)

            let {data, error} = await useFetch(
                `${useRuntimeConfig().public.strapi.url}/api/pages?${fillerPage(route)}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            if (error.value) {
                createError()
            } else {
                this.Page = data.value.data[0] as PageType
            }
            setLoading(false)
        }
    }
})