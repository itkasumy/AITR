<template>
	<div>
		<g-trad-part :types="types" @tradClick="tradClick" :price="price"></g-trad-part>
		<g-trad-history :types="types" :historydata="historyData.result.list"></g-trad-history>
		<g-alert v-if="isShowDialog" @options="options">
				<div class="tipss">
					确定订单
				</div>
				<div class="tips">
					您将{{types === 'sell' ? '卖出' : '买入'}}ETH {{numbers}}
				</div>
		</g-alert>
	</div>
</template>

<script>
import GTradHistory from 'components/GTradHistory/GTradHistory'
import GTradPart from 'components/GTradPart/GTradPart'
import GAlert from 'components/GAlert/GAlert'
import {getETHprice} from '../../api/GApi'
export default {
	data () {
		return {
			isShowDialog: false,
			historyData: {
				code: 0,
				msg: 'SUCCESS',
				result: {
					count: 2,
					list: [
						{
							currencyId: 2,
							number: 2,
							totalPrice: 2144,
							type: 1,
							unitPrice: 1072,
							orderNo: '1517066698355'
						},
						{
							currencyId: 2,
							number: 2,
							totalPrice: 2155,
							type: 0,
							unitPrice: 1077.5,
							orderNo: '1517066698355'
						}
					],
					pageNum: 1,
					pageSize: 5
				}
			},
			types: 'sell',
			price: 0,
			numbers: 0
		}
	},
	created () {
		getETHprice().then(res => {
			console.log(res.data.data)
			this.price = res.data.data[0].open
		})
	},
	components: {
		GTradHistory,
		GTradPart,
		GAlert
	},
	methods: {
		options (flag) {
			console.log(flag)
			this.isShowDialog = false
		},
		tradClick (msg) {
			this.isShowDialog = true
			console.log(msg)
			this.numbers = parseFloat(msg.number)
		}
	}
}
</script>

<style scoped lang="stylus">
</style>
