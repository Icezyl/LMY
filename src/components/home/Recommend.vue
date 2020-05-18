<template>
  <div class="niu">
    <div>
      <h1 class="titl">
        精品
        <small class="tits">/推荐</small>
        <h2 class="mo"></h2>
      </h1>
    </div>
    <div class="flex">
      <div class="left-box">
        <Wheel :list="list"></Wheel>
      </div>
      <div class="middle flex">
        <el-row :gutter="20">
          <ImgText :imglist="imglist" line="2"></ImgText>
          <LeftBox :leftlist="leftlist"></LeftBox>
        </el-row>
      </div>
      <div class="right-box">
        <Ranking :ranking="ranking"></Ranking>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import Ranking from "@/components/home/Ranking.vue";
import ImgText from "@/components/home/min/ImgText.vue";
import Wheel from "@/components/home/min/Wheel.vue";
import LeftBox from "@/components/home/min/LeftBox.vue";
export default {
  data() {
    return {
      booklists: [],
      list: [],
			ranking: [],
			imglist: [],
			leftlist: []
    };
  },
  mounted() {
    this.$api.getBookBoutique().then(res => {
      this.list = res.bookCollection;
			this.ranking = res.bookRandom;
			this.imglist = res.bookClick;
			this.leftlist = res.selectcnType
			console.log(res)
    });
  },
  components: {
    Ranking,
    ImgText,
    Wheel,
    LeftBox
  }
};
</script>
