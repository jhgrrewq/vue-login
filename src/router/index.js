import Vue from 'vue'
import store from '@/store/index'
import * as types from '@/store/mutation-types'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '@/components/login'
import Project from '@/components/project'

Vue.use(Router)

// 页面重新刷新，重新赋值 token
if (localStorage.getItem('token')) {
  // 不是组件中 js，无法使用 vuex 提供的 mapActions 等语法糖
  store.commit(types.LOGIN, localStorage.getItem('token'))
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/project',
      name: 'project',
      component: Project,
      // 元数据 需要登录验证
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// 全局导航守卫
router.beforeEach((to, from, next) => {
  // to, from 都是路由对象
  if (to.matched.some(r => r.meta.requiresAuth)) {
    // 元数据需要登录验证
    if (localStorage.getItem('token')) {
      // 验证有 token
      next()
    } else {
      // 跳转到登录，同时将当前的路由作为参数传递
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router