import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue2Sidebar from 'vue2-sidebar';

Vue.use(BootstrapVue);
Vue.use(Vue2Sidebar);

new Vue({
  render: h => h(App),
}).$mount('#app')

