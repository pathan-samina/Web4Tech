(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5030:function(e,t,n){Promise.resolve().then(n.t.bind(n,6141,23)),Promise.resolve().then(n.bind(n,2117)),Promise.resolve().then(n.bind(n,4141)),Promise.resolve().then(n.t.bind(n,5250,23)),Promise.resolve().then(n.bind(n,6005)),Promise.resolve().then(n.t.bind(n,7028,23)),Promise.resolve().then(n.t.bind(n,5377,23))},2117:function(e,t,n){"use strict";n.r(t);var r=n(7437),l=n(2265),s=n(4930),a=n.n(s);let i=()=>{let[e,t]=(0,l.useState)(!0);return(0,r.jsx)(r.Fragment,{children:e&&(0,r.jsx)("div",{className:"fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50",children:(0,r.jsxs)("div",{className:"bg-indigo-950 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between",children:[(0,r.jsxs)("div",{className:"text-slate-500 inline-flex",children:[(0,r.jsxs)("a",{className:"font-medium hover:underline text-slate-50",href:"https://github.com/pathan-samina",target:"_blank",rel:"noreferrer",children:["Check my Repos",(0,r.jsx)("span",{className:"hidden sm:inline",children:" on GitHub"})]})," ",(0,r.jsx)("span",{className:"italic px-1.5",children:"or"})," ",(0,r.jsx)("a",{className:"font-medium hover:underline text-rose-600",href:"https://www.linkedin.com/in/samina-pathan-85b40a243/",target:"_blank",rel:"noreferrer",children:"Connect with me on Linkedin"})]}),(0,r.jsxs)("button",{className:"text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700",onClick:()=>t(!1),children:[(0,r.jsx)("span",{className:"sr-only",children:"Close"}),(0,r.jsx)("svg",{className:"w-4 h-4 shrink-0 fill-current",viewBox:"0 0 16 16",children:(0,r.jsx)("path",{d:"M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z"})})]})]})})})};t.default=a()(()=>Promise.resolve(i),{ssr:!1})},4141:function(e,t,n){"use strict";n.r(t);var r=n(7437),l=n(2265),s=n(1396),a=n.n(s),i=n(4930),o=n.n(i);let u=()=>{var e;let[t,n]=(0,l.useState)(!1),s=(0,l.useRef)(null),i=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=e=>{let{target:r}=e;i.current&&s.current&&(!t||i.current.contains(r)||s.current.contains(r)||n(!1))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)}),(0,l.useEffect)(()=>{let e=e=>{let{keyCode:r}=e;t&&27===r&&n(!1)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),(0,r.jsxs)("div",{className:"md:hidden",children:[(0,r.jsxs)("button",{ref:s,className:"hamburger ".concat(t&&"active"),"aria-controls":"mobile-nav","aria-expanded":t,onClick:()=>n(!t),children:[(0,r.jsx)("span",{className:"sr-only",children:"Menu"}),(0,r.jsxs)("svg",{className:"w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out",viewBox:"0 0 24 24",xmlns:"#",children:[(0,r.jsx)("rect",{y:"4",width:"24",height:"2",rx:"1"}),(0,r.jsx)("rect",{y:"11",width:"24",height:"2",rx:"1"}),(0,r.jsx)("rect",{y:"18",width:"24",height:"2",rx:"1"})]})]}),(0,r.jsx)("nav",{id:"mobile-nav",ref:i,className:"absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out",style:t?{maxHeight:null===(e=i.current)||void 0===e?void 0:e.scrollHeight,opacity:1}:{maxHeight:0,opacity:.8},children:(0,r.jsxs)("ul",{className:"bg-gray-800 px-4 py-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/signin",className:"flex font-medium w-full text-grey-950 hover:text-gray-200 py-2 justify-center",onClick:()=>n(!1),children:"Sign in"})}),(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/signup",className:"font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-indigo-950 hover:bg-indigo-900 transition duration-150 ease-in-out",onClick:()=>n(!1),children:"Sign up"})})]})})]})};t.default=o()(()=>Promise.resolve(u),{ssr:!1})},4930:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(1024);n(2265);let l=r._(n(4795));function s(e){return{default:(null==e?void 0:e.default)||e}}function a(e,t){let n=l.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e),Object.assign(r,t);let a=r.loader;return n({...r,loader:()=>null!=a?a().then(s):Promise.resolve(s(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4795:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let r=n(1024)._(n(2265)),l=n(6005),s=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function n(e){let n=t.loading,s=r.default.createElement(n,{isLoading:!0,pastDelay:!0,error:null}),a=t.ssr?r.default.Fragment:l.NoSSR,i=t.lazy;return r.default.createElement(r.default.Suspense,{fallback:s},r.default.createElement(a,null,r.default.createElement(i,e)))}return t.lazy=r.default.lazy(t.loader),n.displayName="LoadableComponent",n}},6141:function(){},5377:function(e){e.exports={style:{fontFamily:"'__Architects_Daughter_228ab5', '__Architects_Daughter_Fallback_228ab5'",fontWeight:400,fontStyle:"normal"},className:"__className_228ab5",variable:"__variable_228ab5"}},7028:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9",variable:"__variable_e66fe9"}},622:function(e,t,n){"use strict";var r=n(2265),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,s={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:l,type:e,key:u,ref:c,props:s,_owner:i.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},7437:function(e,t,n){"use strict";e.exports=n(622)},1396:function(e,t,n){e.exports=n(5250)}},function(e){e.O(0,[65,971,938,744],function(){return e(e.s=5030)}),_N_E=e.O()}]);