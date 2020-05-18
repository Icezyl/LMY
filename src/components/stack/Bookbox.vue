<template>
  <el-row :gutter="30">
    <el-col :span="12" v-for="item in booklist" :key="item.id">
      <div class="flex book">
        <div class="img">
          <router-link :to="'/details/'+item.novelId">
            <img :src="item.novelImgUrl" alt />
          </router-link>
        </div>
        <div class="booktxt he">
          <router-link :to="'/details/'+item.novelId" class="tit">{{item.novelName}}</router-link>
          <span
            class="height"
          >{{item.authorName}} | {{item.categoryLable}} | {{item.novelState == 1? '已完结':'连载中'}} | {{time(item.updateTime)}}</span>
          <span class="ellipsi">{{item.novelDesc}}</span>
          <router-link :to="'/book/'+item.novelId+'/'+item.chapteId" class="he height">最新章节：{{item.latestChapters}}</router-link>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: ["booklist"],
  methods: {
    time(data) {
      var time = new Date(data).getFullYear() + "-";
      time += new Date(data).getMonth() + "-";
      time += new Date(data).getDate();
      return time;
    }
  }
};
</script>
<style scoped>
.book {
  padding: 20px 0;
  width: 540px;
}
.img {
  flex-shrink: 0;
  width: 100px;
  height: 132px;
}
.tit {
  font-size: 20px;
  font-weight: normal;
  display: block;
}
.booktxt {
  font-size: 12px;
  margin-left: 20px;
}
.height {
  line-height: 38px;
}
</style>
