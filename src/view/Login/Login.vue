<template>
	<div class="login">
		<header class="m-header">
			<h1 class="logo"></h1>
			<div class="lanChoose">简体中文<span class="arrow"></span></div>
		</header>
		<div class="login-content">
			<div class="login-logo"></div>
			<form action="#" class="login-form" @submit.prevent="toLogin">
				<div class="userName">
					<input type="text" name="username" v-model="userName" placeholder="请输入用户名">
				</div>
				<div class="userPwd">
					<input v-if="!showPwd" type="password" v-model="userPwd" name="userpwd" placeholder="请输入密码">
					<input v-if="showPwd" type="text" v-model="userPwd" name="userpwd" placeholder="请输入密码">
				</div>
				<div class="loginBtn">
					<input type="submit" value="登录">
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import {Login} from 'util/http'

export default {
	data () {
		return {
			showPwd: false,
			userName: 'A00000000',
			userPwd: '11111111'
		}
	},
	methods: {
		toLogin () {
			let params = new URLSearchParams()
			params.append('account', this.userName)
			params.append('pwd', this.userPwd)

			Login(params).then(res => {
				if (res.data.code === 0) {
					localStorage.setItem('__token__', JSON.stringify(res.data.result))
					this.$router.push('/')
				}
			})
		}
	}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
	@import './Login'
</style>
