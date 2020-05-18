<template>
  <div class="info">
    <el-table :data="list" border style>
      <el-table-column prop="novelName" label="书名" width="180"></el-table-column>
      <el-table-column prop="authorName" label="作者" width="150"></el-table-column>
      <el-table-column prop="categoryLable" label="类型" width="120"></el-table-column>
			<el-table-column prop="updateTime" :formatter="setDate" label="时间"></el-table-column>
			 <el-table-column prop="chapterTitle" label="浏览历史章节">
				 <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, list)"
          type="text"
          size="small">
          {{list[scope.$index].chapterTitle}}
        </el-button>
      </template>
			 </el-table-column>
    </el-table>
  </div>
</template>
<script>
import moment from "moment";
import { mapState } from 'vuex';
export default {
	data () {
		return {
			list: []
		}
	},
	computed: {
		...mapState(['userId'])
	},
  methods: {
    brow() {
      this.$api.getBrow(this.userId).then(res => {
				console.log(this.list=res.Browsinghistory)
			});
		},
		deleteRow(index, data) {
			this.$router.push(`/book/${data[index].novelId}/${data[index].chapterId}`)
		},
		setDate(row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
	},
	mounted () {
		this.brow()
	}
};
</script>
<style scoped>
.info {
  padding: 20px;
  width: 75%;
  background: #fff;
  flex-wrap: wrap;
}
</style>
