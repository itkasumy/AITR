import axios from 'axios'
const url = 'http://47.75.6.39:8092/api/v1/'
export const accessToken = '973CF52D912846E11476CF8405338C65'
export const accessAccount = 'A000000002D99E614BD63245FD22116CBCB88EC49'
// 充值显示订单信息
export var orderDataUrl = `${url}cashWallet/rechargeCoin`
// 订单号显示订单信息
export var orderDatasUrl = `${url}cashWallet/getRechargeInfo`

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
			headers: {
				'access_token': accessToken,
				'access_account': accessAccount
			}
		}).then(res => {
			resolve(res)
		})
	})
}
// 充值提现记录
export var rechargeHistory = function () {
	return new Promise(function (resolve, reject) {
		axios.get(`${url}cashWallet/getRechargeWithdrawList`, {
			headers: {
				'access_token': accessToken,
				'access_account': accessAccount
			}
		}).then(res => {
			resolve(res)
		})
	})
}
