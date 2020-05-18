import store from '@/store'

// 获取权限
export function getToken () {
  // 获取缓存中的token数据，如果存在则读取
  if (sessionStorage.token) {
    setToken(sessionStorage.token)
    sessionStorage.removeItem('token')
  }
  return store.state.token || ''
}

// 设置权限
export function setToken (token) {
  store.dispatch('setKey', token).then(() => {
    // 当页面刷新的时候 将token放入缓存中
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('token', store.state.token)
    }, {
      once: true
    })
  })
}

// 去除权限
export function removeToken () {
  // 去除token 刷新浏览器
  store.dispatch('setKey', '').then(() => {
    window.location.reload(true)
  })
}
