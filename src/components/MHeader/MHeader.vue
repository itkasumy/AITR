<template>
	<header class="m-header">
		<h1 class="logo"></h1>
		<router-link class="userName" to="/person">A000000000</router-link>
		<div class="menu"></div>
		<m-menu></m-menu>
	</header>
</template>

<script>
import MMenu from 'components/MMenu/MMenu'

export default {
	components: {
		MMenu
	}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
	.m-header
		position relative
		width 100%
		height 49px
		background #000
		box-shadow 0 1px 2px 0 rgba(0, 0, 0, .5)
	.logo
		position absolute
		width 64px
		height 29px
		left 25px
		top 10px
		margin 0
		font-size normal
		box-shadow 0 1px 1px 0 #333
		background url('./AITR1outline@1x.png') 0 0 no-repeat
		background-size 64px 29px
	.userName
		position absolute
		width 102px
		height 16px
		line-height 16px
		right 72px
		top 17px
		font-family 'Microsoft Yahei'
		font-size 12px
		color #fff
	.menu
		position absolute
		width 25px
		height 25px
		right 25px
		top 12px
		background url('./菜单.png') 0 0 no-repeat
		background-size 25px 25px
</style>
