"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[507],{350:function(e,t,n){n.d(t,{Df:function(){return o},M1:function(){return l},YJ:function(){return i},tx:function(){return f},uP:function(){return p}});var r=n(861),a=n(757),u=n.n(a),c=n(243),s="2a9f3f1884aca3d0f8736b654da9b9f1";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day",{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getMoviesById",t),e.next=3,c.Z.get("/movie/".concat(t),{params:{api_key:s}});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,c.Z.get("/movie/".concat(t,"/credits"),{params:{api_key:s}});case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,c.Z.get("/movie/".concat(t,"/reviews"),{params:{api_key:s}});case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,c.Z.get("/search/movie",{params:{api_key:s,query:t}});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},507:function(e,t,n){n.r(t);var r=n(439),a=n(791),u=n(87),c=n(350),s=n(676),o=n(184);t.default=function(){var e,t=(0,u.lr)(),n=(0,r.Z)(t,2),i=n[0],l=n[1],f=null!==(e=i.get("query"))&&void 0!==e?e:"",p=(0,a.useState)(null),v=(0,r.Z)(p,2),d=v[0],h=v[1],m=(0,a.useState)(null),x=(0,r.Z)(m,2),g=x[0],y=x[1],Z=(0,a.useState)(!1),k=(0,r.Z)(Z,2),w=k[0],b=k[1],j=(0,a.useState)(f),_=(0,r.Z)(j,2),S=_[0],q=_[1];(0,a.useEffect)((function(){""!==f&&(h(null),y(null),b(!0),(0,c.uP)(f).then((function(e){h(e.results),y(e.total_results),b(!1)})).catch(console.log))}),[f]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.query.value.toLowerCase().trim();l({query:t})},children:[(0,o.jsx)("input",{type:"text",name:"query",value:S,onChange:function(e){q(e.currentTarget.value)},placeholder:"Enter movie name"}),(0,o.jsx)("button",{type:"submit",children:"Search"})]}),w&&(0,o.jsx)("div",{children:(0,o.jsx)("p",{children:"Loading..."})}),d&&(0,o.jsx)(s.Z,{movies:d}),0===g&&(0,o.jsx)("div",{children:"Movies not found"})]})}},676:function(e,t,n){var r=n(689),a=n(87),u=n(184);t.Z=function(e){var t=e.movies,n=(0,r.TH)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Trending Today"}),(0,u.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:n},children:r})},t)}))})]})}}}]);
//# sourceMappingURL=507.c5dd179d.chunk.js.map