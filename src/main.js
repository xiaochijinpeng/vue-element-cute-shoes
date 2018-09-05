import Vue from 'vue'
import App from './App'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'

import {
  Header,
  Menu,
  MenuItem,
  Container,
  Main,
  Form,
  FormItem,
  Input,
  Button,
  Card
} from 'element-ui'

Vue.use(Header)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Container)
Vue.use(Main)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Card)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
