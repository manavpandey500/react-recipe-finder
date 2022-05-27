(this["webpackJsonprecipe-search-app"]=this["webpackJsonprecipe-search-app"]||[]).push([[0],{53:function(e,n,t){},76:function(e,n,t){"use strict";t.r(n);var c,i,r,a,o,s,l,d,p,b,j,x,h,O,u,g=t(0),f=t.n(g),w=t(11),m=t.n(w),v=(t(53),t(28)),k=t(42),y=t(13),C=t(5),S=t(43),z=t.n(S),I=t(6),M=t(103),J=t(101),R=t(104),T=t(102),_=t(3),q=I.a.div(c||(c=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 300px;\n  box-shadow: 0 3px 10px 0 #aaa;\n"]))),B=I.a.img(i||(i=Object(C.a)(["\n  object-fit: cover;\n  height: 200px;\n"]))),E=I.a.span(r||(r=Object(C.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: black;\n  margin: 10px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),N=I.a.span(a||(a=Object(C.a)(["\n  color: #eb3300;\n  font-size: 18px;\n  text-align: center;\n  border: solid 1px #eb3300;\n  border-radius: 3px;\n  padding: 10px 15px;\n  cursor: pointer;\n"]))),W=Object(I.a)(N)(o||(o=Object(C.a)(["\n  color: green;\n  border: solid 1px green;\n  margin-bottom: 12px;\n"]))),A=Object(I.a)(N)(s||(s=Object(C.a)(["\n  color: green;\n  border: solid 1px green;\n"]))),D=function(e){var n=Object(g.useState)(""),t=Object(y.a)(n,2),c=t[0],i=t[1],r=e.recipe,a=r.label,o=r.image,s=r.ingredients,l=r.url;return Object(_.jsxs)(q,{children:[Object(_.jsxs)(M.a,{onClose:function(){return console.log("adsadad")},"aria-labelledby":"simple-dialog-title",open:!!c,children:[Object(_.jsx)(R.a,{children:"Ingredients"}),Object(_.jsxs)(J.a,{children:[Object(_.jsx)(E,{children:a}),Object(_.jsxs)("table",{children:[Object(_.jsxs)("thead",{children:[Object(_.jsx)("th",{children:"Ingredient"}),Object(_.jsx)("th",{children:"Weight"})]}),Object(_.jsx)("tbody",{children:s.map((function(e,n){return Object(_.jsxs)("tr",{className:"ingredient-list",children:[Object(_.jsx)("td",{children:e.text}),Object(_.jsx)("td",{children:e.weight})]},n)}))})]})]}),Object(_.jsxs)(T.a,{children:[Object(_.jsx)(A,{onClick:function(){return window.open(l)},children:"See More"}),Object(_.jsx)(N,{onClick:function(){return i("")},children:"Close"})]})]}),Object(_.jsx)(B,{src:o,alt:a}),Object(_.jsx)(E,{children:a}),Object(_.jsx)(W,{onClick:function(){return i(!c)},children:"Ingredients"}),Object(_.jsx)(N,{onClick:function(){return window.open(l)},children:"See Complete Recipe"})]})},F=I.a.div(l||(l=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),G=I.a.div(d||(d=Object(C.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),H=I.a.div(p||(p=Object(C.a)(["\n  background-color: black;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  padding: 20px;\n  font-size: 25px;\n  font-weight: bold;\n  box-shadow: 0 3px 6px 0 #555;\n"]))),K=I.a.div(b||(b=Object(C.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 10px 10px;\n  border-radius: 6px;\n  margin-left: 20px;\n  width: 50%;\n  background-color: white;\n"]))),L=I.a.img(j||(j=Object(C.a)(["\n  width: 32px;\n  height: 32px;\n"]))),P=I.a.img(x||(x=Object(C.a)(["\n  width: 36px;\n  height: 36px;\n  margin: 15px;\n"]))),Q=I.a.img(h||(h=Object(C.a)(["\n  width: 200px;\n  height: 220px;\n  margin: 320px;\n  opacity: 33%;\n"]))),U=I.a.input(O||(O=Object(C.a)(["\n  color: black;\n  font-size: 16px;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin-left: 15px;\n"]))),V=I.a.div(u||(u=Object(C.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 30px;\n  gap: 20px;\n  justify-content: space-evenly;\n"]))),X=function(){var e=Object(g.useState)(""),n=Object(y.a)(e,2),t=n[0],c=n[1],i=Object(g.useState)([]),r=Object(y.a)(i,2),a=r[0],o=r[1],s=Object(g.useState)(),l=Object(y.a)(s,2),d=l[0],p=l[1],b=function(){var e=Object(k.a)(Object(v.a)().mark((function e(n){var t;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("https://api.edamam.com/search?q=".concat(n,"&app_id=").concat("bda40db6","&app_key=").concat("2318a8b5bc324b1a529d5f7656b72b7e"));case 2:t=e.sent,o(t.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(_.jsxs)(F,{children:[Object(_.jsxs)(H,{children:[Object(_.jsxs)(G,{children:[Object(_.jsx)(P,{src:"/react-recipe-finder/logo.svg"}),"Millennial Cooking"]}),Object(_.jsxs)(K,{children:[Object(_.jsx)(L,{src:"/react-recipe-finder/search-icon.svg"}),Object(_.jsx)(U,{placeholder:"Search Recipe",value:t,onChange:function(e){clearTimeout(d),c(e.target.value);var n=setTimeout((function(){return b(e.target.value)}),500);p(n)}})]})]}),Object(_.jsx)(V,{children:null!==a&&void 0!==a&&a.length?a.map((function(e,n){return Object(_.jsx)(D,{recipe:e.recipe},n)})):Object(_.jsx)(Q,{src:"/react-recipe-finder/cookingbg.svg"})})]})};m.a.render(Object(_.jsx)(f.a.StrictMode,{children:Object(_.jsx)(X,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.8ba216c2.chunk.js.map