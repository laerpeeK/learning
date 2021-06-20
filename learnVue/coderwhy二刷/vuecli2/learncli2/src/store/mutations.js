import Vue from 'vue'
import {INCREMENT, INCREMENT_COUNT, UPDATE} from "./mutations-type";

export default {
  [INCREMENT](state) {
    state.counter++
  },
  [INCREMENT_COUNT](state,payload) {
    state.counter +=payload.count
  },
  [UPDATE](state,payload) {
    //当需要在对象上添加新属性时
    // Vue.set(state.info,key,value)
    //better way
    state.info = payload
    //Vue.delete(state,
  }
}
