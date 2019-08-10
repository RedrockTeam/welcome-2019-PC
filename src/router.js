import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Strategy from './views/Strategy.vue'
import Landscape from './views/Landscape.vue'

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
      path: '/raider/list',
      name: 'list',
      component: () => import('./views/raider/List.vue'),
    },
    {
      path: '/raider/life',
      name: 'life',
      component: () => import('./views/raider/Life.vue'),
    },
    {
      path: '/training/tips',
      name: 'tips',
      component: () => import('./views/training/Tips.vue'),
    },
    {
      path: '/training/content',
      name: 'content',
      component: () => import('./views/training/Content.vue'),
    },
    {
      path: '/training/video',
      name: 'video',
      component: () => import('./views/training/Video.vue'),
    },
    {
      path: '/training/discipline',
      name: 'discipline',
      component: () => import('./views/training/Discipline.vue'),
    },
    {
      path: '/strategy',
      name: 'strategy',
      component: Strategy,
    },
    {
      path: '/landscape',
      name: 'landscape',
      component: Landscape,
    },
  ],
})
