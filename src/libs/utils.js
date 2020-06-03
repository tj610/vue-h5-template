import { Toast } from 'vant'
import storage from './storage.js'

export default {
  getUrlKey(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
  },    
  message(msg) {
    Toast(msg)
  },
  isLogin() {
    let token = storage.getStorage('token')
    return token ? true : false
  },
}