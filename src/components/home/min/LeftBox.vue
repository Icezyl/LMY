<template>
  <el-row class="leftlists">
    <el-col :span="12" v-for="item in leftlist" :key="item.id">
      <div class="leftbox">
        <h1 class="title">
          <router-link :to="'/details/'+item.novelId">{{item.novelName}}</router-link>
        </h1>
        <span class="autos he">{{item.authorName}}</span>
        <p class="txtx he ellipsi">{{item.novelDesc}}</p>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: ["leftlist"]
};
</script>
<style scoped>
.leftlists {
	padding: 20px;
}
.leftbox {
  border-left: 4px solid #dcdcdc;
  padding: 0 10px;
  margin-bottom: 10px;
}
</style>
