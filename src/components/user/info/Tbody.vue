<template>
  <div class="tbody">
		<div>
			<p>名称: {{this.list.userName}}</p>
			<p>账号: {{this.list.userNumber}}</p>
			<p>注册日期: {{time(this.list.registerTime)}}</p>
			<p>性别 {{this.list.userSex = 0?'男':'女'}}</p>
			<p>年龄 {{this.list.userAge}}</p>
		</div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
	data () {
		return {
			list: []
		}
	},
	computed: {
		...mapState(['userId'])
	},
	methods: {
		user() {
			this.$api.getUser(this.userId).then(res=> {
				console.log(this.list = res.userInfo)
			})
		},
		time(data) {
      var time = new Date(data).getFullYear() + "-";
      time += new Date(data).getMonth() + "-";
      time += new Date(data).getDate();
      return time;
    }
	},
	mounted () {
		this.user()
	}
}
</script>
<style scoped>
.tbody {
	line-height: 30px;
	font-size: 16px;
	color: #000;
  margin: 20px auto;
  width: 300px;
}
.tbody tr {
  line-height: 40px;
}
.tbody th {
	width: 100px;
}
td {
	width: 100px;
}
</style>
