(this.webpackJsonpnewshop=this.webpackJsonpnewshop||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(9),r=n.n(c),i=(n(14),n(6)),l=n(2),o=n(0);var d=function(e){var t=e.children;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{className:"modal modal--wrapper",children:Object(o.jsx)("div",{className:"modal__content",children:t})})})};var j=function(e){var t=e.modalVisible,n=e.title,s=e.body,a=e.setTitle,c=e.setBody,r=e.handleOnSubmit;return e.adding,e.setAdding,Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"form form__wrapper",children:[Object(o.jsx)("h3",{className:"form__title",children:"\u0424\u043e\u0440\u043c\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f Todos"}),Object(o.jsx)("input",{onChange:function(e){return a(e.target.value)},value:n,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438",className:"form__todos"}),Object(o.jsx)("textarea",{onChange:function(e){return c(e.target.value)},value:s,rows:10,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u043e \u0437\u0430\u043c\u0435\u0442\u043a\u0438",className:"form__body"}),Object(o.jsxs)("div",{className:"btn form__btn",children:[Object(o.jsx)("button",{className:"btn__add",onClick:r,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(o.jsx)("button",{className:"btn__cancel",onClick:t,children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})})},u=function(e){var t=Object(s.useState)(e),n=Object(l.a)(t,2),a=n[0],c=n[1];return[a,Object(s.useCallback)((function(){return c((function(e){return!e}))}),[])]},b=function(e){var t=e.data,n=e.favourites,s=e.title,a=e.body,c=e.setTitle,r=e.setBody,i=e.handleOnSubmit,b=e.adding,h=e.setAdding,O=e.search,m=e.setSearch,f=u(!1),x=Object(l.a)(f,2),p=x[0],_=x[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("header",{className:"header header--wrapper",children:[Object(o.jsx)("nav",{className:"header__menu",children:Object(o.jsxs)("ul",{className:"header__list",children:[Object(o.jsx)("li",{className:"header__link",children:Object(o.jsxs)("a",{href:"/",className:"header__favorites",children:["\u0412\u0441\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438 (",t,")"]})}),Object(o.jsx)("li",{className:"header__link",children:Object(o.jsxs)("a",{href:"/",className:"header__favorites",children:["\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435 (",n,")"]})})]})}),Object(o.jsx)("input",{value:O,onChange:function(e){return m(e.target.value)},className:"header__search",placeholder:"\u041f\u043e\u0438\u0441\u043a \u0437\u0430\u043c\u0435\u0442\u043e\u043a..."}),Object(o.jsx)("button",{className:"header__button",onClick:_,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"}),p&&Object(o.jsx)(d,{children:Object(o.jsx)(j,{adding:b,setAdding:h,modalVisible:_,handleOnSubmit:i,title:s,setTitle:c,body:a,setBody:r})})]})})},h=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"lds-circle",children:Object(o.jsx)("div",{})})})},O=function(e){var t=e.data,n=e.isLoading,c=e.setResponse,r=e.favourites,j=e.setFavourites,b=u(!1),O=Object(l.a)(b,2),m=O[0],f=O[1],x=Object(s.useState)(!1),p=Object(l.a)(x,2),_=p[0],v=p[1],g=Object(s.useState)(!1),N=Object(l.a)(g,2),y=N[0],S=N[1],w=a.a.useState(3),C=Object(l.a)(w,2),k=C[0],T=C[1],F=t.slice(0,k);console.log(r);return n?Object(o.jsx)(h,{}):0===t.length?Object(o.jsx)("h1",{style:{marginTop:"220px",width:"100%",display:"flex",justifyContent:"center"},children:"\u0417\u0430\u043c\u0435\u0442\u043e\u043a \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e!"}):Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"list list--wrapper",children:[F.map((function(e){return Object(o.jsxs)("div",{className:"card list__card",children:[Object(o.jsxs)("p",{className:"list__title",children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438: ",e.title]}),Object(o.jsxs)("p",{className:"list__body",children:["\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438:",e.body]}),Object(o.jsx)("button",{className:"list__remove",onClick:f,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(o.jsx)("button",{className:"list__add",onClick:function(){return t=e,void setTimeout((function(){j([].concat(Object(i.a)(r),[t]))}),2e3);var t},children:"\u0414\u043e\u0431\u0430\u0432\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),m&&Object(o.jsxs)(d,{children:[Object(o.jsx)("p",{children:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443?"}),y?Object(o.jsx)("button",{className:"list__modalWait",children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"list__modalRemove",onClick:function(){var n;n=e.id,S(!0),setTimeout((function(){c(t.filter((function(e){return e.id!==n}))),S(!1),f(!1)}),2e3)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(o.jsx)("button",{className:"list__modalCancel",onClick:f,children:"\u041e\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})]},e.id)})),k<t.length&&Object(o.jsx)("button",{className:"list__loadMore",onClick:function(){return v(!0),void setTimeout((function(){T(k+k),v(!1)}),1e3)},children:_?Object(o.jsx)("span",{children:"Loading..."}):Object(o.jsx)("span",{children:"Load More"})})]})})},m=n(4),f=n.n(m),x=n(8),p=function(e){var t=Object(s.useState)([]),n=Object(l.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(null),i=Object(l.a)(r,2),o=i[0],d=i[1],j=Object(s.useState)(!1),u=Object(l.a)(j,2),b=u[0],h=u[1];return Object(s.useEffect)((function(){(function(){var t=Object(x.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h(!0);try{setTimeout(Object(x.a)(f.a.mark((function t(){var n,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:s=t.sent,c(s),h(!1);case 8:case"end":return t.stop()}}),t)}))),1e3)}catch(o){d(o)}case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),{response:a,isLoading:b,error:o,setResponse:c}},_=n(19),v=function(){var e=a.a.useState(""),t=Object(l.a)(e,2),n=t[0],s=t[1],c=a.a.useState(""),r=Object(l.a)(c,2),d=r[0],j=r[1],h=a.a.useState(!1),m=Object(l.a)(h,2),f=m[0],x=m[1],v=a.a.useState([]),g=Object(l.a)(v,2),N=g[0],y=g[1],S=u(!1),w=Object(l.a)(S,2),C=(w[0],w[1],a.a.useState("")),k=Object(l.a)(C,2),T=k[0],F=k[1],L=p("\n  https://jsonplaceholder.typicode.com/posts"),A=L.response,B=L.isLoading,R=L.setResponse;console.log(A);var M=A.filter((function(e){return e.title.toLowerCase().includes(T.toLowerCase())}));return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{search:T,setSearch:F,adding:f,setAdding:x,handleOnSubmit:function(e){e.preventDefault(),function(){var e={title:n,body:d,id:Object(_.a)()};if(""===e.title||""===e.body)return alert("\u041f\u043e\u043b\u044f \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c\u0438");x(!0),setTimeout((function(){R((function(t){return[e].concat(Object(i.a)(t))})),x(!1),s(""),j("")}),2e3)}()},title:n,setTitle:s,body:d,setBody:j,favourites:N.length,data:A.length}),Object(o.jsx)(O,{isLoading:B,data:M,setResponse:R,favourites:N,setFavourites:y})]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b026b013.chunk.js.map