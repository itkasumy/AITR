<template>
	<div class="registermu">
		<HeadMenu></HeadMenu>
		<form action="" @submit.prevent="registerMuAcc">
			<div class="form-content">
				<div class="m-input">
					<div class="title">会员账号:</div>
					<input type="text" @blur="checkAccount(account)" v-model="account" ref="account" name="account" placeholder="输入会员账号" />
				</div>

				<div class="m-input">
					<div class="title">会员姓名:</div>
					<input type="text" @blur="checkNickname(nickname)" v-model="nickname" ref="nickname" placeholder="输入4~16个字符..." />
				</div>

				<div class="m-input">
					<div class="title">登录密码:</div>
					<input type="password" @blur="checkPwd(pwd)" v-model="pwd" ref="pwd" placeholder="输入6位数字......" />
				</div>

				<div class="m-input">
					<div class="title">确认登录密码:</div>
					<input type="password" @blur="checkCfmPwd(cfmPwd)" v-model="cfmPwd" ref="cfmPwd" placeholder="与登录密码相同......" />
				</div>

				<div class="m-input">
					<div class="title">登录安全码:</div>
					<input type="password" @blur="checkSafepwd(safepwd)" v-model="safepwd" ref="safepwd" placeholder="输入6位数字......" />
				</div>

				<div class="m-input">
					<div class="title">确认登录安全码:</div>
					<input type="password" @blur="checkCfmSafepwd(cfmSafepwd)" v-model="cfmSafepwd" ref="cfmSafepwd" placeholder="与登录安全码相同......" />
				</div>

				<div class="m-input">
					<div class="title">会员级别:</div>
					<input type="text" value="普通会员" disabled />
				</div>

				<div class="m-input">
					<div class="title">接点人: <span class="entry">进入<router-link class="jiediantu" to="/organizationchart/placementchart">节点图</router-link></span></div>
					<input type="text" ref="supAccount" v-model="supaccount" disabled />
				</div>

				<div class="m-input">
					<div class="title">市场位置:</div>
					<input type="text" ref="position" v-model="direction" disabled />
				</div>

				<div class="m-input">
					<div class="title">邮箱:</div>
					<input type="mail" @blur="checkEmail(email)" v-model="email" ref="email" name="mail" placeholder="输入您的邮箱地址" />
				</div>

				<div class="m-input">
					<div class="title">USDT余额:</div>
					<input type="text" v-model="balance" disabled />
				</div>
			</div>

			<div class="submit">
				<input type="submit" value="确定">
			</div>
		</form>
		<prompt :tip="tip" v-show="showTip"></prompt>
	</div>
</template>

<script>
import {registerMu, getBalance} from 'util/http'

import HeadMenu from 'components/HeadMenu/HeadMenu'
import Prompt from 'components/Prompt/Prompt'

export default {
	name: 'RegisterMu',
	data () {
		return {
			tip: '',
			showTip: false,
			account: '',
			nickname: '',
			pwd: '',
			cfmPwd: '',
			safepwd: '',
			cfmSafepwd: '',
			email: '',
			direction: '右区',
			supaccount: 'A000000002',
			balance: 0
		}
	},
	components: {
		HeadMenu,
		Prompt
	},
	mounted () {
		if (this.$route.query) {
			this.direction = this.$route.query.direction === 'l' ? '左区' : '右区'
			this.supaccount = this.$route.query.parentId
		}
		getBalance().then(res => {
			console.log(res.data)
			if (res.data.code === 0) {
				this.balance = res.data.result.registerCoin
			}
		})
	},
	methods: {
		checkAccount (account) {
			if (!/^\w{5,18}$/.test(account)) {
				this.tipShow('会员账号不合法')
			}
		},
		checkNickname (nickname) {
			if (!/^[a-zA-Z\u4E00-\u9F45\uac00-\ud7ff\u0800-\u4e00]{2,16}$/.test(nickname)) {
				this.tipShow('会员姓名不合法')
			}
		},
		checkPwd (pwd) {
			if (!/^[a-zA-Z0-9]{8,16}$/.test(pwd)) {
				this.tipShow('密码不合法')
			}
		},
		checkCfmPwd (cfmPwd) {
			let password = this.$refs.pwd.value
			if (password !== cfmPwd) {
				this.tipShow('两次输入的密码不同')
			}
		},
		checkSafepwd (safepwd) {
			if (!/^[a-zA-Z0-9]{8,16}$/.test(safepwd)) {
				this.tipShow('安全码不合法')
			}
		},
		checkCfmSafepwd (cfmSafepwd) {
			let safeword = this.$refs.cfmSafepwd.value
			if (safeword !== cfmSafepwd) {
				this.tipShow('两次输入的安全码不同')
			}
		},
		checkEmail (email) {
			if (!/^\w+([-+.]\w+)@\w+([-.]\w+).\w+([-.]\w+)*$/.test(email)) {
				this.tipShow('邮箱不合法')
			}
		},
		registerMuAcc () {
			let params = new URLSearchParams()
			params.append('account', this.$refs.account.value)
			params.append('nickname', this.$refs.nickname.value)
			params.append('pwd', this.$refs.pwd.value)
			params.append('safe_pwd', this.$refs.safepwd.value)
			params.append('email', this.$refs.email.value)
			params.append('sup_account', this.$refs.supAccount.value)
			params.append('position', this.$refs.position.value === '左区' ? 0 : 1)
			registerMu(params).then(res => {
				if (res.data.code === 40001) {
					this.tipShow(res.data.msg)
				} else if (res.data.code === 40002) {
					this.tipShow(res.data.msg)
				} else if (res.data.code === 40003) {
					this.tipShow(res.data.msg)
				} else if (res.data.code === 40004) {
					this.tipShow(res.data.msg)
				} else if (res.data.code === 40005) {
					this.tipShow(res.data.msg)
				} else if (res.data.code === 40006) {
					this.tipShow(res.data.msg)
				} else if (res.data.code === 40007) {
					this.tipShow(res.data.msg)
				} else if (res.data.code === 40028) {
					this.tipShow(res.data.msg)
				} else if (res.data.code === 0) {
					this.tipShow(res.data.msg)
					this.$router.push({path: '/index'})
				} else if (res.data.code === 10005) {
					this.tipShow(res.data.msg)
					this.$router.push({path: '/login'})
				}
			})
		},
		tipShow (msg) {
			this.showTip = true
			this.tip = msg
			setTimeout(() => {
				this.showTip = false
			}, 1500)
		}
	}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
	.registermu
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
