<template>
	<div class="jiangjin-detail">
		<HeadMenu></HeadMenu>
		<div class="detail-container">
			<div class="title">{{title}}</div>
			<ul>
				<li class="detail-item" v-for="(v, i) in transferData" :key="i">
					<div class="th">
						<div class="bianhao">会员编号:{{v.id}}</div>
						<div class="date">{{v.createdAt}}</div>
					</div>
					<div class="tr">
						<div class="td">改变量:{{v.amount}}</div>
						<div class="td">改变后余额:{{v.balanceAfter}}</div>
					</div>
					<div class="tr">备注:{{v.memo}}</div>
				</li>
			</ul>
			<div class="btn" v-if="showTransfer">
				<router-link :to="{name: 'cointransfer', params:{typeid: types}}" tag="span">转账</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import HeadMenu from 'components/HeadMenu/HeadMenu'
import {getToken, getWalletLogUrl} from '../../../api/GApi'
import axios from 'axios'
export default {
	data () {
		return {
			types: 0,
			title: '',
			showTransfer: true,
			transferData: []
		}
	},
	components: {
		HeadMenu
	},
	created () {
		console.log('created')
		let typesid = parseInt(this.$route.params.typeid)
		this.types = typesid
		console.log(`typeid 是 ${typesid}`)
		switch (typesid) {
		case 0:
			this.title = '注册币'
			this.showTransfer = true
			break
		case 1:
			this.title = '收益币'
			this.showTransfer = true
			break
		case 2:
			this.title = '重构币'
			this.showTransfer = false
			break
		case 3:
			this.title = '众筹币'
			this.showTransfer = false
			break
		case 4:
			this.title = '拆分币'
			this.showTransfer = false
			break
		case 5:
			this.title = '消费币'
			this.showTransfer = false
			break
		}
		this.getData(typesid)
	},
	watch: {
		$route () {
			console.log('watch')
			let typesid = parseInt(this.$route.params.typeid)
			this.types = parseInt(typesid)
			this.getData(typesid)
			switch (typesid) {
			case 0:
				this.title = '注册币'
				this.showTransfer = true
				break
			case 1:
				this.title = '收益币'
				this.showTransfer = true
				break
			case 2:
				this.title = '重构币'
				this.showTransfer = false
				break
			case 3:
				this.title = '众筹币'
				this.showTransfer = false
				break
			case 4:
				this.title = '拆分币'
				this.showTransfer = false
				break
			case 5:
				this.title = '消费币'
				this.showTransfer = false
				break
			}
		}
	},
	methods: {
		timestampToTime (timestamp) {
			var date = new Date(timestamp)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
			var Y = date.getFullYear() + '/'
			var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/'
			var D = date.getDate() + ' '
			var h = date.getHours() + ':'
			var m = date.getMinutes() + ':'
			var s = date.getSeconds()
			return Y + M + D + h + m + s
		},
		getData (typesid) {
			axios.get(getWalletLogUrl, {
				headers: getToken(),
				params: {
					currency: typesid
				}
			}).then(res => {
				// 没获取到数据，所以先不填
				console.log(res)
				let list = res.data.result.list
				list.forEach((item) => {
					item.createdAt = this.timestampToTime(item.createdAt)
				})
				this.transferData = list
				console.log(this.transferData)
			})
		}
	}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
	.jiangjin-detail
		height 100%
		background #f2f2f2
		.detail-container
			background #FFF
			box-shadow 0 .026667rem .053333rem 0 #CCC
			.title
				height .96rem
				line-height .96rem
				text-align center
				color #333
				font-size .426667rem
			.detail-item
				font-size .373333rem
				color #333
				.th
					height 1.013333rem
					line-height 1.013333rem
					background rgba(255, 202, 0, .3)
					padding 0 .36rem
					.bianhao
						float left
					.date
						float right
				.tr
					height .853333rem
					line-height .853333rem
					padding 0 .346667rem 0 .466667rem
					&:last-child
						text-align right
					.td
						&:first-child
							float left
						&:last-child
							float right
			.btn
				height :1.333333rem
				color :white
				background :#FFCA00
				position :absolute
				width:100%
				bottom:0
				span
					display :block
					line-height :1.333333rem
					font-size :.426667rem
					text-align :center
</style>
