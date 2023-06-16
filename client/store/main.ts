interface stateType {
    isLoading: boolean
}

const useMain = defineStore("useMain", {
    state: (): stateType => ({
        isLoading: false
    }),
    getters: {},
    actions: {}
})