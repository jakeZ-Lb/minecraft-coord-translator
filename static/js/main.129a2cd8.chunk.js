(this["webpackJsonpminecraft-coord-translator"]=this["webpackJsonpminecraft-coord-translator"]||[]).push([[0],{54:function(e,a,t){e.exports=t(66)},59:function(e,a,t){},60:function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},61:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),l=t.n(c),o=(t(59),t(15)),u=t(30),i=(t(60),t(61),t(108)),m=t(105),b=t(102),s=t(101),v=t(107),E=t(103),f=t(106),g=function(e){var a=e.onChangeCallback,t=e.value,n=e.cart;return r.a.createElement(i.a,{label:n,type:"number",value:t,onChange:function(e){return a(e.target.value)},InputLabelProps:{shrink:!0},variant:"outlined"})},O=function(e){var a=e.cart,t=e.value;return r.a.createElement(i.a,{label:a,value:t,InputProps:{readOnly:!0},variant:"outlined"})};var h=function(){var e={x:0,y:0,z:0},a=Object(n.useState)(e),t=Object(u.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(e),h=Object(u.a)(i,2),y=h[0],C=h[1],j=Object(n.useState)(e),d=Object(u.a)(j,2),x=d[0],z=d[1],k=Object(n.useState)(0),p=Object(u.a)(k,2),N=p[0],w=p[1],S=Object(n.useState)(e),P=Object(u.a)(S,2),I=P[0],X=P[1];return Object(n.useEffect)((function(){console.log(N);var e,a,t=c.x,n=c.z,r=c.y,l=y.x,o=y.z,u=y.y,i=x.x,m=x.z,b=x.y,s=0;switch(N){case 0:e=i+(l-t),a=m+(o-n),s=b+(u-r);break;case 90:e=m-n+(o-n),a=-1*(i-t)+(l-t),s=b+(u-r);break;case 180:e=-1*(i-t)+(l-t),a=-1*(m-n)+(o-n),s=b+(u-r);break;case 270:e=-1*(m-n)+(o-n),a=i-t+(l-t),s=b+(u-r)}X({x:e,z:a,y:s})}),[c,y,x,N]),Object(n.useEffect)((function(){C({x:c.x,z:c.z,y:c.y})}),[c]),r.a.createElement(m.a,{m:8},r.a.createElement(b.a,{container:!0,direction:"column",spacing:3,justifz:"center",alignItems:"center"},"Original Origin Point",r.a.createElement(b.a,{item:!0,xs:"auto"},r.a.createElement(g,{value:c.x,cart:"X",onChangeCallback:function(e){return l(Object(o.a)({},c,{x:Number(e)}))}}),r.a.createElement(g,{value:c.y,cart:"y",onChangeCallback:function(e){return l(Object(o.a)({},c,{y:Number(e)}))}}),r.a.createElement(g,{value:c.z,cart:"z",onChangeCallback:function(e){return l(Object(o.a)({},c,{z:Number(e)}))}})),"New Origin Point",r.a.createElement(b.a,{item:!0,xs:"auto"},r.a.createElement(g,{value:y.x,cart:"X",onChangeCallback:function(e){return C(Object(o.a)({},y,{x:Number(e)}))}}),r.a.createElement(g,{value:y.y,cart:"y",onChangeCallback:function(e){return C(Object(o.a)({},y,{y:Number(e)}))}}),r.a.createElement(g,{value:y.z,cart:"z",onChangeCallback:function(e){return C(Object(o.a)({},y,{z:Number(e)}))}})),"Old Entity Point",r.a.createElement(b.a,{item:!0,xs:"auto"},r.a.createElement(g,{value:x.x,cart:"X",onChangeCallback:function(e){return z(Object(o.a)({},x,{x:Number(e)}))}}),r.a.createElement(g,{value:x.y,cart:"y",onChangeCallback:function(e){return z(Object(o.a)({},x,{y:Number(e)}))}}),r.a.createElement(g,{value:x.z,cart:"z",onChangeCallback:function(e){return z(Object(o.a)({},x,{z:Number(e)}))}})),r.a.createElement(b.a,{item:!0,xs:"auto"},r.a.createElement(s.a,null,r.a.createElement(v.a,{id:"demo-simple-select-label"},"Rotation?"),r.a.createElement(E.a,{value:N,onChange:function(e){return w(Number(e.target.value))}},r.a.createElement(f.a,{value:0},"0"),r.a.createElement(f.a,{value:90},"90"),r.a.createElement(f.a,{value:180},"180"),r.a.createElement(f.a,{value:270},"270")))),"New Entity Coordinates",r.a.createElement(b.a,{item:!0,xs:"auto"},r.a.createElement(O,{value:I.x,cart:"X"}),r.a.createElement(O,{value:I.y,cart:"y"}),r.a.createElement(O,{value:I.z,cart:"z"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(65);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.129a2cd8.chunk.js.map