import Vue from 'vue'
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'
import List from '../components/List.vue'
import Detail from '../components/Detail.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Mine from '../components/Mine.vue'
import Discover from '../components/Discover.vue'



import VueRouter from 'vue-router';

Vue.use(VueRouter)
let router = new VueRouter({
    routes: [
        { name:'', path: '/', redirect: '/home' },
        { name:'home', path: '/home', component: Home },
        { name:'cart', path: '/cart', component: Cart },
        { name:'list', path: '/list/:id', component: List },
        { name:'login', path: '/login', component: Login },
        { name:'register', path: '/register', component: Register },
        { name:'mine', path: '/mine', component: Mine},
        { name:'discover', path: '/discover', component: Discover },
        { name:'detail', path: '/detail', component: Detail },
    ]
})
// router.beforeEach((to,from,next)=>{
//     next()
// })
export default router;

