import Vue from 'vue'
import FastClick from 'fastclick'
import App from '@/App.vue'
import router from '@/router'
import config from '@/config'
import utils from '@/libs/utils'
import storage from '@/libs/storage'
import * as filters from '@/libs/filters'

import './vant/index'

import '@/assets/css/style.css'
import '@/libs/rem'
import '@/libs/fontsize'
import '@/http/axios'


FastClick.attach(document.body)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.prototype.$config = config
Vue.prototype.$storage = storage
Vue.prototype.$utils = utils

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
