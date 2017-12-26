import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import demo from './modules/demo'
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  name: '', // 应用名称
  count: 0
}

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  state,
  getters,
  modules: {
    demo
  },
  actions,
  mutations,
  strict: debug
}
)
