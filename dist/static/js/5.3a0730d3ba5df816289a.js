webpackJsonp([5],{M5Ej:function(t,s,e){"use strict";var i={data:function(){return{numbers:0,prices:0}},props:{types:{type:String,value:"buy"},price:{type:Number,value:0},number:{type:Number,value:0}},methods:{submits:function(){var t={};t.price=this.prices,t.number=this.numbers,this.$emit("tradClick",t)}},computed:{typess:function(){return"buy"===this.types?"立刻买入":"立刻卖出"}},watch:{price:function(){this.prices=this.price}}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"trad-price"},[e("form",{attrs:{action:""}},[e("div",{staticClass:"text"},[e("span",[t._v(t._s("buy"===t.types?"买入价":"卖出价"))])]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.prices,expression:"prices"}],staticClass:"buy-inp-price",class:{buypart:"buy"===t.types,sellpart:"sell"===t.types},attrs:{type:"text",placeholder:{price:t.price},disabled:""},domProps:{value:t.prices},on:{input:function(s){s.target.composing||(t.prices=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"text"},[e("span",[t._v(t._s("buy"===t.types?"买入量":"卖出量"))])]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.numbers,expression:"numbers"}],staticClass:"buy-inp-num",class:{buypart:"buy"===t.types,sellpart:"sell"===t.types},attrs:{type:"number",placeholder:"0"},domProps:{value:t.numbers},on:{input:function(s){s.target.composing||(t.numbers=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"total"},[e("span",[t._v("合计: ")]),e("span",{style:{color:"buy"===t.types?"#FFAE11":"#4A90E2"}},[t._v(" "+t._s(t.numbers*t.prices)+" ")]),e("span",[t._v(" USDT")])]),t._v(" "),e("div",{staticClass:"submits"},[e("input",{staticClass:"submit",style:{background:"buy"===t.types?"#FFAE11":"#4A90E2"},attrs:{type:"button",value:t.typess},on:{click:t.submits}})])])])},staticRenderFns:[]};var a=e("Z0/y")(i,r,!1,function(t){e("yU5I")},"data-v-2cb50e47",null);s.a=a.exports},fnnz:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("jkTI"),r=e("M5Ej"),a=e("sC4j"),n=e("zZ4r"),c={data:function(){return{isShowDialog:!1,price:0}},created:function(){this.getNewPrc();var t=this;setInterval(function(){t.getNewPrc()},5e3)},components:{GTradHistory:i.a,GTradPart:r.a,GAlert:a.a},methods:{options:function(t){console.log(t),this.isShowDialog=!1},tradClick:function(){this.isShowDialog=!0},getNewPrc:function(){var t=this;Object(n.e)().then(function(s){t.price=s.data.data[0].close})}}},o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"buy"},[s("g-trad-part",{attrs:{types:"buy",price:this.price},on:{tradClick:this.tradClick}}),this._v(" "),s("g-trad-history",{attrs:{types:"buy"}}),this._v(" "),this.isShowDialog?s("g-alert",{on:{options:this.options}}):this._e()],1)},staticRenderFns:[]};var u=e("Z0/y")(c,o,!1,function(t){e("o5gN")},"data-v-c8e62ac8",null);s.default=u.exports},jkTI:function(t,s,e){"use strict";var i={props:{types:{type:String,value:"buy"},historydata:{type:Array,value:[]}},created:function(){console.log(this.types),console.log(this.historydata)}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"trad-history"},[e("div",{staticClass:"tips"},[t._v("最近兑换记录")]),t._v(" "),e("div",{staticClass:"history-content"},[e("ul",t._l(t.historydata,function(s,i){return e("li",{key:i},[e("div",{staticClass:"order-no",class:{buypart:"buy"===t.types,sellpart:"sell"===t.types}},[e("span",[t._v("订单号:"+t._s(s.orderNo))]),t._v(" "),1==s.type?e("span",{staticClass:"order-buy"},[t._v("卖出")]):e("span",{staticClass:"order-sell"},[t._v("买入")])]),t._v(" "),e("div",{staticClass:"order-price"},[e("span",[t._v("单价 : "+t._s(s.unitPrice))]),t._v(" "),e("span",[t._v("总价 : "+t._s(s.totalPrice))])]),t._v(" "),e("div",{staticClass:"order-price"},[e("span",[t._v("数量 : "+t._s(s.number))]),t._v(" "),e("span",[t._v("交易完成")])])])}))])])},staticRenderFns:[]};var a=e("Z0/y")(i,r,!1,function(t){e("rLD0")},"data-v-236520f8",null);s.a=a.exports},o5gN:function(t,s){},rLD0:function(t,s){},yU5I:function(t,s){}});
//# sourceMappingURL=5.3a0730d3ba5df816289a.js.map