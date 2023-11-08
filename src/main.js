import Vue from 'vue'
import App from './App.vue'
// 引入路由相关组件
import router from './router'
// 引入需要的element组件
import {Tabs,TabPane} from 'element-ui'

// Vue.use(Tabs)
Vue.use(Tabs)
Vue.use(TabPane)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
