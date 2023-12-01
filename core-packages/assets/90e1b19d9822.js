import{h as u,i as j,o as R,j as r,k as m,d as f,a as F,r as d,b as k}from"./500721e55b95.js";import{E as w}from"./960f2965a833.js";import{u as y}from"./90660c9ed28c.js";import{u as C}from"./6e797243d15f.js";import{b as h,c as _,F as S}from"./906fef672db7.js";import{C as q,H as L}from"./b0e197586397.js";import{V as O}from"./6b1daae64a19.js";import{T}from"./cd8025707498.js";import{I as A}from"./a0e78e2c1e9c.js";import{H as U}from"./c3c8cec80b0f.js";import{B as l}from"./58ffd8f0fad6.js";var v=u(function(e,i){var t;const n=j("FormLabel",e),s=R(e),{className:Y,children:x,requiredIndicator:N=r.jsx(g,{}),optionalIndicator:E=null,...c}=s,a=h(),I=(t=a?.getLabelProps(c,i))!=null?t:{ref:i,...c};return r.jsxs(m.label,{...I,className:f("chakra-form__label",s.className),__css:{display:"block",textAlign:"start",...n},children:[x,a?.isRequired?N:E]})});v.displayName="FormLabel";var g=u(function(e,i){const t=h(),n=_();if(!t?.isRequired)return null;const s=f("chakra-form__required-indicator",e.className);return r.jsx(m.span,{...t?.getRequiredIndicatorProps(e,i),__css:n.requiredIndicator,className:s})});g.displayName="RequiredIndicator";const p={DEBUG:0,INFO:1,ERROR:2};class B extends w{level;constructor(e){super(),this.level=M(e.properties)}notify(e,i="INFO"){p[this.level]>p[i]||this.emit("show-notification",{level:i,message:e})}}function M(o){const e=o.notifierLevel;switch(e){case"DEBUG":case"INFO":case"ERROR":return e}throw new Error(`Invalid notifier level: '${e}'.`)}const P={"properties-app":{name:"properties-app",services:{NotifierImpl:{name:"NotifierImpl",clazz:B,provides:[{name:"properties-app.Notifier",qualifier:void 0}],references:{}}},ui:{references:[{name:"properties-app.Notifier",qualifier:void 0,all:!1}]},properties:{notifierLevel:{value:"INFO",required:!1}}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}}},D="",G=[];function z(o){throw new Error(`Unsupported locale: '${o}'`)}const H=F(D),V=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:z,locales:G,packages:P,styles:H},Symbol.toStringTag,{value:"Module"})),$="properties-app",b=y.bind(void 0,$),K={DEBUG:void 0,INFO:"info",ERROR:"error"};function J(){const o=b("properties-app.Notifier"),e=C();return d.useEffect(()=>{const i=o.on("show-notification",t=>{e({position:"bottom-right",title:t.message,isClosable:!0,status:K[t.level]})});return()=>i.destroy()},[o,e]),null}function Q(){return r.jsxs(r.Fragment,{children:[r.jsx(J,{}),r.jsx(W,{})]})}function W(){const o=b("properties-app.Notifier"),[e,i]=d.useState(""),t=n=>{e&&o.notify(e,n)};return r.jsx(q,{children:r.jsxs(O,{my:"20",children:[r.jsx(L,{size:"m",children:"Notifier Sample"}),r.jsxs(T,{children:["This Form attempts to emit a notification with a certain level when clicking one of the button below. The notifier will ignore notifications with a level lower than ",r.jsx("strong",{children:o.level}),". The notifier's level can be configured using an attribute on the web component element."]}),r.jsxs(S,{pt:"3",children:[r.jsx(v,{children:"Enter a message and click one of the buttons to emit a notification"}),r.jsx(A,{placeholder:"Notification text...",value:e,onChange:n=>i(n.target.value)})]}),r.jsxs(U,{children:[r.jsx(l,{onClick:t.bind(void 0,"DEBUG"),children:"Debug"}),r.jsx(l,{onClick:t.bind(void 0,"INFO"),children:"Info"}),r.jsx(l,{onClick:t.bind(void 0,"ERROR"),children:"Error"})]})]})})}const X=k({component:Q,appMetadata:V,async resolveConfig(o){const e=o.getAttribute("level");return e?{properties:{"properties-app":{notifierLevel:e}}}:void 0}});customElements.define("properties-app",X);
