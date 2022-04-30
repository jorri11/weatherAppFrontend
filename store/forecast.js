export const state = () => ({
    nowcast: undefined
})

export const mutations = {
    update(state, nowcast) {
        state.nowcast = nowcast
    },
    clear(state) {
        state.nowcast = undefined
    }
}