import axios from 'axios'
// import {getCookie} from './util'

axios.defaults.baseURL = 'http://47.75.6.39:8092/api/v1'

// var token = JSON.parse(localStorage.getItem('__token__'))

// axios.interceptors.request.use(config => {
// 	if (token) {
// 		config.headers.Authorization = token
// 	}
// 	return config
// }, err => {
// 	return Promise.reject(err)
// })

export const Login = params => {
	return new Promise((resolve, reject) => {
		axios.post('/login', params).then(res => {
			resolve(res)
		}).catch(error => {
			reject(error)
		})
	})
}

export const LoginOut = () => {
	const token = JSON.parse(localStorage.getItem('__token__'))
	return new Promise((resolve, reject) => {
		axios.get('/logout', {
			headers: {
				'access_account': token.accessAccount,
				'access_token': token.accessToken
			}
		}).then(res => {
			resolve(res)
		}).catch(error => {
			reject(error)
		})
	})
}

export const getMuAccount = () => {
	var token = JSON.parse(localStorage.getItem('__token__'))
	return new Promise((resolve, reject) => {
		axios.get('/account/attachedList', {
			headers: {
				'access_account': token.accessAccount,
				'access_token': token.accessToken
			}
		}).then(res => {
			resolve(res)
		}).catch(error => {
			reject(error)
		})
	})
}

export const switchAccount = (params) => {
	var token = JSON.parse(localStorage.getItem('__token__'))
	return new Promise((resolve, reject) => {
		axios.post('/switchAccount', params, {
			headers: {
				'access_account': token.accessAccount,
				'access_token': token.accessToken
			}
		}).then(res => {
			resolve(res)
		}).catch(error => {
			reject(error)
		})
	})
}

export const getAccountInfo = () => {
	var token = JSON.parse(localStorage.getItem('__token__'))
	return new Promise((resolve, reject) => {
		axios.get('/account/info', {
			headers: {
				'access_account': token.accessAccount,
				'access_token': token.accessToken
			}
		}).then(res => {
			resolve(res)
		}).catch(error => {
			reject(error)
		})
	})
}

export const verifySafePwd = (params) => {
	var token = JSON.parse(localStorage.getItem('__token__'))
	return new Promise((resolve, reject) => {
		axios.post('/verifySafePwd', params, {
			headers: {
				'access_account': token.accessAccount,
				'access_token': token.accessToken
			}
		}).then(res => {
			resolve(res)
		}).catch(error => {
			reject(error)
		})
	})
}

export const updateNickname = (params) => {
	var token = JSON.parse(localStorage.getItem('__token__'))
	return new Promise((resolve, reject) => {
		axios.post('/account/updateNickname', params, {
			headers: {
				'access_account': token.accessAccount,
				'access_token': token.accessToken
			}
		}).then(res => {
			resolve(res)
		}).catch(error => {
			reject(error)
		})
	})
}

export const updateEmail = (params) => {
	var token = JSON.parse(localStorage.getItem('__token__'))
	return new Promise((resolve, reject) => {
		axios.post('/account/updateEmail', params, {
			headers: {
				'access_account': token.accessAccount,
				'access_token': token.accessToken
			}
		}).then(res => {
			resolve(res)
		}).catch(error => {
			reject(error)
		})
	})
}
