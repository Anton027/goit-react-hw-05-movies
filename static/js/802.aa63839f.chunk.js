"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[802],{7802:function(t,e,n){n.r(e);var r=n(8152),a=n(2791),c=n(6871),u=n(1408),s=n(184);e.default=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],o=e[1],i=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.A)(i).then((function(t){o(t.results)}))}),[i]),(0,s.jsx)("main",{children:(0,s.jsx)("ul",{children:n.map((function(t){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("p",{children:["Author: ",t.author]}),(0,s.jsx)("p",{children:t.content})]},t.id)}))})})}},1408:function(t,e,n){n.d(e,{A:function(){return x},K0:function(){return d},Qd:function(){return i},iD:function(){return l},x1:function(){return h},yA:function(){return o}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569).default,s="ff98b74c6ada2972698b8eff6707845a";u.defaults.baseURL="https://api.themoviedb.org/3/";var o="https://image.tmdb.org/t/p/w300";function i(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("trending/all/day?api_key=".concat(s,"&page=").concat(e));case 3:return n=t.sent,t.next=6,n.data.results;case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function l(t,e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e,n){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=").concat(n,"&include_adult=false"));case 3:return r=t.sent,t.next=6,r.data.results;case 6:return a=t.sent,t.abrupt("return",a);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return n=t.sent,t.next=6,n.data;case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function d(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n=t.sent,t.next=6,n.data;case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return n=t.sent,t.next=6,n.data;case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=802.aa63839f.chunk.js.map