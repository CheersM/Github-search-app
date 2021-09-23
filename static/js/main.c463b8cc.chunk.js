(this["webpackJsonpgit-search"]=this["webpackJsonpgit-search"]||[]).push([[0],{44:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),i=a(12),r=a.n(i),n=a(11),h=(a(44),a(13)),l=a(9),o=a(25),d=a(34),j=a.n(d),u=a(67),b=a(68),O=a(1);function p(e){var t=e.items,a=e.count;return console.log(a),Object(O.jsx)("div",{className:"content",children:0===t.length?Object(O.jsx)("h2",{children:"\u261d\ufe0f Enter a keyword to search for the repository"}):Object(O.jsxs)("div",{className:"content__list",children:[Object(O.jsx)("div",{className:"content__list-title",children:Object(O.jsxs)("h2",{children:[a?a.toLocaleString("en"):a," repository result"]})}),Object(O.jsx)("div",{className:"content__list-block",children:t.map((function(e,t){return Object(O.jsx)("ul",{children:Object(O.jsxs)("li",{children:[Object(O.jsx)("svg",{"aria-hidden":"true",height:"16",width:"16",viewBox:"0 0 16 16",version:"1.1",children:Object(O.jsx)("path",{fillRule:"evenodd",d:"M 2 2.5 A 2.5 2.5 0 0 1 4.5 0 h 8.75 a 0.75 0.75 0 0 1 0.75 0.75 v 12.5 a 0.75 0.75 0 0 1 -0.75 0.75 h -2.5 a 0.75 0.75 0 1 1 0 -1.5 h 1.75 v -2 h -8 a 1 1 0 0 0 -0.714 1.7 a 0.75 0.75 0 0 1 -1.072 1.05 A 2.495 2.495 0 0 1 2 11.5 v -9 Z m 10.5 -1 V 9 h -8 c -0.356 0 -0.694 0.074 -1 0.208 V 2.5 a 1 1 0 0 1 1 -1 h 8 Z M 5 12.25 v 3.25 a 0.25 0.25 0 0 0 0.4 0.2 l 1.45 -1.087 a 0.25 0.25 0 0 1 0.3 0 L 8.6 15.7 a 0.25 0.25 0 0 0 0.4 -0.2 v -3.25 a 0.25 0.25 0 0 0 -0.25 -0.25 h -3.5 a 0.25 0.25 0 0 0 -0.25 0.25 Z"})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("a",{href:e.html_url,children:e.full_name}),Object(O.jsx)("p",{className:"description",children:e.description}),Object(O.jsxs)("span",{children:[Object(O.jsx)("svg",{"aria-label":"star",role:"img",height:"16",width:"16",viewBox:"0 0 16 16",version:"1.1","data-view-component":"true",children:Object(O.jsx)("path",{fillRule:"evenodd",d:"M 8 0.25 a 0.75 0.75 0 0 1 0.673 0.418 l 1.882 3.815 l 4.21 0.612 a 0.75 0.75 0 0 1 0.416 1.279 l -3.046 2.97 l 0.719 4.192 a 0.75 0.75 0 0 1 -1.088 0.791 L 8 12.347 l -3.766 1.98 a 0.75 0.75 0 0 1 -1.088 -0.79 l 0.72 -4.194 L 0.818 6.374 a 0.75 0.75 0 0 1 0.416 -1.28 l 4.21 -0.611 L 7.327 0.668 A 0.75 0.75 0 0 1 8 0.25 Z m 0 2.445 L 6.615 5.5 a 0.75 0.75 0 0 1 -0.564 0.41 l -3.097 0.45 l 2.24 2.184 a 0.75 0.75 0 0 1 0.216 0.664 l -0.528 3.084 l 2.769 -1.456 a 0.75 0.75 0 0 1 0.698 0 l 2.77 1.456 l -0.53 -3.084 a 0.75 0.75 0 0 1 0.216 -0.664 l 2.24 -2.183 l -3.096 -0.45 a 0.75 0.75 0 0 1 -0.564 -0.41 L 8 2.694 v 0.001 Z"})}),Math.abs(Number(e.stargazers_count))]}),Object(O.jsxs)("span",{children:["Language: ",e.language]}),Object(O.jsxs)("span",{children:["Created:"," ",Object(u.a)(Object(b.a)(e.created_at,"yyyy-MM-dd'T'HH:mm:ss'Z'",new Date),"yyyy-MM-dd")]}),Object(O.jsxs)("span",{children:["Updated:"," ",Object(u.a)(Object(b.a)(e.updated_at,"yyyy-MM-dd'T'HH:mm:ss'Z'",new Date),"yyyy-MM-dd")]})]})]})},t)}))})]})})}p.defaultProps={items:[],count:null};var v=p;var m=function(e){var t=e.searchValue,a=e.setSearchValue,c=e.history;return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("div",{className:"header__icon",children:Object(O.jsx)("a",{href:"/",target:"_self",children:Object(O.jsx)("img",{width:35,height:35,src:"/Github-search-app/img/github_logo.svg",alt:"Github icon"})})}),Object(O.jsxs)("div",{className:"header__search",children:[Object(O.jsx)("input",{onChange:function(e){a(e.target.value)},value:t,type:"text",placeholder:"Search or jump to..."}),Object(O.jsx)("div",{className:0===c.length?"nonValue":"header__search-value",children:c.map((function(e,a){return Object(O.jsx)("ul",{children:Object(O.jsxs)("li",{onClick:t,children:[Object(O.jsx)("svg",{"aria-hidden":"true",height:"16",width:"16",viewBox:"0 0 16 16",version:"1.1",children:Object(O.jsx)("path",{fillRule:"evenodd",d:"M 2 2.5 A 2.5 2.5 0 0 1 4.5 0 h 8.75 a 0.75 0.75 0 0 1 0.75 0.75 v 12.5 a 0.75 0.75 0 0 1 -0.75 0.75 h -2.5 a 0.75 0.75 0 1 1 0 -1.5 h 1.75 v -2 h -8 a 1 1 0 0 0 -0.714 1.7 a 0.75 0.75 0 0 1 -1.072 1.05 A 2.495 2.495 0 0 1 2 11.5 v -9 Z m 10.5 -1 V 9 h -8 c -0.356 0 -0.694 0.074 -1 0.208 V 2.5 a 1 1 0 0 1 1 -1 h 8 Z M 5 12.25 v 3.25 a 0.25 0.25 0 0 0 0.4 0.2 l 1.45 -1.087 a 0.25 0.25 0 0 1 0.3 0 L 8.6 15.7 a 0.25 0.25 0 0 0 0.4 -0.2 v -3.25 a 0.25 0.25 0 0 0 -0.25 -0.25 h -3.5 a 0.25 0.25 0 0 0 -0.25 0.25 Z"})}),e]})},a)}))})]}),Object(O.jsxs)("div",{className:"header__opt","data-title":"These options have not yet been implemented.",children:[Object(O.jsx)("img",{width:18,height:18,src:"/Github-search-app/img/bell.svg",alt:"opt icon1"}),Object(O.jsx)("img",{width:18,height:18,src:"/Github-search-app/img/plus.svg",alt:"opt icon1"}),Object(O.jsx)("img",{width:18,height:18,src:"/Github-search-app/img/user.svg",alt:"opt icon1"})]})]})},g=function(e){return{type:"SET_ITEMS",payload:e}},x=function(e){return{type:"SET_HISTORY",payload:e}};var _=function(){var e=s.a.useState(""),t=Object(o.a)(e,2),a=t[0],c=t[1],i=s.a.useState(null),r=Object(o.a)(i,2),d=r[0],u=r[1],b=Object(n.b)(),p=Object(n.c)((function(e){return{repos:e.items,historySearch:e.historySearch}})),_=p.repos,y=p.historySearch;return s.a.useEffect((function(){var e,t,c;t=function(){j.a.get("https://api.github.com/search/repositories?per_page=100&q=".concat(a)).then((function(e){var t=e.data;y.length>4?(b(g(Object.keys(_).filter((function(e){return e!==y[0]})).reduce((function(e,t){return e[t]=_[t],e}),{}))),b(x(y.slice(1).concat(a)))):(b(x(y.concat(a))),b(g(Object(l.a)(Object(l.a)({},_),{},Object(h.a)({},a,t.items)))),u(t.total_count))}))},c=500,clearTimeout(e),e=setTimeout(t,c)}),[b,y,_,a]),Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)(m,{setSearchValue:c,searchValue:a,history:y}),Object(O.jsx)(v,{items:_[y[y.length-1]],count:d})]})},y=a(35),f={items:{},historySearch:[],isLoaded:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ITEMS":return Object(l.a)(Object(l.a)({},e),{},{items:t.payload,isLoaded:!0});case"SET_HISTORY":return Object(l.a)(Object(l.a)({},e),{},{historySearch:t.payload,isLoaded:!0});default:return e}},w=Object(y.a)(S,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(n.a,{store:w,children:Object(O.jsx)(_,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.c463b8cc.chunk.js.map