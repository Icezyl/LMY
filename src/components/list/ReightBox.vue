<template>
  <div class="flex">
    <!-- 月票榜 -->
    <el-row>
      <el-col :span="8" class="to">
        <BriefList type="ticket" msg="月票榜" id="1"></BriefList>
      </el-col>
      <el-col :span="8" class="to">
        <BriefList type="end" msg="完本榜" id="2"></BriefList>
      </el-col>
      <el-col :span="8" class="to">
        <BriefList type="new" msg="新书榜" id="3"></BriefList>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <BriefList type="sub" msg="新书订阅榜" id="4"></BriefList>
      </el-col>
      <el-col :span="8">
        <BriefList type="click" msg="点击榜" id="5"></BriefList>
      </el-col>
      <el-col :span="8">
        <BriefList type="rec" msg="推荐榜" id="6"></BriefList>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import BriefList from "@/components/list/BriefList.vue";
export default {
  data() {
    return {
      lists: null,
      ticket: "ticket",
      Ranking: "ss"
    };
  },
  components: {
    BriefList
  },
  mounted() {}
};
</script>
<style scoped>
.to {
  margin-bottom: 20px;
}
.flex {
  margin-left: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
