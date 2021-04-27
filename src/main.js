// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { router } from './router'
import store from './store'
import './config/rem'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css';
import './style/scss/common.scss'
import './style/scss/mint-ui-reset.scss'
import config from '@/config'
//注册组件

import { Field, Button, Popup, Cell, Switch } from 'mint-ui';

Vue.component(Switch.name, Switch);
Vue.component(Field.name, Field);
Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
Vue.component(Popup.name, Popup);
Vue.config.productionTip = false
Vue.prototype.$config = config;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
