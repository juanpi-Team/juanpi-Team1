/*
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-26 09:46:38
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-29 16:25:05
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
import './font/iconfont.css';
import 'jquery'

Vue.config.productionTip = false
Vue.use(ElementUI);

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'; 
Vue.use(MintUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
