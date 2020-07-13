import Vue from 'vue'
import Vuetify, { VApp } from 'vuetify/lib'
import { Ripple } from 'vuetify/es5/directives'

const opts = {
  components: { VApp },
  directives: { Ripple }
}

Vue.use(Vuetify)

export default new Vuetify(opts)
