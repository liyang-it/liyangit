/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
const index = ()=>import('@/components/index')
Vue.use(Router)

export default new Router({
  mode: 'history', // 路由模式
  base:'/liyangit/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
