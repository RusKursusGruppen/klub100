(this.webpackJsonpklub100=this.webpackJsonpklub100||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"link":"https://soundcloud.com/christoffer-karlborg-1/di-order-of-di-rus-klub-100/s-w0gmE","logo":"https://i1.sndcdn.com/artworks-000588474251-aqruze-t500x500.jpg","year":2019,"name":"Di Order of Di Rus"},{"link":"https://soundcloud.com/carl-astrup/jedierneklub100-2019","logo":"https://i1.sndcdn.com/artworks-000587064392-itv8it-t500x500.jpg","year":2019,"name":"JeDIerne"},{"link":"https://soundcloud.com/mikkel-sorensen-547837501/rkg-klub-elrond","logo":"https://i1.sndcdn.com/artworks-000399737082-u8rg3o-t500x500.jpg","year":2018,"name":"Klub Elrond"},{"link":"https://soundcloud.com/mads_on/klub100-reality","logo":"https://i1.sndcdn.com/artworks-000241480530-cx806n-t500x500.jpg","year":2017,"name":"Klub100 Reality"},{"link":"https://soundcloud.com/peter-thomsen-607664607/klub100gangsters2017","logo":"https://i1.sndcdn.com/avatars-000330789974-xt7so8-t500x500.jpg","year":2017,"name":"Di gangstars"},{"link":"https://soundcloud.com/user-347110089/pokemon100","logo":"https://i1.sndcdn.com/artworks-000399731298-8yja5n-t500x500.jpg","year":2018,"name":"Pokemon"},{"link":"https://soundcloud.com/mads-on/klub100-dijuldikool","logo":"https://www.sydbyensbryglaug.dk/wp-content/uploads/2018/12/nisse209.jpg","year":2016,"name":"Di Jul Di Kool"}]')},20:function(e,t,n){e.exports=n(30)},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),i=n.n(o),c=n(1),s=n(2),l=n(4),u=n(3),d=n(6),p=n(5),m=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("h1",null,"Velkommen til klubben!")}}]),t}(r.Component),h=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("p",null,"Siden er en samling over Klub100 der er lavet i RKG gennem tiden. Tryk p\xe5 en rustur for at h\xf8re dens klub100.")}}]),t}(r.Component),b=n(17),f=n(8),g=n(7);function k(){var e=Object(f.a)(["\n  flex-grow: 1;\n  height: 256px;\n  width: 256px;\n  padding: 5px;\n  text-align: center;\n  &:hover {\n    border: 1px solid red;\n  }\n"]);return k=function(){return e},e}var j=g.a.div(k()),v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(j,null,a.a.createElement("img",{style:{height:"70%"},src:this.props.trip.logo}),a.a.createElement("h2",null,this.props.trip.name," : ",this.props.trip.year))}}]),t}(r.Component),y=n(12);function O(){var e=Object(f.a)(["\n  height: 2em;\n  font-size: 2em;\n"]);return O=function(){return e},e}function w(){var e=Object(f.a)(["\n  border: 1px solid black;\n  display: flex;\n  flex-wrap: wrap;\n"]);return w=function(){return e},e}var E=g.a.div(w()),x=g.a.button(O()),S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).setYear=n.setYear.bind(Object(d.a)(n)),n.state={currentYear:void 0,allYears:Object(b.a)(new Set(y.map((function(e){return e.year}))))},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"setYear",value:function(e){this.setState({currentYear:e})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement(x,{onClick:function(){return e.setYear(void 0)}},"Alle \xe5r"),this.state.allYears.map((function(t){return a.a.createElement(x,{onClick:function(){return e.setYear(t)}},t)}))," "),a.a.createElement(E,null,y.sort((function(e,t){return e.year<t.year})).filter((function(t){return void 0===e.state.currentYear||t.year===e.state.currentYear})).map((function(t){return a.a.createElement("div",{onClick:function(){return e.props.setSong(t.link)}},a.a.createElement(v,{trip:t}))}))))}}]),t}(r.Component),Y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("iframe",{width:"100%",height:"300",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=".concat(this.props.link,"&color=%23ff5500&visual=true")})}}]),t}(r.Component),C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).setSong=n.setSong.bind(Object(d.a)(n)),n.state={song:void 0},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"setSong",value:function(e){this.setState({song:e})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,null),a.a.createElement(h,null),void 0===this.state.song?"":a.a.createElement(Y,{link:this.state.song}),a.a.createElement(S,{setSong:this.setSong}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.2153bffb.chunk.js.map