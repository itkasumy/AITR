<template>
	<div class="person">
		<m-header></m-header>
		<form action="">
			<m-input class="memberAccount" :inputCfg="inputCfgAccount"></m-input>
			<m-input class="memberAccount" :inputCfg="inputCfgName"></m-input>
			<m-input class="memberAccount" :inputCfg="inputCfgLeaval"></m-input>
			<div class="lastIpt">
				<m-input class="memberAccount" :inputCfg="inputCfgMail"></m-input>
			</div>
			<div class="submit">
				<input type="submit" value="确定">
			</div>
		</form>
	</div>
</template>

<script>
import MHeader from 'components/MHeader/MHeader'
import MInput from 'components/MInput/MInput'

export default {
	data () {
		return {
			inputCfgAccount: {
				title: '会员账号:',
				name: 'account',
				value: '34',
				disable: true,
				bgc: '#F1F1F1'
			},
			inputCfgName: {
				title: '会员名称:',
				placeholder: ''
			},
			inputCfgLeaval: {
				title: '当前级别:',
				value: '二星会员',
				disable: true,
				bgc: '#F1F1F1'
			},
			inputCfgMail: {
				title: '邮箱:',
				name: 'mail',
				placeholder: '输入您的邮箱地址'
			}
		}
	},
	components: {
		MHeader,
		MInput
	}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
	.person
		height 100%
		background #f2f2f2
		.lastIpt
			margin-bottom 17px
		.submit
			width 327px
			height 42px
			margin 32px auto 0 auto
			input
				width 327px
				height 42px
				box-sizing border-box
				margin 0 auto
				background #ffca00
				border-radius 5px
				color #fff
</style>
