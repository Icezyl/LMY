<template>
  <div class="res">
    <el-button class="r" type="text" @click="res">注册</el-button>
    <el-dialog
      title="注册"
      :visible="resVisible"
      top="8%"
      width="300px"
      :close-on-click-modal="false"
      @close="Close"
    >
      <el-form :model="form">
        <el-input v-model="form.name" id="el-input" placeholder="请输入用户名" autocomplete="off"></el-input>
        <el-input v-model="form.paw" placeholder="请输入密码" autocomplete="off" show-password></el-input>
        <el-input v-model="form.email" placeholder="请输入邮箱" autocomplete="off"></el-input>
        <div class="el-input song">
          <input type="text" class="el-input__inner" v-model="form.yan" />
          <span
            @click="send"
            :class="timeState==true ? 'yan':'he'"
          >{{this.time==0 ? '':'('+this.time+'s)'}}发送验证码</span>
        </div>
      </el-form>
      <el-button type="primary" @click="resling" :loading="!resState">确 定</el-button>
      <p class="login">
        <a class="gr" @click="login">已有账号登录</a>
      </p>
      <div slot="footer" class="dialog-footer">
        <p>
          注册登录即表示同意
          <a class="gr">用户协议</a>、
          <a class="gr">隐私政策</a>
        </p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        email: "",
        paw: "",
        yan: ""
      },
      time: 0,
      timeState: true,
      resState: true
    };
  },
  computed: {
    ...mapState(["resVisible"])
  },
  methods: {
    ...mapMutations(["setRes", "setLogin"]),
    send() {
      this.$api
        .postVerificationcode({
          userName: this.form.name,
          Password: this.form.paw,
          email: this.form.email
        })
        .then(res => {
          if (res.code != 0) {
            this.$notify.error({
              title: "错误",
              message: res.msg
						});
          } else {
            if (this.timeState) {
              const reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
              if (reg.test(this.form.email)) {
                this.timeState = false;
                var a = 60;
                var start = setInterval(() => {
                  this.time = --a;
                  if (a == 0) {
                    this.timeState = true;
                    clearInterval(start);
                  }
                }, 1000);
              } else {
                this.$notify.error({
                  title: "错误",
                  message: "请输入正确的邮箱"
                });
              }
            }
          }
          console.log(res);
        });
    },
    res() {
      this.setRes(true);
    },
    login() {
      this.setRes(false);
      this.setLogin(true);
    },
    resling() {
			const reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
			const mm = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,12}$/;
      if (this.form.name == "") {
        this.$notify.error({
          title: "错误",
          message: "用户名为空"
        });
      } else if (this.form.paw == "") {
        this.$notify.error({
          title: "错误",
          message: "密码为空"
        });
      } else if (this.form.email == "") {
        this.$notify.error({
          title: "错误",
          message: "邮箱为空"
        });
      }  else if (!mm.test(this.form.paw)) {
				this.$notify.error({
          title: "错误",
          message: "密码格式6-12位,字母,数字或特殊字符"
        });
      } else if(!reg.test(this.form.email)){
				this.$notify.error({
          title: "错误",
          message: "邮箱格式不正确"
        });
			} else if (this.form.yan == "") {
        this.$notify.error({
          title: "错误",
          message: "验证码为空"
        });
      }else{
        if (this.resState) {
          this.resState = false;
          try {
            this.$api
              .postRegister({
                userName: this.form.name,
                Password: this.form.paw,
                email: this.form.email,
                code: this.form.yan
              })
              .then(res => {
                if (res.code != 0|| res.status == 500) {
                  this.$notify.error({
                    title: "错误",
                    message: res.msg
									});
									this.resState = true;
                } else {
                  this.$notify({
                    title: "成功",
                    message: "注册成功请登录",
                    type: "success"
                  });
                  this.resState = true;
                  this.setRes(false);
                }
                console.log(res);
                console.log(res.status == 500);
              });
          } catch (error) {
            console.log(error);
          }
        }
      }
    },
    Close() {
			this.form.name=""
			this.form.email =""
			this.form.email=""
			this.form.paw=""
			this.form.yan=""
      this.setRes(false);
    }
  }
};
</script>
<style scoped>
.yan {
  color: #0aa477;
  cursor: pointer;
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
.r {
  font-size: 16px;
  color: #0aa477;
}
.r:hover {
  color: #0aa499;
}
.login {
  text-align: center;
  margin-top: 10px;
}
.res {
  color: #767676;
  font-size: 14px;
}
.gr {
  color: #0aa487;
}
.dialog-footer {
  text-align: center;
  white-space: nowrap;
}
.res > .el-button {
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
.el-input/deep/:focus {
  border: 1px solid #0aa487;
  border-radius: 4px;
}
.el-button--primary:hover {
  background-color: #0aa487;
  border-color: #0aa487;
}
</style>
