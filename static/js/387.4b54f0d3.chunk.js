"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r,a=t(861),u=t(439),c=t(757),s=t.n(c),i=t(791),o=t(689),p=t(952),f=t(826),v=t(766),l=t(867).ZP.ul(r||(r=(0,v.Z)(["\n list-style-type: none;\n"]))),h=t(184);function d(){var n=(0,o.UO)().movieId,e=(0,i.useState)([]),t=(0,u.Z)(e,2),r=t[0],c=t[1],v=(0,i.useState)(!1),d=(0,u.Z)(v,2),g=d[0],x=d[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,(0,p.Bt)(n);case 4:t=e.sent,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,h.jsxs)(h.Fragment,{children:[g&&(0,h.jsx)(f.Z,{}),0!==r.length&&(0,h.jsx)("div",{children:(0,h.jsx)(l,{children:r.map((function(n){return(0,h.jsxs)("li",{children:[(0,h.jsxs)("h2",{children:["Author: ",n.author]}),(0,h.jsx)("p",{children:n.content})]},n.id)}))})}),0===r.length&&(0,h.jsx)("div",{children:"We don't have any reviews for this movie"})]})}},952:function(n,e,t){t.d(e,{Bt:function(){return v},Ml:function(){return o},Tg:function(){return i},Y5:function(){return p},wL:function(){return f}});var r=t(861),a=t(757),u=t.n(a),c=t(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="c8f39373aa3f9e58d9844c0d233508c8",i=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.4b54f0d3.chunk.js.map