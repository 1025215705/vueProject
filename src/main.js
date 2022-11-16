import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import routers from './routers';
import './components/symbol/index.js';
import IconSvg from './components/symbol/Icons';
import highlightPlugin from "@highlightjs/vue-plugin";
import 'highlight.js/styles/dark.css';
import VueHighlightJS from 'vue-highlightjs'
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/dark.css' // or other highlight.js theme
import './components/highlight/highlightjs-line-numbers'
import jquery from "jquery";

Vue.prototype.$ = jquery;
//hljs.highlightAll();

//h.initLineNumbersOnLoad();
Vue.use(VueHighlightJS);
Vue.use(highlightPlugin);
Vue.component('icon-svg', IconSvg)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')