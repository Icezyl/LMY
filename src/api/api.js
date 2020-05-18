import { get, post } from './http'
export default {
  /**
	 * 首页
	*/
  // 公告三兄弟
  getNotice () {
    return get('/Notice')
  },
  // 搜索
  postSeach (data) {
    return post('/book', data)
  },
  // 登录
  postLogin (data) {
    return post(`login`, data)
  },
  // 修改密码
  postUpdate (data) {
    return post('user/pwd/update/', data)
  },
  // 完本/推荐
  getBookEnd () {
    return get('bookend')
  },
  // 精品/推荐
  getBookBoutique () {
    return get('bookBoutique')
  },
  // 热门/精品
  getPopular () {
    return get('bookPopular')
  },
  /**
	 * 书库
	*/
  // 书库
  getBookStack (typeid, stateid, wordnum, time, pageCode = 1, pageSize = 50) {
    return get(`selectBookCategory/${typeid}/${stateid}/${wordnum}/${time}/${pageCode}/${pageSize}`)
  },
  /**
	 * 排行榜
	*/
  getRankings () {
    return get('rankings')
  },
  getDetails (id) {
    return get(`Details/${id}`)
  },
  /**
	 * 书籍详情
	 */
  getBookDetails (data) {
    return get('bookDetails/', data)
  },
  // 书籍目录
  getChapteDetails (id) {
    return get(`chapteDetails/${id}`)
  },
  // 章节内容
  getChapteDetailsContext (data) {
    console.log(data)
    return post(`chapteDetails/`, data)
  },
  postInsertChapteDetails (data) {
		console.log(data)
    return post('insertChapteDetails/', data)
  },
  // 发送验证码
  postVerificationcode (data) {
    return post('Verificationcode', data)
  },
  // 注册
  postRegister (data) {
    return post('register', data)
  },
  // 随机推荐书籍
  getRandom (id) {
    return get(`Random/${id}`)
  },
  // 加入书架
  getInsertBook (id, bookId) {
    return get(`insertShelf/${id}/${bookId}`)
  },
  // 用户信息
  getUser (id) {
    return get(`user/info/select/${id}`)
  },
  // 书库
  getBookShelf (id) {
    return get(`bookShelf/${id}`)
  },
  // 忘记密码发送验证码
  postEmail (data) {
    return post('pwdEmail', data)
  },
  postYan (data) {
    return post('yzm', data)
  },
  postForget (data) {
    return post('forget', data)
  },
  getBrow (id) {
    return get(`selectBrowsinghistory/${id}`)
  }
}
