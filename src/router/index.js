import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Person = resolve => {
	import('view/Person/Person').then(module => {
		resolve(module)
	})
}

const routes = [
	{
		path: '/person',
		component: Person
	},
	{
		path: '/trading',
		component: Trading,
		children: [
			{ path: 'buy', component: Buy, name: 'buy' },
			{ path: 'sell', component: Sell },
			{ path: '', redirect: { name: 'buy' } }
		]
	},
	{
		path: '/assetsmanage',
		component: AssetsManage,
		children: [
			{ path: 'spotaccount', component: SpotAccount, name: 'spot' },
			{ path: 'leveraccount', component: LeverAccount },
			{ path: '', redirect: { name: 'spot' } }
		]
	}
]

export default new Router({
	routes
})
