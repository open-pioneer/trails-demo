import{e as A,h as u,R as P,o as w,j as o,g as v,ab as T,a as M,b as l,d as N}from"./ObservableBox-a6aaecbd.js";import{E as R}from"./ExternalEventServiceImpl-4eca66f8.js";import{u as B,a as E}from"./hooks-7fdf6099.js";import{g as j,C as O,H as U,T as C,B as q}from"./chunk-SRMZVY4F-a96a7b7e.js";import{V as z}from"./chunk-MUMUYFOI-4ac0c104.js";import{H as V}from"./chunk-HUQHYERK-310eb2bb.js";var[$,_]=A({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),h=u(function(e,n){const r=P("List",e),{children:a,styleType:s="none",stylePosition:i,spacing:f,...g}=w(e),c=j(a),d=f?{["& > *:not(style) ~ *:not(style)"]:{mt:f}}:{};return o($,{value:r,children:o(v.ul,{ref:n,listStyleType:s,listStylePosition:i,role:"list",__css:{...r.container,...d},...g,children:c})})});h.displayName="List";var D=u((t,e)=>{const{as:n,...r}=t;return o(h,{ref:e,as:"ol",styleType:"decimal",marginStart:"1em",...r})});D.displayName="OrderedList";var b=u(function(e,n){const{as:r,...a}=e;return o(h,{ref:n,as:"ul",styleType:"initial",marginStart:"1em",...a})});b.displayName="UnorderedList";var m=u(function(e,n){const r=_();return o(v.li,{ref:n,...e,__css:r.item})});m.displayName="ListItem";var H=u(function(e,n){const r=_();return o(T,{ref:n,role:"presentation",...e,__css:r.icon})});H.displayName="ListIcon";var k=v("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});k.displayName="Center";var G={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};u(function(e,n){const{axis:r="both",...a}=e;return o(v.div,{ref:n,__css:G[r],...a,position:"absolute"})});const K={"i18n-app":{name:"i18n-app",services:{},ui:{references:[{name:"runtime.ApplicationContext",qualifier:void 0,all:!1},{name:"integration.ExternalEventService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/integration":{name:"@open-pioneer/integration",services:{ExternalEventServiceImpl:{name:"ExternalEventServiceImpl",clazz:R,provides:[{name:"integration.ExternalEventService",qualifier:void 0}],references:{ctx:{name:"runtime.ApplicationContext",qualifier:void 0,all:!1}}}},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"test-i18n-package":{name:"test-i18n-package",services:{},ui:{references:[]},properties:{}}},W="",X="modulepreload",Y=function(t,e){return new URL(t,e).href},y={},S=function(e,n,r){if(!n||n.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Y(s,r),s in y)return;y[s]=!0;const i=s.endsWith(".css"),f=i?'[rel="stylesheet"]':"";if(!!r)for(let p=a.length-1;p>=0;p--){const d=a[p];if(d.href===s&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${f}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":X,i||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),i)return new Promise((p,d)=>{c.addEventListener("load",p),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},F=["de","en"];function J(t){switch(t){case"de":return S(()=>import("./app-edbc8bff.js"),[],import.meta.url).then(e=>e.default);case"en":return S(()=>import("./app-2b178c8b.js"),[],import.meta.url).then(e=>e.default)}throw new Error(`Unsupported locale: '${t}'`)}const Q=M(W),Z=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:J,locales:F,packages:K,styles:Q},Symbol.toStringTag,{value:"Module"})),ee="i18n-app",x=B.bind(void 0,ee);function te(){const t=E("i18n-app"),e=x("runtime.ApplicationContext"),n=e.getLocale(),r=e.getSupportedLocales();return l(O,{children:[o(U,{size:"lg",mb:4,children:t.formatMessage({id:"content.header"})}),o(C,{mb:4,children:t.formatMessage({id:"content.description"})}),l(b,{mb:4,children:[l(m,{children:["Current locale: ",n]}),l(m,{children:["Supported locales: ",r.join(", ")]}),l(m,{children:["Current date: ",t.formatDate(new Date)]}),l(m,{children:["Large number: ",t.formatNumber(123456789e-2)]})]}),o(k,{children:o(ne,{current:n,locales:r})})]})}function ne(t){const e=E("i18n-app"),n=x("integration.ExternalEventService"),r=i=>{n.emitEvent("locale-changed",{locale:i})},a=i=>o(q,{onClick:()=>r(i),children:i??e.formatMessage({id:"picker.default"})},i??""),s=t.locales.map(i=>a(i));return s.unshift(a(void 0)),l(z,{children:[o(C,{children:e.formatMessage({id:"picker.choose"})}),o(V,{spacing:2,children:s})]})}const re=N({component:te,appMetadata:Z,async resolveConfig(t){const e=t.getAttribute("forced-locale");if(e)return{locale:e}}});customElements.define("i18n-app",re);const L=document.getElementById("container");I(void 0);function I(t){L.replaceChildren(),console.info(`Starting app with locale ${t}`);const e=document.createElement("i18n-app");t&&e.setAttribute("forced-locale",t),e.addEventListener("locale-changed",n=>{const r=n.detail.locale;I(r)}),L.appendChild(e)}
