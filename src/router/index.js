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
	}
]

export default new Router({
	routes
})
