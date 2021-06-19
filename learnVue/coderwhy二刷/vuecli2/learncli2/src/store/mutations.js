import Vue from 'vue'
import {INCREMENT, INCREMENT_COUNT} from "./mutations-type";

export default {
  [INCREMENT](state) {
    state.counter++
  },
  [INCREMENT_COUNT](state,payload) {
    state.counter +=payload.count
  }
}
