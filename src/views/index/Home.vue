<template>
  <div class="home">
    <Rotary></Rotary>
    <div class="tabs flex container">
      <Tab :tablists="tablists[0]" :notice="notice"></Tab>
			<Tab :tablists="tablists[1]" :notice="ticket"></Tab>
			<Tab :tablists="tablists[2]" :notice="release"></Tab>
    </div>
    <div class="container">
      <Recommend></Recommend>
			<a class="adver" target="_blank" href="http://act.yy.game.qidian.com/Ad/Cpl/land/way/1/mark/6e26ead8e11c36ab6aeb096c3b162f42/name/xylz2?qd_game_key=xylz21200x100s.jpg&qd_dd_p1=46000"><img src="https://img.qidian.com/upload/gamesy/2019/09/29/201909291431584tdl5klodl.jpg" alt=""></a>
      <Popular></Popular>
			<a class="adver" target="_blank" href="https://www.qidian.com/news/detail/909491483">
				<img src="//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/b04a22809eb4deedaf9828b84eb57343.png" alt="">
			</a>
      <Complete></Complete>
    </div>
  </div>
</template>
<style scoped>
.tabs {
  margin-top: 15px;
  justify-content: space-between;
}
.home, .adver img {
  margin-top: 20px;
}
</style>

<script>
import Rotary from "@/components/home/Rotary.vue";
import Tab from "@/components/home/Tab.vue";
import Ranking from "@/components/home/Ranking.vue";
import Recommend from "@/components/home/Recommend.vue";
import Popular from "@/components/home/Popular.vue";
import Complete from "@/components/home/Complete.vue";
export default {
	name: "home",
  data() {
    return {
			notice: 'notice',
			ticket: 'ticket',
			release: 'release',
      tablists: [
        {
          title_head: "公告",
          title_foot: "咨询",
          color: "taborange"
        },
        {
          title_head: "好书",
          title_foot: "推荐",
          color: "tabgreen"
        },
        {
          title_head: "原创",
          title_foot: "发布",
          color: "tabblue"
        }
      ]
    };
  },
  components: {
    Rotary,
    Tab,
    Ranking,
    Recommend,
    Popular,
    Complete
  }
};
</script>
