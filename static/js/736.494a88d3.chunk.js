"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r,a,c=e(439),u=e(689),i=e(791),s=e(952),o=e(826),p=e(766),f=e(867),l=f.ZP.ul(r||(r=(0,p.Z)(["\n    \n"]))),d=f.ZP.p(a||(a=(0,p.Z)(["\n    \n"]))),v=e(184);function h(){var n=(0,u.UO)().movieId,t=(0,i.useState)([]),e=(0,c.Z)(t,2),r=e[0],a=e[1],p=(0,i.useState)(!1),f=(0,c.Z)(p,2),h=f[0],g=f[1];return(0,i.useEffect)((function(){g(!0),(0,s.wL)(n).then((function(n){a(n)})).catch((function(n){console.log(n)})).finally((function(){g(!1)}))}),[n]),(0,v.jsxs)("div",{children:[h&&(0,v.jsx)(o.Z,{}),(0,v.jsx)(l,{children:r.map((function(n){var t=n.id,e=n.profile_path,r=n.original_name,a=n.name,c=n.character;return(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{width:"200px",src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:r}),(0,v.jsx)(d,{children:a}),(0,v.jsxs)(d,{children:["Character: ",c]})]},t)}))})]})}},952:function(n,t,e){e.d(t,{Bt:function(){return l},Ml:function(){return o},Tg:function(){return s},Y5:function(){return p},wL:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="c8f39373aa3f9e58d9844c0d233508c8",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.494a88d3.chunk.js.map