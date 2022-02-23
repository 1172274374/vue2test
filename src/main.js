import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Minut from 'mint-ui'
import 'mint-ui/lib/style.css'

import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import { Indicator } from 'mint-ui';

Vue.config.productionTip = false



Vue.prototype.Toast = Toast
Vue.prototype.MessageBox = MessageBox
Vue.prototype.Indicator = Indicator


Vue.use(Minut)

import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
