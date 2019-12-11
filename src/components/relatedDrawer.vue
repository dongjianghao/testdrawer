<template>
	<el-drawer :custom-class="'related-drawer'" title="标题" size="45%" :visible="$store.state.app.related.visible" @open="open" @close="close">
		<div class="related-wrapper">
			<p>22</p>
			<p>11</p>
			<p>11</p>
			<p>11</p>
			<p>11</p>
			<p>11</p>
		</div>
	</el-drawer>
</template>
<script>
	export default {
		methods: {
			open() {
				this.$store.commit('app/SET_RELATED_SHOW', true);
			},
			close() {
				this.$store.commit('app/SET_RELATED_SHOW', false);
			}
		}
	};
</script>
<style lang="scss">
	.related-drawer {
		.el-drawer__body {
			max-height: 100%;
			overflow-y: scroll;
		}
	}
</style>