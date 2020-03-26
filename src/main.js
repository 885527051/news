import Vue from 'vue'
import Vant from 'vant';
import App from './App.vue'
import router from './router'

import axios from "axios";

// 绑定到原型
Vue.prototype.$axios = axios;


// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// 注册插件
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
