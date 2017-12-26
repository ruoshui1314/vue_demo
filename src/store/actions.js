export default {
  increment: ({ commit }) => commit('INCREMENT'),
  decrement: ({ commit }) => commit('DECREMENT'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('INCREMENT')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('INCREMENT')
        resolve()
      }, 1000)
    })
  }
}
