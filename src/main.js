import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Minut from 'mint-ui'
import 'mint-ui/lib/style.css'

import { Toast } from 'mint-ui';

Vue.config.productionTip = false

Vue.prototype.Toast = Toast

Vue.use(Minut)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
