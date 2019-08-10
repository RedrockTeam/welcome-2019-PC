import Vue from 'vue'
import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
import App from './App.vue'
import router from './router'

// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/pie'

// 注册组件后即可使用
Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
