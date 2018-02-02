<template>
	<div class="person">
		<HeadMenu></HeadMenu>
		<form action="" @submit.prevent="changeUserInfo">
			<div class="form-content">
				<div class="m-input">
					<div class="title">会员账号:</div>
					<input type="text" name="account" v-model="userInfo.account" disabled />
				</div>

				<div class="m-input">
					<div class="title">会员名称:</div>
					<input type="text" ref="nickName" v-model="userInfo.nickname" />
				</div>

				<div class="m-input">
					<div class="title">当前级别:</div>
					<input type="text" v-model="userInfo.level" disabled />
				</div>

				<div class="m-input">
					<div class="title">邮箱:</div>
					<input type="text" ref="email" name="mail" v-model="userInfo.email" placeholder="输入您的邮箱地址" />
				</div>
			</div>

			<div class="submit">
				<input type="submit" value="确定">
			</div>
		</form>
	</div>
</template>

<script>
import {getAccountInfo, updateNickname, updateEmail} from 'util/http'

import HeadMenu from 'components/HeadMenu/HeadMenu'

export default {
	data () {
		return {
			userInfo: {}
		}
	},
	components: {
		HeadMenu
	},
	mounted () {
		this.getUserInfo()
	},
	methods: {
		getUserInfo () {
			const level = ['一星会员', '二星会员', '三星会员', '四星会员', '五星会员', '六星会员']
			getAccountInfo().then(res => {
				if (res.data.code === 0) {
					res.data.result.level = level[res.data.result.level - 1]
					this.userInfo = res.data.result
				}
			})
		},
		changeUserInfo () {
			let nickName = this.$refs.nickName.value
			let email = this.$refs.email.value
			console.log(nickName, email)
			updateNickname()
			updateEmail()
		}
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
