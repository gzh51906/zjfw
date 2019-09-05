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
        { name: '', path: '/', redirect: '/home' },
        { name: 'home', path: '/home', component: Home, meta: { showFooter: true } },
        { name: 'cart', path: '/cart', component: Cart, meta: { showFooter: true, invisible: true } },
        { name: 'goods', path: '/goods', component: Goods },
        { name: 'login', path: '/login', component: Login },
        { name: 'reg', path: '/reg', component: Reg },
        { name: 'mine', path: '/mine', component: Mine, meta: { showFooter: true, invisible: true } },
        { name: 'discover', path: '/discover', component: Discover, meta: { showFooter: true } },
        { name: 'detail', path: '/detail/:id', component: Detail },
    ]
})
router.beforeEach((to, from, next) => {
    // console.log('invisible',to);
    //1、判断是否需要登录权限
    // if (to.meta.invisible) {
        if(to.matched.some(item=>item.meta.invisible)){
        //2、判断是否已登录
        let authorization = localStorage.getItem('authorization');
        if (authorization) {
            next()
            // console.log('ok1')
        } else {
            next({
                
                query: { targetUrl: to.fullPath },
                path: '/login',
            })
            // console.log('ok2')
        }
    } else {
        next()
        // console.log('ok3')
    }
    

})
export default router;

