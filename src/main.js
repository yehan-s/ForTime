import Vue from 'vue'
import App from './App.vue'
// 引入路由相关组件
import router from './router'
// 引入 Vuex
// import store from './store'
// 引入需要的element组件
import {
  Tabs, TabPane, Dropdown,
  DropdownMenu,
  DropdownItem,
  Empty
} from 'element-ui'
// 打字机文字特效插件
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)

// Vue.use(Tabs)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Empty)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  // store
}).$mount('#app')
