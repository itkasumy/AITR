webpackJsonp([3],{"0CLj":function(t,a){},"2lH/":function(t,a){},CnTn:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("zZ4r"),r=s("NMZZ"),i=s("QFPj"),n=s("sC4j"),o={data:function(){return{}},methods:{confirms:function(t){this.$emit("confirms")}},props:{orderData:{type:Object,value:{}}}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"alerts"},[s("div",{staticClass:"dialog"},[s("div",{staticClass:"tipss"},[t._v("确认充值")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"tables"},[t._m(1),t._v(" "),s("div",{staticClass:"valus"},[s("div",{staticClass:"address line"},[t._v(t._s(t.orderData.address))]),t._v(" "),s("div",{staticClass:"line address"},[s("span",{staticStyle:{color:"#FFCA00"}},[t._v(t._s(t.orderData.verifyCode))]),t._v("（请务必填写）")]),t._v(" "),s("div",{staticClass:"line address",staticStyle:{color:"#FFCA00"}},[t._v(t._s(t.orderData.number))]),t._v(" "),s("div",{staticClass:"code-img"},[s("img",{attrs:{src:t.orderData.qrUrl,alt:""}})])])]),t._v(" "),s("div",{staticClass:"issure",on:{click:t.confirms}},[t._v("\n\t\t\t\t确认\n\t\t\t")])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tips"},[this._v("请确认充值信息"),a("a",{attrs:{href:"javascript:;"}},[this._v("复制地址")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"types"},[a("div",{staticClass:"line"},[this._v("钱包地址")]),this._v(" "),a("div",{staticClass:"line"},[this._v("转账时备注内容")]),this._v(" "),a("div",{staticClass:"line"},[this._v("数量")]),this._v(" "),a("div",{staticClass:"code"},[this._v("二维码")])])}]};var d=s("Z0/y")(o,c,!1,function(t){s("2lH/")},"data-v-9153a0ce",null).exports,v=s("2sCs"),l=s.n(v),u={data:function(){return{spotAccountData:[],isShow:!1,orderInfoShow:!1,orderData:null,chargeNum:void 0,rechargeHistoryData:[],alertStyle:{border:"1px solid #CCCCCC",color:"#ccc",width:"6.293333rem",height:".8rem",fontSize:".32rem",boxSzing:"border-box",paddingLeft:".133333rem"}}},created:function(){var t=this;Object(e.j)().then(function(a){console.log(a),0===a.data.code&&(t.spotAccountData=a.data.result)}),Object(e.i)().then(function(a){0===a.data.code&&(t.rechargeHistoryData=a.data.result.list)})},components:{GRechargeHistory:r.a,GAssetsManage:i.a,GAlert:n.a,GAlertOrderInfo:d},methods:{options:function(t){if(this.isShow=!1,console.log(this.chargeNum),"oks"===t){var a=parseFloat(this.chargeNum);this.chargeNum=void 0,this.rechargeCoin(2,a)}},charge:function(){this.isShow=!0},rechargeCoin:function(t,a){var s=this,r=new URLSearchParams;r.append("currency_id",t),r.append("number",a),l.a.post(e.g,r,{headers:{access_token:e.b,access_account:e.a}}).then(function(t){0===t.data.code&&(s.orderData=t.data.result),s.orderInfoShow=!0})},orderConfirm:function(){this.orderInfoShow=!1,console.log("确认订单了...")},showOrderInfo:function(t){var a=this;l.a.get(e.h,{params:{order_id:t},headers:{access_token:e.b,access_account:e.a}}).then(function(t){0===t.data.code&&(a.orderData=t.data.result,console.log(a.orderData)),a.orderInfoShow=!0})}}},h={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"sport-account"},[s("g-assets-manage",{attrs:{spotAccountData:t.spotAccountData},on:{charge:t.charge}}),t._v(" "),s("div",{staticClass:"history"},[s("g-recharge-history",{attrs:{datas:t.rechargeHistoryData},on:{showOrderInfo:t.showOrderInfo}})],1),t._v(" "),s("g-alert",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],on:{options:t.options}},[s("div",{staticClass:"tipss"},[t._v("输入充值金额")]),t._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.chargeNum,expression:"chargeNum"}],style:t.alertStyle,attrs:{type:"number",placeholder:"输入需要充值的金额数量"},domProps:{value:t.chargeNum},on:{input:function(a){a.target.composing||(t.chargeNum=a.target.value)}}})])]),t._v(" "),t.orderData?s("g-alert-order-info",{directives:[{name:"show",rawName:"v-show",value:t.orderInfoShow,expression:"orderInfoShow"}],attrs:{orderData:t.orderData},on:{confirms:t.orderConfirm}}):t._e()],1)},staticRenderFns:[]};var _=s("Z0/y")(u,h,!1,function(t){s("Emiv")},"data-v-1331111a",null);a.default=_.exports},Emiv:function(t,a){},NMZZ:function(t,a,s){"use strict";var e={data:function(){return{}},props:{datas:{value:[],type:Array}},methods:{clickOrder:function(t){this.$emit("showOrderInfo",t)}}},r={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"recharge-history"},[s("div",{staticClass:"tips"},[t._v("最近兑换记录")]),t._v(" "),s("div",{staticClass:"history-content"},[s("ul",t._l(t.datas,function(a,e){return s("li",{key:e},[s("div",{staticClass:"order-no"},[s("span",[t._v("订单号: "),s("a",{attrs:{href:"javascript:;"},on:{click:function(s){t.clickOrder(a.orderNo)}}},[t._v(t._s(a.orderNo))])]),t._v(" "),1===a.type?s("span",{staticClass:"order-buy"},[t._v("提现")]):s("span",{staticClass:"order-sell"},[t._v("充值")])]),t._v(" "),s("div",{staticClass:"order-price"},[s("span",[t._v("币种 : "+t._s(a.currencyName))])]),t._v(" "),s("div",{staticClass:"order-price"},[s("span",[t._v("数量 : "+t._s(a.number))]),t._v(" "),0===a.status?s("span",[t._v("未支付")]):1===a.status?s("span",[t._v("交易完成")]):t._e()])])}))])])},staticRenderFns:[]};var i=s("Z0/y")(e,r,!1,function(t){s("0CLj")},"data-v-061aeece",null);a.a=i.exports},QFPj:function(t,a,s){"use strict";var e={props:{spotAccountData:{type:Array,value:[]}},methods:{charge:function(t){t&&"ETH"===t&&this.$emit("charge")}}},r={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"account-part"},[t._m(0),t._v(" "),t._l(t.spotAccountData,function(a,e){return s("div",{key:e,staticClass:"table-tr"},[s("span",[t._v(t._s(a.currencyName))]),t._v(" "),s("span",[t._v(t._s(a.balance))]),t._v(" "),s("span",{staticClass:"orange"},[t._v("0")]),t._v(" "),s("span",[s("a",{class:{orange:"ETH"===a.currencyName},attrs:{href:"javascript:;"},on:{click:function(s){t.charge(a.currencyName)}}},[t._v("充值")]),t._v(" "),s("a",{attrs:{href:"javascript:;"}},[t._v("提现")])])])})],2)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"table-th"},[a("span",[this._v("币种")]),this._v(" "),a("span",[this._v("可用")]),this._v(" "),a("span",[this._v("冻结")]),this._v(" "),a("span",[this._v("操作")])])}]};var i=s("Z0/y")(e,r,!1,function(t){s("hwSH")},"data-v-4e822b65",null);a.a=i.exports},hwSH:function(t,a){}});
//# sourceMappingURL=3.e1ad9957a36af81466d9.js.map