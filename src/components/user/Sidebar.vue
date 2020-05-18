<template>
  <div class="left">
    <div class="userimg">
      <div class="img">
        <img src="@/assets/img/hearder.jpg" alt />
      </div>
    </div>
    <el-row class="tac">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :router="true"
      >
        <el-menu-item index="1" route="/user">
          <span slot="title">我的首页</span>
        </el-menu-item>
        <el-menu-item index="2" route="/bookshelf">
          <span slot="title">我的书架</span>
        </el-menu-item>
        <el-menu-item index="3" route="/browse">
          <span slot="title">浏览记录</span>
        </el-menu-item>
				 <el-menu-item index="4" route="/personal">
          <span slot="title">个人资料</span>
        </el-menu-item>
      </el-menu>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userId"])
  }
};
</script>
<style scoped>
.left {
  height: 700px;
  text-align: center;
  width: 200px;
  background: #fff;
}
.userimg {
  padding: 30px 25px;
}
.userimg .img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.userimg .img img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.tac {
  width: 200px;
}
</style>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
