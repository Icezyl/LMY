<template>
  <el-row class="imgtext">
    <el-col :span="spanline(line)" v-for="item in imglist" :key="item.id">
      <div class=" flex">
        <div class="enlarge">
          <router-link :to="'/details/'+item.novelId">
            <img :src="item.novelImgUrl" alt />
          </router-link>
        </div>
        <div class="text">
          <h1 class="title">
            <router-link :to="'/details/'+item.novelId">{{item.novelName}}</router-link>
          </h1>
          <span class="he autos">{{item.authorName}}</span>
          <p class="he ellipsi txtx">{{item.novelDesc}}</p>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<style scoped>
.imgtext {
	padding: 10px 20px;
}
.text {
  width: 130px;
}
a {
  white-space: nowrap;
  display: block;
  padding-right: 15px;
}
.enlarge {
  float: left;
}
</style>
<script>
export default {
  data() {
    return {
			sp: 0
    };
	},
	methods: {
		spanline(line) {
			return 24/line
		}
	},
	props: ["imglist", "line"]

};
</script>
