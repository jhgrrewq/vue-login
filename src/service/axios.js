import axios from 'axios'
import router from '@/router'
import store from '@/store/index'
import * as types from '@/store/mutation-types'

// axios 基础配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://api.github.com'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // 本地存在 token，请求头带上 token
    if (localStorage.getItem('token')) {
      config.headers.Authorization = `token ${localStorage.getItem('token')}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      let status = error.response.status
      switch (status) {
        case 401:
          // 清除 token 并跳转到 登录
          store.commit(types.LOGOUT)
          router.push({
            path: '/login'
          })
      }
    }
    return Promise.reject(error.response.data)
  }
)

export default axios