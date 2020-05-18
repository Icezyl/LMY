<template>
  <div class="store">
    <div class="select">
      <div class="kind flex">
        <div class="bz">作品分类:</div>
        <div class="nr">
          <ul class="flex">
            <li
              @click="setStoreTypeId(item.id)"
              v-for="item in typelist"
              :key="item.id"
              :class="{active:item.id==storeTypeId}"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="kind flex">
        <div class="bz">写作进度:</div>
        <div class="nr">
          <ul class="flex">
            <li
              @click="setStoreStateId(item.id)"
              v-for="item in statelist"
              :key="item.id"
              :class="{active:item.id==storeStateId}"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="kind flex">
        <div class="bz">作品字数:</div>
        <div class="nr">
          <ul class="flex">
            <li
              @click="setStoreNum(item.id)"
              v-for="item in numberlist"
              :key="item.id"
              :class="{active:item.id==storeNum}"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="flex">
        <div class="bz">更新时间:</div>
        <div class="nr">
          <ul class="flex">
            <li
              @click="setStoreTime(item.id)"
              v-for="item in timelist"
              :key="item.id"
              :class="{active:item.id==storeTime}"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["storeTypeId", "storeStateId", "storeNum", "storeTime"])
  },
  methods: {
    ...mapMutations([
      "setStoreTypeId",
      "setStoreStateId",
      "setStoreNum",
      "setStoreTime"
    ])
  },

  data() {
    return {
      typelist: [
        { id: 0, name: "全部作品" },
        { id: 1, name: "穿越" },
        { id: 2, name: "都市" },
        { id: 3, name: "历史" },
        { id: 4, name: "网游" },
        { id: 5, name: "仙侠" },
        { id: 6, name: "悬疑" },
        { id: 7, name: "言情" },
        { id: 8, name: "玄幻" },
        { id: 9, name: "科幻" }
      ],
      statelist: [
        { id: 0, name: "全部" },
        { id: 1, name: "已完结" },
        { id: 2, name: "连载中" }
      ],
      numberlist: [
        { id: 0, name: "全部" },
        { id: 1, name: "30万字以下" },
        { id: 300001, name: "30万-50万" },
        { id: 600000, name: "50万-100万" },
        { id: 1500000, name: "100万-200万" },
        { id: 2000001, name: "200万以上" }
      ],
      timelist: [
        { id: 365, name: "全部" },
        { id: 3, name: "三日内" },
        { id: 7, name: "七日内" },
        { id: 15, name: "半月内" },
        { id: 30, name: "一月内" }
      ]
    };
  }
};
</script>

<style scoped>
.store {
  font-size: 14px;
  background: #fff;
  padding: 12px 20px;
}
.kind {
  margin-bottom: 20px;
}
.bz {
  white-space: nowrap;
  width: 60px;
  color: #999;
}
.active {
  color: #fff;
  background: red;
}
ul {
  flex-wrap: wrap;
}
ul li {
  margin-left: 20px;
  cursor: pointer;
  padding: 0 5px;
}
</style>
