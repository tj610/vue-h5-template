// api接口
import { httpPost, httpGet } from './axios.js'


export const apiOnLogin = prames => httpGet('/app/auth/t/login', prames)   // 登录