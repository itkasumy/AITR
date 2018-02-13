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
					<input type="password" @blur="checkPwd(pwd)" v-model="pwd" ref="pwd" placeholder="输入8位数字或字母......" />
				</div>

				<div class="m-input">
					<div class="title">确认登录密码:</div>
					<input type="password" @blur="checkCfmPwd(cfmPwd)" v-model="cfmPwd" ref="cfmPwd" placeholder="与登录密码相同......" />
				</div>

				<div class="m-input">
					<div class="title">安全码:</div>
					<input type="password" @blur="checkSafepwd(safepwd)" v-model="safepwd" ref="safepwd" placeholder="输入8位数字或字母......" />
				</div>

				<div class="m-input">
					<div class="title">确认安全码:</div>
					<input type="password" @blur="checkCfmSafepwd(cfmSafepwd)" v-model="cfmSafepwd" ref="cfmSafepwd" placeholder="与登录安全码相同......" />
				</div>

				<div class="m-input">
					<div class="title">会员级别:</div>
					<input type="text" value="普通会员" disabled />
				</div>

				<div class="m-input" @click="saveInfo">
					<div class="title">接点人: <span class="entry">进入<router-link class="jiediantu" to="/organizationchart/placementchart">接点图</router-link></span></div>
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
					<div class="title">注册币余额:</div>
					<input type="text" v-model="balance" disabled />
				</div>
			</div>

			<div class="submit">
				<div class="tips-10">提示: 每次注册需要消耗10个注册币</div>
				<input type="submit" value="确定">
			</div>
		</form>
		<prompt :tip="tip" ref="promptAlert"></prompt>
	</div>
</template>

<script>
import {registerMu, getUSDTBalance} from 'util/http'
import {calcCharLen} from 'util/util'

import HeadMenu from 'components/HeadMenu/HeadMenu'
import Prompt from 'components/Prompt/Prompt'

export default {
	name: 'RegisterMu',
	data () {
		return {
			tip: '',
			account: '',
			nickname: '',
			pwd: '',
			cfmPwd: '',
			safepwd: '',
			cfmSafepwd: '',
			email: '',
			direction: '',
			supaccount: 'A000000002',
			balance: 0
		}
	},
	components: {
		HeadMenu,
		Prompt
	},
	created () {
		let obj = this.$store.state.registerTempInfo
		this.account = obj.account
		this.nickname = obj.nickname
		this.pwd = obj.pwd
		this.cfmPwd = obj.cfmPwd
		this.safepwd = obj.safepwd
		this.cfmSafepwd = obj.cfmSafepwd
		this.email = obj.email
	},
	mounted () {
		if (this.$route.query) {
			if (this.$route.query.direction) {
				this.direction = this.$route.query.direction === 'l' ? '左区' : '右区'
			}
			this.supaccount = this.$route.query.parentId
		}
		getUSDTBalance().then(res => {
			if (res.data.code === 0) {
				this.balance = res.data.result.registerCoin
			}
		})
	},
	methods: {
		checkAccount (account) {
			if (!/^[0-9a-zA-Z]+$/.test(account)) {
				this.tipShow('会员账号只允许输入英文或者数字')
				return false
			}
			if (account.length > 18 || account.length < 5) {
				this.tipShow('字符长度需要在5-18之间')
				return false
			}
		},
		checkNickname (nickname) {
			if (!/^[a-zA-Z\u4E00-\u9F45\uac00-\ud7ff\u0800-\u4e00]+$/.test(nickname)) {
				this.tipShow('会员姓名只允许输入汉字或者字母')
				return false
			}
			if (calcCharLen(nickname) < 4 || calcCharLen(nickname) > 16) {
				this.tipShow('字符长度需要在4-16之间')
				return false
			}
		},
		checkPwd (pwd) {
			if (!/^[0-9a-zA-Z]+$/.test(pwd)) {
				this.tipShow('登录密码只允许输入字母或者数字')
				return false
			}
			if (pwd.length < 8 || pwd.length > 16) {
				this.tipShow('只允许输入8-16位英文或数字')
				return false
			}
		},
		checkCfmPwd (cfmPwd) {
			let password = this.$refs.pwd.value
			if (password !== cfmPwd) {
				this.tipShow('两次输入的密码不同')
				return false
			}
		},
		checkSafepwd (safepwd) {
			if (!/^[0-9a-zA-Z]+$/.test(safepwd)) {
				this.tipShow('安全码只允许输入字母或者数字')
				return false
			}
			if (safepwd.length < 8 || safepwd.length > 16) {
				this.tipShow('只允许输入8-16位英文或数字')
				return false
			}
		},
		checkCfmSafepwd (cfmSafepwd) {
			let safeword = this.$refs.safepwd.value
			if (safeword !== cfmSafepwd) {
				this.tipShow('两次输入的安全码不同')
				return false
			}
		},
		checkEmail (email) {
			// if (!/^\w+([-+.]\w+)@\w+([-.]\w+).\w+([-.]\w+)*$/.test(email)) {
			if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(email)) {
				this.tipShow('邮箱不合法')
				return false
			}
		},
		registerMuAcc () {
			console.log('11')
			// 检测账户为空问题
			if (!this.account) {
				this.tipShow('会员账号不能为空')
				return false
			}
			// 检测密码为空问题
			if (!this.pwd) {
				this.tipShow('密码不能为空')
				return false
			}
			// 检测安全码为空问题
			if (!this.safepwd) {
				this.tipShow('安全码不能为空')
				return false
			}
			// 检测安全码和密码相同问题
			if (this.pwd === this.safepwd) {
				this.tipShow('登录密码和安全码不能相同')
				return false
			}
			// 2次安全码不一样问题
			if (!this.safepwd === this.cfmSafepwd) {
				this.tipShow('两次安全码输入不一致')
				return false
			}
			// 邮箱不能为空问题
			if (!this.email) {
				this.tipShow('邮箱不能为空')
				return false
			}
			let params = new URLSearchParams()
			params.append('account', this.$refs.account.value)
			params.append('nickname', this.$refs.nickname.value)
			params.append('pwd', this.$refs.pwd.value)
			params.append('safe_pwd', this.$refs.safepwd.value)
			params.append('email', this.$refs.email.value)
			params.append('sup_account', this.$refs.supAccount.value)
			params.append('position', this.$refs.position.value === '左区' ? 0 : 1)
			registerMu(params).then(res => {
				// if (res.data.code === 40001) {
				// 	this.tipShow(res.data.msg)
				// } else if (res.data.code === 40002) {
				// 	this.tipShow(res.data.msg)
				// } else if (res.data.code === 40003) {
				// 	this.tipShow(res.data.msg)
				// } else if (res.data.code === 40004) {
				// 	this.tipShow(res.data.msg)
				// } else if (res.data.code === 40005) {
				// 	this.tipShow(res.data.msg)
				// } else if (res.data.code === 40006) {
				// 	this.tipShow(res.data.msg)
				// } else if (res.data.code === 40007) {
				// 	this.tipShow(res.data.msg)
				// } else if (res.data.code === 40028) {
				// 	this.tipShow(res.data.msg)
				// } else if (res.data.code === 10005) {
				// 	this.tipShow(res.data.msg)
				// 	this.$router.push({path: '/login'})
				// } else if (res.data.code === 0) {
				// 	this.tipShow(res.data.msg)
				// 	this.$store.commit('emptyTempInfo')
				// 	this.$router.push({path: '/index'})
				// } else if (res.data.code === 40008) {
				// 	this.tipShow(res.data.msg)
				// }
				if (res.data.code === 0) {
					this.tipShow(res.data.msg)
					this.$store.commit('emptyTempInf')
					this.$router.push({path: '/index'})
				} else {
					this.tipShow(res.data.msg)
				}
			})
		},
		tipShow (msg) {
			this.tip = msg
			this.$refs.promptAlert.show()
		},
		saveInfo () {
			let obj = {
				account: this.account,
				nickname: this.nickname,
				pwd: this.pwd,
				cfmPwd: this.cfmPwd,
				safepwd: this.safepwd,
				cfmSafepwd: this.cfmSafepwd,
				email: this.email
			}
			this.$store.commit('saveRegisterTempInfo', obj)
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
			height 3.12rem
			margin .253333rem auto 0rem
			.tips-10
				text-align center
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
