(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21de4f"],{d2f1:function(t,c,o){"use strict";o.r(c);var n=o("7a23"),a=Object(n["h"])("h1",null,"單一產品",-1);function e(t,c,o,e,u,r){return Object(n["q"])(),Object(n["d"])(n["a"],null,[a,Object(n["g"])(" "+Object(n["z"])(u.product),1)],64)}o("99af");var u={data:function(){return{product:{}}},mounted:function(){var t=this;console.log(this.$route.params.id);var c=this.$route.params.id,o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("dogezad","/product/").concat(c);this.$http.get(o).then((function(c){c.data.success&&(t.product=c.data.product),console.log(c)})).catch((function(t){console.log(t)}))}};u.render=e;c["default"]=u}}]);
//# sourceMappingURL=chunk-2d21de4f.d6187759.js.map