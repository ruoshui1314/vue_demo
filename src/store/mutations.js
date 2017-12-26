// 用于更改状态的 mutation 函数
import types from './mutation-types'

export default {
  [types.INCREMENT] (state) {
    state.count++
  },
  [types.DECREMENT] (state) {
    state.count--
  }
}
