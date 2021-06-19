import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
Vue.use(Vuex)

const state = {
  counter: 1000
}

const store = new Vuex.Store({
  state,
  mutations
})
export default store
