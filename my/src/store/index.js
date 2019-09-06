import Vue from 'vue'
import Vuex from 'vuex'
import common from './common'
import cart from './cart'
Vue.use(Vuex)
let store = new Vuex.Store({
    modules:{
        common,
        cart
    },
  
})
export default store;