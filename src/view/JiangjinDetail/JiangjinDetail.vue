<template>
	<div class="jiangjin-detail">
		<HeadMenu></HeadMenu>
		<div class="detail-container">
			<div class="title">明细列表</div>
			<ul>
				<li class="detail-item">
					<div class="th">
						<div class="date">日期:2017/12/26</div>
						<div class="total">总计:20000</div>
					</div>
					<div class="tr">
						<div>推荐奖</div>
						<div>管理奖</div>
						<div>见点奖</div>
						<div>碰对奖</div>
					</div>
					<div class="td">
						<div class="count">5000</div>
						<div class="count">5000</div>
						<div class="count">5000</div>
						<div class="count">5000</div>
					</div>
				</li>
				<li class="detail-item">
					<div class="th">
						<div class="date">日期:2017/12/26</div>
						<div class="total">总计:20000</div>
					</div>
					<div class="tr">
						<div>推荐奖</div>
						<div>管理奖</div>
						<div>见点奖</div>
						<div>碰对奖</div>
					</div>
					<div class="td">
						<div class="count">5000</div>
						<div class="count">5000</div>
						<div class="count">5000</div>
						<div class="count">5000</div>
					</div>
				</li>
				<li class="detail-item">
					<div class="th">
						<div class="date">日期:2017/12/26</div>
						<div class="total">总计:20000</div>
					</div>
					<div class="tr">
						<div>推荐奖</div>
						<div>管理奖</div>
						<div>见点奖</div>
						<div>碰对奖</div>
					</div>
					<div class="td">
						<div class="count">5000</div>
						<div class="count">5000</div>
						<div class="count">5000</div>
						<div class="count">5000</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import HeadMenu from 'components/HeadMenu/HeadMenu'

export default {
	data () {
		return {}
	},
	components: {
		HeadMenu
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
					padding 0 27px
					.date
						float left
					.total
						float right
				.tr, .td
					height .933333rem
					line-height .933333rem
					display flex
					box-shadow inset 0 -1px 0 0 #CCC
					div
						width 25%
						text-align center
</style>
