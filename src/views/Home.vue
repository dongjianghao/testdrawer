<template>
	<div class="home">
		<div>
			<el-button type="primary" href="javascript:;" @click="drawer = true">点击打开普通的Drawer</el-button>
		</div>
		<template v-for="item in listData">
			<div :key="item">
				<p>{{item}}</p>
				<relatedButton></relatedButton>
			</div>
		</template>

		<el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
			<span>我来啦!</span>
		</el-drawer>
	</div>
</template>
<script>
	import relatedButton from '@/components/relatedButton';
	export default {
		data() {
			return {
				drawer: false,
				listData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
			};
		},
		components: {
			relatedButton
		},
		methods: {
			showDrawer() {
				this.$store.commit('app/SET_RELATED_SHOW', true);
			},
			openDrawer() {}
		}
	};
</script>