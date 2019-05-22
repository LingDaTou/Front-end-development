// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'swiper/dist/css/swiper.css'
import router from './router'
import fastClick from 'fastClick'

import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'


Vue.config.productionTip = false
fastClick.attach(document.body)   //移动端点击延迟300毫秒
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
