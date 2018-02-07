<template>
	<div class="noopn">
		<prompt :tip="tip" ref="promptRef"></prompt>
	</div>
</template>

<script>
import Prompt from 'components/Prompt/Prompt'

export default {
	data () {
		return {
			tip: ''
		}
	},
	components: {
		Prompt
	},
	mounted () {
		this.tip = '暂未开放'
		this.$refs.promptRef.show()
		setTimeout(() => {
			this.$router.push({path: '/index'})
		}, 600)
	}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
	.noopn
		background #F0F0F0
</style>
