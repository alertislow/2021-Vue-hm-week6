(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2261a6"],{e6dc:function(t,c,n){"use strict";n.r(c);var e=n("7a23"),o=Object(e["h"])("h1",null,"產品列表",-1),a=Object(e["g"])("連結");function u(t,c,n,u,d,i){var l=Object(e["x"])("router-link");return Object(e["q"])(),Object(e["d"])(e["a"],null,[o,Object(e["h"])("table",null,[Object(e["h"])("tbody",null,[(Object(e["q"])(!0),Object(e["d"])(e["a"],null,Object(e["w"])(d.products,(function(t){return Object(e["q"])(),Object(e["d"])("tr",{key:t.id},[Object(e["h"])("td",null,Object(e["z"])(t.title),1),Object(e["h"])("td",null,Object(e["z"])(t.price),1),Object(e["h"])("td",null,[Object(e["h"])(l,{to:"/product/".concat(t.id)},{default:Object(e["D"])((function(){return[a]})),_:2},1032,["to"])])])})),128))])])],64)}n("99af");var d={data:function(){return{products:[],pagination:{},isLoading:!1}},created:function(){var t=this,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("dogezad","/products/all");this.$http.get(c).then((function(c){c.data.success&&(t.products=c.data.products,t.pagination=c.data.pagination,t.isLoading=!1),console.log(c)})).catch((function(t){console.log(t)}))}};d.render=u;c["default"]=d}}]);
//# sourceMappingURL=chunk-2d2261a6.4d3d002c.js.map