<template>
  <div class="flex list container">
    <LeftNar></LeftNar>
		<div class="rigthboxs">
			<div class="title" v-if="msg">{{msg}}</div>
			<router-view></router-view>
		</div>
  </div>
</template>
<style scoped>
.list {
	margin-top: 20px;
}
.rigthboxs {
	width: 100%;
	margin-left: 20px;
}
.title {
	line-height: 0px;
	font-size: 18px;
	font-weight: 600;
	padding: 20px 10px;
	background: #fff;
	border-bottom: 1px solid #e6e6e6;
}
</style>
<script>
import LeftNar from "@/components/list/LeftNar.vue";
import ReightBox from "@/components/list/ReightBox.vue";
export default {
	data () {
		return {
			msg: ''
		}
	},
  components: {
		LeftNar,
		ReightBox
	},
	watch: {
		$route(to, from) {
			this.ifMsgs(to.params.id)
		}
	},
	mounted () {
		this.ifMsgs(this.$route.params.id)
	},
	methods: {
		ifMsgs(id) {
			if(id==1) {
				this.msg = '月票榜'
			} else if (id == 2) {
				this.msg = '完本榜'
			} else if (id == 3) {
				this.msg = '新书榜'
			} else if (id == 4) {
				this.msg = '新书订阅榜'
			} else if (id == 5) {
				this.msg = '点击榜'
			} else if (id == 6) {
				this.msg = '推荐榜'
			} else {
				this.msg = ''
			}
		}
	}
};
</script>
