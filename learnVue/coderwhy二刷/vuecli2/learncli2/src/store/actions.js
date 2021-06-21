export default {
  increment_action({commit}) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('increment')
        resolve('increment success')
      }, 1000)
    })
  },
  increment_action_payload({commit},payload) {
    commit('incrementCount',payload)
  }
}
