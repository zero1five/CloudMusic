import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import FastClick from 'fastclick'
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '@/assets/img/loading.gif',
  attempt: 1
})

FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  render: h => h(App)
})
