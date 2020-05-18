<template>
  <!-- 书籍详细 -->
  <div class="container">
    <BookIntro :booklist="booklist" :dayid="dayid"></BookIntro>
    <BookCenter :time="time" :author="author" :rand="rand"></BookCenter>
  </div>
</template>
<script>
import BookIntro from "@/components/details/BookIntro.vue";
import BookCenter from "@/components/details/BookCenter.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userId"])
  },
  data() {
    return {
      id: 0,
      booklist: {},
      time: {},
      author: {},
      rand: {},
      dayid: {}
    };
  },
  components: {
    BookIntro,
    BookCenter
  },
  mounted() {
    this.id = this.$route.params.id;
    this.api(this.id);
  },
  watch: {
    "$route.params.id": function(newval) {
      this.id = newval;
      this.api(this.id);
    }
  },
  methods: {
    api: function(novelId) {
      this.$api.getBookDetails({novelId: novelId, id:this.userId}).then(res => {
        this.booklist = res.BookDetails[0];
        this.time = res.ChapteDetails[0];
        console.log(res);
        this.author = res.Author[0];
        this.rand = res.RandBook;
        this.dayid = res.First[0];
      });
    }
  }
};
</script>
