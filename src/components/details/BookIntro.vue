<template>
  <div class="intro flex">
    <a href>
      <div class="img">
        <router-link :to="'/book/'+booklist.novelId+'/'+ dayid.chapterId">
          <img :src="booklist.novelImgUrl" alt />
        </router-link>
      </div>
    </a>
    <div class="bookintro">
      <div class="flex bottom">
        <a href class="bknm">{{booklist.novelName}}</a>
        <a href class="zuo">{{booklist.authorName}} 著</a>
      </div>
      <div class="bottom">
        <a class="state label">{{booklist.novelState==1 ? '已完结' : '连载中'}}</a>
        <a class="type label">{{booklist.categoryLable}}</a>
        <a class="tab label">{{booklist.novelTags}}</a>
      </div>
      <div class="datum flex bottom">
        <span>
          {{booklist.novelSize}}
          <em>字</em>
        </span>
        <span>
          {{booklist.novelClick}}
          <em>人气</em>
        </span>
        <span>
          50
          <em>总推荐</em>
        </span>
      </div>
      <p class="ellipsi">{{booklist.novelDesc}}</p>
      <div class="button flex">
        <router-link :to="'/book/'+booklist.novelId+'/'+ dayid.chapterId" class="read">点击阅读</router-link>
        <router-link :to="'/catalogue/'+booklist.novelId">目录</router-link>
        <el-button @click="join(booklist.novelId)" :disabled="state" :loading="load">{{this.state?'已加入':'加入书架'}}</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
			load: false,
      state: false
    };
  },
  computed: {
    ...mapState(["userId"])
  },
  methods: {
		...mapMutations(['setLogin']),
    join(id) {
			this.load = true
      if (this.userId !== null) {
        this.$api.getInsertBook(this.userId, id).then(res => {
					this.load = false;
          this.state = true;
          this.$notify({
            title: "成功",
            message: "加入成功",
            type: "success"
          });
        });
      } else {
        this.setLogin(true);
      }
    }
  },
  props: ["booklist", "dayid"]
};
</script>
<style scoped>
.ellipsi {
  -webkit-line-clamp: 3;
}
.img {
  height: 254px;
  width: 190px;
  box-shadow: 0 0 14px 2px rgba(0, 0, 0, 0.3);
}
.img img {
  height: 100%;
  width: 100%;
}
.bookintro {
  margin-top: 20px;
  margin-left: 30px;
}
.bookintro .bknm {
  font-size: 24px;
}
.intro {
  background: #fff;
  margin-top: 10px;
  border-radius: 4px;
  padding: 50px 40px;
}
.tab {
  border: 1px solid #cdd0d6;
  color: #999;
}
.type {
  border: 1px solid #d32f2f;
  background: #d32f2f;
  color: #fff;
}
.state {
  border: 1px solid #25c4a6;
  background: #25c4a6;
  color: #fff;
}
.label {
  display: inline-block;
  line-height: 20px;
  font-size: 12px;
  border-radius: 2px;
  padding: 0 5px;
  margin-right: 10px;
}
.zuo {
  margin-left: 10px;
  margin-top: 10px;
}
.bottom {
  margin-bottom: 10px;
}
.datum span {
  font-size: 18px;
  margin-right: 25px;
}
.datum em {
  font-size: 14px;
  color: #999;
}
p {
  margin: 20px 0;
}
.el-button {
  border: 1px solid #25c4a6;
  border-radius: 4px;
  color: #25c4a6;
}
.button a {
  border: 1px solid #25c4a6;
  border-radius: 4px;
  color: #25c4a6;
  height: 38px;
  line-height: 38px;
  width: 120px;
  text-align: center;
  font-size: 16px;
  margin-right: 20px;
}
.button .read {
  width: 180px;
  color: #fff;
  background: #25c4a6;
}
.button .read:hover {
  opacity: 0.8;
  background: #25c4a6;
}
.button a:hover {
  background: #f3fffc;
}
</style>
