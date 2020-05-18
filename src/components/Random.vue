<template>
  <div class="random" :class="{flex:state=='tran'}">
    <div class="flex randomChile" v-for="item in list" :key="item.id">
      <div class="img">
        <router-link :to="'/details/'+item.novelId">
          <img :src="item.novelImgUrl" alt />
          <p class="title" v-if="state=='tran'">{{item.novelName}}</p>
        </router-link>
      </div>
      <div class="long" v-if="state=='long'">
        <p class="title">{{item.novelName}}</p>
        <p>{{item.authorName}}</p>
        <div
          class="ellipsi"
        >{{item.novelDesc}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{}, {}]
    };
  },
  mounted() {
    this.Random();
  },
  methods: {
    Random() {
      this.$api.getRandom(this.line).then(res => {
        this.list = res.random;
        console.log(res);
      });
    }
  },
  props: ["state", "line"]
};
</script>
<style scoped>
.img, img {
  flex-shrink: 0;
  width: 82px;
  height: 102px;
}
.long {
  margin-left: 5px;
}
.long .title {
  text-align: left;
  margin: 0;
  font-weight: 600;
}
.title {
  text-align: center;
	margin: 2px;
	overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 行数*/
  -webkit-box-orient: vertical;
}
.randomChile {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
