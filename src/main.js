import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import axios from './service/axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})