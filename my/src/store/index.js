import Vue from 'vue'
import Vuex from 'vuex'
import common from './common'
Vue.use(Vuex)
let store = new Vuex.Store({
    modules:{
        common
    },
    // state:{
    //     person:'jessica'
    // },
    // mutations:{
    //     change(state){
    //         // console.log('ok');
            
            
    //     }
    // }
})
export default store;