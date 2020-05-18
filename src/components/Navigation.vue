<template>
  <div class="header" :class="navBarFixed == true ? 'navBarWrap' :''">
    <div class="container">
      <el-row class="m">
        <el-col :span="3">
          <router-link to="/">
            <img src="../assets/img/mm.png" alt />
          </router-link>
        </el-col>
        <el-col :span="5">
          <ul class="lists flex">
            <li :class="{'li-active': onss==0}">
              <router-link to="/">首页</router-link>
            </li>
            <li :class="{'li-active': onss==1}">
              <router-link to="/stack">书库</router-link>
            </li>
            <li :class="{'li-active': onss==2}">
              <router-link to="/list">排行榜</router-link>
            </li>
          </ul>
        </el-col>
        <el-col :span="7">
          <form action class="search flex vertical" :class="{'active': focu}">
            <input
              @keyup.enter="seach"
              type="text"
              v-model="seachValue"
              placeholder="书名/作者"
              v-on:focus="focu=true"
              v-on:blur="focu=false"
            />
            <router-link :to="'/seach/'+seachValue" @click.native="setNossv(3)">搜索</router-link>
          </form>
        </el-col>
        <el-col class="toptext" :span="1" :offset="7">
          <Login :class="{hidden: user}"></Login>
          <div class="user" :class="{hidden: !user}">
            <div @click="userNav = !userNav">
              <el-avatar class="headImg" :size="40">
								<img src="../assets/img/hearder.jpg" alt="">
							</el-avatar>
            </div>
            <ul class="nav" :class="{hidden: !userNav}">
              <li @click="userName">个人中心</li>
              <li @click="shu">我的书架</li>
              <li @click="out">退出</li>
            </ul>
          </div>
        </el-col>
        <el-col class="toptext" :span="1">
          <Res :class="{hidden: user}"></Res>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Login from "@/components/login/Login.vue";
import Res from "@/components/login/Res.vue";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["onss", "user"])
  },
  watch: {
    $route(to, from) {
      if ("/" == to.path) this.setNossv(0);
      else if ("/stack" == to.path) this.setNossv(1);
      else if ("/list" == to.path) this.setNossv(2);
      else this.setNossv(3);
    }
  },
  data() {
    return {
			url:'../assets/img/hearder.jpg',
      seachValue: "",
      focu: false,
      navBarFixed: false,
      userNav: false
    };
  },
  methods: {
    ...mapMutations(["removeToken", "setUser", "setUserId","removeUserId"]),
    ...mapActions(["setNossv"]),
    hidemenu() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 80) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },
    userName() {
      this.userNav = false;
      this.$router.push({ name: "user" });
    },
    shu() {
      this.userNav = false;
      this.$router.push({ path: "/user" });
      this.$router.push({ path: "/bookshelf" });
    },
    out() {
			this.removeToken();
			this.removeUserId();
      this.setUser();
      this.userNav = false;
    },
    seach() {
      this.$router.push("/seach/" + this.seachValue);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.hidemenu);
  },
  components: {
    Login,
    Res
  }
};
</script>
<style scoped>
.imgLogin {
  height: 50px;
}
.user {
  position: relative;
}
.nav {
  z-index: 999;
  width: 100px;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  padding: 10px 0;
  position: absolute;
  color: #71777c;
}
.nav li {
  padding: 0 10px;
  line-height: 24px;
  cursor: pointer;
}
.nav li:hover {
  background-color: #e6e6e6;
}
.headImg {
  margin-top: -10px;
}

.top {
  margin-top: 5px;
}
.toptext {
  margin-top: 13px;
}
.m {
  min-width: 1200px;
}

.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
}
.header {
  padding: 15px 0;
  background: #fff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
.el-row {
  background: #fff;
}
.header .el-col-3 img {
  width: 110px;
  height: 50px;
}
.lists {
	margin-top: 3px;
  font-size: 16px;
  height: 35px;
  white-space: nowrap;
}

.lists li {
  padding: 10px 20px 0 20px;
  height: 20px;
}
.li-active a {
  padding-bottom: 5px;
  color: #0aa487;
  border-bottom: #0aa487 3px solid;
}
.botton .search {
  display: none;
}
.search {
	margin-top: 3px;
  border-radius: 50px;
  border: 1px solid #e5e5e5;
  height: 35px;
  width: 300px;
  white-space: nowrap;
}

.search input {
  width: 80%;
  outline: none;
  border: none;
  margin: 10px 0 10px 10px;
}

.search a {
  line-height: 35px;
  outline: none;
  background: none;
  color: #0aa487;
  border: none;
}

.left {
  flex-wrap: wrap;
  width: 60%;
}
.right {
  width: 40%;
  justify-content: flex-end;
}
.loan {
  height: 25px;
}
.loan div {
  color: #999;
  margin-left: 20px;
}

.lists li:hover {
  color: #0aa487;
}
.active {
  border: 1px solid #0aa487;
}
</style>
