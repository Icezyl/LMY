<template>
  <div class="modfy">
    <div class="hr">
      <span>旧密码</span>
      <el-input v-model="form.oldPwd" placeholder="请输入旧密码"></el-input>
    </div>
    <div class="hr">
      <span>新密码</span>
      <el-input v-model="form.newPwd1" placeholder="请输入新密码"></el-input>
    </div>
    <div class="hr">
      <span>确认密码</span>
      <el-input v-model="form.newPwd2" placeholder="请输入新密码"></el-input>
    </div>
    <div class="tub">
      <el-button @click="update" type="success">修改密码</el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      form: {
        oldPwd: "",
        newPwd1: "",
        newPwd2: ""
      }
    };
  },
  computed: {
    ...mapState(["userId"])
  },
  methods: {
		...mapMutations(["removeToken", "removeUserId", "setUser"]),
    update() {
      if (this.form.oldPwd == "") {
        this.$message({
          showClose: true,
          message: "错误! 旧密码为空",
          type: "error"
        });
      } else if (this.form.newPwd1 == "") {
        this.$message({
          showClose: true,
          message: "错误!!!新密码为空",
          type: "error"
        });
      } else if (this.form.newPwd2 == "") {
        this.$message({
          showClose: true,
          message: "错误!!!确认密码为空",
          type: "error"
        });
      } else {
        if (this.form.newPwd1 == this.form.newPwd2) {
          this.$api
            .postUpdate({
              id: this.userId,
              oldPwd: this.form.oldPwd,
              newPwd: this.form.newPwd2
            })
            .then(res => {
              if (res.code == 0) {
                this.$notify({
                  title: "成功",
                  message: "修改成功",
                  type: "success"
								});
								this.removeToken()
								this.removeUserId()
								this.setUser()
								this.$router.push('/')
              } else {
                this.$notify.error({
                  title: "错误",
                  message: res.msg
                });
              }
            });
        } else {
          console.log(123);
        }
      }
    }
  }
};
</script>
<style scoped>
.modfy {
  width: 320px;
  margin: 20px auto;
}
.modfy span {
  display: inline-block;
  width: 80px;
  font-size: 16px;
  color: #000;
}
.hr {
  margin-bottom: 20px;
}
.el-input {
  width: 200px;
}
.tub {
  text-align: center;
}
</style>
