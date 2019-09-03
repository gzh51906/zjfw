import Vue from 'vue'
import Home from '../pages/Home.vue'
import Cart from '../pages/Cart.vue'
import Goods from '../pages/Goods.vue'
import Detail from '../pages/Detail.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Mine from '../pages/Mine.vue'
import Discover from '../pages/Discover.vue'



import VueRouter from 'vue-router';

Vue.use(VueRouter)
let router = new VueRouter({
    routes: [
        { name:'', path: '/', redirect: '/home' },
        { name:'home', path: '/home', component: Home },
        { name:'cart', path: '/cart', component: Cart },
        { name:'goods', path: '/goods', component: Goods },
        { name:'login', path: '/login', component: Login },
        { name:'reg', path: '/reg', component: Reg },
        { name:'mine', path: '/mine', component: Mine},
        { name:'discover', path: '/discover', component: Discover },
        { name:'detail', path: '/detail/:id', component: Detail },
    ]
})
// router.beforeEach((to,from,next)=>{
//     next()
// })
export default router;

