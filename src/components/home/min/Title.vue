<template>
  <el-row class="title">
    <el-col :span="spanlist(line)" v-for="item in titlelist" :key="item.id">
      <div>
        <p>
          <span class="he">[{{item.categoryLable}}] </span>
          <router-link :to="'/details/'+item.novelId">{{item.novelName}}</router-link>
        </p>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
	props: ["titlelist","line"],
	methods: {
		spanlist(line) {
			return 24/line
		}
	}
};
</script>
<style scoped>
.title {
	line-height: 30px;
	font-size: 16px;
  padding: 20px;
  font-size: 16px;
  min-width: 220px;
}
</style>
