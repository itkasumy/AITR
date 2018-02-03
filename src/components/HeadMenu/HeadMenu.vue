<template>
	<div class="head-menu">
		<header class="header">
			<router-link to="/index"><div class="logo"></div></router-link>
			<div class="account" v-show="hasLogined" @click="switchaccount">
				A00000000
			</div>
			<router-link class="login-btn" v-show="!hasLogined" to="/login">登录</router-link>
			<div class="menu-btn" @click="switchMenu"></div>
		</header>

		<keep-alive>
			<div class="menu-wrapper" v-if="showMenu">
				<div class="main-menu">
					<ul>
						<li
							class="main-menu-item"
							:class="{'active': mainMenuActiveItem === index}"
							v-for="(item, index) in menu"
							:key="index"
							@click="getMainMenuActiveItem(index)"
						>
							<router-link class="path" v-if="!item.subMenu" :to="item.path">{{item.name}}</router-link>
							<router-link class="path" v-else to="">{{item.name}}</router-link>
						</li>
					</ul>
				</div>
				<div class="submenu-wrapper" v-if="menu[mainMenuActiveItem].subMenu">
					<ul class="submenu">
						<li
							class="submenu-item"
							:class="{'active': submenuActiveItem === index}"
							v-for="(item, index) in menu[mainMenuActiveItem].subMenu"
							:key="index"
							@click.prevent="getSubmenuActiveItem(index)"
						>
							<router-link class="path" v-if="!item.pageRoute" :to="item.path">{{item.name}}</router-link>
							<router-link class="path" v-else to="">{{item.name}}</router-link>
						</li>
					</ul>
					<div class="line" v-if="menu[mainMenuActiveItem].subMenu[submenuActiveItem].pageRoute"></div>
					<div class="page-route" v-if="menu[mainMenuActiveItem].subMenu[submenuActiveItem].pageRoute">
						<ul class="route-wrapper">
							<li
								class="route-content"
								:class="{'active': routeActiveItem === index}"
								v-for="(item, index) in menu[mainMenuActiveItem].subMenu[submenuActiveItem].pageRoute"
								:key="index"
								@click.prevent="getRouteActiveItem(index)"
							>
								<router-link class="route-item" :to="{name: 'coininfo', params:{typeid: index}}" v-if="menu[mainMenuActiveItem].subMenu[submenuActiveItem].name === '我的钱包'">{{item.name}}</router-link>
								<router-link class="route-item" :to="item.path" v-else>{{item.name}}</router-link>
							</li>
						</ul>
					</div>
					<div class="close-menu" @click="showMenu = false"></div>
				</div>
			</div>
		</keep-alive>

		<div class="account-wrapper" v-show="showAccount">
			<div class="switch" @click="logOut"></div>
			<div class="maccount-wrapper">
				<div
					class="account"
					v-for="(item, index) in account"
					:key="index"
					@click="getSubAccountActiveItem(index)"
				>
					{{item.account}}
				</div>
			</div>
			<div class="line"></div>
			<div class="subaccount">
				<ul>
					<li
						class="subaccount-item"
						:class="{'active': subAccountActiveItem === index}"
						v-for="(item, index) in subAccount"
						:key="index"
					>{{item}}</li>
				</ul>
			</div>
			<div class="close-account" @click="showAccount = false"></div>
		</div>
	</div>
</template>

<script>
import {LoginOut, getMuAccount, switchAccount} from 'util/http'

export default {
	data () {
		return {
			menu: [
				{
					name: '首页',
					subMenu: [
						{
							name: 'ETH交易',
							path: '/coinexchange'
						}
					]
				},
				{
					name: '币币交易',
					path: '/'
				},
				{
					name: '杠杆交易',
					path: '/'
				},
				{
					name: '个人中心',
					subMenu: [
						{
							name: '个人信息',
							pageRoute: [
								{
									name: '个人信息',
									path: '/userinfo'
								},
								{
									name: '登录密码',
									path: '/cgpwd'
								},
								{
									name: '安全码',
									path: '/cgsfw'
								}
							]
						},
						{
							name: '资产管理',
							pageRoute: [
								{
									name: '现货账户',
									path: '/assetsmanage/spotaccount'
								},
								{
									name: '杠杆账户',
									path: '/assetsmanage/leveraccount'
								}
							]
						}
					]
				},
				{
					name: 'VIP专区',
					subMenu: [
						{
							name: 'VIP中心',
							path: '/vip'
						},
						{
							name: '组织架构',
							pageRoute: [
								{
									name: '推荐图',
									path: '/organizationchart/recommendchart'
								},
								{
									name: '安置结构图',
									path: '/organizationchart/placementchart'
								}
							]
						},
						{
							name: '我的销售',
							pageRoute: [
								{
									name: '注册母账户',
									path: '/registermu'
								},
								{
									name: '注册子账户',
									path: '/chonggou'
								},
								{
									name: '购买配置',
									path: '/buymatch'
								},
								{
									name: '解绑子账户',
									path: '/unbindsubaccount'
								},
								{
									name: '解绑母账户',
									path: '/bindmuaccount'
								}
							]
						},
						{
							name: '奖金明细',
							path: '/jiangjindetail'
						},
						{
							name: '我的钱包',
							pageRoute: [
								{
									name: 'USDT',
									path: '/coininfo'
								},
								{
									name: '收益币',
									path: '/coininfo'
								},
								{
									name: '重构币',
									path: '/coininfo'
								},
								{
									name: '众筹币',
									path: '/coininfo'
								},
								{
									name: '拆分币',
									path: '/coininfo'
								},
								{
									name: '消费币',
									path: '/coininfo'
								}
							]
						},
						{
							name: '产品管理',
							pageRoute: [
								{
									name: '产品管理',
									path: ''
								},
								{
									name: '我的订单',
									path: ''
								}
							]
						},
						{
							name: '公告消息',
							pageRoute: [
								{
									name: '公告新闻',
									path: ''
								},
								{
									name: '发件箱',
									path: ''
								},
								{
									name: '收件箱',
									path: ''
								}
							]
						}
					]
				}
			],
			account: [],
			subAccount: [],
			showMenu: false,
			showAccount: false,
			hasLogined: false,
			mainMenuActiveItem: 0,
			submenuActiveItem: 0,
			routeActiveItem: 0,
			subAccountActiveItem: 0,
			userAccount: ''
		}
	},
	mounted () {
		const token = JSON.parse(localStorage.getItem('__token__'))
		if (token) {
			this.hasLogined = true
		}
		this.getSubAccount()
	},
	methods: {
		getMainMenuActiveItem (index) {
			this.submenuActiveItem = 0
			this.routeActiveItem = 0
			this.mainMenuActiveItem = index
		},
		getSubmenuActiveItem (index) {
			this.routeActiveItem = 0
			this.submenuActiveItem = index
		},
		getRouteActiveItem (index) {
			this.routeActiveItem = index
			this.showMenu = false
		},
		switchMenu () {
			this.showAccount = false
			this.showMenu = !this.showMenu
		},
		switchaccount () {
			this.showMenu = false
			this.showAccount = !this.showAccount
		},
		getSubAccountActiveItem (index) {
			this.subAccountActiveItem = index

			let params = new URLSearchParams()
			params.append('uid', 1)
			console.log(params)

			switchAccount(params).then(res => {
				console.log(res.data)
			})
		},
		logOut () {
			LoginOut().then(res => {
				if (res.data.code === 10005) {
					this.$router.push('/login')
				}
				if (res.data.code === 0) {
					localStorage.setItem('__token__', '')
					this.hasLogined = false
					this.showAccount = false
				}
			})
		},
		getSubAccount () {
			getMuAccount().then(res => {
				// console.log(res.data)
				// this.userAccount = res.data.result[0].account
				this.account = res.data.result
			})
		}
	},
	computed: {}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
	@import './HeadMenu'
</style>
