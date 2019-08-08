import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // 开启 history 模式需要后端配合
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/raider',
      name: 'raider',
      component: () => import('./views/Raider.vue'),
    },
  ],
})
