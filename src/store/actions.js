export default {
  addItem: ({commit}, item) => { commit('ADD_ITEM', item) },
  deleteItem: ({commit, store}) => { commit('DELETE_ITEM') },
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
