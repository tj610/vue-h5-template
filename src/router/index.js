import Vue from 'vue'
import Router from 'vue-router'
import storage from '@/libs/storage'
import routes from './routers'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const token = storage.getStorage('token')
  // if (to.meta.requireAuth) {
  //   token ? next() : next('login')
  // } else {
  //   next()
  // }
  next()
})

router.afterEach(to => {
  window.document.title = to.meta.title || router.app.$config.title
  window.scrollTo(0, 0)
})


export default router
