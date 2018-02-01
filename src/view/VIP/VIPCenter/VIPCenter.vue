<template>
	<div class="vipcenter">
		<HeadMenu></HeadMenu>
		<div class="vip-content">
			<div class="huobijiaoyi">
				<div class="vip-title">货币交易</div>
				<div class="process-container">
					<div class="process-item">
						<div class="process-item-title">USDT</div>
						<div class="process-item-price">15000.000</div>
					</div>

					<div class="process-item">
						<div class="process-item-title">众筹币</div>
						<div class="process-item-price">15000.000</div>
					</div>

					<div class="process-item">
						<div class="process-item-title">拆分币</div>
						<div class="process-item-price">15000.000</div>
					</div>
				</div>

				<div class="flow-process-container">
					<div class="btn">充值</div>
					<ul class="dots complate">
						<li class="dot golden"></li>
						<li class="dot golden"></li>
						<li class="dot golden"></li>
						<li class="dot golden"></li>
						<li class="dot golden"></li>
						<li class="dot golden"></li>
					</ul>
					<div class="btn">买配套</div>
					<ul class="dots">
						<li class="dot golden"></li>
						<li class="dot golden"></li>
						<li class="dot golden"></li>
						<li class="dot gray"></li>
						<li class="dot gray"></li>
						<li class="dot gray"></li>
					</ul>
					<div class="btn ">卖出</div>
					<ul class="dots">
						<li class="dot gray"></li>
						<li class="dot gray"></li>
						<li class="dot gray"></li>
						<li class="dot gray"></li>
					</ul>
				</div>

				<div class="coin-container">
					<div class="coin-item">
						<div class="coin-item-title">收益币</div>
						<div class="coin-item-price">15000.000</div>
					</div>

					<div class="coin-item">
						<div class="coin-item-title">重构币</div>
						<div class="coin-item-price">15000.000</div>
					</div>

					<div class="coin-item">
						<div class="coin-item-title">消费币</div>
						<div class="coin-item-price">15000.000</div>
					</div>
				</div>
			</div>
			<div class="todayR">
				<div class="vip-title">今日奖金<span class="jine">5000</span>
					<div class="totalR">奖金总额<span class="jine">20000</span></div>
				</div>
			</div>
			<div class="chaifenzoushi">
				<div class="vip-title">拆分走势</div>
				<div class="zoushi-container">
					<div class="current-price">当前价格:3.4</div>
					<div class="chart-content"></div>
					<div class="price-block"></div>
				</div>
			</div>
			<div class="chaifenjincheng">
				<div class="vip-title">拆分进程</div>
			</div>
			<div class="shujufenxi">
				<div class="vip-title">数据对比</div>
			</div>
		</div>
	</div>
</template>

<script>
import HeadMenu from 'components/HeadMenu/HeadMenu'

export default {
	components: {
		HeadMenu
	}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
	.vipcenter
		.vip-content
			.huobijiaoyi
				width 100%
				height 7.066667rem
				margin-top .16rem
				opacity 0.8
				background-image linear-gradient(-180deg, #212121 0%, #040404 100%)
				border-radius .133333rem
				.process-container
					display flex
					justify-content space-around
					padding-top .373333rem
					.process-item
						width 2.786667rem
						height 1.613333rem
						padding .293333rem .293333rem 0
						box-sizing border-box
						background url('../../assets/币@2x.png') 0 0 / 2.786667rem 1.613333rem no-repeat
						.process-item-title
							height .4rem
							line-height .4rem
							padding-bottom .08rem
							border-bottom 1px solid #FFCA00
							color #EEE
							text-align center
							font-size .293333rem
						.process-item-price
							height .426667rem
							line-height .426667rem
							padding-top .106667rem
							color #FFCA00
							text-align center
							font-size .373333rem
				.flow-process-container
					height 2.093333rem
					padding-top .266667rem
					box-sizing border-box
					.btn
						float left
						width 1.733333rem
						height .773333rem
						line-height .773333rem
						background #FFAE11
						text-align center
						border-radius .106667rem
						font-size .373333rem
						color #FFF
						&:first-child
							margin-left .866667rem
					.dots
						float left
						position relative
						display flex
						justify-content space-around
						width 1.52rem
						height .773333rem
						padding .32rem .106667rem
						box-sizing border-box
						&::after
							position absolute
							left 0
							bottom -0.333333rem
							height .333333rem
							line-height .333333rem
							content '排队等待中...'
							font-size .24rem
							color #FFF
						&.complate
							&::after
								display none
						.dot
							width .133333rem
							height .133333rem
							&.golden
								background url('../../assets/goldenDot.png') 0 0 / .133333rem .133333rem no-repeat
							&.gray
								background url('../../assets/grayDot.png') 0 0 / .133333rem .133333rem no-repeat
						&:last-child
							float right
							width 1.8rem
							height 1.053333rem
							padding 0
							flex-direction column
							&::after
								top .453333rem
								left -1.44rem
								display none
				.coin-container
					display flex
					justify-content space-around
					.coin-item
						width 2.413333rem
						height 1.226667rem
						box-sizing border-box
						padding-top .08rem
						background url('../../assets/Rectangle3Copy5.png') 0 0 / 2.413333rem 1.226667rem no-repeat
						.coin-item-title
							height .4rem
							line-height .4rem
							padding-bottom .08rem
							border-bottom 1px solid #FFCA00
							color #EEE
							text-align center
							font-size .293333rem
						.coin-item-price
							height .426667rem
							line-height .426667rem
							padding-top .106667rem
							color #FFCA00
							text-align center
							font-size .373333rem
			.todayR
				margin-top .16rem
				.jine
					margin-left .44rem
					font-size .533333rem
				.totalR
					float right
					position relative
					width 50%
					font-size .373333rem
					color #CCC
					.jine
						color #FFCA00
					&::before
						position absolute
						content ''
						left -0.586667rem
						top .373333rem
						width .026667rem
						height .586667rem
						background #FFCA00
			.chaifenzoushi
				width 100%
				height 5.12rem
				margin-top .16rem
				opacity 0.8
				background-image linear-gradient(-180deg, #212121 0%, #040404 100%)
				border-radius .133333rem
				.zoushi-container
					.current-price
						height .84rem
						padding .253333rem .84rem .173333rem
						box-sizing border-box
						text-align right
						font-size .32rem
						color #FFF
					.chart-content
						width 8.426667rem
						height 2.24rem
			.chaifenjincheng
				width 100%
				height 3.386667rem
				margin-top .16rem
				opacity 0.8
				background-image linear-gradient(-180deg, #212121 0%, #040404 100%)
				border-radius .133333rem
			.shujufenxi
				width 100%
				height 3.493333rem
				margin-top .16rem
				opacity 0.8
				background-image linear-gradient(-180deg, #212121 0%, #040404 100%)
				border-radius .133333rem
			.vip-title
				position relative
				width 100%
				height 1.333333rem
				line-height 1.333333rem
				padding-left .586667rem
				opacity 0.8
				background-image linear-gradient(-180deg, #212121 0%, #040404 100%)
				box-shadow 0 .026667rem .053333rem 0 rgba(0, 0, 0, .5)
				border-radius .133333rem
				font-size .48rem
				color #FFCA00
				&::before
					position absolute
					content ''
					width .066667rem
					height .453333rem
					left .346667rem
					top .44rem
					background #FFCA00
					border-radius 1.333333rem
</style>
