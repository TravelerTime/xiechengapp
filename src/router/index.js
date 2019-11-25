/*
 * @Author: 李栋
 * @Date: 2019-11-07 20:03:18
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-16 04:29:39
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index';
import CityPage from '@/pages/CityPage';
import SeachPage from '@/pages/SeachPage';
import SeaListPage from '@/pages/SeaListPage';
import NoLoginPage from '@/pages/NoLoginPage';
import DengluPage from '@/pages/DengluPage';
import ZhucePage from '@/pages/ZhucePage';
import MePage from '@/pages/MePage';
import StrokePage from '@/pages/StrokePage';
import ShopsuccessPage from '@/pages/ShopsuccessPage';
import Detailspage from '@/pages/Detailspage';
import goodlistpage from '@/pages/goodlistpage';
import PayPage from '@/pages/PayPage';
import goPayPage from '@/pages/goPayPage';
import Addpeople from '@/pages/Addpeople';
import phoneLogin from '@/pages/phoneLogin';
import dingdanpage from '@/pages/dingdanpage';

Vue.use(Router)

// export default new Router({
  
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/CityPage',
      name: 'CityPage',
      component: CityPage
    },
   {
      path: '/phoneLogin',
      name: 'phoneLogin',
      component: phoneLogin
    },
    {
      path: '/Index/:c_name',
      name: 'Index',
      component: Index
    },
    {
      path: '/SeachPage',
      name: 'SeachPage',
      component: SeachPage
    },
    {
      path: '/SeaListPage/:name',
      name: 'SeaListPage',
      component: SeaListPage
    },
    {
      path: '/NoLoginPage',
      name: 'NoLoginPage',
      component: NoLoginPage
    },
    {
      path: '/DengluPage',
      name: 'DengluPage',
      component: DengluPage
    },
    {
      path: '/ZhucePage',
      name: 'ZhucePage',
      component: ZhucePage
    },
    {
      path: '/MePage',
      name: 'MePage',
      component: MePage
    },
    {
      path: '/StrokePage',
      name: 'StrokePage',
      component: StrokePage
    },
    {
      path: '/ShopsuccessPage',
      name: 'ShopsuccessPage',
      component: ShopsuccessPage
    },
    {
      path: '/Detailspage/:id',
      name: 'Detailspage',
      component: Detailspage,
      props:true,
      beforeEnter(to,from,next){
          console.log("/Orderpage这个路径守卫了");
          next();
      },
    },
    {
      path: '/goodlistpage/:c_name',
      name: 'goodlistpage',
      component: goodlistpage
    },
    {
      path: '/PayPage',
      name: 'PayPage',
      component: PayPage
    },
    {
      path: '/goPayPage/:id',
      name: 'goPayPage',
      component: goPayPage,
     meta:{
        requireAuth:true
      }
    },
    {
      path: '/goPayPage',
      name: 'goPayPage',
      component: goPayPage
    },
    {
      path: '/Addpeople',
      name: 'Addpeople',
      component: Addpeople
    },
    {
      path: '/dingdanpage',
      name: 'dingdanpage',
      component: dingdanpage
    }
  ]
})
router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth){
      console.log(localStorage.getItem('u_name'));
      if(localStorage.getItem('u_name')==null){
          console.log("to.fullPath:"+to.fullPath);
          next('/DengluPage');
      }else{
          next();
      }
  }else{
     next();
  }
});


export default router;

