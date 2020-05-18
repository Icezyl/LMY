<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/details/'+book.novelId }">{{book.novelName}}</el-breadcrumb-item>
      <el-breadcrumb-item>目录</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="cata">
      <div class="title">
        <h2>{{book.novelName}}</h2>
        <p>
          <span>
            <em>作者：</em>{{book.authorName}}
          </span>
          <span>
            <em>分类：</em>{{book.categoryLable}}
          </span>
          <span>
            <em>字数：</em>{{book.novelSize}}
          </span>
          <span>
            <em>人气：</em>{{book.novelClick}}
          </span>
        </p>
      </div>

      <div class="chapter">
        <el-divider>免费章节</el-divider>
        <el-row :gutter="120">
          <el-col :span="8" v-for="item in chap" :key="item.id">
            <router-link :to="'/book/'+item.novelId+'/'+item.chapterId" class="chap_num ellipsi">{{item.chapterTitle}}</router-link>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
			id: 0,
			chap: {},
			book: {}
    };
  },
  mounted() {
		console.log((this.id = this.$route.params.id));
		this.api(this.id)
  },
  methods: {
    api: function(id) {
      this.$api.getChapteDetails(id).then(res => {
				this.chap = res.ChapteDetails
				this.book = res.Book[0]
        console.log(res);
      });
    }
  }
};
</script>
<style scoped>
.chap_num {
  line-height: 40px;
  border-bottom: 1px dashed #f2f2f2;
}
.ellipsi {
  -webkit-line-clamp: 1;
}
.title {
  text-align: center;
}
.title h2 {
  font-size: 28px;
  font-weight: 400;
  display: inline-block;
  line-height: 30px;
  margin-top: 40px;
}
.title p {
  display: block;
  margin: 15px 0 57px;
}
.title p span {
  display: inline-block;
  margin-right: 40px;
}
.title p span em {
  color: #999;
}
.cata {
  background: #fff;
  border: 1px solid #e8e8e8;
}
.chapter {
  width: 90%;
  margin: 0 auto;
}
.is-center {
  font-size: 18px;
}
.el-breadcrumb {
  padding: 15px 0;
  font-size: 12px;
}
.el-breadcrumb /deep/:hover {
  color: #0aa487;
}
</style>
