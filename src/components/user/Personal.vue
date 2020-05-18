<template>
  <div class="info">
    <MinNav :list="list" ons="0"></MinNav>
    <router-view></router-view>
  </div>
</template>
<script>
import MinNav from "@/components/user/MinNav.vue";
export default {
  data() {
    return {
      ons: 0,
      list: [
        {
          to: "/personal",
          txt: "个人信息"
        },
        {
          to: "/head",
          txt: "我的头像"
        },
        {
          to: "/modify",
          txt: "修改密码"
        }
      ]
    };
  },
  components: {
    MinNav
  }
};
</script>

<style scoped>
.info {
  width: 75%;
}
.active {
  color: #0aa487;
}
.modify {
  border-bottom: 1px solid #e6e6e6;
}
.modify hr {
  height: 18px;
  margin: auto 0;
  border: 1px solid #e6e6e6;
}
.modify div {
  padding: 20px 30px;
}
.modify a {
  text-align: center;
}
</style>
