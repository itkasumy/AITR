webpackJsonp([4],{M5Ej:function(t,s,e){"use strict";var r={data:function(){return{numbers:0,prices:0}},props:{types:{type:String,value:"buy"},price:{type:Number,value:0},number:{type:Number,value:0}},methods:{submits:function(){var t={};t.price=this.prices,t.number=this.numbers,this.$emit("tradClick",t)}},computed:{typess:function(){return"buy"===this.types?"立刻买入":"立刻卖出"}},watch:{price:function(){this.prices=this.price}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"trad-price"},[e("form",{attrs:{action:""}},[e("div",{staticClass:"text"},[e("span",[t._v(t._s("buy"===t.types?"买入价":"卖出价"))])]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.prices,expression:"prices"}],staticClass:"buy-inp-price",class:{buypart:"buy"===t.types,sellpart:"sell"===t.types},attrs:{type:"text",placeholder:{price:t.price},disabled:""},domProps:{value:t.prices},on:{input:function(s){s.target.composing||(t.prices=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"text"},[e("span",[t._v(t._s("buy"===t.types?"买入量":"卖出量"))])]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.numbers,expression:"numbers"}],staticClass:"buy-inp-num",class:{buypart:"buy"===t.types,sellpart:"sell"===t.types},attrs:{type:"number",placeholder:"0"},domProps:{value:t.numbers},on:{input:function(s){s.target.composing||(t.numbers=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"total"},[e("span",[t._v("合计: ")]),e("span",{style:{color:"buy"===t.types?"#FFAE11":"#4A90E2"}},[t._v(" "+t._s(t.numbers*t.prices)+" ")]),e("span",[t._v(" USDT")])]),t._v(" "),e("div",{staticClass:"submits"},[e("input",{staticClass:"submit",style:{background:"buy"===t.types?"#FFAE11":"#4A90E2"},attrs:{type:"button",value:t.typess},on:{click:t.submits}})])])])},staticRenderFns:[]};var a=e("Z0/y")(r,i,!1,function(t){e("yU5I")},"data-v-2cb50e47",null);s.a=a.exports},WKvh:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=e("jkTI"),i=e("M5Ej"),a=e("sC4j"),n=e("zZ4r"),c={data:function(){return{isShowDialog:!1,historyData:{code:0,msg:"SUCCESS",result:{count:2,list:[{currencyId:2,number:2,totalPrice:2144,type:1,unitPrice:1072,orderNo:"1517066698355"},{currencyId:2,number:2,totalPrice:2155,type:0,unitPrice:1077.5,orderNo:"1517066698355"}],pageNum:1,pageSize:5}},types:"sell",price:0,numbers:0}},created:function(){this.getNewPrc();var t=this;setInterval(function(){t.getNewPrc()},5e3)},components:{GTradHistory:r.a,GTradPart:i.a,GAlert:a.a},methods:{options:function(t){console.log(t),this.isShowDialog=!1},tradClick:function(t){this.isShowDialog=!0,console.log(t),this.numbers=parseFloat(t.number)},getNewPrc:function(){var t=this;Object(n.e)().then(function(s){t.price=s.data.data[0].close})}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("g-trad-part",{attrs:{types:t.types,price:t.price},on:{tradClick:t.tradClick}}),t._v(" "),e("g-trad-history",{attrs:{types:t.types,historydata:t.historyData.result.list}}),t._v(" "),t.isShowDialog?e("g-alert",{on:{options:t.options}},[e("div",{staticClass:"tipss"},[t._v("\n\t\t\t\t确定订单\n\t\t\t")]),t._v(" "),e("div",{staticClass:"tips"},[t._v("\n\t\t\t\t您将"+t._s("sell"===t.types?"卖出":"买入")+"ETH "+t._s(t.numbers)+"\n\t\t\t")])]):t._e()],1)},staticRenderFns:[]};var u=e("Z0/y")(c,o,!1,function(t){e("upUQ")},"data-v-d6f36604",null);s.default=u.exports},jkTI:function(t,s,e){"use strict";var r={props:{types:{type:String,value:"buy"},historydata:{type:Array,value:[]}},created:function(){console.log(this.types),console.log(this.historydata)}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"trad-history"},[e("div",{staticClass:"tips"},[t._v("最近兑换记录")]),t._v(" "),e("div",{staticClass:"history-content"},[e("ul",t._l(t.historydata,function(s,r){return e("li",{key:r},[e("div",{staticClass:"order-no",class:{buypart:"buy"===t.types,sellpart:"sell"===t.types}},[e("span",[t._v("订单号:"+t._s(s.orderNo))]),t._v(" "),1==s.type?e("span",{staticClass:"order-buy"},[t._v("卖出")]):e("span",{staticClass:"order-sell"},[t._v("买入")])]),t._v(" "),e("div",{staticClass:"order-price"},[e("span",[t._v("单价 : "+t._s(s.unitPrice))]),t._v(" "),e("span",[t._v("总价 : "+t._s(s.totalPrice))])]),t._v(" "),e("div",{staticClass:"order-price"},[e("span",[t._v("数量 : "+t._s(s.number))]),t._v(" "),e("span",[t._v("交易完成")])])])}))])])},staticRenderFns:[]};var a=e("Z0/y")(r,i,!1,function(t){e("rLD0")},"data-v-236520f8",null);s.a=a.exports},rLD0:function(t,s){},upUQ:function(t,s){},yU5I:function(t,s){}});
//# sourceMappingURL=4.02c546eb7312cba94b82.js.map