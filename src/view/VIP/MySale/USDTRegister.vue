<template>
	<div class="registermu">
		<HeadMenu></HeadMenu>
		<form action="">
			<div class="form-content">
				<div class="m-input">
					<div class="title">USDT余额:</div>
					<input type="text" value="3000" disabled />
				</div>

				<div class="m-input">
					<div class="title">选择配套:</div>
					<input type="text" value="一星会员（100USDT）" disabled />
				</div>

				<div class="m-input">
					<div class="title">会员账号:</div>
					<input type="text" placeholder="仅输入5~18个英文或数字......" />
				</div>

				<div class="m-input">
					<div class="title">接点人: <span class="entry">进入<router-link class="jiediantu" to="/">节点图</router-link></span></div>
					<input type="text" value="09867" disabled />
				</div>

				<div class="m-input">
					<div class="title">市场位置:</div>
					<input type="text" value="左区" disabled />
				</div>
			</div>

			<div class="submit">
				<span class="tip">提示:每次注册需要消耗10个USDT</span>
				<input type="submit" value="确定">
			</div>
		</form>
	</div>
</template>

<script>
import HeadMenu from 'components/HeadMenu/HeadMenu'

export default {
	data () {
		return {}
	},
	components: {
		HeadMenu
	}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
	.registermu
		height 100%
		background #f2f2f2
		.form-content
			overflow hidden
			background #FFF
			.m-input
				display block
				width 9.28rem
				height 1.946667rem
				margin-left .373333rem
				margin-bottom .48rem
				&:first-child
					margin-top .106667rem
				.title
					height .56rem
					line-height .56rem
					padding .133333rem
					font-family 'PingFangSC-Regular'
					color #333
					font-size .4rem
					.entry
						float right
						.jiediantu
							color #FFCA00
							text-decoration underline
				input
					display block
					box-sizing border-box
					width 9.28rem
					height 1.013333rem
					padding-left .213333rem
					line-height 1.013333rem
					border-radius .133333rem
					border 1px solid #ababab
					color #333
					font-size .373333rem
					&[disabled]
						background #F1F1F1
						color #666
					&::-webkit-input-placeholder
						color #ababab
		.lastIpt
			margin-bottom 17px
		.submit
			width 8.72rem
			height 1.12rem
			margin .853333rem auto 0
			text-align center
			.tip
				color #FFCA00
				font-size .32rem
			input
				width 8.72rem
				height 1.12rem
				box-sizing border-box
				margin 0 auto
				background #ffca00
				border-radius .133333rem
				color #fff
				border none
				font-size .426667rem
</style>
