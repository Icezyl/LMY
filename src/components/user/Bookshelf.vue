<template>
  <div class="shelf flex">
    <div class="book_shelf" v-for="item in list" :key="item.id">
      <router-link :to="'/details/'+item.novelId">
        <div class="img">
          <img :src="item.novelImgUrl" alt />
        </div>
        <p>{{item.novelName}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      list: []
    };
  },
  computed: {
    ...mapState(["userId"])
  },
  mounted() {
    this.shelf();
  },
  methods: {
    shelf() {
      this.$api.getBookShelf(this.userId).then(res => {
        this.list = res.bookShelf;
        console.log(res);
      });
    }
  }
};
</script>
<style scoped>
.img {
  width: 120px;
  height: 160px;
}
.book_shelf {
  width: 120px;
  padding: 10px;
  line-height: 30px;
  text-align: center;
}
.shelf {
  padding: 20px;
  width: 75%;
  background: #fff;
  flex-wrap: wrap;
}
</style>
