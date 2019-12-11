<template>
	<div>
		<el-button @click="handleClick">点击打开Drawer(vuex)</el-button>
	</div>
</template>
<script>
	export default {
		methods: {
			handleClick() {
				this.$store.commit('app/SET_RELATED_SHOW', true);
			}
		}
	};
</script>