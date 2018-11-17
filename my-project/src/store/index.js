import Vue from 'vue'
import Vuex from 'vuex'
import Cnode from './cnode'
Vue.use(Vuex)

export default new Vuex.Store({
    // vuex严格模式
    strict: true,
    modules: {
        Cnode
    }
})