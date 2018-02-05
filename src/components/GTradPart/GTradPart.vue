<template>
	<div class="trad-price">
		<form action="">
			<div class="text">
				<span>{{types==="buy"?'买入价':'卖出价'}}</span>
			</div>
			<div>
				<input type="text" class="buy-inp-price" :placeholder="{price}" :class="{buypart:types==='buy',sellpart:types==='sell'}" v-model="prices" disabled>
			</div>
			<div class="text">
				<span>{{types==="buy"?'买入量':'卖出量'}}</span>
			</div>
			<div>
				<input type="number" @blur="buyNum(numbers)" class="buy-inp-num" placeholder="0" :class="{buypart:types==='buy',sellpart:types==='sell'}" v-model="numbers">
			</div>
			<div class="total">
					<span>合计: </span><span :style="{color: types==='buy'?'#FFAE11':'#4A90E2'}">&nbsp;{{numbers*prices}}&nbsp;</span><span> USDT</span>
			</div>
			<div class="submits">
				<input type="button" class="submit" ref="submit" :value="typess" :style="{background: types==='buy'?'#FFAE11':'#4A90E2'}" @click="submits">
			</div>
		</form>
		<prompt v-show="showTip" :tip="tip"></prompt>
	</div>
</template>
<script>
import Prompt from 'components/Prompt/Prompt'

export default {
	data () {
		return {
			numbers: 0,
			prices: 0,
			showTip: false,
			tip: '5678'
		}
	},
	components: {
		Prompt
	},
	props: {
		types: {
			type: String,
			value: 'buy'
		},
		price: {
			type: Number,
			value: 0
		},
		number: {
			type: Number,
			value: 0
		}
	},
	methods: {
		// 提交价格和数量
		submits () {
			let obj = {}
			obj.price = this.prices
			obj.number = this.numbers
			this.$emit('tradClick', obj)
		},
		buyNum (numbers) {
			if (numbers > 100000000 || numbers < 0) {
				this.$refs.submit.setAttribute('disabled', true)
				this.tip = '请输入0-100000000之间的数字'
				this.showTip = true
				setTimeout(() => {
					this.showTip = false
				}, 1500)
			} else {
				this.$refs.submit.setAttribute('disabled', false)
			}
		}
	},
	computed: {
		typess () {
			return this.types === 'buy' ? '立刻买入' : '立刻卖出'
		}
	},
	watch: {
		price () {
			this.prices = this.price
		}
	}
}
</script>

<style scoped lang="stylus">
input.buypart::-webkit-input-placeholder{
    color: #FFAE11;opacity:1;
}
input.sellpart::-webkit-input-placeholder{
    color: #4A90E2;opacity:1;
}
.buypart
	color:#FFAE11
.sellpart
	color:#4A90E2
.trad-price
		background-color :white
		font-family: PingFangSC-Regular
		padding:0 .4rem
		font-size: .4rem
		padding-bottom :.266667rem
		margin-top :-.266667rem
		.text
			padding-left :.266667rem
			line-height :.8rem
			margin-top: .533333rem
		.buy-inp-price
			background: #F1F1F1
			border-radius: .133333rem
			height :1.013333rem
			width:100%
			padding-left :.266667rem
			font-size :.373333rem
			box-sizing :border-box
			border: 1px solid #ABABAB
		.buy-inp-num
			border: 1px solid #ABABAB
			border-radius: .133333rem
			height :1.013333rem
			width:100%
			padding-left :.266667rem
			font-size :.373333rem
			box-sizing :border-box
		.total
			line-height :1.066667rem
			margin-right :.4rem
			display :flex
			justify-content :flex-end
		.submits
			text-align :center
		.submit
			background: #FFCA00
			border-radius: .133333rem
			width :90%
			border: 0px
			height :1.066667rem
			font-family: PingFangSC-Regular
			font-size: .426667rem
			color: #FFFFFF
			letter-spacing: .026667rem
</style>
