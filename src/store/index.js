import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  items: [], // items 为元素列表 ,
  name: '', // 应用名称
  count: 0
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
