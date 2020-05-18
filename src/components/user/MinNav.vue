<template>
  <div class="flex modify">
    <div @click="ons=index" v-for="(item,index) in list" :key="item.id">
      <router-link :to="item.to" :class="{active: ons==index}">{{item.txt}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
	props: ['list','ons']
}
</script>
<style scoped>
.active {
	color: #0aa487;
}
.modify {
  border-bottom: 1px solid #e6e6e6;
}
.modify hr {
  height: 18px;
  margin: auto 0;
  border: 1px solid #e6e6e6;
}
.modify div {
	padding: 20px 30px;
}
.modify a {
  text-align: center;
}
</style>
