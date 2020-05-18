<template>
  <div>
    <el-carousel
      :interval="4000"
      type="card"
      height="248px"
      arrow="never"
      indicator-position="none"
			@change="setActive()"
			ref="carouselImg"
    >
      <el-carousel-item v-for="item in list" :key="item.id">
        <router-link :to="'/details/'+item.novelId">
          <img :src="item.novelImgUrl" alt />
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <div class="ss">
      <el-carousel :autoplay="false" indicator-position="none" arrow="never" height="250px" :interval="4000" ref="carousel" >
        <el-carousel-item v-for="(item) in list" :key="item.id" name="1">
          <router-link :to="'/details/'+item.novelId">
            <h1>{{item.novelName}}</h1>
          </router-link>
          <p>
            <span>{{item.novelClick}}人气</span>
          </p>
          <p>
            <a href>{{item.authorName}}</a>
            <span class="txt-left">{{item.categoryLable}}</span>
          </p>
          <p>
            <span>{{item.novelSize}}字数</span>
            <span class="txt-left">{{item.novelState==1?'已完结':'连载中'}}</span>
          </p>
          <p class="ellipsi txtx he">{{item.novelDesc}}</p>
          <router-link :to="'/details/'+item.novelId" class="button">点击阅读</router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
			in:0
		};
	},
	methods: {
		setActive() {
			this.in=this.$refs.carouselImg.activeIndex
			this.$refs.carousel.setActiveItem(this.in)
		}
	},
  props: ["list"]
};
</script>
<style scoped>
p {
  line-height: 25px;
}
.txt-left {
  margin-left: 50px;
}
.txtx {
  height: 70px;
  width: 280px;
  margin: 0 auto;
}
.button {
  cursor: pointer;
  background: #25c4a6;
  border-radius: 5px;
  color: #fff;
  display: block;
  width: 100px;
  margin: 10px auto;
  padding: 10px 20px;
}
.el-carousel__item {
  font-size: 12px;
  text-align: center;
}

.el-carousel--horizontal {
  overflow-x: visible;
}
.el-carousel--horizontal:last-child {
  overflow-x: hidden;
}
</style>

