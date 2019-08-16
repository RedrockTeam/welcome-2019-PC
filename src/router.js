import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
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
      path: '/raider/traffic',
      name: 'traffic',
      component: () => import('./views/raider/Traffic.vue'),
    },
    {
      path: '/raider/canteen',
      name: 'canteen',
      component: () => import('./views/raider/Canteen.vue'),
    },
    {
      path: '/raider/dorm',
      name: 'dorm',
      component: () => import('./views/raider/Dorm.vue'),
    },
    {
      path: '/raider/public',
      name: 'public',
      component: () => import('./views/raider/Public.vue'),
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
      path: '/data/ratio',
      name: 'ratio',
      component: () => import('./views/data/Ratio.vue'),
    },
    {
      path: '/data/subject',
      name: 'subject',
      component: () => import('./views/data/Subject.vue'),
    },
    {
      path: '/data/source',
      name: 'source',
      component: () => import('./views/data/Source.vue'),
    },
    {
      path: '/event/help',
      name: 'help',
      component: () => import('./views/event/Help.vue'),
    },
    {
      path: '/event/portrait',
      name: 'portrait',
      component: () => import('./views/event/Portrait.vue'),
    },
    {
      path: '/styles/organization',
      name: 'organization',
      component: () => import('./views/styles/Organization.vue'),
    },
    {
      path: '/styles/propaganda',
      name: 'propaganda',
      component: () => import('./views/styles/Propaganda.vue'),
    },
    {
      path: '/styles/excellent',
      name: 'excellent',
      component: () => import('./views/styles/Excellent.vue'),
    },
    {
      path: '/styles/style',
      name: 'style',
      component: () => import('./views/styles/Style.vue'),
    },
  ],
})

router.afterEach((to) => {
  if (to.name === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  } else {
    window.scrollTo({
      top: 660,
      behavior: 'smooth',
    });
  }
})

export default router
