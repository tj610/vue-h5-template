import { Toast } from 'vant'
import axios from 'axios'
import qs from 'qs'
import config from '@/config'
import utils from '@/libs/utils'
import router from '@/router'
import storage from '@/libs/storage'

if(process.env.NODE_ENV == 'development'){
  axios.defaults.baseURL = config.baseUrl.dev
}else if(process.env.VUE_APP_CURRENTMODE == 'test'){
  axios.defaults.baseURL = config.baseUrl.pre
}else if(process.env.VUE_APP_CURRENTMODE == 'production'){
  axios.defaults.baseURL = config.baseUrl.pro
}

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截器
axios.interceptors.request.use(config => {
  Toast.loading({
    message: '加载中',
    forbidClick: true,
    loadingType: 'spinner',
    duration: 0
  })
  config.headers.token = config.headers.token || storage.getStorage('token')
  if (config.data && config.data['_isJson']) {
    config.headers['Content-Type'] = 'application/json'
    delete config.data['_isJson']
  } else {
    if (config.method === 'post') config.data = qs.stringify(config.data)
  }
  return config
})

// 响应拦截器
axios.interceptors.response.use(response => {
  Toast.clear()
  const errcode = response.data.errcode
  const errmsg = response.data.errmsg
  if (errcode != 0 && errcode != 5000) {
    if (errmsg) Toast(errmsg)
    if (errcode == 401) {
      setTimeout(() => {
        window.localStorage.removeItem('token')
        router.push('login')
      }, 2000);
    }
  } 
  return response
}, error => {
  Toast.clear()
  return Promise.reject(error)
})

// post请求
export function httpPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(
      res => {
        resolve(res.data)
      },
      err => {
        reject(err.data)
      }
    ).catch(
      err => {
        reject(err.data)
      }
    )
  })
}

// get请求
export function httpGet(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}
