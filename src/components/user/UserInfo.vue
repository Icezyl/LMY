<template>
  <div class="info">
    <div class="top">
      <ul class="infolist">
        <li>账号: {{list.userNumber}}</li>
        <li>用户昵称: {{list.userName}}</li>
        <li>当前月票: 0</li>
      </ul>
      <div class="verification">
        <p>
          邮箱认证(已认证):
          <a href class="gr">{{list.userEmail}}</a>
        </p>
        <p>
          手机认证(未认证):
          <a class="red">点击验证</a>
        </p>
        <a class="change" @click="mm">修改密码</a>
      </div>
    </div>
		<div class="bottom flex">
			 <div>猜你喜欢</div>
		</div>
		<div class="recomm flex">
			<Random state="tran" line="8"></Random>
		</div>
  </div>
</template>
<script>
import Random from '@/components/Random'
import { mapState } from 'vuex'
export default {
	data () {
		return {
			list: ''
		}
	},
	computed: {
		...mapState(['userId'])
	},
	mounted () {
		this.user()
	},
	methods: {
		user(){
			this.$api.getUser(this.userId).then(res=>{
				this.list=res.userInfo
				console.log(res.userInfo)
			})
		},
		mm() {
			this.$router.push('/personal')
			this.$router.push('/modify')
		}
	},
	components: {
		Random
	}
}
</script>

<style scoped>
.info {
	padding: 20px;
	width: 75%;
}
.top {
	margin: 40px 40px 40px;
}
.bottom {
	background: #f2f2f2;
	padding-left: 40px;
	padding-right: 10px;
	line-height: 30px;
	justify-content: space-between;
}
.infolist {
  padding-bottom: 50px;
  margin-bottom: 20px;
  border-bottom: 1px solid #999;
}
.infolist li {
  height: 40px;
}
.change {
  background: #25c4a6;
  width: 120px;
  display: inline-block;
  text-align: center;
  color: #fff;
  line-height: 30px;
}
.recomm {
	justify-content: space-between;
	padding: 10px 20px;
}
.red {
  color: red;
}
.gr {
	color: #25c4a6;
}
.verification p {
  margin-bottom: 15px;
}
</style>
