import{f as u,n as j,o as R,j as r,c as m,e as f,v as w,r as d,w as F}from"./f3214f54131c.js";import{E as y}from"./960f2965a833.js";import{u as C}from"./c731a254bcd8.js";import{u as k}from"./454f96f3facd.js";import{a as v,b as _,F as S}from"./501f3c8b5b86.js";import{C as q,H as L}from"./e390e9c2ef35.js";import{V as O}from"./1a210df1aeaf.js";import{T}from"./151cd7da02e6.js";import{I as A}from"./0d624fa15fa3.js";import{H as U}from"./1955e1f0bdf2.js";import{B as l}from"./6ceaae2e133c.js";var h=u(function(e,i){var o;const n=j("FormLabel",e),s=R(e),{className:Y,children:b,requiredIndicator:N=r.jsx(g,{}),optionalIndicator:E=null,...c}=s,a=v(),I=(o=a?.getLabelProps(c,i))!=null?o:{ref:i,...c};return r.jsxs(m.label,{...I,className:f("chakra-form__label",s.className),__css:{display:"block",textAlign:"start",...n},children:[b,a?.isRequired?N:E]})});h.displayName="FormLabel";var g=u(function(e,i){const o=v(),n=_();if(!o?.isRequired)return null;const s=f("chakra-form__required-indicator",e.className);return r.jsx(m.span,{...o?.getRequiredIndicatorProps(e,i),__css:n.requiredIndicator,className:s})});g.displayName="RequiredIndicator";const p={DEBUG:0,INFO:1,ERROR:2};class B extends y{level;constructor(e){super(),this.level=M(e.properties)}notify(e,i="INFO"){p[this.level]>p[i]||this.emit("show-notification",{level:i,message:e})}}function M(t){const e=t.notifierLevel;switch(e){case"DEBUG":case"INFO":case"ERROR":return e}throw new Error(`Invalid notifier level: '${e}'.`)}const P={"properties-app":{name:"properties-app",services:{NotifierImpl:{name:"NotifierImpl",clazz:B,provides:[{name:"properties-app.Notifier",qualifier:void 0}],references:{}}},ui:{references:[{name:"properties-app.Notifier",qualifier:void 0,all:!1}]},properties:{notifierLevel:{value:"INFO",required:!1}}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}}},D="",G=[];function z(t){throw new Error(`Unsupported locale: '${t}'`)}const H=w(D),V=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:z,locales:G,packages:P,styles:H},Symbol.toStringTag,{value:"Module"})),$="properties-app",x=C.bind(void 0,$),K={DEBUG:void 0,INFO:"info",ERROR:"error"};function J(){const t=x("properties-app.Notifier"),e=k();return d.useEffect(()=>{const i=t.on("show-notification",o=>{e({position:"bottom-right",title:o.message,isClosable:!0,status:K[o.level]})});return()=>i.destroy()},[t,e]),null}function Q(){return r.jsxs(r.Fragment,{children:[r.jsx(J,{}),r.jsx(W,{})]})}function W(){const t=x("properties-app.Notifier"),[e,i]=d.useState(""),o=n=>{e&&t.notify(e,n)};return r.jsx(q,{children:r.jsxs(O,{my:"20",children:[r.jsx(L,{size:"m",children:"Notifier Sample"}),r.jsxs(T,{children:["This Form attempts to emit a notification with a certain level when clicking one of the button below. The notifier will ignore notifications with a level lower than ",r.jsx("strong",{children:t.level}),". The notifier's level can be configured using an attribute on the web component element."]}),r.jsxs(S,{pt:"3",children:[r.jsx(h,{children:"Enter a message and click one of the buttons to emit a notification"}),r.jsx(A,{placeholder:"Notification text...",value:e,onChange:n=>i(n.target.value)})]}),r.jsxs(U,{children:[r.jsx(l,{onClick:o.bind(void 0,"DEBUG"),children:"Debug"}),r.jsx(l,{onClick:o.bind(void 0,"INFO"),children:"Info"}),r.jsx(l,{onClick:o.bind(void 0,"ERROR"),children:"Error"})]})]})})}const X=F({component:Q,appMetadata:V,async resolveConfig(t){const e=t.getAttribute("level");return e?{properties:{"properties-app":{notifierLevel:e}}}:void 0}});customElements.define("properties-app",X);
