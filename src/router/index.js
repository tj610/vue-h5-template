import Vue from 'vue'
import Router from 'vue-router'
import storage from '@/libs/storage'
import routes from './routers'
import share from '../share'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  const token = storage.getStorage('token')
  if (to.meta.requireAuth) {
    if(token){
      next()
    }else{
      storage.setStorage('fromUrl', to.path)
      next('/login')
    }
  } else {
    next()
  }
})

router.afterEach(to => {
  window.document.title = to.meta.title || router.app.$config.title
  window.scrollTo(0, 0)
})


export default router
