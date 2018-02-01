<template>
	<div class="bflogin">
		<head-menu></head-menu>
		<div class="banner"></div>
		<div class="bflogin-ct">
			<header class="title">USDT最新行情</header>
			<div class="ct-wrapper">
				<ul class="content">
					<li class="item-wrapper" v-for="(item, index) in list" :key="index">
						<ul class="item-ct">
							<li class="item-name">
								<div class="name-top">
									<span class="current-coin">ETH</span> / <span class="usdollar">USDT</span>
								</div>
								<div class="current-price">15576.29</div>
							</li>
							<li class="item-price">
								<div class="price-high">15962.11</div>
								<div class="price-line"></div>
								<div class="price-low">14864.35</div>
							</li>
							<li class="item-count">
								<div class="count-top">
									<div class="count-title">成交量</div>
									<div class="count">2470.1741 BTC</div>
								</div>
								<div class="count-line"></div>
								<div class="count-percent">+3.72% <span class="derection"></span></div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div class="bt-banner"></div>
	</div>
</template>

<script>
import HeadMenu from 'components/HeadMenu/HeadMenu'

export default {
	data () {
		return {
			list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		}
	},
	components: {
		HeadMenu
	}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
	.bflogin
		.banner
			height 10.453333rem
			background url('./banner@2x.png') 0 0 / 100% 10.453333rem no-repeat
			&::before
				position absolute
				content ''
				width 8.666667rem
				height 5.306667rem
				left .666667rem
				top 1.946667rem
				background url('./文字@2x.png') 0 0 / 8.666667rem 5.306667rem no-repeat
			&::after
				position absolute
				content ''
				width .453333rem
				height .453333rem
				background url('./下拉.png') 0 0 / .453333rem .453333rem no-repeat
				left 4.773333rem
				top 9.333333rem
		.bflogin-ct
			background #EAEAE9
			.title
				position relative
				width 100%
				height 40px
				line-height 40px
				text-align center
				background-image linear-gradient(-180deg, #FFCD00 0%, #FFCA00 100%)
				box-shadow 0px 2px 4px 0px rgba(0, 0, 0, 0.5)
				font-size 14px
				color #333
			.ct-wrapper
				height 100%
				padding-top 5px
				.content
					padding 0 0 20px 25px
					.item-wrapper
						padding-top 10px
						overflow hidden
						.item-name
							float left
							position relative
							width 97px
							height 90px
							background-image linear-gradient(-180deg, #4A4A4A 0%, #000 100%)
							box-shadow 0 2px 4px 0 #999, inset 0 -1px 0 0 #CCC
							margin-right 6px
							border-radius 2px
							opacity .9
							.name-top
								height 18px
								line-height 18px
								padding-top 25px
								text-align center
								font-size 14px
								color #FFF
								letter-spacing 0
							.current-price
								padding-top 7px
								height 16px
								line-height 16px
								text-align center
								font-size 12px
								color #FFCA00
						.item-price
							float left
							position relative
							width 106px
							height 86px
							padding 2px
							background #FFF
							margin-right 3px
							border-radius 2px
							box-shadow 0 1px 2px 0 #CCC
							&::before
								position absolute
								content ''
								width 28px
								height 28px
								left 0
								top 0
								background url('./high@0.96x.png') 0 0 / 28px 28px no-repeat
							&::after
								position absolute
								content ''
								width 28px
								height 28px
								right 0
								bottom 0
								background url('./low@0.96x.png') 0 0 / 28px 28px no-repeat
							.price-high
								height 42px
								line-height 42px
								text-align center
								font-size 14px
								color #333
							.price-line
								height 0
								border-bottom 1px solid #FFCA00
							.price-low
								height 42px
								line-height 42px
								text-align center
								font-size 14px
								color #333
						.item-count
							float left
							position relative
							width 106px
							height 86px
							padding 2px
							background #FFF
							border-radius 2px
							box-shadow 0 1px 2px 0 #CCC
							.count-top
								height 42px
								.count-title
									height 13px
									padding 1px 0 1px 0
									text-align center
									font-size 10px
									color #FFCA00
								.count
									height 15px
									padding 6px 0 6px 0
									text-align center
									font-size 12px
									color #333
							.count-line
								height 0
								border-bottom 1px solid #FFCA00
							.count-percent
								height 42px
								line-height 42px
								text-align center
								font-size 14px
								color #FFCA00
								span
									display inline-block
									width 14px
									height 14px
									vertical-align middle
									background url('./上升.png') center center / 10px 12px no-repeat
		.bt-banner
			height 184px
			background url('./底部banner.png') top center / 100% 184px no-repeat
</style>
