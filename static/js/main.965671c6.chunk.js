(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{110:function(t,e,n){},121:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),s=(n(90),n(41)),o=n.n(s),u=n(55),d=n(18),l=n(160),f=n(69).create({baseURL:"https://api.openweathermap.org/data/2.5/"}),j="f37933e3e4d8fafe41b8ac27a02772ab",h=function(t,e){return f.get("weather?lat=".concat(t,"&lon=").concat(e,"&units=metric&lang=ru&appid=").concat(j)).then((function(t){return t.data}))},b=function(t){return f.get("weather?q=".concat(t,"&lang=ru&units=metric&appid=").concat(j)).then((function(t){return t.data}))},p=function(t){return f.get("forecast?q=".concat(t,"&lang=ru&units=metric&appid=").concat(j)).then((function(t){return t.data}))},O=(n(110),n(161)),g=n(5),x=function(t){var e=t.searchCityFunc;return Object(g.jsx)("form",{onSubmit:function(t){t.preventDefault(),e(t.target[0].value),t.target[0].value=""},noValidate:!0,autoComplete:"off",children:Object(g.jsx)(O.a,{className:"search",id:"outlined-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434",variant:"outlined",size:"small",fullWidth:!0})})},m=n(75),w=n(76),v=n(162),y=n(157),S=n(158),W=n(156),A=n.p+"static/media/sun.4eccead1.svg",k=n.p+"static/media/cloud.fcffee55.svg",z=n.p+"static/media/rainy.b1c4d2b1.svg",C=n.p+"static/media/snowy.b349810c.svg",D=n.p+"static/media/drizzle.767428d2.svg",I=Object(W.a)({card:{width:"300px",margin:"30px 0",padding:"10px 0"},cardImg:{height:"80px",marginRight:"10px"},cardContent:{padding:"5px 0"}}),M=function(t){var e=t.city,n=t.temp,r=t.feelsLike,c=t.description,i=t.weather,s=t.otherData,o=t.date,u=void 0===o?null:o,l=Object(a.useState)(),f=Object(d.a)(l,2),j=f[0],h=f[1];Object(a.useEffect)((function(){switch(i){case"Snow":h(C);break;case"Clouds":h(k);break;case"Drizzle":h(D);break;case"Rain":h(z);break;case"Clear":h(A);break;default:h(A)}}),[i]);var b=I();return Object(g.jsx)(y.a,{raised:!0,className:b.card,children:Object(g.jsxs)(S.a,{children:[Object(g.jsx)(v.a,{fontWeight:"fontWeightBold",align:"center",fontSize:28,letterSpacing:1.5,children:e}),Object(g.jsxs)(v.a,{display:"flex",justifyContent:"center",alignItems:"center",className:b.cardContent,children:[Object(g.jsx)("img",{src:j,alt:i,className:b.cardImg}),Object(g.jsxs)(v.a,{component:"span",textAlign:"center",fontWeight:"fontWeightBold",fontSize:38,children:[n,"\u2103"]})]}),Object(g.jsx)(v.a,{textAlign:"center",fontWeight:"fontWeightRegular",fontSize:16,children:c}),Object(g.jsxs)(v.a,{textAlign:"center",fontWeight:"fontWeightRegular",fontSize:15,children:["\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a: ",r,"\u2103"]}),Object(g.jsxs)(v.a,{children:[Object(g.jsxs)(v.a,{textAlign:"center",fontWeight:"fontWeightRegular",fontSize:15,children:["\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u044c: ",s.humidity,"%"]}),Object(g.jsxs)(v.a,{textAlign:"center",fontWeight:"fontWeightRegular",fontSize:15,children:["\u0412\u0435\u0442\u0435\u0440: ",s.windSpeed,"\u043a\u043c/\u0447"]})]}),u?Object(g.jsxs)(v.a,{textAlign:"center",fontWeight:"fontWeightBold",fontSize:13,children:[Object(g.jsx)("br",{}),u]}):""]})})},R=n(19),B=n(71),L=n(72),N=n(77),_=n(74),E=n(164),F=n(163),q=n(159),J=n(73),P=n.n(J),U=n.p+"static/media/loading.1a189f18.svg",V=function(){return Object(g.jsx)(v.a,{display:"flex",justifyContent:"center",alignItems:"center",children:Object(g.jsx)("img",{width:"150px",src:U,alt:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})})},G=function(t){var e=t.weeks;return e[0].forecast.length>0?Object(g.jsxs)(v.a,{children:[Object(g.jsx)(v.a,{textAlign:"center",fontWeight:"fontWeightBold",fontSize:38,children:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 \u043d\u0435\u0434\u0435\u043b\u044e"}),Object(g.jsx)("br",{}),Object(g.jsx)(v.a,{children:e.map((function(t,n){return Object(g.jsxs)(E.a,{children:[Object(g.jsx)(F.a,{expandIcon:Object(g.jsx)(P.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(g.jsx)(v.a,{component:"span",fontWeight:"fontWeightMedium",fontSize:20,children:e[n].title})}),Object(g.jsx)(q.a,{children:Object(g.jsx)(v.a,{display:"flex",flexWrap:"wrap",justifyContent:"space-around",children:e[n].forecast.map((function(t,e){return Object(g.jsx)(M,{city:"",temp:Math.round(t.main.temp),feelsLike:Math.round(t.main.feels_like),description:t.weather[0].description,weather:t.weather[0].main,otherData:{humidity:t.main.humidity,windSpeed:Math.round(3.6*t.wind.speed)},date:t.dt_txt})}))})})]})}))}),Object(g.jsx)("br",{})]}):Object(g.jsx)(V,{})},H=function(t){Object(N.a)(n,t);var e=Object(_.a)(n);function n(){return Object(B.a)(this,n),e.apply(this,arguments)}return Object(L.a)(n,[{key:"filterForecast",value:function(){return[{forecast:Object(R.a)(this.createArr(0)),title:this.createArr(0,!0)[0]},{forecast:Object(R.a)(this.createArr(1)),title:this.createArr(1,!0)[1]},{forecast:Object(R.a)(this.createArr(2)),title:this.createArr(2,!0)[2]},{forecast:Object(R.a)(this.createArr(3)),title:this.createArr(3,!0)[3]},{forecast:Object(R.a)(this.createArr(4)),title:this.createArr(4,!0)[4]},{forecast:Object(R.a)(this.createArr(5)),title:this.createArr(5,!0)[5]}]}},{key:"createArr",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props.forecast.map((function(t){return new Date(t.dt_txt).toLocaleString("ru",{day:"numeric"})})),a=Object(R.a)(new Set(n));return e?Object(R.a)(new Set(this.props.forecast.map((function(t){return new Date(t.dt_txt).toLocaleString("ru",{day:"numeric",month:"long"})})))):this.props.forecast.filter((function(e,r){return n[r]===a[t]?e:""}))}},{key:"render",value:function(){return Object(g.jsx)(G,{weeks:this.filterForecast()})}}]),n}(r.a.Component),K=function(t){var e=t.forecast,n=Object(w.a)(t,["forecast"]);return n.city?Object(g.jsxs)(v.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[Object(g.jsx)(M,Object(m.a)({},n)),Object(g.jsx)(H,{forecast:e})]}):Object(g.jsx)(v.a,{textAlign:"center",fontWeight:"fontWeightBold",fontSize:42,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"})};var Q=function(){var t=Object(a.useState)(""),e=Object(d.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(0),i=Object(d.a)(c,2),s=i[0],f=i[1],j=Object(a.useState)(0),O=Object(d.a)(j,2),m=O[0],w=O[1],v=Object(a.useState)(""),y=Object(d.a)(v,2),S=y[0],W=y[1],A=Object(a.useState)(""),k=Object(d.a)(A,2),z=k[0],C=k[1],D=Object(a.useState)({}),I=Object(d.a)(D,2),M=I[0],R=I[1],B=Object(a.useState)([]),L=Object(d.a)(B,2),N=L[0],_=L[1],E=function(t){r(t.name),W(t.weather[0].description),C(t.weather[0].main),f(Math.round(t.main.temp)),w(Math.round(t.main.feels_like)),R({humidity:t.main.humidity,windSpeed:Math.round(3.6*t.wind.speed)}),p(t.name).then((function(t){return _(t.list)}))};Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition(function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e.coords.latitude,e.coords.longitude).then((function(t){return E(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[]);var F=function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=3;break}return t.next=3,b(e).then((function(t){return E(t)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){}),[n]),Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(l.a,{maxWidth:"md",children:[Object(g.jsx)(x,{searchCityFunc:F.bind(this)}),Object(g.jsx)(K,{forecast:N,city:n,temp:s,feelsLike:m,description:S,weather:z,otherData:M})]})})};i.a.render(Object(g.jsx)(Q,{}),document.getElementById("root"))},90:function(t,e,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.965671c6.chunk.js.map