<template>
	<div class="recommend-chart">
		<div class="top">
				<span>查询:按</span>
				<div class="vip-account">会员账号</div>
				<img src="../../../assets/选择@2x.png" alt="" class="choice">
				<div class="search">
					<img src="../../../assets/搜索.png" alt="" class="search-icon">
					<input type="text" v-model="accountName">
				</div>
				<div class="search-text" @click="searchAccount">搜索</div>
		</div>
		<div class="content">
				<div class="first">
					<img src="../../../assets/减号@2x.png" alt="" class="first-icon">
					<span class="dot"></span>
					<span class="dot"></span>
					<span class="dot"></span>
					<div class="kuai" :class="[refMapData.level]">
						<div>{{refMapData.account}}</div>
						<div class="account">{{refMapData.nickname}}</div>
						<img src="../../../assets/v6@2x.png" alt="">
					</div>
				</div>
				<div class="second">
					<!-- <div class="colum-dots">
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
					</div> -->
					<div class="branch" v-if="refMapData.children">
							<div class="branchlist" v-for="(v,i) in refMapData.children" :key="i">
								<div class="add" v-if="v.children">
									<img src="../../../assets/加号@2x.png" alt="">
								</div>
								<div class="line-dot">
									<span class="dot"></span>
									<span class="dot"></span>
									<span class="dot"></span>
									<span class="dot"></span>
									<span class="dot"></span>
									<span class="dot"></span>
								</div>
								<span class="dot"></span>
								<span class="dot"></span>
								<span class="dot"></span>
								<span class="dot"></span>
								<div class="kuai" :class="[v.level]">
									<div>{{v.account}}</div>
									<div class="account">{{v.nickname}}</div>
									<img src="../../../assets/v5@2x.png" alt="">
								</div>
							</div>
					</div>
				</div>
		</div>
		<prompt :tip="tip" ref="promptAlert"></prompt>
	</div>
</template>

<script>
import {getRefMap, getToken, searchRefMap} from '../../../api/GApi'
import Prompt from '@/components/Prompt/Prompt'
import axios from 'axios'
export default {
	data () {
		return {
			refMapData: null,
			accountName: '',
			tip: ''
		}
	},
	created () {
		console.log('created has 执行')
		// console.log('口令为' + accessAccount)
		// console.log('账户' + accessToken)
		axios.get(getRefMap, {
			headers: getToken()
		}).then(res => {
			console.log(res)
			if (res.data.code === 0) {
				let list = res.data.result
				list.level = 'v' + list.level
				if (list.children) {
					list.children.forEach(item => {
						item.level = 'v' + item.level
					})
				}
				this.refMapData = list
			} else {
				this.tip = '请登录'
				this.$refs.promptAlert.show()
			}
		})
	},
	components: {
		Prompt
	},
	methods: {
		searchAccount () {
			if (this.accountName) {
				axios.get(searchRefMap, {
					headers: getToken(),
					params: {
						target_account: this.accountName
					}
				}).then(res => {
					console.log(res)
					console.log(111111111111111)
					if (res.data.code === 0 && res.data.result) {
						let list = res.data.result
						list.level = 'v' + list.level
						if (list.children) {
							list.children.forEach(item => {
								item.level = 'v' + item.level
							})
						}
						this.refMapData = list
					} else {
						if (!res.data.result) {
							this.tip = '查询的账户不存在'
							this.$refs.promptAlert.show()
							return
						}
						this.tip = res.data.msg
						this.$refs.promptAlert.show()
					}
				}).catch(err => {
					console.log(err)
					this.tip = '查询错误'
					this.$refs.promptAlert.show()
				})
			} else {
				this.tip = '请输入要查询的账户名'
				this.$refs.promptAlert.show()
			}
		}
	}
}
</script>

<style scoped lang="stylus">
.recommend-chart
	margin-top :.133333rem
	background-color :white
	height :100%
	.top
		display :flex
		font-size :.266667rem
		padding:.533333rem .533333rem
		box-sizing :border-box
		color:#666
		line-height :.666667rem
		height :1.733333rem
		.choice
			width :.666667rem
			height :.666667rem
			margin-left :-.013333rem
		.vip-account
			border :.013333rem solid #ccc
			background: #F3F3F3
			width :1.466667rem
			text-align :center
			margin-left: .266667rem
			border-top-left-radius :.053333rem
			border-bottom-left-radius :.053333rem
		.search
			width :3.733333rem
			height :.666667rem
			border :.013333rem solid #ccc
			margin-left :.266667rem
			border-radius :.053333rem
			display :flex
			justify-content :flex-start
			align-items :center
			.search-icon
				width :.346667rem
				height :.346667rem
				margin-left :.133333rem
			input
				width :3.066667rem
				height :80%
				box-sizing :border-box
				padding-left :.266667rem
				border :0
		.search-text
			background: #FFCA00
			border-radius :.053333rem
			height :.666667rem
			width :1.2rem
			text-align :center
			color: white
			margin-left :.133333rem
	.first
		box-sizing :border-box
		padding :0 .266667rem
		display :flex
		align-items :center
		height :1.2rem
		position :absolute
		z-index :2
		.first-icon
			width :.613333rem
			height :.613333rem
		.dot
			width :.106667rem
			height :.106667rem
			background-color :#D8D8D8
			border-radius :50%
			margin-left :.133333rem
	.second
		position :relative
		height :10.666667rem
		padding-top :1.2rem
		.colum-dots
			position :absolute
			left :2.333333rem
			.dot
				width :.106667rem
				height :.106667rem
				background-color :#D8D8D8
				border-radius :50%
				display :block
				margin-top :.133333rem
		.branch
			position :absolute
			left : 2.593333rem
			.branchlist
				display :flex
				align-items :center
				margin-top :.5rem
				position :relative
				.add
					position :absolute
					left :-.613333rem
					top :50%
					margin-top :-.333333rem
					width :.613333rem
					height :.613333rem
					img
						width :.613333rem
						height :.613333rem
						display :block
.kuai
	box-shadow :0 .026667rem .053333rem 0 #CCCCCC
	border-radius: .053333rem
	width :2.4rem
	height :1.2rem
	margin-left :.133333rem
	font-family :MicrosoftYaHei
	font-size :.32rem
	color :#FFFFFF
	display :flex
	flex-direction :column
	align-items :center
	justify-content :center
	position :relative
	.account
		color :#EEEEEE
	img
		width :.746667rem
		height :.746667rem
		position :absolute
		top :0
		right :0
.dot
	width :.106667rem
	height :.106667rem
	background-color :#D8D8D8
	border-radius :50%
	margin-left :.133333rem
.line-dot
	position :absolute
	left :0
	display :flex
	flex-direction :column
	top :-1rem
	.dot
		margin-left :.133333rem
		margin-top :.133333rem
.v0
	background-color :#CCCCCC
.v1
	background-color :#BF82FF
.v2
	background-color :#FEA96C
.v3
	background-color :#99C1FE
.v4
	background-color :#76E3F4
.v5
	background-color :#FFCA00
.v6
	background-color :#FD7C7C
</style>
