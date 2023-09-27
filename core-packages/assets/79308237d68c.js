var v=(i,n,e)=>{if(!n.has(i))throw TypeError("Cannot "+e)};var c=(i,n,e)=>(v(i,n,"read from private field"),e?e.call(i):n.get(i)),p=(i,n,e)=>{if(n.has(i))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(i):n.set(i,e)};import{v as u,j as r,w as f}from"./35d056c21a62.js";import{u as g}from"./04a0c5e25bad.js";import{B as x}from"./5dd82bae3d2e.js";import{C as h,H as d}from"./aecdb1ecade1.js";import{T as a}from"./75b35a576181.js";import{V as A}from"./25b678110b3a.js";var o;class w{constructor(n){p(this,o,new Map);const e=c(this,o),t=n.references.providers;for(const l of t){const m=l.createActions();for(const s of m){if(e.has(s.id))throw new Error(`Action '${s.id}' was defined twice.`);e.set(s.id,s)}}}getActionInfo(){const n=Array.from(c(this,o).values()).map(e=>({id:e.id,text:e.text}));return n.sort((e,t)=>e.text.localeCompare(t.text)),n}triggerAction(n){const e=c(this,o).get(n);if(!e)throw new Error(`Action '${n}' was not defined.`);e.trigger()}}o=new WeakMap;class b{createActions(){return[{id:"logging-action",text:"Log a message",trigger(){console.info("Logging a message!")}}]}}class P{createActions(){return[{id:"clear-browser-action",text:"Clear browser",trigger(){document.body.innerHTML=""}},{id:"refresh-browser-action",text:"Refresh browser",trigger(){window.location.reload()}}]}}class j{createActions(){return[{id:"open-window-action",text:"Open window",trigger(){window.open("https://www.conterra.de")}}]}}const S={"extension-app":{name:"extension-app",services:{ActionServiceImpl:{name:"ActionServiceImpl",clazz:w,provides:[{name:"extension-app.ActionService",qualifier:void 0}],references:{providers:{name:"extension-app.ActionProvider",qualifier:void 0,all:!0}}},LoggingActionProvider:{name:"LoggingActionProvider",clazz:b,provides:[{name:"extension-app.ActionProvider",qualifier:void 0}],references:{}},MultiActionProvider:{name:"MultiActionProvider",clazz:P,provides:[{name:"extension-app.ActionProvider",qualifier:void 0}],references:{}},OpenWindowActionProvider:{name:"OpenWindowActionProvider",clazz:j,provides:[{name:"extension-app.ActionProvider",qualifier:void 0}],references:{}}},ui:{references:[{name:"extension-app.ActionService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}}},y="",I=[];function z(i){throw new Error(`Unsupported locale: '${i}'`)}const E=u(y),M=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:z,locales:I,packages:S,styles:E},Symbol.toStringTag,{value:"Module"})),T="extension-app",k=g.bind(void 0,T);function C(){const i=k("extension-app.ActionService"),n=i.getActionInfo().map(({id:e,text:t})=>r.jsx(x,{onClick:()=>i.triggerAction(e),children:t},e));return r.jsxs(h,{maxW:"3xl",py:2,children:[r.jsx(d,{as:"h1",size:"4xl",mb:4,children:"Extension Example"}),r.jsx(a,{my:2,children:"This example demonstrates how to provide an extensible API with services and 1-to-N dependencies."}),r.jsxs(a,{my:2,children:["Individual ",r.jsx("code",{children:"ActionProvider"})," instances can provide a number of actions, which are then gathered and indexed by the ",r.jsx("code",{children:"ActionService"}),", which depends on all ActionProviders. The UI references the ",r.jsx("code",{children:"ActionService"})," and renders the provided actions as buttons. When a button is clicked, the appropriate action will be triggered."]}),r.jsxs(a,{my:2,children:["To add a new action, simply add new implementation of"," ",r.jsx("code",{children:'"extension-app.ActionProvider"'}),". The"," ",r.jsx("code",{children:"ActionService"})," will pick it up automatically."]}),r.jsxs(d,{as:"h4",size:"xl",children:["Buttons from ",r.jsx("code",{children:"ActionService"}),":"]}),r.jsx(A,{align:"start",children:n})]})}const q=f({component:C,appMetadata:M});customElements.define("extension-app",q);
