import{h as R,f as c,b as w,o as S,j as e,e as m,I as D,n as z,d as B,q as O,s as U}from"./6da62dcb4a0b.js";import{E as W}from"./4eca66f82c38.js";import{_ as h}from"./41c905a75d98.js";import{u as G,a as L}from"./76606750778d.js";import{g as H,C as V,H as q,T as g}from"./9ed086131c43.js";import{V as $}from"./b264beeaf7f8.js";import{H as K}from"./7e9c5ed54b2b.js";import{B as X}from"./9bcc671ffbc6.js";var[Y,_]=R({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),v=c(function(n,s){const r=w("List",n),{children:o,styleType:l="none",stylePosition:a,spacing:d,...p}=S(n),u=H(o),f=d?{["& > *:not(style) ~ *:not(style)"]:{mt:d}}:{};return e.jsx(Y,{value:r,children:e.jsx(m.ul,{ref:s,listStyleType:l,listStylePosition:a,role:"list",__css:{...r.container,...f},...p,children:u})})});v.displayName="List";var F=c((t,n)=>{const{as:s,...r}=t;return e.jsx(v,{ref:n,as:"ol",styleType:"decimal",marginStart:"1em",...r})});F.displayName="OrderedList";var b=c(function(n,s){const{as:r,...o}=n;return e.jsx(v,{ref:s,as:"ul",styleType:"initial",marginStart:"1em",...o})});b.displayName="UnorderedList";var i=c(function(n,s){const r=_();return e.jsx(m.li,{ref:s,...n,__css:r.item})});i.displayName="ListItem";var J=c(function(n,s){const r=_();return e.jsx(D,{ref:s,role:"presentation",...n,__css:r.icon})});J.displayName="ListIcon";var E=m("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});E.displayName="Center";var Q={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};c(function(n,s){const{axis:r="both",...o}=n;return e.jsx(m.div,{ref:s,__css:Q[r],...o,position:"absolute"})});var C=c(function(n,s){const{borderLeftWidth:r,borderBottomWidth:o,borderTopWidth:l,borderRightWidth:a,borderWidth:d,borderStyle:p,borderColor:u,...x}=z("Divider",n),{className:f,orientation:y="horizontal",__css:P,...A}=S(n),N={vertical:{borderLeftWidth:r||a||d||"1px",height:"100%"},horizontal:{borderBottomWidth:o||l||d||"1px",width:"100%"}};return e.jsx(m.hr,{ref:s,"aria-orientation":y,...A,__css:{...x,border:"0",borderColor:u,borderStyle:p,...N[y],...P},className:B("chakra-divider",f)})});C.displayName="Divider";const Z={"i18n-app":{name:"i18n-app",services:{},ui:{references:[{name:"runtime.ApplicationContext",qualifier:void 0,all:!1},{name:"integration.ExternalEventService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/integration":{name:"@open-pioneer/integration",services:{ExternalEventServiceImpl:{name:"ExternalEventServiceImpl",clazz:W,provides:[{name:"integration.ExternalEventService",qualifier:void 0}],references:{ctx:{name:"runtime.ApplicationContext",qualifier:void 0,all:!1}}}},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"i18n-sample-package":{name:"i18n-sample-package",services:{},ui:{references:[]},properties:{}}},ee="",te=["de","en","de-simple"];function ne(t){switch(t){case"de":return h(()=>import("./097da0bd0024.js"),[],import.meta.url).then(n=>n.default);case"en":return h(()=>import("./ed4442ff5311.js"),[],import.meta.url).then(n=>n.default);case"de-simple":return h(()=>import("./36dbc13110f4.js"),[],import.meta.url).then(n=>n.default)}throw new Error(`Unsupported locale: '${t}'`)}const re=O(ee),se=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:ne,locales:te,packages:Z,styles:re},Symbol.toStringTag,{value:"Module"})),I="i18n-app",M=G.bind(void 0,I),T=L.bind(void 0,I),ie="i18n-sample-package",oe=L.bind(void 0,ie);function ae(){const t=oe();return e.jsxs("div",{children:["Greeting: ",t.formatMessage({id:"greeting"})]})}function le(){const t=T(),n=M("runtime.ApplicationContext"),s=n.getLocale(),r=n.getSupportedLocales(),o="Müller",l=["Hans","Peter","Hape"];return e.jsxs(V,{children:[e.jsx(q,{size:"lg",mb:4,children:t.formatMessage({id:"content.header"})}),e.jsx(g,{mb:4,children:t.formatMessage({id:"content.description"})}),e.jsxs(b,{mb:4,children:[e.jsxs(i,{children:["Current locale: ",s]}),e.jsxs(i,{children:["Supported locales: ",r.join(", ")]}),e.jsxs(i,{children:["Current date and time:"," ",t.formatDate(new Date,{dateStyle:"full",timeStyle:"short"})]}),e.jsxs(i,{children:["Relative Time - 1:"," ",t.formatRelativeTime(1,"minute",{numeric:"auto",style:"long"})]}),e.jsxs(i,{children:["Relative Time - 15:"," ",t.formatRelativeTime(15,"minute",{numeric:"auto",style:"long"})]}),e.jsxs(i,{children:["Relative Time - 0:"," ",t.formatRelativeTime(0,"minute",{numeric:"auto",style:"long"})]}),e.jsxs(i,{children:["Large number (Currency):"," ",t.formatNumber(123456789e-2,{style:"currency",currency:"EUR"})]}),e.jsxs(i,{children:["Large number (Unit):"," ",t.formatNumber(123456789e-2,{style:"unit",unit:"kilogram-per-second"})]}),e.jsxs(i,{children:["Plural - Count 0: ",t.formatMessage({id:"content.testplural"},{n:0})]}),e.jsxs(i,{children:["Plural - Count 1: ",t.formatMessage({id:"content.testplural"},{n:1})]}),e.jsxs(i,{children:["Plural - Count 2: ",t.formatMessage({id:"content.testplural"},{n:2})]}),e.jsxs(i,{children:["List: ",t.formatList(l,{type:"conjunction"})]}),e.jsxs(i,{children:["Gender - female:"," ",t.formatMessage({id:"content.testgender"},{gender:"female",name:o})]}),e.jsxs(i,{children:["Gender - male:"," ",t.formatMessage({id:"content.testgender"},{gender:"male",name:o})]}),e.jsxs(i,{children:["Gender - other:"," ",t.formatMessage({id:"content.testgender"},{gender:"other",name:o})]})]}),e.jsx(E,{mb:4,children:e.jsx(ce,{current:s,locales:r})}),e.jsx(C,{my:4}),e.jsxs(g,{mb:4,children:["This component is from another package which does ",e.jsx("em",{children:"not"})," support de-simple by itself:"]}),e.jsx(ae,{})]})}function ce(t){const n=T(),s=M("integration.ExternalEventService"),r=a=>{s.emitEvent("locale-changed",{locale:a})},o=a=>e.jsx(X,{onClick:()=>r(a),children:a??n.formatMessage({id:"picker.default"})},a??""),l=t.locales.map(a=>o(a));return l.unshift(o(void 0)),e.jsxs($,{children:[e.jsx(g,{children:n.formatMessage({id:"picker.choose"})}),e.jsx(K,{spacing:2,children:l})]})}const de=U({component:le,appMetadata:se,async resolveConfig(t){const n=t.getAttribute("forced-locale");if(n)return{locale:n}}});customElements.define("i18n-app",de);const j=document.getElementById("container");k(void 0);function k(t){j.replaceChildren(),console.info(`Starting app with locale ${t}`);const n=document.createElement("i18n-app");t&&n.setAttribute("forced-locale",t),n.addEventListener("locale-changed",s=>{const r=s.detail.locale;k(r)}),j.appendChild(n)}
