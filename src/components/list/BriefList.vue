<template>
  <div class="box">
    <h3 class="boder">{{msg}}</h3>
    <router-link :to="'/details/'+first.novelId">
      <div class="flex boder first">
        <span class="minbox" id="num1">1</span>
        <div class="infotxt" v-if="first">
          <p class="sizem">{{first.novelName}}</p>
          <p class="sizes">
            <router-link to="/">{{first.authorName}}</router-link>
          </p>
          <p class="sizes">
            <router-link to="/">[{{first.categoryLable}}]</router-link>
          </p>
          <div>
            <a>{{rank(first, true)}}</a>
          </div>
        </div>
        <div class="img">
          <img v-if="first" :src="first.novelImgUrl" alt />
        </div>
      </div>
    </router-link>

    <div v-for="(item, index) in list" :key="index" class="flex line boder">
      <div class="minbox" :id="'num'+(index+2)">{{index+2}}</div>
      <p class="sizem">
        <router-link :to="'/details/'+item.novelId" class="ellipsi">{{item.novelName}}</router-link>
      </p>
      <p class="right">{{rank(item)}}</p>
    </div>
    <div class="all">
      <router-link :to="'/detailed/'+id">更多></router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      first: {},
      list: {},
      nove: "novelType"
    };
  },
  mounted() {
    this.$api.getRankings().then(res => {
      if (this.type == "ticket") {
        this.first = res.TicketRanking.TicketRanking[0];
        this.list = res.TicketRanking.TicketRankings;
      } else if (this.type == "end") {
        this.first = res.BestsRanking.endRanking[0];
        this.list = res.BestsRanking.endRankings;
      } else if (this.type == "new") {
        this.first = res.NewBookRanking.newBookRanking[0];
        this.list = res.NewBookRanking.newBookRankings;
      } else if (this.type == "sub") {
        this.first = res.NewSubscribeRanking.newSubscribe[0];
        this.list = res.NewSubscribeRanking.newSubscribes;
      } else if (this.type == "click") {
        this.first = res.CilckRanking.cilckRanking[0];
        this.list = res.CilckRanking.cilckRankings;
      } else if (this.type == "rec") {
        this.first = res.RecommendRanking.recommendRanking[0];
        this.list = res.RecommendRanking.recommendRankings;
      } else {
        console.log("你麻痹的没数据！！！！");
      }
      console.log(res);
    });
  },
  methods: {
    rank: function(item, state) {
			let items = ''
      if (this.id == 1) {
				items = item.novelTicket;
				if(state) {
					items += '月票数'
				}
      } else if (this.id == 2) {
				items = item.novelClick;
				if(state) {
					items += '点击量'
				}
      } else if (this.id == 3) {
				items = item.novelCollection;
				if(state) {
					items += '收藏数'
				}
      } else if (this.id == 4) {
				items = item.authorName;
      } else if (this.id == 5) {
				items = item.novelClick;
				if(state) {
					items += '点击量'
				}
      } else if (this.id == 6) {
				items = item.novelRecommend;
				if(state) {
					items += '推荐票'
				}
      }
      return items
    }
  },
  props: ["type", "msg", "id"]
};
</script>
<style scoped>
#num1 {
  color: #fff;
  background: #ff2f0f;
}
#num2 {
  color: #fff;
  background: #ff7400;
}
#num3 {
  color: #fff;
  background: #e9cc12;
}
.ellipsi {
  -webkit-line-clamp: 1;
}
.first {
  padding: 10px 0;
}
.box .all {
  font-size: 14px;
  text-align: right;
  padding-top: 10px;
}
.box .all a {
  color: #999;
}
.right {
  color: #999;
  display: block;
  height: 18px;
  width: 80px;
  text-align: right;
}
.minbox {
  height: 18px;
  width: 18px;
  text-align: center;
  line-height: 18px;
  font-weight: bolder;
  color: #999;
}
.line {
  padding: 10px 0;
}
.line .sizem {
  margin-left: 10px;
  line-height: 18px;
  width: 140px;
}
.boder {
  border-bottom: 1px solid #e6e6e6;
}
h3 {
  line-height: 30px;
}
.sizem {
  font-size: 16px;
}
.sizes {
  font-size: 13px;
}
.infotxt {
  margin-left: 10px;
  width: 140px;
  line-height: 15px;
}
.infotxt p {
  margin-bottom: 8px;
}
.box {
  padding: 10px 20px;
  width: 240px;
  background: #fff;
  border: 1px solid #e6e6e6;
}
.img {
  width: 67px;
  height: 88px;
  border-radius: 5px;
}
.img img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
</style>
