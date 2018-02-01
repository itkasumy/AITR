<template>
	<ul class="threepoints">
		<li class="point"></li>
		<li class="point"></li>
		<li class="point"></li>
	</ul>
</template>

<style scoped lang='stylus' rel='stylesheet/stylus'>
	.threepoints
		width .8rem
		height .106667rem
		display flex
		justify-content space-around
		.point
			width .106667rem
			height .106667rem
			background url('../../assets/grayDot.png') 0 0 / .106667rem .106667rem no-repeat
</style>
