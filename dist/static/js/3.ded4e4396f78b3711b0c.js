webpackJsonp([3],{"5f54":function(t,s){},CnTn:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("zZ4r"),r=a("NMZZ"),i=a("QFPj"),n=a("sC4j"),o={data:function(){return{}},methods:{confirms:function(t){this.$emit("confirms")}},props:{orderData:{type:Object,value:{}}}},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"alerts"},[a("div",{staticClass:"dialog"},[a("div",{staticClass:"tipss"},[t._v("确认充值")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"tables"},[t._m(1),t._v(" "),a("div",{staticClass:"valus"},[a("div",{staticClass:"address line"},[t._v(t._s(t.orderData.address))]),t._v(" "),a("div",{staticClass:"line address"},[a("span",{staticStyle:{color:"#FFCA00"}},[t._v(t._s(t.orderData.verifyCode))]),t._v("（请务必填写）")]),t._v(" "),a("div",{staticClass:"line address",staticStyle:{color:"#FFCA00"}},[t._v(t._s(t.orderData.number))]),t._v(" "),a("div",{staticClass:"code-img"},[a("img",{attrs:{src:t.orderData.qrUrl,alt:""}})])])]),t._v(" "),a("div",{staticClass:"issure",on:{click:t.confirms}},[t._v("\n\t\t\t\t确认\n\t\t\t")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tips"},[this._v("请确认充值信息"),s("a",{attrs:{href:"javascript:;"}},[this._v("复制地址")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"types"},[s("div",{staticClass:"line"},[this._v("钱包地址")]),this._v(" "),s("div",{staticClass:"line"},[this._v("转账时备注内容")]),this._v(" "),s("div",{staticClass:"line"},[this._v("数量")]),this._v(" "),s("div",{staticClass:"code"},[this._v("二维码")])])}]};var d=a("Z0/y")(o,c,!1,function(t){a("5f54")},"data-v-7f8abfec",null).exports,v=a("2sCs"),l=a.n(v),h={data:function(){return{spotAccountData:[],isShow:!1,orderInfoShow:!1,orderData:null,chargeNum:void 0,rechargeHistoryData:[],alertStyle:{border:"1px solid #CCCCCC",color:"#ccc",width:"6.293333rem",height:".8rem",fontSize:".32rem",boxSzing:"border-box",paddingLeft:".133333rem"}}},created:function(){var t=this;Object(e.m)().then(function(s){console.log(s),0===s.data.code&&(t.spotAccountData=s.data.result)}),Object(e.j)().then(function(s){0===s.data.code&&(t.rechargeHistoryData=s.data.result.list)})},components:{GRechargeHistory:r.a,GAssetsManage:i.a,GAlert:n.a,GAlertOrderInfo:d},methods:{options:function(t){if(this.isShow=!1,console.log(this.chargeNum),"oks"===t){var s=parseFloat(this.chargeNum);this.chargeNum=void 0,this.rechargeCoin(2,s)}},charge:function(){this.isShow=!0},rechargeCoin:function(t,s){var a=this,r=new URLSearchParams;r.append("currency_id",t),r.append("number",s),l.a.post(e.h,r,{headers:Object(e.f)()}).then(function(t){0===t.data.code&&(a.orderData=t.data.result),a.orderInfoShow=!0})},orderConfirm:function(){this.orderInfoShow=!1,console.log("确认订单了...")},showOrderInfo:function(t){var s=this;l.a.get(e.i,{params:{order_id:t},headers:Object(e.f)()}).then(function(t){0===t.data.code&&(s.orderData=t.data.result,console.log(s.orderData)),s.orderInfoShow=!0})}}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sport-account"},[a("g-assets-manage",{attrs:{spotAccountData:t.spotAccountData},on:{charge:t.charge}}),t._v(" "),a("div",{staticClass:"history"},[a("g-recharge-history",{attrs:{datas:t.rechargeHistoryData},on:{showOrderInfo:t.showOrderInfo}})],1),t._v(" "),a("g-alert",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],on:{options:t.options}},[a("div",{staticClass:"tipss"},[t._v("输入充值金额")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.chargeNum,expression:"chargeNum"}],style:t.alertStyle,attrs:{type:"number",placeholder:"输入需要充值的金额数量"},domProps:{value:t.chargeNum},on:{input:function(s){s.target.composing||(t.chargeNum=s.target.value)}}})])]),t._v(" "),t.orderData?a("g-alert-order-info",{directives:[{name:"show",rawName:"v-show",value:t.orderInfoShow,expression:"orderInfoShow"}],attrs:{orderData:t.orderData},on:{confirms:t.orderConfirm}}):t._e()],1)},staticRenderFns:[]};var _=a("Z0/y")(h,u,!1,function(t){a("Lcnu")},"data-v-7910bf3a",null);s.default=_.exports},Lcnu:function(t,s){},NMZZ:function(t,s,a){"use strict";var e={data:function(){return{}},props:{datas:{value:[],type:Array}},methods:{clickOrder:function(t){this.$emit("showOrderInfo",t)}}},r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"recharge-history"},[a("div",{staticClass:"tips"},[t._v("最近兑换记录")]),t._v(" "),a("div",{staticClass:"history-content"},[a("ul",t._l(t.datas,function(s,e){return a("li",{key:e},[a("div",{staticClass:"order-no"},[a("span",[t._v("订单号: "),a("a",{attrs:{href:"javascript:;"},on:{click:function(a){t.clickOrder(s.orderNo)}}},[t._v(t._s(s.orderNo))])]),t._v(" "),1===s.type?a("span",{staticClass:"order-buy"},[t._v("提现")]):a("span",{staticClass:"order-sell"},[t._v("充值")])]),t._v(" "),a("div",{staticClass:"order-price"},[a("span",[t._v("币种 : "+t._s(s.currencyName))])]),t._v(" "),a("div",{staticClass:"order-price"},[a("span",[t._v("数量 : "+t._s(s.number))]),t._v(" "),0===s.status?a("span",[t._v("未支付")]):1===s.status?a("span",[t._v("交易完成")]):t._e()])])}))])])},staticRenderFns:[]};var i=a("Z0/y")(e,r,!1,function(t){a("NmmH")},"data-v-058e365b",null);s.a=i.exports},NmmH:function(t,s){},P0na:function(t,s){},QFPj:function(t,s,a){"use strict";var e={props:{spotAccountData:{type:Array,value:[]}},methods:{charge:function(t){t&&"ETH"===t&&this.$emit("charge")}}},r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"account-part"},[t._m(0),t._v(" "),t._l(t.spotAccountData,function(s,e){return a("div",{key:e,staticClass:"table-tr"},[a("span",[t._v(t._s(s.currencyName))]),t._v(" "),a("span",[t._v(t._s(s.balance))]),t._v(" "),a("span",{staticClass:"orange"},[t._v("0")]),t._v(" "),t._m(1,!0)])})],2)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-th"},[s("span",[this._v("币种")]),this._v(" "),s("span",[this._v("可用")]),this._v(" "),s("span",[this._v("冻结")]),this._v(" "),s("span",[this._v("操作")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",[s("a",{attrs:{href:"javascript:;"}},[this._v("充值")]),this._v(" "),s("a",{attrs:{href:"javascript:;"}},[this._v("提现")])])}]};var i=a("Z0/y")(e,r,!1,function(t){a("P0na")},"data-v-182c04c6",null);s.a=i.exports}});
//# sourceMappingURL=3.ded4e4396f78b3711b0c.js.map