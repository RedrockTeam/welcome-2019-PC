import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
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
      path: '/strategy/canteen',
      name: 'canteen',
      component: () => import('./views/strategy/xueshengshitang.vue'),
    },
    {
      path: '/strategy/dormitory',
      name: 'dormitory',
      component: () => import('./views/strategy/xueshengsushe.vue'),
    },
    {
      path: '/strategy/gzh',
      name: 'gzh',
      component: () => import('./views/strategy/gzh.vue'),
    },
    {
      path: '/strategy/traffic',
      name: 'traffic',
      component: () => import('./views/strategy/jiaotongluxian.vue'),
    },
    {
      path: '/strategy/list',
      name: 'list',
      component: () => import('./views/strategy/xinshengqingdan.vue'),
    },
    {
      path: '/strategy/life',
      name: 'life',
      component: () => import('./views/strategy/zhoubianshenghuo.vue'),
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
      path: '/landscape',
      name: 'landscape',
      component: Landscape,
    },
  ],
})
