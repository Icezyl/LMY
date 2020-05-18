<template>
  <div class="book" :class="theme">
    <div :class="width">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/details/'+book.novelId }">{{book.novelName}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{content.chapterTitle}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="book_box box">
        <div class="title">
          <h2>{{content.chapterTitle}}</h2>
          <p>
            <span>作者：{{book.authorName}}</span>
            <span>书名：{{book.novelName}}</span>
            <span>字数：{{book.novelSize}}</span>
            <span>更新时间：{{time(book.updateTime)}}</span>
          </p>
        </div>
        <el-divider></el-divider>
        <div class="book_txt" :class="size">
          <p>{{this.content.chapterContent}}</p>
        </div>
      </div>
      <el-row class="nav box">
        <el-col :span="8">
          <p @click="up(content.chaptes,content.chapterIds,id)">上一章</p>
        </el-col>
        <el-col :span="8">
          <router-link :to="'/catalogue/'+book.novelId">目录</router-link>
        </el-col>
        <el-col :span="8">
          <p @click="lower(content.chaptes,content.chapterIds,id)">下一章</p>
        </el-col>
      </el-row>
      <Top :id="id"></Top>
      <Bottom></Bottom>
    </div>
  </div>
</template>
<script>
import Top from "@/components/book/Top.vue";
import Bottom from "@/components/book/Bottom.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      id: 0,
      chapterId: "",
      content: {},
      book: {},
      length: 0
    };
  },
  components: {
    Top,
    Bottom
  },
  computed: {
    ...mapState(["theme", "size", "width", "userId"])
  },
  mounted() {
    let { id, chapid } = this.$route.params;
    this.id = id;
    this.chapterId = chapid;
		this.api(id, chapid);
  },
  methods: {
    api: function(id, chapterId) {
      this.$api.getChapteDetailsContext({novelId:id, chapterId:chapterId}).then(res => {
        this.content = res.ChapterContent[0];
        this.book = res.Book[0];
        this.$api.getChapteDetails(id).then(res => {
					this.length = res.ChapteDetails.length;
					this.info()
          console.log(res);
        });
        console.log(res);
      });
		},
		info() {
			this.$api.postInsertChapteDetails({userId: this.userId, novelId: this.id, chapterId: this.chapterId}).then(res=> {
				console.log(res, 123)
			})
		},
    time: function(data) {
      var time = "";
      time += new Date(data).getFullYear() + "-";
      time += new Date(data).getMonth() + "-";
      time += new Date(data).getDate();
      return time;
    },
    lower: function(name, id, bookId) {
      id = Number(id);
      let len = id + 1;
      let nameId = name + (id + 1);
      console.log(len, this.length);
      if (this.length >= len) {
        this.$router.push({ path: `/book/${bookId}/${nameId}` });
        this.$router.go(0);
      } else {
        this.$message("已到底了");
      }
    },
    up: function(name, id, bookId) {
      id = Number(id);
      if (id != 1) {
        let nameId = name + (id - 1);
        this.$router.push({ path: `/book/${bookId}/${nameId}` });
        this.$router.go(0);
      } else {
				this.$message("到头了");
      }
    }
  }
};
</script>
<style scoped>
.book {
  padding: 5px 0;
}
.book_box {
  padding: 30px 7.7%;
}
.book_box .title {
  text-align: center;
}
.book_box h2 {
  line-height: 35px;
  font-weight: 500;
  font-size: 34px;
}
.book_box span {
  display: inline-block;
  color: #999;
  margin: 20px 30px 0;
}
.book_txt p {
  line-height: 30px;
}
.el-divider {
  height: 0;
  border-bottom: 0.3px solid #999;
}
.nav {
  text-align: center;
  line-height: 50px;
}
.el-col-8 {
  cursor: pointer;
}
.el-breadcrumb /deep/:hover {
  color: #0aa487;
}
</style>
