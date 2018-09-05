import Vue from 'vue'
import App from './App'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'

import { Header, Menu, MenuItem, Container, Main } from 'element-ui'

Vue.use(Header)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Container)
Vue.use(Main)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
