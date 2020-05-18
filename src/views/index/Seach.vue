<template>
  <div class="container search">
    <p class="result">共搜索到{{this.length}}部与“{{this.val}}”相关结果</p>
    <el-row :gutter="20">
			<el-col :span="19">
				<DetailedList :lists="lists" state='true' v-show="length!=0"></DetailedList>
				``
			</el-col>
			<el-col :span="5">
				<p>推荐</p>
				<Random state='long' line="6"></Random>
			</el-col>
		</el-row>
  </div>
</template>
<script>
import Random from "@/components/Random"
import DetailedList from "@/components/list/DetailedList";
export default {
  data() {
    return {
      val: "",
			lists: '',
			length: '',
			sea: false
    };
	},
	watch: {
		'$route.params.val': function(newval){
			this.val = newval
			this.seach(newval)
		}
	},
  methods: {
    seach(val) {
      this.$api.postSeach({ novelName: val,pageCode: 1,pageSize:20 }).then(res => {	
				this.lists = res.books.list
				this.length = JSON.parse(JSON.stringify(res.books.list)).length
      });
    }
  },
  mounted() {
		this.val = this.$route.params.val;
		this.seach(this.val)
  },
  components: {
		DetailedList,
		Random
  }
};
</script>
<style scoped>
.result {
  font-size: 14px;
  color: #666;
}
</style>
