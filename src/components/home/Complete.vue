<template>
  <div class="niu">
    <div>
      <h1 class="titl">
        完本
        <small class="tits">/推荐</small>
        <h2 class="mo"></h2>
      </h1>
    </div>
    <div class="flex">
      <div class="left-m flex">
        <el-row :gutter="20">
          <ImgText :imglist="imglist" line="3"></ImgText>
          <Title :titlelist="titlelist" line="3"></Title>
        </el-row>
      </div>
      <div class="right-box">
        <Ranking :ranking="ranking"></Ranking>
      </div>
    </div>
  </div>
</template>
<style scoped>
.left-m {
  width: 80%;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
<script>
import Ranking from "@/components/home/Ranking.vue";
import ImgText from "@/components/home/min/ImgText.vue";
import Wheel from "@/components/home/min/Wheel.vue";
import LeftBox from "@/components/home/min/LeftBox.vue";
import Title from "@/components/home/min/Title.vue";
export default {
  data() {
    return {
			titlelist: [],
			imglist: [],
			ranking: []
    };
  },
  mounted() {
    this.$api.getBookEnd().then(res => {
			this.imglist = res.booksend
			this.titlelist = res.bookType
			this.ranking = res.bookRandom
    });
  },
  components: {
    Ranking,
    ImgText,
    Wheel,
    LeftBox,
    Title
  }
};
</script>
