import VuePhoenix from '@vip30/vue-phoenix'
import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'

Vue.use(
  new VuePhoenix('ws://localhost:4000/socket', {
    token: ''
  })
)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
