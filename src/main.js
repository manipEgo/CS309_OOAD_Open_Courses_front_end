import Vue from 'vue'
import App from './App.vue'
import 'vue-easytable/libs/theme-dark/index.css'
import VueEasytable from 'vue-easytable'

Vue.use(VueEasytable)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: (h) => h(App),
})

/*new Vue({
  render: h => h(App),
}).$mount('#app')*/
