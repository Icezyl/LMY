<template>
  <div class="niu">
    <div>
      <h1 class="titl">
        热门
        <small class="tits">/精品</small>
        <h2 class="mo"></h2>
      </h1>
    </div>
    <div class="flex">
      <div class="left-box">
        <Wheel :list="list"></Wheel>
      </div>
      <div class="middle flex">
        <el-row :gutter="20">
          <Title :titlelist="titlelist" line="2"></Title>
          <ImgText :imglist="imglist" line="2"></ImgText>
        </el-row>
      </div>
      <div class="right-box">
        <Ranking :ranking="ranking"></Ranking>
      </div>
    </div>
  </div>
</template>
<style scoped>
.el-col {
  margin-bottom: 12px;
}
</style>
<script>
import Ranking from "@/components/home/Ranking.vue";
import ImgText from "@/components/home/min/ImgText.vue";
import Wheel from "@/components/home/min/Wheel.vue";
import Title from "@/components/home/min/Title.vue";

export default {
  data() {
    return {
			ranking: [],
			list: [],
			titlelist: [],
			imglist: []
    };
  },
  mounted() {
    this.$api.getPopular().then(res => {
			this.ranking = res.bookRandom;
			this.list = res.bookComment
			this.imglist =res.bookxxType
			this.titlelist =res.selectRandom1
			console.log(this.titlelist)
    });
  },
  components: {
    Ranking,
    ImgText,
    Wheel,
    Title
  }
};
</script>
