webpackJsonp([18],{"1Mg5":function(a,t){},lhMi:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{isShowTriangle:!1}},methods:{changeComponent:function(a){console.log(a),this.isShowTriangle="recommed"!==a}},components:{HeadMenu:e("3/Gx").a}},i={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"organization"},[n("head-menu"),a._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"top"},[n("router-link",{attrs:{to:"/organizationchart/recommendchart",tag:"div","data-aa":"0"}},[n("span",{on:{click:function(t){a.changeComponent("recommed")}}},[a._v("推荐图")]),a._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:!a.isShowTriangle,expression:"!isShowTriangle"}],staticClass:"triangle",attrs:{src:e("4ual"),alt:""}})]),a._v(" "),n("router-link",{attrs:{to:"/organizationchart/placementchart",tag:"div","data-aa":"1"}},[n("span",{on:{click:function(t){a.changeComponent("placement")}}},[a._v("安置结构图")]),a._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:a.isShowTriangle,expression:"isShowTriangle"}],staticClass:"triangle",attrs:{src:e("4ual"),alt:""}})])],1),a._v(" "),n("router-view")],1)],1)},staticRenderFns:[]};var o=e("Z0/y")(n,i,!1,function(a){e("1Mg5")},"data-v-7ed419a6",null);t.default=o.exports}});
//# sourceMappingURL=18.0fbf44b9257ec0b0388a.js.map