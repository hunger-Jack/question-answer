webpackJsonp([2],{"32Xf":function(t,s,e){"use strict";var n=e("Dd8w"),a=e.n(n),i=(e("7+uW"),e("YaEn"),e("IcnI"),e("kjSA")),r=e("NYxO"),c={name:"ItemContainer",computed:a()({},Object(r.d)(["isBegin","test","currentId"])),methods:a()({},Object(r.c)(["toItem","nextTest","recordAnswer"])),mounted:function(){Object(i.a)(!1)}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"itemContainer"}},[e("header",{staticClass:"top_tips"},[!1===t.isBegin?e("span",{staticClass:"tips_text"},[t._v("测试题")]):e("span",{staticClass:"tips_text"},[t._v(t._s(t.test[t.currentId].tip))])]),t._v(" "),!1===t.isBegin?e("div",{staticClass:"questions"}):e("div",{staticClass:"tests"},[e("div",{staticClass:"tests-layout"},[e("header",{staticClass:"tests-header"},[t._v(t._s(t.test[t.currentId].qustion))]),t._v(" "),e("ul",{staticClass:"tests-content"},t._l(t.test[t.currentId].answers,function(s,n){return e("li",{key:n,on:{touchstart:function(s){t.recordAnswer(n)}}},[e("span",{staticClass:"tests-sort"},[t._v(t._s(s.type))]),t._v(" "),e("span",[t._v(t._s(s.num1))])])}))])]),t._v(" "),!1===t.isBegin?e("div",{staticClass:"btn btn-home",on:{touchstart:t.toItem}}):e("div",{staticClass:"btn btn-item",on:{touchstart:t.nextTest}})])},staticRenderFns:[]};var u=e("VU/8")(c,o,!1,function(t){e("P0ht")},"data-v-054ac02d",null);s.a=u.exports},P0ht:function(t,s){},t7UO:function(t,s){},xldL:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={name:"item",components:{ItemContainer:e("32Xf").a}},a={render:function(){var t=this.$createElement;return(this._self._c||t)("ItemContainer")},staticRenderFns:[]};var i=e("VU/8")(n,a,!1,function(t){e("t7UO")},"data-v-a2c4241c",null);s.default=i.exports}});
//# sourceMappingURL=2.0be75e21aa3d74f16f6c.js.map