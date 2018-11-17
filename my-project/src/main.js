// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// main.js 是我们当前的js入口文件

// 引入 vue.js 框架 
import Vue from 'vue'
// 主入口组件(根组件)
import App from './App'
// 路由
import router from './router'

import iView from 'iview';
import store from './store'
import 'iview/dist/styles/iview.css';
// 请求jq ajax/axios:ajax的一个库/fetch

Vue.use(iView)

import Jq from 'jquery'
// console.log(Jq);
Vue.prototype.$ajax=Jq;

import Axios from 'axios'
Vue.prototype.$axios=Axios;

Vue.config.productionTip = false
Vue.filter('fn',(data)=>{
  return '工资是高了，但是压力大呀'
})
// fetch 不用安装，是官方的方法
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // 组件注册：注册可以直接使用，没有注册可以使用<div></div>、<router-view></router-view>等
  // components: { App },
  components: {App},
  // 替换掉当前 index.html 里面的<div id="app"></div>
  // 相当于局部组件的定义与调用
  template: '<router-view></router-view>'
})
