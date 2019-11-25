/*
 * @Author: 李栋
 * @Date: 2019-11-07 20:03:18
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-14 16:15:52
 * @Description: 
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios';

import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css'; 
Vue.use(ElementUI);

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'; 
Vue.use(MintUI);

Vue.config.productionTip = false
axios.defaults.baseURL = '/api/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
