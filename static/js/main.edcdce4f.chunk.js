(this["webpackJsonpn-pointed-star-viz"]=this["webpackJsonpn-pointed-star-viz"]||[]).push([[0],{68:function(t,e,a){},71:function(t,e,a){},72:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(31),i=a.n(c),s=(a(68),a(2)),l=a(3),o=a(0),u=2*Math.PI,j=function(t,e){var a;return e=null!==(a=e)&&void 0!==a?a:0,Array.from(Array(t).keys()).map((function(a){return u*(a/t+e)}))},b=function(t){for(var e=t.n,a=t.d,n=t.starScale,r=j(e).map((function(t){return[n*Math.cos(t),n*Math.sin(t)]})),c=function(t,e){for(t=Math.abs(t),e=Math.abs(e);e;){var a=e;e=t%e,t=a}return t}(e,a),i=[],s=function(t){var e=r.filter((function(e,a){return a%c==t})),n=e.map((function(t,n){return e[a/c*n%e.length]}));f(n,i)},l=0;l<c;l++)s(l);return i},h=function(t,e){return[(null!==e&&void 0!==e?e:1)*Math.cos(t),(null!==e&&void 0!==e?e:1)*Math.sin(t)]},d=function(t,e){var a=t.n,n=t.d,r=t.pointiness,c=n/a,i=1-c,l=j(a-n,e),o=j(n,e*(1-a/n)),u=[];return l.forEach((function(t){var e=h(t,i);o.forEach((function(t){var a=function(t,e){var a=Object(s.a)(t,2),n=a[0],r=a[1],c=Object(s.a)(e,2);return[n+c[0],r+c[1]]}(e,h(t,c*r));u.push(a)}))})),u},f=function(t,e){var a=t.map((function(e,a){return[t[a],t[(a+1)%t.length]]}));if(void 0==e)return a;a.forEach((function(t){return e.push(t)}))},O=function(t){var e=t.starParameters,a=t.timeParameters,n=t.showParameters,c=a.time,i=a.transitionTime,s=n.showStar,u=n.showIntraShapes,j=n.showInterShapes,h=n.showPoints,O=600,p=600,x=20,v=20,m=20,S=20,y=b(e),w=d(e,c),g=function(t,e){for(var a=t.n,n=t.d,r=[],c=0;c<a-n;++c){for(var i=[],s=0;s<n;++s)i.push(e[c*n+s]);f(i,r)}return r}(e,w),k=function(t,e){for(var a=t.n,n=t.d,r=[],c=0;c<n;++c){for(var i=[],s=0;s<a-n;++s)i.push(e[s*n+c]);f(i,r)}return r}(e,w),I=function(t,e){var a=r.a.useRef();return r.a.useEffect((function(){return t(l.c(a.current)),function(){}}),e),a}((function(t){var e=l.b,a=e().domain([-1,1]).rangeRound([S,p-v]),n=e().domain([-1,1]).rangeRound([x,O-m]);t.select(".plot-area").selectAll(".starline").data(y).join("line").transition().duration(i).ease(l.a).attr("class","starline").attr("stroke","yellow").attr("x1",(function(t){return a(t[0][0])})).attr("y1",(function(t){return a(t[0][1])})).attr("x2",(function(t){return a(t[1][0])})).attr("y2",(function(t){return a(t[1][1])})).attr("opacity",s?1:0),t.select(".plot-area").selectAll(".intercircleline").data(k).join("line").transition().duration(i).ease(l.a).attr("class","intercircleline").attr("stroke","red").attr("x1",(function(t){return a(t[0][0])})).attr("y1",(function(t){return a(t[0][1])})).attr("x2",(function(t){return a(t[1][0])})).attr("y2",(function(t){return a(t[1][1])})).attr("opacity",j?1:0),t.select(".plot-area").selectAll(".intracircleline").data(g).join("line").transition().duration(i).ease(l.a).attr("class","intracircleline").attr("stroke","green").attr("x1",(function(t){return a(t[0][0])})).attr("y1",(function(t){return a(t[0][1])})).attr("x2",(function(t){return a(t[1][0])})).attr("y2",(function(t){return a(t[1][1])})).attr("opacity",u?1:0),t.select(".plot-area").attr("fill","steelblue").selectAll(".scatterpoint").data(w).join("circle").transition().duration(i).ease(l.a).attr("class","scatterpoint").attr("cx",(function(t){return a(t[0])})).attr("cy",(function(t){return n(t[1])})).attr("r",10).attr("fill","blue").attr("opacity",h?1:0)}),[c,n,e]);return Object(o.jsx)("svg",{ref:I,display:"block",margin:"auto",viewBox:[0,0,p,O].join(" "),children:Object(o.jsx)("g",{className:"plot-area"})})},p=a(21),x=a(22),v=["setValue","id","label"];var m=function(t){var e=t.setValue,a=t.id,n=t.label,r=Object(x.a)(t,v);return Object(o.jsxs)("tr",{children:[Object(o.jsxs)("th",{children:[" ",Object(o.jsx)("label",{htmlFor:a,children:n})," "]}),Object(o.jsxs)("th",{children:[" ",Object(o.jsx)("input",Object(p.a)({onChange:function(t){e(parseFloat(t.target.value))},type:"range",className:"slider",id:a},r))," "]}),Object(o.jsxs)("th",{style:{minWidth:"4em"},children:[" ",r.value," "]})]})},S=["setValue","id","label"];var y=function(t){var e=t.setValue,a=t.id,n=t.label,r=Object(x.a)(t,S);return Object(o.jsxs)("tr",{children:[Object(o.jsxs)("th",{children:[" ",Object(o.jsx)("label",{htmlFor:a,children:n})," "]}),Object(o.jsxs)("th",{children:[" ",Object(o.jsx)("input",Object(p.a)({onChange:function(t){e(t.target.checked)},type:"checkbox",className:"checkbox",id:a},r))," "]})]})};a(71);var w=function(){var t=Object(n.useState)(0),e=Object(s.a)(t,2),a=e[0],r=e[1],c=Object(n.useState)(7),i=Object(s.a)(c,2),l=i[0],u=i[1],j=Object(n.useState)(3),b=Object(s.a)(j,2),h=b[0],d=b[1],f=Math.min(l-1,h),p=Object(n.useState)(.8),x=Object(s.a)(p,2),v=x[0],S=x[1],w=Object(n.useState)(1),g=Object(s.a)(w,2),k=g[0],I=g[1],P=Object(n.useState)(!0),V=Object(s.a)(P,2),M=V[0],E=V[1],F=Object(n.useState)(!0),N=Object(s.a)(F,2),A=N[0],L=N[1],C=Object(n.useState)(!0),T=Object(s.a)(C,2),z=T[0],B=T[1],R=Object(n.useState)(!0),D=Object(s.a)(R,2),J=D[0],G=D[1],W=Object(o.jsx)("table",{children:Object(o.jsxs)("tbody",{children:[Object(o.jsx)(m,{setValue:u,value:l,min:3,max:25,label:"Star Size"}),Object(o.jsx)(m,{setValue:d,value:f,min:1,max:l-1,label:"Divisor"}),Object(o.jsx)(m,{setValue:S,value:v,min:0,max:1.5,step:.1,label:"Intracircle Line Scale"}),Object(o.jsx)(m,{setValue:I,value:k,min:.5,max:1.5,step:.1,label:"Star Scale"})]})}),Z=Object(o.jsx)("table",{children:Object(o.jsxs)("tbody",{children:[Object(o.jsx)(y,{setValue:E,checked:M,label:"Show Star"}),Object(o.jsx)(y,{setValue:L,checked:A,label:"Show Intracircle Lines"}),Object(o.jsx)(y,{setValue:B,checked:z,label:"Show Intercircle Lines"}),Object(o.jsx)(y,{setValue:G,checked:J,label:"Show Points"})]})}),q={n:l,d:f,pointiness:v,starScale:k},H={showStar:M,showIntraShapes:A,showInterShapes:z,showPoints:J};return Object(n.useEffect)((function(){var t=0;setInterval((function(){var e=t+.01;r(e),t=e}),100)}),[]),Object(o.jsxs)("div",{className:"app",children:[Object(o.jsxs)("div",{className:"header",children:["Inspired by ",Object(o.jsx)("a",{href:"https://www.youtube.com/watch?v=oEN0o9ZGmOM&t=1227s",children:"this great Mathologer video"}),".",Object(o.jsx)("br",{}),'"Intracircle Line Scale" and "Star Scale" can be tweaked to help the point path match the star better.']}),Object(o.jsxs)("span",{className:"input-container",children:[W,Z]}),Object(o.jsx)(O,{starParameters:q,timeParameters:{time:a,transitionTime:100},showParameters:H})]})},g=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,73)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),r(t),c(t),i(t)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),g()}},[[72,1,2]]]);
//# sourceMappingURL=main.edcdce4f.chunk.js.map