// 获取 cookie
export const getCookie = (name) => {
	let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
	const arr = document.cookie.match(reg)
	return arr ? arr[2] : null
}

export const setCookie = (c_name, value, expiredays) => {
	let exdate = new Date()
	exdate.setDate(exdate.getDate() + expiredays)
	document.cookie = c_name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
}

export const delCookie = (name) => {
	let expires = new Date()
	expires.setTime(expires.getTime() - 1)
	let cval = getCookie(name)
	if (cval != null) {
		document.cookie = name + '=' + cval + ';expires=' + expires.toGMTString()
	}
}
