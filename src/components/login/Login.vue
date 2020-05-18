<template>
  <div class="login">
    <el-button type="text" class="lo" @click="lo">登录</el-button>
    <el-dialog
      title="登录"
      :visible="loginVisible"
      top="8%"
      width="300px"
      :close-on-click-modal="false"
      @close="Close"
    >
      <el-form v-model="form">
        <el-input v-model="form.name" placeholder="请输入邮箱" autocomplete="off"></el-input>
        <el-input
          v-model="form.paw"
          placeholder="请输入密码"
          @keyup.enter.native="login"
          autocomplete="off"
          show-password
        ></el-input>
      </el-form>
      <el-button type="primary" @click="login" :loading="!loginState">登 录</el-button>
      <div class="flex res">
        <p>
          没有账号？
          <a class="gr" @click="res">注册</a>
        </p>
        <a class="gr" @click="forgetye">忘记密码</a>
      </div>
      <div slot="footer" class="dialog-footer">
        <p>
          注册登录即表示同意
          <a class="gr">用户协议</a>、
          <a class="gr">隐私政策</a>
        </p>
      </div>
    </el-dialog>
    <el-dialog
      class="forget"
      title="忘记密码"
      :visible="forget"
      top="8%"
      width="480px"
      :close-on-click-modal="false"
      @close="forClose"
    >
      <el-steps :active="this.ac" finish-status="success" simple style="margin-top: 20px">
        <el-step title="输入邮箱"></el-step>
        <el-step title="重置密码"></el-step>
        <el-step title="修改成功"></el-step>
      </el-steps>
      <div class="forgetbox">
        <div class="forgetchild" v-if="ac==0">
          <el-input v-model="getform.email" placeholder="请输入邮箱" class="bo"></el-input>
          <div class="el-input song">
            <input type="text" class="el-input__inner" placeholder="请输入验证码" v-model="getform.yan" />
            <span
              @click="send"
              :class="timeState==true ? 'yan':'he'"
            >{{this.time==0 ? '':'('+this.time+'s)'}}发送验证码</span>
          </div>
        </div>

        <div class="forgetchild" v-if="ac==1">
          <el-input placeholder="请输入新密码" v-model="getform.paw"></el-input>
          <el-input placeholder="确认密码" v-model="getform.newpaw"></el-input>
        </div>

        <div class="forgetchild ioc" v-if="ac==2">
          <i class="el-icon-circle-check"></i>
          <p>修改成功</p>
        </div>
        <el-button class="low" @click="lowger">{{ac==2? '立即登录': '下一步'}}</el-button>
      </div>
      <p class="cen" :v-if="!ac==2">
        快速返回，
        <a @click="lo" class="gr">登录</a>
      </p>
    </el-dialog>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      ac: 0,
      dialogFormVisible: false,
      form: {
        name: "",
        paw: ""
      },
      getform: {
        paw: "",
        newpaw: "",
        email: "",
        yan: ""
      },
      time: 0,
      loginState: true,
      forget: false,
      timeState: true,
      msg: ""
    };
  },
  watch: {},
  computed: {
    ...mapState(["loginVisible"])
  },
  methods: {
    ...mapMutations(["setLogin", "setRes", "setUser", "setToken", "setUserId"]),
    lo() {
      this.forget = false;
      this.setLogin(true);
    },
    login() {
      if (this.form.name == "") {
        this.$notify.error({
          title: "错误",
          message: "账号为空"
        });
      } else if (this.form.paw == "") {
        this.$notify.error({
          title: "错误",
          message: "密码为空"
        });
      } else {
        if (this.loginState) {
          this.loginState = false;
          try {
            this.$api
              .postLogin({ userEmail: this.form.name, password: this.form.paw })
              .then(res => {
                if (res.code != 0) {
                  this.$notify.error({
                    title: "错误",
                    message: res.msg
                  });
                } else {
                  this.$notify({
                    title: "成功",
                    message: "登录成功",
                    type: "success"
                  });
                  this.setToken(res.token);
                  this.setUserId(res.id);
                  console.log(res);
                  this.setUser();
                  this.setLogin(false);
                }
                this.loginState = true;
              });
          } catch (error) {
            console.log(error);
            this.$message("这是一条消息提示");
          }
        }
      }
    },
    send() {
      const reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
      if (reg.test(this.getform.email)) {
        if (this.timeState) {
          this.$api.postEmail({ email: this.getform.email }).then(res => {
            this.timeState = false;
            var a = 60;
            var start = setInterval(() => {
              this.time = --a;
              if (a == 0) {
                this.timeState = true;
                clearInterval(start);
              }
            }, 1000);
          });
        }
      } else {
        this.$notify.error({
          title: "错误",
          message: "邮箱格式错误"
        });
      }
    },
    res() {
      this.setLogin(false);
      this.setRes(true);
    },
    Close() {
      this.form.name = "";
      this.form.paw = "";
      this.setLogin(false);
    },
    forClose() {
      this.ac = 0;
      this.forget = false;
    },
    forgetye() {
      this.setLogin(false);
      this.forget = true;
    },
    lowger() {
      console.log(this.ac);
      if (this.ac == 0) {
        if (!this.getform.email) {
          this.$notify.error({
            title: "错误",
            message: "邮箱为空"
          });
        } else if (!this.getform.yan) {
          this.$notify.error({
            title: "错误",
            message: "验证码为空"
          });
        } else {
          this.$api
            .postYan({ email: this.getform.email, code: this.getform.yan })
            .then(res => {
              console.log(res);
              if (res.code == 0) {
                this.ac++;
              } else {
                this.$notify.error({
                  title: "错误",
                  message: res.msg
                });
              }
            });
        }
      } else if (this.ac == 1) {
        if (!this.getform.paw) {
          this.$notify.error({
            title: "错误",
            message: "密码为空"
          });
        } else if (!this.getform.newpaw) {
          this.$notify.error({
            title: "错误",
            message: "确认密码为空"
          });
        } else {
          if (this.getform.paw == this.getform.newpaw) {
            console.log(this.getform.email);
            this.$api
              .postForget({
                email: this.getform.email,
                password: this.getform.paw,
                pwd: this.getform.newpaw
              })
              .then(res => {
                console.log(res);
                if (res.code == 0) {
									this.ac++;
									this.getform.email = ''
									this.getform.paw = ''
									this.getform.newpaw = ''
									this.getform.yan = ''
                } else {
                  this.$notify.error({
                    title: "错误",/*  */
                    message: res.msg
                  });
                }
              });
          } else {
            this.$notify.error({
              title: "错误",
              message: "两次密码不一致"
            });
          }
        }
      } else if (this.ac == 2) {
        this.setLogin(true);
        this.forget = false;
      }
    }
  }
};
</script>
<style scoped>
.lo {
  font-size: 16px;
  color: #0aa477;
}
.lo:hover {
  color: #0aa499;
}
.dialog-footer {
  white-space: nowrap;
}
.login {
  color: #767676;
  font-size: 14px;
}
.res {
  margin-top: 10px;
  justify-content: space-between;
}
.gr {
  color: #0aa487;
}
.login > .el-button {
  padding: 0;
}
.el-input {
  margin-bottom: 10px;
}
.el-button--primary {
  width: 100%;
  background-color: #0aa487;
  border-color: #0aa487;
}
.el-button--primary:hover {
  background-color: #0aa487;
  border-color: #0aa487;
}
.el-input/deep/:focus {
  border: 1px solid #0aa487;
  border-radius: 4px;
}
.cen {
  text-align: center;
  padding-bottom: 20px;
}
.forgetbox {
  padding: 20px 100px;
}
.song {
  position: relative;
  margin-bottom: 10px;
}
.song span {
  position: absolute;
  right: 10px;
  top: 12px;
}
.yan {
  color: #0aa477;
  cursor: pointer;
}
.low,
.low:hover,
.low:focus {
  background: #0aa477;
  width: 100%;
  color: #fff;
}
.forgetchild {
  height: 130px;
}
.bo {
  margin-bottom: 20px;
}
.ioc {
  text-align: center;
}
.ioc i {
  font-size: 42px;
  color: #0aa477;
  margin: 10px 0;
}
.ioc p {
  font-size: 18px;
}
</style>
