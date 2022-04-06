import axios from 'axios'

import NProgress from 'nprogress'
import {errorsMsg, getSession} from "@/utils/web-utils"; // 进度条

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  withCredentials: true
})
// post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在request中展示进度条
    NProgress.start()
    // 携带token
    config.headers.Authorization = "Bearer ".concat(getSession("sessionId"));
    return config
  },
  error => {
    // 将异常返回给用户处理
    return Promise.reject(error)
  }
)
// 响应拦截器
instance.interceptors.response.use(config => {
    // 在response中关闭进度条
    NProgress.done()
    return config.data
  },
  err => {
    errorsMsg(err.message)
    // 将异常返回给用户处理
    NProgress.done()
    return Promise.reject(err)
  })

export default {
  get (url, params) {
    return instance({
      method: 'get',
      url,
      params,
    })
  },

  post (url, data) {
    return instance({
      method: 'post',
      url,
      data,
    })

  },

  /**
   * put方法，对应put请求
   * @param url
   * @param params
   * @returns {Promise<unknown>}
   */
  put (url, params) {
    return instance({
      method: 'put',
      url,
      params,
    })

  },
  /**
   * delete 方法，对应delete请求
   * @param url
   * @param params
   * @returns {Promise<unknown>}
   */
  delete (url, params) {
    return instance({
      method: 'delete',
      url,
      params,
    })

  }

}

