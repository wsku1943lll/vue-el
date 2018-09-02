// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { router } from './router'
import ElementUI from 'element-ui'
import Axois from 'axios'
import qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css';
import store from './store'
import Axios from 'axios';

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$axois = Axois;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});

//全局http设置
//默认网关地址
Axois.defaults.baseURL = 'http://localhost:8090';
//http请求自动加上token信息
Axois.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    //全局发送前添加token
    config.headers.Authorization = store.state.user.token;
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
//http响应401、404、403状态对应跳转地址
Axois.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    console.log(response.status);
    if (!(response.status === 200)) {
        store.state.err_code = response.status;
        store.state.err_message = response.statusText;
        router.push("/home/error");
    }
    return response;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});