<template>
	<div class="person">
		<HeadMenu></HeadMenu>
		<form action="">
			<div class="form-content">
				<div class="m-input">
					<div class="title">会员账号:</div>
					<input type="text" name="account" value="A00000000" disabled />
				</div>

				<div class="m-input">
					<div class="title">会员名称:</div>
					<input type="text" value="34" />
				</div>

				<div class="m-input">
					<div class="title">当前级别:</div>
					<input type="text" value="二星会员" disabled />
				</div>

				<div class="m-input">
					<div class="title">邮箱:</div>
					<input type="text" name="mail" placeholder="输入您的邮箱地址" />
				</div>
			</div>

			<div class="submit">
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
	.person
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
					&::-webkit-input-placeholder
						color #ababab
		.lastIpt
			margin-bottom 17px
		.submit
			width 8.72rem
			height 1.12rem
			margin .853333rem auto 0
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
