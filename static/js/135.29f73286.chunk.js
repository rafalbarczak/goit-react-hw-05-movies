"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{256:function(n,e,r){r.d(e,{Df:function(){return o},M1:function(){return p},TP:function(){return f},tx:function(){return h},z1:function(){return u}});var t=r(861),c=r(757),a=r.n(c),i="5577624f107f96fb286666953fd25f4f",s=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:{},n.prev=1,n.next=4,fetch("https://api.themoviedb.org/3".concat(e,"?api_key=").concat(i,"&").concat(new URLSearchParams(r)));case 4:if((t=n.sent).ok){n.next=7;break}throw new Error(t.status);case 7:return n.next=9,t.json();case 9:return n.abrupt("return",n.sent);case 12:throw n.prev=12,n.t0=n.catch(1),new Error("API request failed: ".concat(n.t0));case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s("/trending/movie/day"));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s("/search/movie",{query:e}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s("/movie/".concat(e)));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s("/movie/".concat(e,"/credits")));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s("/movie/".concat(e,"/reviews")));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},135:function(n,e,r){r.r(e),r.d(e,{default:function(){return v}});var t=r(861),c=r(439),a=r(757),i=r.n(a),s=r(791),o=r(256),u=r(689),f=r(87),p="MovieDetails_container__Ys+c9",h="MovieDetails_back-btn__hUGNy",l=r(184),v=function(){var n=(0,s.useState)(),e=(0,c.Z)(n,2),r=e[0],a=e[1],v=(0,u.s0)(),d=(0,u.UO)().movieId;(0,s.useEffect)((function(){function n(){return(n=(0,t.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.TP)(d);case 3:e=n.sent,a(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[d]);return(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:r&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("button",{onClick:function(){v("/")},className:h,children:[" ","Go back"," "]}),(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(r.poster_path),alt:"Movie poster"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"".concat(r.title," (").concat(r.release_date.slice(0,4),")")}),(0,l.jsxs)("p",{children:["User score: ","".concat(parseInt(10*r.vote_average),"%")]}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:r.overview}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("p",{children:r.genres.map((function(n){return"".concat(n.name," ")}))})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(f.rU,{to:"/movies/".concat(d,"/cast"),children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(f.rU,{to:"/movies/".concat(d,"/reviews"),children:"Reviews"})})]})]}),(0,l.jsx)(u.j3,{})]})})}},861:function(n,e,r){function t(n,e,r,t,c,a,i){try{var s=n[a](i),o=s.value}catch(u){return void r(u)}s.done?e(o):Promise.resolve(o).then(t,c)}function c(n){return function(){var e=this,r=arguments;return new Promise((function(c,a){var i=n.apply(e,r);function s(n){t(i,c,a,s,o,"next",n)}function o(n){t(i,c,a,s,o,"throw",n)}s(void 0)}))}}r.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=135.29f73286.chunk.js.map