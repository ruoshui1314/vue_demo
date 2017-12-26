import types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  items: [] // items 为元素列表 ,
}

// getters
const getters = {
  getItems: state => state.items
}

// actions
const actions = {
  addItem: ({commit}, item) => { commit('ADD_ITEM', item) },
  deleteItem: ({commit, store}) => { commit('DELETE_ITEM') }
}

// mutations
const mutations = {
  [types.ADD_ITEM] (state, item) {
    state.items.push(item)
  },
  [types.DELETE_ITEM] (state) {
    state.items.pop()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
