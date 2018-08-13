import Vue from 'vue'
import Router from 'vue-router'
import TopHeader from '@/components/topheader'
import SideMenu from '@/components/sidemenu'
import BottomFotter from '@/components/bottomfooter'
import Home from '@/pages/home'
import Score from '@/pages/score'
import Login from '@/pages/login'
import Register from '@/pages/register'
import store from '../store/index'
import NPA_Caculate from '@/pages/NPA_Caculate'
Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[{
          path:'score',
          name:'Score',
          component:Score
      },{
          path:'npacul',
          name:'NPAcul',
          component:NPA_Caculate
      }
      ]},
      {
          path:'/login',
          name:'Login',
          component:Login
      },{
          path:'/register',
          name:'Register',
          component:Register
      }
  ]
});

router.beforeEach((to,from,next)=> {
    if (!store.state.user.isLogin&&!(to.path==='/login')&&!(to.path==='/register')) {
        next({path:'/login'});
    } else{
        next();
    }
});

// const pages = [
//     {
//         path:'/login',
//         name:'Login',
//         component:Login
//     }
// ];
