import axios from 'axios'
const url = 'http://47.75.6.39:8092/api/v1/'
export const getToken = function () {
	let info = localStorage.getItem('__token__')
	if (info) {
		info = JSON.parse(info)
	}
	return {
		access_account: info.accessAccount,
		access_token: info.accessToken
	}
}
// 充值显示订单信息
export var orderDataUrl = `${url}cashWallet/rechargeCoin`
// 订单号显示订单信息
export var orderDatasUrl = `${url}cashWallet/getRechargeInfo`
// 获取钱包余额变动记录
export var getWalletLogUrl = `${url}wallet/getWalletLog`
// 获取钱包余额
export var getByWallet = `${url}wallet/getByAccount`
// 注册币转账
export var transferRegCoinUrl = `${url}wallet/transferRegCoin`
// 收益币转账
export var transferEarCoinUrl = `${url}wallet/transferEarCoin`
// 验证安全验证码
export var checkSafeCodeUrl = `${url}verifySafePwd`
// 获取安置结构根账户Map
export var getPosMap = `${url}account/getPosMap`
// 安置结构搜索URl
export var searchPosMap = `${url}account/searchPosMap`
// 推荐图Map获取URL
export var getRefMap = `${url}account/getRefMap`
// 推荐图Map搜索URl
export var searchRefMap = `${url}account/searchRefMap`
export var getETHprice = function () {
	return new Promise(function (resolve, reject) {
		axios.get('https://api.huobi.pro/market/history/kline?symbol=ethusdt&period=1day&size=1').then(res => {
			resolve(res)
		})
	})
}
// 现货账户信息
export var spotAccount = function () {
	return new Promise(function (resolve, reject) {
		axios.get(`${url}cashWallet/getInfo`, {
			headers: getToken()
		}).then(res => {
			resolve(res)
		})
	})
}
// 充值提现记录
export var rechargeHistory = function () {
	return new Promise(function (resolve, reject) {
		axios.get(`${url}cashWallet/getRechargeWithdrawList`, {
			headers: getToken()
		}).then(res => {
			resolve(res)
		})
	})
}
