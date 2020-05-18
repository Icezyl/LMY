<template>
  <div class="center">
    <h1>最新更新</h1>
    <el-row>
      <el-col :span="18">
        <div class="newUpdate">
          <router-link :to="'/book/'+time.novelId+'/'+time.chapterId">{{time.chapterTitle}}</router-link>
          <span>{{times(time.updateTime)}}</span>
        </div>
        <div class="rec">
          <h3>精彩推荐</h3>
					<Random state='tran' line="8"></Random>
        </div>
      </el-col>
      <el-col :span="5" :offset="1">
        <div class="author">
          <div class="au-img">
            <img
              src="http://media6.tadu.com/web_dubbo_static//assets/images/v300/bookDetails/touxiang.png"
              alt
            />
            <span class="ioc">签约作者</span>
          </div>
          <div class="au-name">
            <a>{{author.authorName}}</a>
          </div>
          <div class="au-says">
            <p>作者有话要说</p>
            <div class="con">作者大大正在奋力码字哦~~~</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Random from '@/components/Random'
export default {
  watch: {
    id: function(newval) {
      console.log(newval);
    }
  },
  methods: {
    times: function(data) {
      var time = "";
      time += new Date(data).getFullYear() + "-";
      time += new Date(data).getMonth() + "-";
      time += new Date(data).getDate();
      return time;
    }
	},
  props: ["time", "author", "rand"],
	components: {
		Random
	}
};
</script>
<style scoped>
.center {
  padding: 30px 23px 23px;
  background: #fff;
  border-radius: 4px;
  margin-top: 20px;
}
.center h1 {
  font-size: 20px;
  height: 40px;
}
.if {
  width: 824px;
}
.newUpdate {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 10px;
}
.newUpdate a {
  font-size: 14px;
  color: #999;
}
.newUpdate span {
  color: #999;
  margin-top: 5px;
  font-size: 12px;
}
.author {
  background: #f5f5f5;
  border: 1px solid #f0f0f0;
  padding-top: 20px;
}
.au-img {
  width: 60px;
  height: 60px;
  margin: 0 auto;
  margin-bottom: 25px;
}
.au-img img {
  width: 100%;
}
.au-name {
  padding: 10px 0;
  text-align: center;
}
.au-says {
  padding: 0 20px;
  font-size: 12px;
  color: #999;
}
.au-says .con {
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.ioc {
  background: #fc7403;
  display: block;
  width: 60px;
  height: 20px;
  text-align: center;
  color: #fff;
  line-height: 20px;
  font-size: 12px;
  border-radius: 3px;
}
.rec {
  margin-top: 20px;
}
.rec h3 {
  border-bottom: 1px solid #f0f0f0;
  line-height: 30px;
}
</style>
