<template>
  <div class="container">
    <Store></Store>
    <!-- <Stort></Stort> -->
    <div class="books flex wrap">
      <Bookbox :booklist="booklist"></Bookbox>
    </div>
    <div class="pagin">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="30"
        :total="length"
        @prev-click="pre"
        @next-click="next"
        @current-change="currentChange"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import Store from "@/components/stack/Store.vue";
import Bookbox from "@/components/stack/Bookbox.vue";
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      booklist: [],
      length: 0
    };
  },
  computed: {
    ...mapState(["storeTypeId", "storeStateId", "storeNum", "storeTime"]),
    ...mapGetters([
      "getStoreTypeId",
      "getStoreStateId",
      "getStoreNum",
      "getStoreTime"
    ])
  },
  watch: {
    getStoreTypeId: function() {
      this.api(
        this.storeTypeId,
        this.storeStateId,
        this.storeNum,
        this.storeTime
      );
    },
    getStoreStateId: function() {
      this.api(
        this.storeTypeId,
        this.storeStateId,
        this.storeNum,
        this.storeTime
      );
    },
    getStoreNum: function() {
      console.log(this.storeNum);
      this.api(
        this.storeTypeId,
        this.storeStateId,
        this.storeNum,
        this.storeTime
      );
    },
    getStoreTime: function() {
      this.api(
        this.storeTypeId,
        this.storeStateId,
        this.storeNum,
        this.storeTime
      );
    }
  },
  components: {
    Store,
    Bookbox
  },
  mounted() {
    //  ...mapState(["storeTypeId", "storeStateId", "storeNum", "storeTime"]),
    if (
      this.storeTypeId == 0 &&
      this.storeStateId == 0 &&
      this.storeNum == 0 &&
      this.storeTime == 365
    ) {
      this.api(0, 0, 0, 365);
    } else {
      this.api(
        this.storeTypeId,
        this.storeStateId,
        this.storeNum,
        this.storeTime
      );
    }
  },
  methods: {
    api(typeid, stateid, num, time, code = 1, size = 30) {
      this.$api
        .getBookStack(typeid, stateid, num, time, code, size)
        .then(res => {
          this.booklist = res.BookStack.list;
          this.length = res.BookStack.total;
          console.log(this.length);
          console.log(res);
        });
    },
    currentChange(cpage) {
      this.api(
        this.storeTypeId,
        this.storeStateId,
        this.storeNum,
        this.storeTime,
        cpage
      );
      console.log(cpage);
    },
    pre(cpage) {
      console.log(cpage);
    },
    next(cpage) {
      console.log(cpage);
    }
  }
};
</script>
<style scoped>
.container {
  margin-top: 20px;
}
.books {
  background: #fff;
  margin-top: 10px;
  padding: 0 20px;
}
.wrap {
  flex-wrap: wrap;
  justify-content: space-between;
}
.pagin {
	margin-top: 20px;
	text-align: center;
}
</style>
