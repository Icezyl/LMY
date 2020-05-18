<template>
  <div>
    <div class="white">
      <ul class="flex lists container">
        <div class="img">
          <router-link to="/">
            <img src="../../assets/img/Chimpanzee.png" alt />
          </router-link>
        </div>
        <router-link tag="li" to="/user" :class="{active:liState==0}">我的首页</router-link>
        <router-link tag="li" to="/bookshelf" :class="{active:liState==1}">我的书架</router-link>
        <router-link tag="li" to="/personal" :class="{active:liState==2}">个人资料</router-link>
      </ul>
    </div>
    <div class="container bodys flex">
      <Sidebar :userList='userList'></Sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/user/Sidebar.vue";
import UserInfo from "@/components/user/UserInfo.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
			liState: 0,
			userList: []
    };
  },
  watch: {
    $route(to, from) {
      if ("/user" == to.path) this.liState = 0;
      else if ("/bookshelf" == to.path) this.liState = 1;
      else if ("/personal" == to.path) this.liState = 2;
    }
  },
  components: {
    Sidebar,
    UserInfo
  }
};
</script>
<style scoped>
.bodys {
  margin-top: 20px;
  justify-content: space-between;
}
</style>
<style scoped>
.white {
  background: #fff;
}
.lists {
  font-size: 16px;
  line-height: 16px;
  height: 40px;
  white-space: nowrap;
}
.lists li {
  cursor: pointer;
  padding: 9px 0;
  margin: 0 20px;
  height: 20px;
}
.img {
  height: 35px;
  width: 40px;
}
.active {
  border-bottom: 2px solid #0aa487;
}
</style>
