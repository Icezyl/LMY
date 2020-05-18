<template>
  <div class="home">
    <div class="container">
      <el-carousel :interval="3000" arrow="always">
        <el-carousel-item v-for="item in arr" :key="item.id">
          <router-link :to="'/details/'+item.id">
            <img :src="item.img" alt />
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<style scoped>
.container img {
  border-radius: 5px;
  width: 100%;
  height: 100%;
}
</style>

<script>
export default {
  name: "home",
  data() {
    return {
      index: 0,
      arr: [
        {
          img:
            "//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/0ddd2ab3860a695e5a6fb0df41e6f896.jpg",
          id: "400003"
        },
        {
          img:
            "//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/d662c06f5f6744981b3cd71347461415.jpg",
          id: "600002"
        },
        {
          img:
            "//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/470bced036f5b3f50c4d0aac44d7b5ef.jpg",
          id: "300009"
        },
        {
          img:
            "//qidian.qpic.cn/qidian_common/349573/de8316fdd7cece2f19044b044ffc759a/0",
          id: "900001"
        },
        {
          img:
            "//qidian.qpic.cn/qidian_common/349573/5719b3b1eb71616a5b84be62d0b6ed7b/0",
          id: "600001"
        },
        {
          img:
            "//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/6a87c8efce2e6525ab13c8dadccc7901.jpg",
          id: "300005"
        }
      ]
    };
  }
};
</script>
