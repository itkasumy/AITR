<template>
	<div class="prompt">
		<div class="tip">{{tip}}</div>
	</div>
</template>

<script>
export default {
	props: {
		tip: {
			type: String,
			default: '1234'
		}
	}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
	.prompt
		position fixed
		left 0
		right 0
		top 0
		bottom 0
		z-index 10
		.tip
			position absolute
			left 50%
			top 50%
			padding .24rem
			transform translate(-50%, -50%)
			line-height .426667rem
			max-width 50%
			text-align center
			background rgba(0, 0, 0 .5)
			border-radius .08rem
			color #FFF
</style>
