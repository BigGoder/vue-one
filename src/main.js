import Vue from 'vue'
//import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import Entry from './pages/Entry'
//import Entry from './pages/Home'
import store from './store'
import './permission'


Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(Entry),
}).$mount('#app')
