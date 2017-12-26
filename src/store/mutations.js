// 用于更改状态的 mutation 函数
import types from './mutation-types'

export default {
  [types.ADD_ITEM] (state, item) {
    state.items.push(item)
  },
  [types.DELETE_ITEM] (state) {
    state.items.pop()
  },
  [types.INCREMENT] (state) {
    state.count++
  },
  [types.DECREMENT] (state) {
    state.count--
  }
}
