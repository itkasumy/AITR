webpackJsonp([19],{"8fzB":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("3/Gx"),i=a("zZ4r"),r=a("2sCs"),c=a.n(r),n={data:function(){return{types:0,title:"注册币",showTransfer:!0}},components:{HeadMenu:e.a},created:function(){console.log("created");var t=this.$route.params.typeid;switch(this.types=t,t){case 0:this.title="注册币",this.showTransfer=!0;break;case 1:this.title="收益币",this.showTransfer=!0;break;case 2:this.title="重构币",this.showTransfer=!1;break;case 3:this.title="众筹币",this.showTransfer=!1;break;case 4:this.title="拆分币",this.showTransfer=!1;break;case 5:this.title="消费币",this.showTransfer=!1}c.a.get(i.f,{headers:{access_account:i.a,access_token:i.b},params:{currency:t}}).then(function(t){console.log(t)})},watch:{$route:function(){console.log("watch");var t=this.$route.params.typeid;switch(this.types=t,t){case 0:this.title="注册币",this.showTransfer=!0;break;case 1:this.title="收益币",this.showTransfer=!0;break;case 2:this.title="重构币",this.showTransfer=!1;break;case 3:this.title="众筹币",this.showTransfer=!1;break;case 4:this.title="拆分币",this.showTransfer=!1;break;case 5:this.title="消费币",this.showTransfer=!1}}}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"jiangjin-detail"},[a("HeadMenu"),t._v(" "),a("div",{staticClass:"detail-container"},[a("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),t._m(0),t._v(" "),t.showTransfer?a("div",{staticClass:"btn"},[a("router-link",{attrs:{to:{name:"cointransfer",params:{typeid:t.types}},tag:"span"}},[t._v("转账")])],1):t._e()])],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",{staticClass:"detail-item"},[a("div",{staticClass:"th"},[a("div",{staticClass:"bianhao"},[t._v("会员编号:1")]),t._v(" "),a("div",{staticClass:"date"},[t._v("2017/12/27 17:51:11")])]),t._v(" "),a("div",{staticClass:"tr"},[a("div",{staticClass:"td"},[t._v("改变量:-100")]),t._v(" "),a("div",{staticClass:"td"},[t._v("改变后余额:500")])]),t._v(" "),a("div",{staticClass:"tr"},[t._v("备注:为会员生成子账户扣除拆分币")])]),t._v(" "),a("li",{staticClass:"detail-item"},[a("div",{staticClass:"th"},[a("div",{staticClass:"bianhao"},[t._v("会员编号:1")]),t._v(" "),a("div",{staticClass:"date"},[t._v("2017/12/27 17:51:11")])]),t._v(" "),a("div",{staticClass:"tr"},[a("div",{staticClass:"td"},[t._v("改变量:-100")]),t._v(" "),a("div",{staticClass:"td"},[t._v("改变后余额:500")])]),t._v(" "),a("div",{staticClass:"tr"},[t._v("备注:为会员生成子账户扣除拆分币")])])])}]};var h=a("Z0/y")(n,l,!1,function(t){a("ComS")},"data-v-5253cea9",null);s.default=h.exports},ComS:function(t,s){}});
//# sourceMappingURL=19.34dae4535ef0743f030e.js.map