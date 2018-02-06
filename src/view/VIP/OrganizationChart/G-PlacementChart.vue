<template>
	<div class="placement-chart">
		<div class="top">
			<div class="search">
					<img src="../../../assets/搜索.png" alt="" class="search-icon">
					<input type="text" placeholder="搜索用户名" v-model="searchAccount">
			</div>
			<div class="search-text" @click="searchAccountMap">搜索</div>
		</div>
		<div class="content" v-if="s">
			<div class="first">
				<div class="kuai">
					<div>{{s.account}}</div>
					<div class="account">{{s.nickname}}</div>
					<img src="../../../assets/v6@2x.png" alt="">
				</div>
				<div class="dots">
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
			</div>
			<div class="second">
				<div class="branchlist R">
					<div class="colum-dots" v-if="s.rightAccount">
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
					<span class="rl">R</span>
					<span class="dot"></span>
					<span class="dot"></span>
					<span class="dot"></span>
					<div class="kuai v2" v-if="s.rightAccount" @click="changeRootMap(s.rightAccount.uid)">
						<div>{{s.rightAccount.account}}</div>
						<div class="account">{{s.rightAccount.nickname}}</div>
						<img src="../../../assets/v2@2x.png" alt="">
					</div>
					<div v-else-if="!s.rightAccount" class="more" @click="addAccount(s.account,'r')">
						<img src="../../../assets/添加@2x.png" alt="">
					</div>
				</div>
				<div class="branchlist L">
					<div class="colum-dots" v-if="s.leftAccount">
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
					<span class="rl">L</span>
					<span class="dot"></span>
					<span class="dot"></span>
					<span class="dot"></span>
					<div class="kuai v2" v-if="s.leftAccount" @click="changeRootMap(s.leftAccount.uid)">
						<div>{{s.leftAccount.account}}</div>
						<div class="account">{{s.leftAccount.nickname}}</div>
						<img src="../../../assets/v2@2x.png" alt="">
					</div>
					<div v-else-if="!s.leftAccount" class="more" @click="addAccount(s.account,'l')">
						<img src="../../../assets/添加@2x.png" alt="">
					</div>
				</div>
			</div>
			<div class="three" v-if="s.leftAccount || s.rightAccount">
				<div class="branchlist t1" v-if="s.rightAccount">
					<div class="colum-dots" v-if="s.rightAccount.rightAccount">
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
					<span class="dot"></span>
					<span class="dot"></span>
					<span class="dot"></span>
					<span class="dot"></span>
					<div class="kuai v4" v-if="s.rightAccount.rightAccount" @click="changeRootMap(s.rightAccount.rightAccount.uid)">
						<div>{{s.rightAccount.rightAccount.account}}</div>
						<div class="account">{{s.rightAccount.rightAccount.nickname}}</div>
						<img src="../../../assets/v4@2x.png" alt="">
					</div>
					<div v-else-if="!s.rightAccount.rightAccount" class="more" @click="addAccount(s.rightAccount.account,'r')">
						<img src="../../../assets/添加@2x.png" alt="">
					</div>
				</div>
				<div class="branchlist t2" v-if="s.rightAccount">
					<div class="colum-dots" v-if="s.rightAccount.leftAccount">
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
					<span class="dot"></span>
					<span class="dot"></span>
					<span class="dot"></span>
					<span class="dot"></span>
					<div class="kuai v3" v-if="s.rightAccount.leftAccount"  @click="changeRootMap(s.rightAccount.leftAccount.uid)">
						<div>{{s.rightAccount.leftAccount.account}}</div>
						<div class="account">{{s.rightAccount.leftAccount.nickname}}</div>
						<img src="../../../assets/v3@2x.png" alt="">
					</div>
					<div v-else-if="!s.rightAccount.leftAccount" class="more"  @click="addAccount(s.rightAccount.account,'l')">
						<img src="../../../assets/添加@2x.png" alt="">
					</div>
				</div>
				<div class="branchlist t3" v-if="s.leftAccount">
					<div class="colum-dots" v-if="s.leftAccount.rightAccount">
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
					<span class="dot"></span>
					<span class="dot"></span>
					<span class="dot"></span>
					<span class="dot"></span>
					<div class="kuai v4" v-if="s.leftAccount.rightAccount" @click="changeRootMap(s.leftAccount.rightAccount.uid)">
						<div>{{s.leftAccount.rightAccount.account}}</div>
						<div class="account">{{s.leftAccount.rightAccount.nickname}}</div>
						<img src="../../../assets/v4@2x.png" alt="">
					</div>
					<div v-else-if="!s.leftAccount.rightAccount" class="more"  @click="addAccount(s.leftAccount.account,'r')">
						<img src="../../../assets/添加@2x.png" alt="">
					</div>
				</div>
				<div class="branchlist t4" v-if="s.leftAccount">
					<div class="colum-dots" v-if="s.leftAccount.leftAccount">
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
					<span class="dot"></span>
					<span class="dot"></span>
					<span class="dot"></span>
					<span class="dot"></span>
					<div class="kuai v3" v-if="s.leftAccount.leftAccount" @click="changeRootMap(s.leftAccount.leftAccount.uid)">
						<div>{{s.leftAccount.leftAccount.account}}</div>
						<div class="account">{{s.leftAccount.leftAccount.nickname}}</div>
						<img src="../../../assets/v3@2x.png" alt="">
					</div>
					<div v-else-if="!s.leftAccount.leftAccount" class="more" @click="addAccount(s.leftAccount.account,'l')">
						<img src="../../../assets/添加@2x.png" alt="">
					</div>
				</div>
			</div>
			<div class="four">
				<template v-if="s.rightAccount">
					<template v-if="s.rightAccount.rightAccount">
						<div class="branchlist f1" v-if="s.rightAccount.rightAccount">
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<div class="kuai v1" v-if="s.rightAccount.rightAccount.rightAccount" @click="changeRootMap(s.rightAccount.rightAccount.rightAccount.uid)">
								<div>{{s.rightAccount.rightAccount.rightAccount.account}}</div>
								<div class="account">{{s.rightAccount.rightAccount.rightAccount.nickname}}</div>
								<img src="../../../assets/v1@2x.png" alt="">
							</div>
							<div v-else-if="!s.rightAccount.rightAccount.rightAccount" class="more" @click="addAccount(s.rightAccount.rightAccount.account,'r')">
								<img src="../../../assets/添加@2x.png" alt="">
							</div>
						</div>
						<div class="branchlist f2" v-if="s.rightAccount.rightAccount">
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<div class="kuai v5" v-if="s.rightAccount.rightAccount.leftAccount" @click="changeRootMap(s.rightAccount.rightAccount.leftAccount.uid)">
								<div>{{s.rightAccount.rightAccount.leftAccount.account}}</div>
								<div class="account">{{s.rightAccount.rightAccount.leftAccount.nickname}}</div>
								<img src="../../../assets/v5@2x.png" alt="">
							</div>
							<div v-else-if="!s.rightAccount.rightAccount.leftAccount" class="more" @click="addAccount(s.rightAccount.rightAccount.account,'l')">
								<img src="../../../assets/添加@2x.png" alt="">
							</div>
						</div>
					</template>
					<template v-if="s.rightAccount.leftAccount">
						<div class="branchlist f3" v-if="s.rightAccount.leftAccount">
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<div class="kuai v1" v-if="s.rightAccount.leftAccount.rightAccount" @click="changeRootMap(s.rightAccount.leftAccount.rightAccount.uid)">
								<div>{{s.rightAccount.leftAccount.rightAccount.account}}</div>
								<div class="account">{{s.rightAccount.leftAccount.rightAccount.nickname}}</div>
								<img src="../../../assets/v1@2x.png" alt="">
							</div>
							<div v-else-if="!s.rightAccount.leftAccount.rightAccount" class="more" @click="addAccount(s.rightAccount.leftAccount.account,'r')">
								<img src="../../../assets/添加@2x.png" alt="">
							</div>
						</div>
						<div class="branchlist f4" v-if="s.rightAccount.leftAccount">
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<div class="kuai v1" v-if="s.rightAccount.leftAccount.leftAccount" @click="changeRootMap(s.rightAccount.leftAccount.leftAccount.uid)">
								<div>{{s.rightAccount.leftAccount.leftAccount.account}}</div>
								<div class="account">{{s.rightAccount.leftAccount.leftAccount.nickname}}</div>
								<img src="../../../assets/v1@2x.png" alt="">
							</div>
							<div v-else-if="!s.rightAccount.leftAccount.leftAccount" class="more"  @click="addAccount(s.rightAccount.leftAccount.account,'l')">
								<img src="../../../assets/添加@2x.png" alt="">
							</div>
						</div>
					</template>
				</template>
				<template v-if="s.leftAccount">
					<template v-if="s.leftAccount.rightAccount">
						<div class="branchlist f5" v-if="s.leftAccount.rightAccount">
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<div class="kuai v1" v-if="s.leftAccount.rightAccount.rightAccount" @click="changeRootMap(s.leftAccount.rightAccount.rightAccount.uid)">
								<div>{{s.leftAccount.rightAccount.rightAccount.account}}</div>
								<div class="account">{{s.leftAccount.rightAccount.rightAccount.nickname}}</div>
								<img src="../../../assets/v1@2x.png" alt="">
							</div>
							<div v-else-if="!s.leftAccount.rightAccount.rightAccount" class="more"  @click="addAccount(s.leftAccount.rightAccount.account,'r')">
								<img src="../../../assets/添加@2x.png" alt="">
							</div>
						</div>
						<div class="branchlist f6" v-if="s.leftAccount.rightAccount">
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<div class="kuai v5" v-if="s.leftAccount.rightAccount.leftAccount" @click="changeRootMap(s.leftAccount.rightAccount.leftAccount.uid)">
								<div>{{s.leftAccount.rightAccount.leftAccount.account}}</div>
								<div class="account">{{s.leftAccount.rightAccount.leftAccount.nickname}}</div>
								<img src="../../../assets/v5@2x.png" alt="">
							</div>
							<div v-else-if="!s.leftAccount.rightAccount.leftAccount" class="more" @click="addAccount(s.leftAccount.rightAccount.account,'l')">
								<img src="../../../assets/添加@2x.png" alt="">
							</div>
						</div>
					</template>
					<template v-if="s.leftAccount.leftAccount">
						<div class="branchlist f7" v-if="s.leftAccount.leftAccount">
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<div class="kuai v1" v-if="s.leftAccount.leftAccount.rightAccount" @click="changeRootMap(s.leftAccount.leftAccount.rightAccount.uid)">
								<div>{{s.leftAccount.leftAccount.rightAccount.account}}</div>
								<div class="account">{{s.leftAccount.leftAccount.rightAccount.nickname}}</div>
								<img src="../../../assets/v1@2x.png" alt="">
							</div>
							<div v-else-if="!s.leftAccount.leftAccount.rightAccount" class="more" @click="addAccount(s.leftAccount.leftAccount.account,'r')">
								<img src="../../../assets/添加@2x.png" alt="">
							</div>
						</div>
						<div class="branchlist f8" v-if="s.leftAccount.leftAccount">
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
							<div class="kuai v1" v-if="s.leftAccount.leftAccount.leftAccount" @click="changeRootMap(s.leftAccount.leftAccount.leftAccount.uid)">
								<div>{{s.leftAccount.leftAccount.leftAccount.account}}</div>
								<div class="account">{{s.leftAccount.leftAccount.leftAccount.nickname}}</div>
								<img src="../../../assets/v1@2x.png" alt="">
							</div>
							<div v-else-if="!s.leftAccount.leftAccount.leftAccount" class="more" @click="addAccount(s.leftAccount.leftAccount.account,'l')">
								<img src="../../../assets/添加@2x.png" alt="">
							</div>
						</div>
					</template>
				</template>
			</div>
		</div>
		<prompt :tip="tip" ref="promptAlert"></prompt>
	</div>
</template>

<script>
import {getPosMap, getToken, searchPosMap} from '../../../api/GApi'
import Prompt from '@/components/Prompt/Prompt'
import axios from 'axios'
export default {
	data () {
		return {
			searchAccount: '',
			s: null,
			tip: ''
		}
	},
	created () {
		this.getPosMapData()
	},
	components: {
		Prompt
	},
	methods: {
		changeRootMap (uid) {
			this.getPosMapData(uid)
			console.log(uid)
		},
		addAccount (parentId, direction) {
			console.log(parentId, direction)
			// this.$router.push({name: 'RegisterMu', params: {parentId, direction}})
			this.$router.push({name: 'RegisterMu', query: {parentId, direction}})
		},
		getPosMapData (uid) {
			this.s = null
			if (uid) {
				axios.get(getPosMap, {
					headers: getToken(),
					params: {
						target_uid: uid
					}
				}).then(res => {
					this.s = res.data.result
					console.log(res)
				})
			} else {
				axios.get(getPosMap, {
					headers: getToken()
				}).then(res => {
					this.s = res.data.result
					console.log(res)
				})
			}
		},
		searchAccountMap () {
			if (this.searchAccount) {
				axios.get(searchPosMap, {
					params: {
						target_account: this.searchAccount
					},
					headers: getToken()
				}).then(res => {
					if (res.data.code === 0) {
						if (res.data.result) {
							// 查到了
							this.s = res.data.result
						} else {
							// 不存在
							this.tip = '查询错误,请重新查询'
							this.$refs.promptAlert.show()
						}
					}
				})
			}
		}
	}
}
</script>

<style scoped lang="stylus">
.placement-chart
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
		height :1.433333rem
		justify-content :center
		.search
			width :3.733333rem
			height :.666667rem
			border :.013333rem solid #ccc
			border-radius :.053333rem
			display :flex
			align-items :center
			color :#ABABAB
			.search-icon
				width :.346667rem
				height :.346667rem
				margin-left :.133333rem
			input
				width :3.066667rem
				height :80%
				box-sizing :border-box
				padding-left :.133333rem
				border :0
		.search-text
			background: #FFCA00
			border-radius :.053333rem
			height :.666667rem
			width :1.2rem
			text-align :center
			color: white
			margin-left :.133333rem
	.content
		padding :.266667rem
		box-sizing :border-box
		position :relative
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
		.first
			.dots
				display :flex
				flex-direction :column
				margin-left :0.2rem
				span
					margin-top :.133333rem
		.second,.three,.four
			position :absolute
			top :3.5rem
			left :.5rem
			.branchlist
				display :flex
				align-items :center
				position :relative
				&.L
					margin-top :6rem
				.rl
					width :.4rem
					height :.4rem
					color :white
					background-color :#FFCA00
					font-size :.293333rem
					border-radius :50%
					text-align :center
					line-height :.4rem
					margin-left :-.133333rem
				.colum-dots
					position :absolute
					display :flex
					flex-direction :column
					right :.833333rem
					.dot
						margin-top: .133333rem
		.second
			.colum-dots
				top :-1.333333rem
		.three
			top :1.6rem
			left :2.6rem
			.dot
				margin-left :.133333rem
			.branchlist
				position :absolute
				.colum-dots
					top :-.466667rem
				&.t1
					top :0
				&.t2
					top :3.7rem
				&.t3
					top :7.4rem
				&.t4
					top :11.1rem
		.four
			top :.7rem
			left :5.04rem
			.dot
				margin-left :.133333rem
			.branchlist
				position :absolute
				&.f1
					top :0
				&.f2
					top :1.933333rem
				&.f3
					top :3.68rem
				&.f4
					top :5.613333rem
				&.f5
					top :7.36rem
				&.f6
					top :9.3rem
				&.f7
					top :11.07rem
				&.f8
					top :13.01rem

.kuai
	background: #FD7C7C
	box-shadow :0 .026667rem .053333rem 0 #CCCCCC
	border-radius: .053333rem
	width :2.4rem
	height :1.2rem
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
	margin-left :.066667rem
.more
	margin-left :.133333rem
	img
		width :1.2rem
		height :1.2rem
		display :block
</style>
