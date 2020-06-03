// api接口
import { httpPost, httpGet } from './axios.js'


export const apiGetMsgCode = prames => httpPost('/api/message/sendMessage', prames)   // 获取验证码
export const apiOnLogin = prames => httpPost('/h5/login', prames)   // 登录