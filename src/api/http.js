import axios from 'axios'
import qs from 'qs'
// import { getToken, removeToken } from '@/utils/auth.js'
import { TipsPop } from '@/utils/el_ui.js'

let baseUrl = 'http://127.0.0.1:8080/'
// 将导出为全局
window.req = baseUrl

// 添加axios 根据环境进行判断添加请求端口  process.env.NODE_ENV === 'production' 判断请求环境是否在生产环境
axios.defaults.baseURL = baseUrl
// 添加axios在请求时默认的配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
// 当请求超过10s就会告知当前请求超时，请刷新
axios.defaults.timeout = 10000

// 请求拦截器
axios.interceptors.request.use(config => {
  // 在每次请求的时候拦截请求的头部,在此时可以添加token以及一些后台所需要的令牌
  // let token = getToken()
  // if (token) {
  //   config.headers.common['token'] = token
  // }
  return config
}, error => {
  return Promise.error(error)
})

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      TipsPop({
        message: '数据请求失败',
        type: 'error'
      })
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401未授权，跳转到登录页面
        case 401:
          TipsPop({
            message: '未登录或登录过期,请重新登录',
            type: 'error'
          })
          // removeToken()
          break
          // 404请求不存在
        case 404:
          TipsPop({
            message: '网络请求不存在',
            type: 'error'
          })
          break
      }
      return Promise.reject(error.response)
    }
  }
)
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get (url, params) {
  // url =
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

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
