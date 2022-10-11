import Vue from 'vue'
import App from './App.vue'

import 'vue-easytable/libs/theme-default/index.css'
import VueEasytable from 'vue-easytable'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueEasytable)

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: (h) => h(App),
})

/*new Vue({
  render: h => h(App),
}).$mount('#app')*/
