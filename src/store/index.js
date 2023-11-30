import Vue from 'vue'
import Vuex from 'vue-router'

Vue.use(Vuex)

// 引入模块的仓库
import user from './user'

export default new Vuex.Store({
    modules:{
        user,
    },
})