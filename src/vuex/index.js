import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  items: [], // items 为元素列表 ,
  name: '', // 应用名称
  count: 0
}

// 用于更改状态的 mutation 函数
const mutations = {
  ADD_ITEM (state, item) {
    state.items.push(item)
  },
  DELETE_ITEM (state) {
    state.items.pop()
  },
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}

const actions = {
  addItem: ({commit}, item) => { commit('ADD_ITEM', item) },
  deleteItem: ({commit, store}) => { commit('DELETE_ITEM') },
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug
}
)
