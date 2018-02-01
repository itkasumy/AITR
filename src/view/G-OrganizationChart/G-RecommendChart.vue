<template>
	<div class="recommend-chart">
		<div class="top">
				<span>查询:按</span>
				<div class="vip-account">会员账号</div>
				<img src="../../assets/选择@2x.png" alt="" class="choice">
				<div class="search">
					<img src="../../assets/搜索 copy@2x.png" alt="" class="search-icon">
				</div>
				<div class="search-text">搜索</div>
		</div>
		<div class="content">
				<div class="first">
					<img src="../../assets/减号@2x.png" alt="" class="first-icon">
					<span class="dot"></span>
					<span class="dot"></span>
					<span class="dot"></span>
					<div class="kuai">
						<div>A000000</div>
						<div class="account">Gruide Bluer</div>
						<img src="../../assets/v6@2x.png" alt="">
					</div>
				</div>
				<div class="second">
					<div class="colum-dots">
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
					</div>
					<div class="branch">
							<div class="branchlist">
								<span class="dot"></span>
								<span class="dot"></span>
								<span class="dot"></span>
								<div class="kuai v5">
									<div>A000000</div>
									<div class="account">Gruide Bluer</div>
									<img src="../../assets/v5@2x.png" alt="">
								</div>
							</div>
							<div class="branchlist">
								<span class="dot"></span>
								<span class="dot"></span>
								<span class="dot"></span>
								<div class="kuai v4">
									<div>A000000</div>
									<div class="account">Gruide Bluer</div>
									<img src="../../assets/v4@2x.png" alt="">
								</div>
							</div>
							<div class="branchlist">
								<span class="dot"></span>
								<span class="dot"></span>
								<span class="dot"></span>
								<div class="kuai v3">
									<div>A000000</div>
									<div class="account">Gruide Bluer</div>
									<img src="../../assets/v3@2x.png" alt="">
								</div>
							</div>
							<div class="branchlist">
								<span class="dot"></span>
								<span class="dot"></span>
								<span class="dot"></span>
								<div class="kuai v2">
									<div>A000000</div>
									<div class="account">Gruide Bluer</div>
									<img src="../../assets/v2@2x.png" alt="">
								</div>
							</div>
							<div class="branchlist">
								<span class="dot"></span>
								<span class="dot"></span>
								<span class="dot"></span>
								<div class="kuai v1">
									<div>A000000</div>
									<div class="account">Gruide Bluer</div>
									<img src="../../assets/v1@2x.png" alt="">
								</div>
							</div>
							<div class="branchlist">
								<span class="dot"></span>
								<span class="dot"></span>
								<span class="dot"></span>
								<div class="kuai v0">
									<div>A000000</div>
									<div class="account">Gruide Bluer</div>
									<img src="../../assets/v0@2x.png" alt="">
								</div>
							</div>
					</div>
					<div class="add">
						<img src="../../assets/加号@2x.png" alt="">
					</div>
				</div>
		</div>
	</div>
</template>

<script>
export default {

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
			.search-icon
				width :.346667rem
				height :.346667rem
				margin-left :.133333rem
				margin-top :.16rem
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
				margin-top :.533333rem
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
		.add
			position :absolute
			left :1.7rem
			bottom :0.4rem
			img
				width :.613333rem
				height :.613333rem
.kuai
	background: #FD7C7C
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
</style>
