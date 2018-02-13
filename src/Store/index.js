import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 这里定义初始值
const state = {
	registerTempInfo: {
		account: '',
		nickname: '',
		pwd: '',
		cfmPwd: '',
		safepwd: '',
		cfmSafepwd: '',
		email: ''
	}
}
const mutations = {
	saveRegisterTempInfo (state, obj) {
		state.registerTempInfo = obj
	},
	emptyTempInfo () {
		state.registerTempInfo = {
			account: '',
			nickname: '',
			pwd: '',
			cfmPwd: '',
			safepwd: '',
			cfmSafepwd: '',
			email: ''
		}
	}
}
const actions = {
	add (add) {
		add.commit('add')
	}
}
const getters = {
	count (context) {
		return context.count
	}
}
export const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
