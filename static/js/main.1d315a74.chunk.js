(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{58:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(29),i=n.n(c),r=n(8),o=n(2),j=n(18),l=n.n(j),u=n(30),m=n(11),d=n(12),b=n(14),v=n(13),h=n(31),p=n.n(h),O=(n(58),n(1));var x=function(e){var t=e.year,n=e.title,a=e.summary,s=e.poster,c=e.genres;return Object(O.jsx)(r.b,{to:{pathname:"/movie-detail",state:{year:t,title:n,summary:a,poster:s,genres:c}},children:Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("img",{src:s,alt:n,title:n}),Object(O.jsxs)("div",{className:"movie__data",children:[Object(O.jsx)("h3",{className:"movie__title",children:n}),Object(O.jsx)("h5",{className:"movie__year",children:t}),Object(O.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(O.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})]})})},f=(n(65),function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(O.jsx)("div",{className:"movies",children:n.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component));var y=function(){return Object(O.jsx)("span",{children:"This is About Page"})},g=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(O.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component);n(66);var _=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(r.b,{to:"/",children:"Home"}),Object(O.jsx)(r.b,{to:"/about",children:"About"})]})};n(67);var N=function(){return Object(O.jsxs)(r.a,{children:[Object(O.jsx)(_,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(O.jsx)(o.a,{path:"/about",component:y}),Object(O.jsx)(o.a,{path:"/movie-detail",component:g})]})};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.1d315a74.chunk.js.map