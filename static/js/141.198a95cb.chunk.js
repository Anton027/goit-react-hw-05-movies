"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[141],{5141:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r,a=n(885),c=n(9128),s=n(168),u=n(6444),i=n(501),o=(0,u.ZP)(i.rU)(r||(r=(0,s.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),p=n(184),l=function(e){var t=e.to,n=e.children;return(0,p.jsxs)(o,{to:t,children:[(0,p.jsx)(c.jTe,{size:"24"}),n]})},d=n(6871),h=n(2791),f=n(1408),v=function(){var e,t,n=(0,h.useState)([]),r=(0,a.Z)(n,2),c=r[0],s=r[1],u=(0,d.UO)().movieId,o=(0,d.TH)(),v=null!==(e=null===(t=o.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";(0,h.useEffect)((function(){(0,f.x1)(u).then((function(e){s(e)}))}),[u]);var x=c.genres;return(0,p.jsxs)("main",{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)(l,{to:v,children:"back"}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{children:c.title}),c.poster_path?(0,p.jsx)("img",{src:"".concat(f.yA).concat(c.poster_path),alt:c.title}):(0,p.jsx)("img",{src:"https://via.placeholder.com/300x450",alt:c.title})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("p",{children:["User Score: ",Math.round(10*c.vote_average)," %"]}),(0,p.jsx)("h4",{children:"Overview"}),(0,p.jsx)("p",{children:c.overview}),(0,p.jsx)("h4",{children:"Genres:"}),x?(0,p.jsx)("p",{children:x.map((function(e){return e.name})).join(", ")}):(0,p.jsx)("p",{children:"No found"})]})]})]}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{to:"cast",state:o.state,children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{to:"review",state:o.state,children:"Reviews"})})]}),(0,p.jsx)(h.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading subpage..."}),children:(0,p.jsx)(d.j3,{})})]})}},1408:function(e,t,n){n.d(t,{A:function(){return g},K0:function(){return v},Qd:function(){return o},iD:function(){return l},x1:function(){return h},yA:function(){return i}});var r=n(5861),a=n(7757),c=n.n(a),s=n(4569).default,u="ff98b74c6ada2972698b8eff6707845a";s.defaults.baseURL="https://api.themoviedb.org/3/";var i="https://image.tmdb.org/t/p/w300";function o(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("trending/all/day?api_key=".concat(u,"&page=").concat(t));case 3:return n=e.sent,e.next=6,n.data.results;case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function l(e,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=").concat(n,"&include_adult=false"));case 3:return r=e.sent,e.next=6,r.data.results;case 6:return a=e.sent,e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function g(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=141.198a95cb.chunk.js.map