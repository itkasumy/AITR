webpackJsonp([6],{NMZZ:function(t,s,a){"use strict";var e={data:function(){return{}},props:{datas:{value:[],type:Array}},methods:{clickOrder:function(t){this.$emit("showOrderInfo",t)}}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"recharge-history"},[a("div",{staticClass:"tips"},[t._v("最近兑换记录")]),t._v(" "),a("div",{staticClass:"history-content"},[a("ul",t._l(t.datas,function(s,e){return a("li",{key:e},[a("div",{staticClass:"order-no"},[a("span",[t._v("订单号: "),a("a",{attrs:{href:"javascript:;"},on:{click:function(a){t.clickOrder(s.orderNo)}}},[t._v(t._s(s.orderNo))])]),t._v(" "),1===s.type?a("span",{staticClass:"order-buy"},[t._v("提现")]):a("span",{staticClass:"order-sell"},[t._v("充值")])]),t._v(" "),a("div",{staticClass:"order-price"},[a("span",[t._v("币种 : "+t._s(s.currencyName))])]),t._v(" "),a("div",{staticClass:"order-price"},[a("span",[t._v("数量 : "+t._s(s.number))]),t._v(" "),0===s.status?a("span",[t._v("未支付")]):1===s.status?a("span",[t._v("交易完成")]):t._e()])])}))])])},staticRenderFns:[]};var r=a("Z0/y")(e,n,!1,function(t){a("NmmH")},"data-v-058e365b",null);s.a=r.exports},NmmH:function(t,s){},P0na:function(t,s){},QFPj:function(t,s,a){"use strict";var e={props:{spotAccountData:{type:Array,value:[]}},methods:{charge:function(t){t&&"ETH"===t&&this.$emit("charge")}}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"account-part"},[t._m(0),t._v(" "),t._l(t.spotAccountData,function(s,e){return a("div",{key:e,staticClass:"table-tr"},[a("span",[t._v(t._s(s.currencyName))]),t._v(" "),a("span",[t._v(t._s(s.balance))]),t._v(" "),a("span",{staticClass:"orange"},[t._v("0")]),t._v(" "),t._m(1,!0)])})],2)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-th"},[s("span",[this._v("币种")]),this._v(" "),s("span",[this._v("可用")]),this._v(" "),s("span",[this._v("冻结")]),this._v(" "),s("span",[this._v("操作")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",[s("a",{attrs:{href:"javascript:;"}},[this._v("充值")]),this._v(" "),s("a",{attrs:{href:"javascript:;"}},[this._v("提现")])])}]};var r=a("Z0/y")(e,n,!1,function(t){a("P0na")},"data-v-182c04c6",null);s.a=r.exports},VZHW:function(t,s){},dqVf:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("zZ4r"),n=a("NMZZ"),r=a("QFPj"),c={data:function(){return{spotAccountData:[]}},created:function(){var t=this;Object(e.m)().then(function(s){0===s.data.code&&(t.spotAccountData=s.data.result)})},components:{GRechargeHistory:n.a,GAssetsManage:r.a}},i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"sport-account"},[s("g-assets-manage",{attrs:{spotAccountData:this.spotAccountData}}),this._v(" "),s("div",{staticClass:"history"},[s("g-recharge-history")],1)],1)},staticRenderFns:[]};var o=a("Z0/y")(c,i,!1,function(t){a("VZHW")},"data-v-41b4c3a8",null);s.default=o.exports}});
//# sourceMappingURL=6.09dfd557a57edd6fcf21.js.map