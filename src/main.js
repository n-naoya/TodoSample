import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import {todoModule} from './modules/TodoModule'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        todo: todoModule
    }
})

new Vue({
    render: h => h(App),
    store
}).$mount('#app')
