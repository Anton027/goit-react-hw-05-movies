"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{5415:function(t,e,n){n.r(e);var r=n(885),a=n(2791),u=n(6871),c=n(501),s=n(1408),i=n(184);e.default=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],o=e[1],p=(0,a.useState)(1),f=(0,r.Z)(p,1)[0],l=(0,u.TH)();return(0,a.useEffect)((function(){(0,s.Qd)(f).then((function(t){return o(t)}))}),[f]),(0,i.jsx)("main",{children:n.length>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Tranding today"}),(0,i.jsx)("ul",{children:n.map((function(t){var e=t.id,n=t.title,r=t.original_name;return(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{to:"/movies/".concat(e),state:{from:l},children:r||n})},e)}))})]}):(0,i.jsx)("h2",{children:"Not found Movies"})})}},1408:function(t,e,n){n.d(e,{A:function(){return x},K0:function(){return v},Qd:function(){return o},iD:function(){return f},x1:function(){return h},yA:function(){return i}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569).default,s="ff98b74c6ada2972698b8eff6707845a";c.defaults.baseURL="https://api.themoviedb.org/3/";var i="https://image.tmdb.org/t/p/w300";function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("trending/all/day?api_key=".concat(s,"&page=").concat(e));case 3:return n=t.sent,t.next=6,n.data.results;case 6:return r=t.sent,t.abrupt("return",r);case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function f(t,e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(e,n){var r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=").concat(n,"&include_adult=false"));case 3:return r=t.sent,t.next=6,r.data.results;case 6:return a=t.sent,t.abrupt("return",a);case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return n=t.sent,t.next=6,n.data;case 6:return r=t.sent,t.abrupt("return",r);case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function v(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n=t.sent,t.next=6,n.data;case 6:return r=t.sent,t.abrupt("return",r);case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return n=t.sent,t.next=6,n.data;case 6:return r=t.sent,t.abrupt("return",r);case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=415.84cfe5cd.chunk.js.map