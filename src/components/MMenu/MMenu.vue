<template>
	<div class="m-menu">
		<ul>
			<li v-for="(item, index) in menu" class="active" :key="index">
				<router-link class="menu-item" to="">{{item.name}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			menu: [
				{
					name: '首页'
				},
				{
					name: '现货交易'
				},
				{
					name: '杠杆交易'
				},
				{
					name: '个人中心'
				},
				{
					name: 'VIP专区'
				}
			]
		}
	}
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
	.m-menu
		position fixed
		width 100%
		height 55px
		line-height 55px
		top 48px
		left 0
		background #333
		box-shadow 0 3px 5px 0
		ul
			li
				float left
				position relative
				margin 0 17px 0 0
				font-size 14px
				&:first-child
					margin-left 30px
				&.active
					&::after
						position absolute
						content ''
						width 38px
						height 2px
						left 50%
						bottom 0
						margin-left -19px
						background #ffca00
				.menu-item
					color #fff
</style>
