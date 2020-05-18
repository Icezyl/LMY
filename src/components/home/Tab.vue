<template>
  <div class="tab">
    <h1 :class="tablists.color" class="titl">
      {{tablists.title_head}}
      <small class="tits">/{{tablists.title_foot}}</small>
    </h1>
    <h2 class="mo" :class="tablists.color"></h2>
    <ul>
      <li v-for="item in api" :key="item.id">
        <a v-if="notice=='notice'" target="_blank" :href="item.url">{{item.name}}</a>
        <router-link
          v-if="notice!='notice'"
          :to="'/details/'+item.novelId"
        >{{notice == 'notice'?item.noticeTitle:item.novelName}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      api: null
    };
  },
  props: {
    tablists: {
      type: Object,
      required: true
    },
    notice: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.$api.getNotice().then(res => {
      if (this.notice == "notice") {
        this.api = [
          {
            url: "https://acts.qidian.com/2019/6612247/index.html",
            name: "网络文学优秀作品联展"
          },
          {
            url: "https://www.qidian.com/news/detail/072952497",
            name: "起点PC本章说功能优化"
					},
					{
						url: "http://tv.cctv.com/2019/11/20/VIDEOMNc0CmxDaKAwvksHSxq191120.shtml?spm=C31267.PFsKSaKh6QQC.S71105.17",
						name: "粗暴干涉中国内政必将徒劳"
					}
        ];
      } else if (this.notice == "ticket") {
        this.api = res.selectTicket;
      } else if (this.notice == "release") {
        this.api = res.selectRelease;
      } else {
        console.log("你麻痹的！！！！");
      }
    });
  }
};
</script>
<style scoped>
.tab {
  width: 30%;
  border: 1px solid #e8e8e8;
  background: #fff;
  padding: 20px 0 25px 25px;
  border-radius: 5px;
}
li {
  line-height: 35px;
  border-bottom: 1px dashed #e8e8e8;
}
li a {
  font-size: 14px;
}
.mo {
  opacity: 0.6;
  position: relative;
  width: 71%;
  top: -10px;
  left: 28%;
}
.taborange {
  color: #ffa54f;
  border-bottom-color: 1px solid #ffa54f;
}
.tabgreen {
  color: #3cb371;
  border-bottom-color: 1px solid #3cb371;
}
.tabblue {
  color: #00b2ee;
  border-bottom-color: 1px solid #00b2ee;
}
</style>
