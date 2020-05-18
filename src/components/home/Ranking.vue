<template>
  <div class="ranking">
    <h2>主编推荐</h2>
    <ul>
      <li
        v-on:mouseenter="listid=index"
        v-for="(item,index) in ranking"
        :key="index"
        class="border"
      >
        <router-link :to="'/details/'+item.novelId" class="flex">
          <div class="bookImg" :class="{hadding:listid!==index}">
            <img
              :src="item.novelImgUrl"
              alt
            />
          </div>
          <div class="text" :class="{flex:listid!==index}">
            <h2 class="ellipsi">
              <span>「{{item.categoryLable}}」</span>{{item.novelName}}
            </h2>
            <span class="zuo">{{item.authorName}}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.ellipsi {
	-webkit-line-clamp: 1;
}
.border {
  padding: 10px 0;
  border-bottom: 1px dashed #e8e8e8;
}
.ranking {
  width: 100%;
}
.bookImg {
  width: 92px;
  height: 116px;
}
.hadding {
  display: none;
}
.bookImg img {
  width: 100%;
  height: 100%;
}
.text {
  font-size: 14px;
}
span {
  color: #999;
}
.text h2 {
  font-weight: normal;
  width: 200px;
  font-size: 14px;
  color: #000;
}
.zuo {
  margin-left: 10px;
}
</style>
<script>
export default {
  data() {
    return {
			listid: 0
    };
	},
	mounted () {
	},
	props: ['ranking']
};
</script>
