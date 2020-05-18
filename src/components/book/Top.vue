<template>
  <div class="sus top">
    <div class="box" @click="bookMu(id)">
      <div class="ico">
        <i class="el-icon-tickets"></i>
        <p>目录</p>
      </div>
    </div>
    <div class="box" :class="{white: !setHidden}">
      <div class="ico" @click="setHidden=!setHidden">
        <i class="el-icon-setting"></i>
        <p>设置</p>
      </div>
    </div>
    <div class="box">
      <div class="ico" @click="bo">
        <i class="el-icon-collection"></i>
        <p>书架</p>
      </div>
    </div>
    <div class="set" :class="{hidden: setHidden}">
      <p class="txt">快来设置你喜欢的阅读方式吧~</p>
      <i class="el-icon-close close" @click="setHidden=true"></i>
      <div class="theme flex">
        <p>阅读主题：</p>
        <a class="brown" @click="setTheme('brown')" :class="{active:theme=='brown'}">
          <i class="el-icon-check"></i>
        </a>
        <a class="green" @click="setTheme('green')" :class="{active:theme=='green'}">
          <i class="el-icon-check"></i>
        </a>
        <a class="pink" @click="setTheme('pink')" :class="{active:theme=='pink'}">
          <i class="el-icon-check"></i>
        </a>
        <a class="blue" @click="setTheme('blue')" :class="{active:theme=='blue'}">
          <i class="el-icon-check"></i>
        </a>
        <a class="gray" @click="setTheme('gray')" :class="{active:theme=='gray'}">
          <i class="el-icon-check"></i>
        </a>
        <a class="black" @click="setTheme('black')" :class="{active:theme=='black'}">
          <i class="el-icon-check"></i>
        </a>
      </div>
      <div class="size flex">
        <p>字体大小：</p>
        <div class="size_but button flex">
          <a @click="sizeReduce(2)">A-</a>
          <hr />
          <span :class="{he:size_hesai}">{{si}}</span>
          <hr />
          <a @click="sizeAdd(2)">A+</a>
        </div>
      </div>
      <div class="width flex">
        <p>页面宽度：</p>
        <div class="size_but button flex">
          <a @click="widthReduce(200)">
            <i class="el-icon-document"></i>-
          </a>
          <hr />
          <span :class="{he:wid_hesai}">{{w}}</span>
          <hr />
          <a @click="widthAdd(200)">
            <i class="el-icon-document"></i>+
          </a>
        </div>
      </div>
      <div class="on_set">
        <a class="set_but save" @click="bao">保存设置</a>
        <a class="set_but reset" @click="init">恢复默认</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      si: 18,
      w: 800,
      setHidden: true,
      wid_hesai: false,
      size_hesai: false
    };
  },
  computed: {
    ...mapState(["theme", "size", "width"])
  },
  mounted() {
    this.si = Number(this.size.slice(2));
    this.w = Number(this.width.slice(1));
  },
  methods: {
    ...mapMutations(["setTheme", "setWidth", "setSize"]),
    widthAdd: function(val) {
      if (this.w < 1200) {
        this.w += val;
        this.setWidth("w" + this.w);
        this.wid_hesai = false;
      }
      if (this.w == 1200) {
        this.wid_hesai = true;
      }
    },
    widthReduce: function(val) {
      if (this.w > 600) {
        this.w -= val;
        this.setWidth("w" + this.w);
        this.wid_hesai = false;
      }
      if (this.w == 600) this.wid_hesai = true;
    },
    sizeAdd(val) {
      if (this.si < 28) {
				console.log(typeof val,typeof this.si)
        this.si += val;
        this.setSize("sz" + this.si);
        this.size_hesai = false;
      }
      if (this.si == 28) this.size_hesai = true;
    },
    sizeReduce(val) {
      if (this.si > 16) {
        this.si -= val;
        this.setSize("sz" + this.si);
        this.size_hesai = false;
      }
      if (this.si == 16) this.size_hesai = true;
    },
    bookMu: function(id) {
      this.$router.push({ name: "catalogue", params: { id: this.id } });
    },
    bao() {
      this.setHidden = !this.setHidden;
    },
    init() {
      this.setSize("sz18");
      this.size = 18;
      this.size_hesai = false;
      this.setWidth("w800");
      this.width = 800;
      this.wid_hesai = false;
      this.setHidden = !this.setHidden;
      this.setTheme("brown");
		},
		bo() {
			this.$router.push('/user')
			this.$router.push('/bookshelf')
		}
  },
  props: ["id"]
};
</script>
<style scoped>
.white {
  background: #fff;
  border-radius: 6px 0 0 6px;
  border: 1px solid #fff;
}
.sus .set {
  position: absolute;
  background: #fff;
  top: 10px;
  left: 60px;
  width: 420px;
  border-radius: 6px;
  padding: 30px 20px 30px 50px;
}
.set .txt {
  margin-bottom: 20px;
}
.set .theme {
  margin-bottom: 20px;
  height: 38px;
  line-height: 38px;
}
.theme a {
  height: 36px;
  width: 36px;
  border: 1px solid #999;
  display: inline-block;
  border-radius: 50%;
  margin: 0 10px;
}
.close {
  font-size: 24px;
  position: absolute;
  top: 27px;
  right: 20px;
}
.size {
  height: 38px;
  margin-bottom: 20px;
  line-height: 38px;
}
.button {
  width: 238px;
  height: 38px;
  text-align: center;
  border: 1px solid #999;
  border-radius: 6px;
  line-height: 38px;
  font-size: 18px;
}
.button span {
  width: 80px;
  display: inline-block;
}
.button a {
  display: inline-block;
  width: 80px;
}
.width {
  height: 38px;
  line-height: 38px;
  margin-bottom: 30px;
}
.on_set {
  text-align: center;
}
.set_but {
  width: 150px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  border-radius: 6px;
}
.save {
  background: #0aa487;
  border: 1px solid #0aa487;
  color: #fff;
  margin-right: 35px;
}
.reset {
  background: #fff;
  border: 1px solid #999;
}
.el-icon-check {
  display: none;
  font-size: 22px;
  line-height: 36px;
  text-align: center;
  color: #0aa487;
}
.theme .active {
  border: 1.5px solid #0aa487;
}
.active .el-icon-check {
  display: block;
  font-weight: 600;
}
</style>
