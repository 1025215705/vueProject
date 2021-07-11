import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import routers from './routers';
import './components/symbol/index.js'
import IconSvg from'./components/symbol/Icons'
Vue.component('icon-svg', IconSvg)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
