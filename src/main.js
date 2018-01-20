// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import './assets/stylus/index.styl'

Vue.use(VueResource)
Vue.use(Vuex)


//引入 fastclick的作用是避免手机触屏点击的300秒延迟
fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: 'src/assets/image/default.png'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
