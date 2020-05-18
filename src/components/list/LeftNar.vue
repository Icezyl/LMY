<template>
  <div class="leftnar">
		<h3 class="tit bortom">
			<router-link  to="/list" >人气榜单</router-link>
		</h3>
    <h3 class="tit">作者榜单</h3>
    <ul class="interval">
      <li>
        <router-link to="/detailed/1">月票榜</router-link>
      </li>
      <li>
        <router-link to="/detailed/2">完本榜</router-link>
      </li>
      <li>
        <router-link to="/detailed/3">新书榜</router-link>
      </li>
      <li>
        <router-link to="/detailed/4">新书订阅榜</router-link>
      </li>
      <li>
        <router-link to="/detailed/5">点击榜</router-link>
      </li>
      <li>
        <router-link to="/detailed/6">推荐榜</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.leftnar {
	flex-shrink:0;
	width: 150px;
	padding: 20px;
	background: #fff;
	border: 1px solid #e6e6e6;
	font-size: 14px;
	line-height: 30px;
	height: 100%;
}
.tit {
	font-weight: 700;
	font-size: 14px;
}
.leftnar .interval {
	padding-left: 15px;
}
.bortom {
	border-bottom: 1px solid #e6e6e6;
}
</style>
