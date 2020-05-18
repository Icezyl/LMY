<template>
  <div class="lists">
    <el-row v-for="(item, index) in list" :key="index">
      <el-col :span="3">
        <div class="img">
          <router-link :to="'/details/'+item.novelId">
            <img :src="item.novelImgUrl" alt />
          </router-link>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="name">
          <router-link :to="'/details/'+item.novelId">{{item.novelName}}</router-link>
        </div>
        <div
          class="cate"
        >{{item.authorName}} | {{item.categoryLable}} | {{item.novelState=1?'已完结':'连载中'}}</div>
        <div class="info ellipsi">{{item.novelDesc}}</div>
        <div class="new flex">
          <span class="tiemnew">最新章节</span>
          <p class="flex newtime">
            <a href>{{item.chapterTitle}}</a>
            <span style="text-align:right">{{time(item.updateTime)}}</span>
          </p>
        </div>
      </el-col>
      <el-col :span="2" class="fot" :offset="2">
        <i class="el-icon-medal" :id="`num`+(index+1)" v-show="!state">
          <span>{{index+1}}</span>
        </i>
        <span class="buto buttons" @click="vote">投票</span>
        <button class="butt buttons" @click="join(item.novelId)">{{'加入书架'}}</button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      index: 1,
			list: {},
			joState: false
    };
  },
  watch: {
    id: {
      handler(newVal, oldVal) {
        this.api(newVal);
      }
		},
		lists(newval) {
			this.list=newval
		}
  },
  computed: {
    ...mapState(["userId", "loginVisible"])
  },
  mounted() {
    if (!this.state) {
      this.api(this.id);
    } else {
      this.list = this.lists;
    }
    console.log(this.list);
  },
  methods: {
    ...mapMutations(["setLogin"]),
    api(id) {
      this.$api.getDetails(id).then(res => {
        this.list = res.Details;
        console.log(this.list);
      });
    },
    time(data) {
      var time = "";
      time += new Date(data).getFullYear() + "-";
      time += new Date(data).getMonth() + "-";
      time += new Date(data).getDate();
      return time;
    },
    vote() {
      if (this.userId !== null) {
        const h = this.$createElement;
        this.$notify({
          title: "投票失败",
          message: "票数为零"
        });
      } else {
        this.setLogin(true);
      }
    },
    join(id) {
      if (this.userId !== null) {
        this.$api.getInsertBook(this.userId, id).then(res => {
          // this.joinState = true
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
  props: ["id", "lists", "state"]
};
</script>
<style scoped>
#num1 {
  color: #ff2f0f;
}
#num2 {
  color: #ff7400;
}
#num3 {
  color: #e9cc12;
}
.fot {
  text-align: right;
}
.el-row {
  margin-bottom: 20px;
}
.buttons {
  height: 30px;
  width: 90px;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
}
.buto {
  margin: 10px 0;
  display: block;
  background: #0aa487;
  color: #fff;
}
.butt {
  outline: none;
  background: #fff;
  border: 1px solid #999;
}
.el-icon-medal {
  white-space: nowrap;
  font-size: 50px;
  color: #999;
	position: relative;
}
.el-icon-medal span {
	width: 50px;
  text-align: center;
  display: inline-block;
  position: absolute;
  font-size: 18px;
  top: 22px;
  left: 0;
}
.lists {
  background: #fff;
  padding: 10px 30px;
}
.cate {
  font-size: 12px;
  color: #999;
  width: 100%;
  margin: 10px 0 15px 0;
}
.deda {
  margin-left: 20px;
  margin-right: 20%;
}
.new {
  color: #999;
  margin-top: 10px;
  font-size: 12px;
}
.new a {
  color: #999;
}
.new a:hover {
  color: #0aa487;
}
.newtime {
  width: 100%;
  justify-content: space-between;
  line-height: 20px;
}
.tiemnew {
  font-size: 13px;
  flex-shrink: 0;
  border: 1px solid #e6e6e6;
  margin-right: 10px;
}
.list {
  justify-content: space-between;
  padding-bottom: 22px;
  margin-top: 22px;
  border-bottom: 1px solid #e6e6e6;
}
.img {
  min-width: 100px;
  height: 130px;
}
.info {
  color: #666;
  font-size: 13px;
  border: none;
}
</style>
