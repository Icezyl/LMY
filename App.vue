<template>
  <div id="app">
    <Navigation :class="{hidden: headAndFoot}"></Navigation>
    <router-view/>
		<Footer :class="{hidden: headAndFoot}"></Footer>
		<Up></Up>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import Up from '@/components/home/Up.vue'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      hidden: false
    }
	},
	methods: {
		...mapMutations(['setHeadAndFoot', 'setUser', 'setUserId', 'setTheme'])
	},
	watch: {
		$route(to,from) {
			if((to.name) == 'book' || (to.name) == 'user') {
				this.setHeadAndFoot(true)
			}else {
				this.setHeadAndFoot(false)
			}
		}
	},
	computed: {
		...mapState(['headAndFoot']),
		...mapGetters(['getToken', 'getUserId', 'getTheme', 'getWidth', 'getSize'])
	},
  components: {
		Navigation,
		Footer,
		Up
	},
	mounted () {
		if(this.getToken) {
			this.setUser()
		}
		this.getUserId
		this.getTheme
		this.getWidth
		this.getSize
	}
}
</script>
<style scoped>

</style>
