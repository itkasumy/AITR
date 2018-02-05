import axios from 'axios'
const url = 'http://47.75.6.39:8092/api/v1/'
let info = localStorage.getItem('__token__')
info = JSON.parse(info)
export const accessToken = info.accessToken
export const accessAccount = info.accessAccount
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
// 获取根账户Map
export var getPosMap = `${url}account/getPosMap`
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
