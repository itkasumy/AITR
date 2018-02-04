<template>
	<div class="person">
		<HeadMenu></HeadMenu>
		<form action="" @submit.prevent="getVerifySafePwd">
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

		<div class="mask" v-show="maskShow">
			<div class="alert-content">
				<div class="title">输入当前安全码</div>
				<input class="confirmpwd" ref="confirmPwd" type="password" placeholder="输入您的当前安全码">
				<div class="decision">
					<div class="cancel" @click="cancel">取消</div>
					<div class="decide" @click="changeUserInfo">确定</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {getAccountInfo, updateNickname, updateEmail, verifySafePwd} from 'util/http'

import HeadMenu from 'components/HeadMenu/HeadMenu'

export default {
	data () {
		return {
			userInfo: {},
			maskShow: false
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
			let confirmPwd = this.$refs.confirmPwd.value
			let paramsForGetVerifySafePwd = new URLSearchParams()
			let paramsForUpdateNickname = new URLSearchParams()
			let paramsForUpdateEmail = new URLSearchParams()
			let safePwdToken = ''
			paramsForGetVerifySafePwd.append('safe_pwd', confirmPwd)

			verifySafePwd(paramsForGetVerifySafePwd).then(res => {
				safePwdToken = res.data.result.safePwdToken
				paramsForUpdateNickname.append('safe_pwd_token', safePwdToken)
				paramsForUpdateNickname.append('nickname', nickName)
				paramsForUpdateEmail.append('safe_pwd_token', safePwdToken)
				paramsForUpdateEmail.append('email', email)
				updateNickname(paramsForUpdateNickname).then(res => {
					this.$refs.confirmPwd.value = ''
					this.maskShow = false
				})
				updateEmail(paramsForUpdateEmail).then(res => {
					this.$refs.confirmPwd.value = ''
					this.maskShow = false
				})
			})
		},
		cancel () {
			this.maskShow = false
			this.$refs.confirmPwd.value = ''
		},
		getVerifySafePwd () {
			this.maskShow = true
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
		.mask
			position fixed
			z-index 1
			left 0
			top 0
			right 0
			bottom 0
			background rgba(0, 0, 0, .5)
			.alert-content
				position relative
				width 7.28rem
				height 4.426667rem
				background #FFF
				left 50%
				// top 50%
				top 6.493333rem
				margin-left -3.64rem
				// margin-top -1.546667rem
				border-radius .133333rem
				.title
					height .56rem
					line-height .56rem
					margin 0 auto .64rem auto
					padding-top .906667rem
					text-align center
					font-size .426667rem
					color #333
				.confirmpwd
					display block
					width 6.293333rem
					height .8rem
					padding-left .213333rem
					margin 0 auto
					box-sizing border-box
					border 1px solid #CCC
					font-size .32rem
				.decision
					display flex
					height 1.12rem
					box-sizing border-box
					margin-top .373333rem
					border-top 1px solid #CCC
					font-size .373333rem
					.cancel, .decide
						width 50%
						height 1.106667rem
						text-align center
						line-height 1.106667rem
						color #666
						box-sizing border-box
					.decide
						color #FFAE11
						border-left 1px solid #CCC
</style>
