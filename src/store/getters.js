const getters = {
  getToken (state) {
    if (!state.token) {
      state.token = localStorage.getItem('token')
    }
    return state.token
  },
  getUserId (state) {
    if (!state.UserId) {
      state.userId = localStorage.getItem('userId')
    }
    return state.userId
  },
  getTheme (state) {
    if (localStorage.getItem('theme')) {
      state.theme = localStorage.getItem('theme')
    }
    return state.theme
  },
  getSize (state) {
    if (localStorage.getItem('size')) {
      state.size = localStorage.getItem('size')
    }
    return state.size
  },
  getWidth (state) {
    if (localStorage.getItem('width')) {
      state.width = localStorage.getItem('width')
    }
    return state.width
  },
  getStoreTypeId (state) {
    return state.storeTypeId
  },
  getStoreStateId (state) {
    return state.storeStateId
  },
  getStoreNum (state) {
    return state.storeNum
  },
  getStoreTime (state) {
    return state.storeTime
  }
}
export default getters
