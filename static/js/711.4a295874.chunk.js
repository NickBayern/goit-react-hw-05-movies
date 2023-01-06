"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[711],{711:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n,a,c,i,o,s,u=r(439),p=r(689),l=r(791),f=r(530),h=r(168),d=r(934),v=d.Z.h2(n||(n=(0,h.Z)(["\n  margin: 20px 0;\n"]))),g=d.Z.ul(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  gap: 25px;\n"]))),m=d.Z.li(c||(c=(0,h.Z)(["\n  list-style: none;\n  font-size: 16px;\n  font-weight: 600;\n"]))),x=d.Z.p(i||(i=(0,h.Z)(["\n  margin: 5px 0;\n  color: gray;\n"]))),b=d.Z.img(o||(o=(0,h.Z)(["\n  border-radius: 5px;\n"]))),_=d.Z.div(s||(s=(0,h.Z)(["\n  text-align: center;\n"]))),Z=r(184),w=function(){var e=(0,l.useState)(""),t=(0,u.Z)(e,2),r=t[0],n=t[1],a=(0,p.UO)().movieId;return(0,l.useEffect)((function(){(0,f.M1)(a).then((function(e){n(e.map((function(e){return(0,Z.jsxs)(m,{children:[(0,Z.jsx)(b,{src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:e.name,width:"230px",onError:function(e){e.target.src="https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?b=1&s=170667a&w=0&k=20&c=MiWLEcUdxZONMlnsN_k5OCaz_nLviJB0Hvcz5Wlp5oI="}}),(0,Z.jsxs)(_,{children:[(0,Z.jsx)(x,{children:e.name}),(0,Z.jsxs)("p",{children:["Character: ",(0,Z.jsx)("br",{}),e.character]})]})]},e.cast_id)})))}))}),[a]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(v,{children:"Cast"}),(0,Z.jsx)(g,{children:r})]})}},530:function(e,t,r){r.d(t,{M1:function(){return h},Pg:function(){return l},UF:function(){return o},Wf:function(){return u},tx:function(){return v}});var n=r(861),a=r(687),c=r.n(a),i=r(263);function o(){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=63f559983b2c566f4ead7a47a8a9015b");case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r,n,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.page,e.prev=1,e.next=4,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=63f559983b2c566f4ead7a47a8a9015b&language=en-US&query=".concat(r,"&page=").concat(n,"&include_adult=false"));case 4:return a=e.sent,o=a.data.results,e.abrupt("return",o.map((function(e){return{id:e.id,title:e.title,release_date:e.release_date}})));case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(t){var r,n,a,o,s,u,p,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=63f559983b2c566f4ead7a47a8a9015b&language=en-US"));case 3:return r=e.sent,n=r.data,a=n.title,o=n.overview,s=n.poster_path,u=n.vote_average,p=n.genres,l=n.release_date,e.abrupt("return",{vote_average:u,title:a,release_date:l,overview:o,poster_path:s,genres:p});case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=63f559983b2c566f4ead7a47a8a9015b&language=en-US"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n.cast.map((function(e){return{name:e.name,profile_path:e.profile_path,character:e.character,cast_id:e.cast_id}})));case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=63f559983b2c566f4ead7a47a8a9015b&language=en-US&page=1"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n.results.map((function(e){return{author:e.author,content:e.content,id:e.id}})));case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=711.4a295874.chunk.js.map