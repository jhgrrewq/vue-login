import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    title: ''
  },
  getters: {
    token: state => state.token,
    title: state => state.title
  },
  mutations: {
    [types.LOGIN](state, data) {
      localStorage.setItem('token', data)
      state.token = data
    },
    [types.LOGOUT](state) {
      localStorage.removeItem('token')
      state.token = null
    },
    [types.TITLE](state, data) {
      state.title = data
    }
  },
  actions: {
    login({ commit }, data) {
      commit(types.LOGIN, data)
    },
    logout({ commit }) {
      commit(types.LOGOUT)
    },
    title({ commit }, data) {
      commit(types.TITLE, data)
    }
  }
})