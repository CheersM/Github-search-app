(this["webpackJsonpgit-search"]=this["webpackJsonpgit-search"]||[]).push([[0],{47:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),r=a(13),i=a.n(r),n=a(12),h=a(36),l=(a(47),a(14)),o=a(9),d=a(22),j=a(37),u=a.n(j),b=a(72),O=a(73),p=a(1);function v(e){var t=e.items,a=e.count;return Object(p.jsx)("div",{className:"content",children:0===t.length?Object(p.jsx)("h2",{children:"\u261d\ufe0f Enter a keyword to search for the repository"}):Object(p.jsxs)("div",{className:"content__list",children:[Object(p.jsx)("div",{className:"content__list-title",children:Object(p.jsxs)("h2",{children:[a?a.toLocaleString("en"):a," repository result"]})}),Object(p.jsx)("div",{className:"content__list-block",children:t.map((function(e,t){return Object(p.jsx)("ul",{children:Object(p.jsxs)("li",{children:[Object(p.jsx)("svg",{"aria-hidden":"true",height:"16",width:"16",viewBox:"0 0 16 16",version:"1.1",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M 2 2.5 A 2.5 2.5 0 0 1 4.5 0 h 8.75 a 0.75 0.75 0 0 1 0.75 0.75 v 12.5 a 0.75 0.75 0 0 1 -0.75 0.75 h -2.5 a 0.75 0.75 0 1 1 0 -1.5 h 1.75 v -2 h -8 a 1 1 0 0 0 -0.714 1.7 a 0.75 0.75 0 0 1 -1.072 1.05 A 2.495 2.495 0 0 1 2 11.5 v -9 Z m 10.5 -1 V 9 h -8 c -0.356 0 -0.694 0.074 -1 0.208 V 2.5 a 1 1 0 0 1 1 -1 h 8 Z M 5 12.25 v 3.25 a 0.25 0.25 0 0 0 0.4 0.2 l 1.45 -1.087 a 0.25 0.25 0 0 1 0.3 0 L 8.6 15.7 a 0.25 0.25 0 0 0 0.4 -0.2 v -3.25 a 0.25 0.25 0 0 0 -0.25 -0.25 h -3.5 a 0.25 0.25 0 0 0 -0.25 0.25 Z"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("a",{href:e.html_url,children:e.full_name}),Object(p.jsx)("p",{className:"description",children:e.description}),Object(p.jsxs)("span",{children:[Object(p.jsx)("svg",{"aria-label":"star",role:"img",height:"16",width:"16",viewBox:"0 0 16 16",version:"1.1","data-view-component":"true",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M 8 0.25 a 0.75 0.75 0 0 1 0.673 0.418 l 1.882 3.815 l 4.21 0.612 a 0.75 0.75 0 0 1 0.416 1.279 l -3.046 2.97 l 0.719 4.192 a 0.75 0.75 0 0 1 -1.088 0.791 L 8 12.347 l -3.766 1.98 a 0.75 0.75 0 0 1 -1.088 -0.79 l 0.72 -4.194 L 0.818 6.374 a 0.75 0.75 0 0 1 0.416 -1.28 l 4.21 -0.611 L 7.327 0.668 A 0.75 0.75 0 0 1 8 0.25 Z m 0 2.445 L 6.615 5.5 a 0.75 0.75 0 0 1 -0.564 0.41 l -3.097 0.45 l 2.24 2.184 a 0.75 0.75 0 0 1 0.216 0.664 l -0.528 3.084 l 2.769 -1.456 a 0.75 0.75 0 0 1 0.698 0 l 2.77 1.456 l -0.53 -3.084 a 0.75 0.75 0 0 1 0.216 -0.664 l 2.24 -2.183 l -3.096 -0.45 a 0.75 0.75 0 0 1 -0.564 -0.41 L 8 2.694 v 0.001 Z"})}),Math.abs(Number(e.stargazers_count))]}),Object(p.jsxs)("span",{children:["Language: ",e.language]}),Object(p.jsxs)("span",{children:["Created:"," ",Object(b.a)(Object(O.a)(e.created_at,"yyyy-MM-dd'T'HH:mm:ss'Z'",new Date),"yyyy-MM-dd")]}),Object(p.jsxs)("span",{children:["Updated:"," ",Object(b.a)(Object(O.a)(e.updated_at,"yyyy-MM-dd'T'HH:mm:ss'Z'",new Date),"yyyy-MM-dd")]})]})]})},t)}))})]})})}v.defaultProps={items:[],count:null};var g=v;var m=function(e){var t=e.searchValue,a=e.setSearchValue,c=e.history;return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)("div",{className:"header__icon",children:Object(p.jsx)("a",{href:"/",target:"_self",children:Object(p.jsx)("img",{width:35,height:35,src:"/Github-search-app/img/github_logo.svg",alt:"Github icon"})})}),Object(p.jsxs)("div",{className:"header__search",children:[Object(p.jsx)("input",{onChange:function(e){a(e.target.value)},value:t,type:"text",placeholder:"Search or jump to..."}),Object(p.jsx)("div",{className:0===c.length?"nonValue":"header__search-value",children:c.map((function(e,c){return Object(p.jsx)("ul",{children:Object(p.jsxs)("li",{onClick:function(){e!==t&&a(e)},children:[Object(p.jsx)("svg",{"aria-hidden":"true",height:"16",width:"16",viewBox:"0 0 16 16",version:"1.1",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M 2 2.5 A 2.5 2.5 0 0 1 4.5 0 h 8.75 a 0.75 0.75 0 0 1 0.75 0.75 v 12.5 a 0.75 0.75 0 0 1 -0.75 0.75 h -2.5 a 0.75 0.75 0 1 1 0 -1.5 h 1.75 v -2 h -8 a 1 1 0 0 0 -0.714 1.7 a 0.75 0.75 0 0 1 -1.072 1.05 A 2.495 2.495 0 0 1 2 11.5 v -9 Z m 10.5 -1 V 9 h -8 c -0.356 0 -0.694 0.074 -1 0.208 V 2.5 a 1 1 0 0 1 1 -1 h 8 Z M 5 12.25 v 3.25 a 0.25 0.25 0 0 0 0.4 0.2 l 1.45 -1.087 a 0.25 0.25 0 0 1 0.3 0 L 8.6 15.7 a 0.25 0.25 0 0 0 0.4 -0.2 v -3.25 a 0.25 0.25 0 0 0 -0.25 -0.25 h -3.5 a 0.25 0.25 0 0 0 -0.25 0.25 Z"})}),e]})},c)}))})]}),Object(p.jsxs)("div",{className:"header__opt","data-title":"These options have not yet been implemented.",children:[Object(p.jsx)("img",{width:18,height:18,src:"/Github-search-app/img/bell.svg",alt:"opt icon1"}),Object(p.jsx)("img",{width:18,height:18,src:"/Github-search-app/img/plus.svg",alt:"opt icon1"}),Object(p.jsx)("img",{width:18,height:18,src:"/Github-search-app/img/user.svg",alt:"opt icon1"})]})]})},x=function(e){return{type:"SET_ITEMS",payload:e}},y=function(e){return{type:"SET_HISTORY",payload:e}};var f=function(){var e=s.a.useState(""),t=Object(d.a)(e,2),a=t[0],c=t[1],r=s.a.useState(""),i=Object(d.a)(r,2),h=i[0],j=i[1],b=s.a.useState(null),O=Object(d.a)(b,2),v=O[0],f=O[1],_=Object(n.b)(),S=Object(n.c)((function(e){return{repos:e.items,historySearch:e.historySearch}})),w=S.repos,M=S.historySearch;return s.a.useEffect((function(){!function(e,t){clearTimeout(h);var a=setTimeout(e,t);j(a)}((function(){a&&u.a.get("https://api.github.com/search/repositories?per_page=100&q=".concat(a)).then((function(e){var t=e.data;M.length>4?(_(x(Object.keys(w).filter((function(e){return e!==M[0]})).reduce((function(e,t){return e[t]=w[t],e}),{}))),_(y(M.slice(1).concat(a)))):(_(y(M.concat(a))),_(x(Object(o.a)(Object(o.a)({},w),{},Object(l.a)({},a,t.items)))),f(t.total_count))}))}),500)}),[a]),Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)(m,{setSearchValue:function(e){c(e)},searchValue:a,history:M}),Object(p.jsx)(g,{items:w[M[M.length-1]],count:v})]})},_={items:{},historySearch:[],isLoaded:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ITEMS":return Object(o.a)(Object(o.a)({},e),{},{items:t.payload,isLoaded:!0});case"SET_HISTORY":return Object(o.a)(Object(o.a)({},e),{},{historySearch:t.payload,isLoaded:!0});default:return e}},w=a(11),M=a(27),T=a(38),L={key:"root",storage:a.n(T).a},N=Object(M.a)(L,S),Z=function(){var e=Object(w.b)(N);return{store:e,persistor:Object(M.b)(e)}}(),E=Z.store,V=Z.persistor;i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(n.a,{store:E,children:Object(p.jsx)(h.a,{loading:null,persistor:V,children:Object(p.jsx)(f,{})})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.5fc1a13e.chunk.js.map