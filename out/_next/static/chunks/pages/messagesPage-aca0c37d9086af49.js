(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[363],{8275:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/messagesPage",function(){return t(4623)}])},2829:function(n,e,t){"use strict";t.d(e,{Z:function(){return h}});var r=t(5893),a=t(1664),o=(t(7294),t(8897)),s=t.n(o),c=t(8193),i=function(){return(0,r.jsx)("div",{className:s().navbar,children:(0,r.jsx)("div",{className:s().container,children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:s().logo,children:(0,r.jsx)(c.e$J,{size:40})})})})})},u=t(4812),f=t.n(u),l=function(){return(0,r.jsx)("div",{className:f().footer,children:(0,r.jsx)("span",{children:"Adrian Galus | 2022"})})},h=function(n){var e=n.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),(0,r.jsx)("main",{children:e}),(0,r.jsx)(l,{})]})}},4623:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return b}});var r=t(5893),a=t(2829),o=t(4051),s=t.n(o),c=t(7294),i=t(6978),u=t.n(i),f=function(n){var e;return(0,r.jsxs)("div",{className:u().container,children:[(0,r.jsxs)("div",{className:u().metadata,children:[(0,r.jsx)("div",{className:u().login,children:n.login}),(0,r.jsx)("div",{className:u().date,children:null===(e=n.date)||void 0===e?void 0:e.toString().slice(0,19).replace("T"," ")})]}),(0,r.jsx)(r.Fragment,{children:n.content})]})};function l(n,e,t,r,a,o,s){try{var c=n[o](s),i=c.value}catch(u){return void t(u)}c.done?e(i):Promise.resolve(i).then(r,a)}function h(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function s(n){l(o,r,a,s,c,"next",n)}function c(n){l(o,r,a,s,c,"throw",n)}s(void 0)}))}}(function(){var n=h(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://localhost:8080/api/messages").then((function(n){return n.json()})).then((function(n){return n}));case 2:case"end":return n.stop()}}),n)})))})(),function(){var n=h(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://localhost:8080/api/messages").then((function(n){return n.json()})).then((function(n){return n}));case 2:case"end":return n.stop()}}),n)})))}();var p=function(){var n=h(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)},n.next=3,fetch("http://localhost:8080/api/message",t).then((function(n){return n.json()})).then((function(n){return n}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();!function(){var n=h(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},n.next=3,fetch("http://localhost:8080/api/message/{id}",t).then((function(n){return n.json()}));case 3:case"end":return n.stop()}}),n)})))}();function d(n){return v.apply(this,arguments)}function v(){return(v=h(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n,e,t,r,a,o,s){try{var c=n[o](s),i=c.value}catch(u){return void t(u)}c.done?e(i):Promise.resolve(i).then(r,a)}function x(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var _=function(){var n=(0,c.useState)(),e=n[0],t=n[1];return(0,c.useEffect)((function(){var n;(n=s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d("http://localhost:8080/api/messages");case 3:e=n.sent,t(e.reverse()),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})),function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function s(n){m(o,r,a,s,c,"next",n)}function c(n){m(o,r,a,s,c,"throw",n)}s(void 0)}))})()}),[]),(0,r.jsx)(r.Fragment,{children:null===e||void 0===e?void 0:e.map((function(n,e){return(0,r.jsx)(f,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){x(n,e,t[e])}))}return n}({},n),e)}))})},g=t(2425),j=t.n(g),w=t(1649),y=function(){var n=(0,c.useState)({content:"",login:""}),e=n[0],t=n[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_,{}),(0,r.jsxs)("form",{className:j().uploadMessage,onSubmit:function(n){!function(n){n.preventDefault(),p(e).then((function(){return window.location.reload()}))}(n)},children:[(0,r.jsx)("input",{type:"text",placeholder:"Nazwa",style:{width:"25%"},name:"name",onChange:function(n){t((function(e){return{login:n.target.value,content:e.content}}))}}),(0,r.jsx)("input",{type:"text",name:"mess",placeholder:"Tre\u015b\u0107",onChange:function(n){t((function(e){return{content:n.target.value,login:e.login}}))}}),(0,r.jsx)("button",{type:"submit",children:(0,r.jsx)(w.ghy,{size:20})})]})]})};y.getLayout=function(n){return(0,r.jsx)(a.Z,{children:n})};var b=y},6978:function(n){n.exports={container:"messageComponent_container__YNSrh",metadata:"messageComponent_metadata__007vm",login:"messageComponent_login__Y8WNq",data:"messageComponent_data__aKW4j"}},4812:function(n){n.exports={footer:"footer_footer__NxbOe"}},8897:function(n){n.exports={navbar:"header_navbar__IqWfO",logo:"header_logo__LYVmZ",list:"header_list__vcE_w",menu:"header_menu__xUbbK",container:"header_container__vRwSt"}},2425:function(n){n.exports={uploadMessage:"messagesPage_uploadMessage__pR7hN",send:"messagesPage_send__EDaYk"}}},function(n){n.O(0,[617,866,949,774,888,179],(function(){return e=8275,n(n.s=e);var e}));var e=n.O();_N_E=e}]);