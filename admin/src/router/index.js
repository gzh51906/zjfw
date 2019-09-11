import Vue from 'vue'
import Login from '../components/login/Login.vue'
import Home from '../components/Home.vue'
import User from '../components/User.vue'
import Adduer from '../components/Adduer'
import Order from '../components/Order.vue'
import Goods from '../components/Goods.vue'
import addGoods from '../components/addGoods.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
let router = new VueRouter({
    routes: [
        { name: '', path: '/', redirect: '/login' },
        { name: 'login', path: '/login', component: Login },
        { name: 'home', path: '/home', component: Home,children:[
            { name: 'user', path: '/user',  component: User },
            { name: 'adduer', path: '/adduer',  component: Adduer },
            { name: 'goods', path: '/goods', component: Goods },
            { name: 'addgoods', path: '/addgoods', component: addGoods },
            { name: 'order', path: '/order', component: Order },
        ]},
    ]
})

export default router;