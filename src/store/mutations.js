const mutations = {
  setToken (state, token) {
    state.token = token
    localStorage.token = token
  },
  setUserId (state, id) {
    state.userId = id
    localStorage.userId = id
  },
  removeUserId (state) {
    state.userId = ''
    localStorage.removeItem('userId')
  },
  removeToken (state) {
    state.token = ''
    localStorage.removeItem('token')
  },
  setNossv (state, n) {
    state.onss = n
  },
  setTheme (state, n) {
    state.theme = n
    localStorage.theme = n
  },
  setWidth (state, n) {
    state.width = n
    localStorage.width = n
  },
  setSize (state, n) {
    state.size = n
    localStorage.size = n
  },
  setLogin (state, n) {
    state.loginVisible = n
  },
  setRes (state, n) {
    state.resVisible = n
  },
  setUser (state) {
    state.user = !state.user
  },
  setHeadAndFoot (state, n) {
    state.headAndFoot = n
  },
  setStoreTypeId (state, n) {
    state.storeTypeId = n
  },
  setStoreStateId (state, n) {
    state.storeStateId = n
  },
  setStoreNum (state, n) {
    state.storeNum = n
  },
  setStoreTime (state, n) {
    state.storeTime = n
  }
}
export default mutations
