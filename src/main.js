import Vue from 'vue'
import Vant from 'vant';
import App from './App.vue'
import router from './router'

import axios from "axios";

// 绑定到原型
Vue.prototype.$axios = axios;
// 给axios添加基准路径，添加完了之后请求的url就会拼接这个地址
// axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.baseURL = "http://hmtoutiao-api.atlansic.com/"

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
