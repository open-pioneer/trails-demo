var v=(i,n,e)=>{if(!n.has(i))throw TypeError("Cannot "+e)};var c=(i,n,e)=>(v(i,n,"read from private field"),e?e.call(i):n.get(i)),d=(i,n,e)=>{if(n.has(i))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(i):n.set(i,e)};import{v as u,j as r,w as f}from"./f3214f54131c.js";import{u as g}from"./c731a254bcd8.js";import{B as x}from"./6ceaae2e133c.js";import{C as h,H as p}from"./e390e9c2ef35.js";import{T as a}from"./151cd7da02e6.js";import{V as A}from"./1a210df1aeaf.js";var o;class w{constructor(n){d(this,o,new Map);const e=c(this,o),t=n.references.providers;for(const l of t){const m=l.createActions();for(const s of m){if(e.has(s.id))throw new Error(`Action '${s.id}' was defined twice.`);e.set(s.id,s)}}}getActionInfo(){const n=Array.from(c(this,o).values()).map(e=>({id:e.id,text:e.text}));return n.sort((e,t)=>e.text.localeCompare(t.text)),n}triggerAction(n){const e=c(this,o).get(n);if(!e)throw new Error(`Action '${n}' was not defined.`);e.trigger()}}o=new WeakMap;class P{createActions(){return[{id:"logging-action",text:"Log a message",trigger(){console.info("Logging a message!")}}]}}class j{createActions(){return[{id:"clear-browser-action",text:"Clear browser",trigger(){document.body.innerHTML=""}},{id:"refresh-browser-action",text:"Refresh browser",trigger(){window.location.reload()}}]}}class b{createActions(){return[{id:"open-window-action",text:"Open window",trigger(){window.open("https://www.conterra.de")}}]}}const S={"extension-app":{name:"extension-app",services:{ActionServiceImpl:{name:"ActionServiceImpl",clazz:w,provides:[{name:"extension-app.ActionService",qualifier:void 0}],references:{providers:{name:"extension-app.ActionProvider",qualifier:void 0,all:!0}}},LoggingActionProvider:{name:"LoggingActionProvider",clazz:P,provides:[{name:"extension-app.ActionProvider",qualifier:void 0}],references:{}},MultiActionProvider:{name:"MultiActionProvider",clazz:j,provides:[{name:"extension-app.ActionProvider",qualifier:void 0}],references:{}},OpenWindowActionProvider:{name:"OpenWindowActionProvider",clazz:b,provides:[{name:"extension-app.ActionProvider",qualifier:void 0}],references:{}}},ui:{references:[{name:"extension-app.ActionService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}}},y="",I=[];function z(i){throw new Error(`Unsupported locale: '${i}'`)}const E=u(y),M=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:z,locales:I,packages:S,styles:E},Symbol.toStringTag,{value:"Module"})),T="extension-app",k=g.bind(void 0,T);function C(){const i=k("extension-app.ActionService"),n=i.getActionInfo().map(({id:e,text:t})=>r.jsx(x,{onClick:()=>i.triggerAction(e),children:t},e));return r.jsxs(h,{maxW:"3xl",py:2,children:[r.jsx(p,{as:"h1",size:"4xl",mb:4,children:"Extension Example"}),r.jsx(a,{my:2,children:"This example demonstrates how to provide an extensible API with services and 1-to-N dependencies."}),r.jsxs(a,{my:2,children:["Individual ",r.jsx("code",{children:"ActionProvider"})," instances can provide a number of actions, which are then gathered and indexed by the ",r.jsx("code",{children:"ActionService"}),", which depends on all ActionProviders. The UI references the ",r.jsx("code",{children:"ActionService"})," and renders the provided actions as buttons. When a button is clicked, the appropriate action will be triggered."]}),r.jsxs(a,{my:2,children:["To add a new action, simply add new implementation of"," ",r.jsx("code",{children:'"extension-app.ActionProvider"'}),". The"," ",r.jsx("code",{children:"ActionService"})," will pick it up automatically."]}),r.jsxs(p,{as:"h4",size:"xl",children:["Buttons from ",r.jsx("code",{children:"ActionService"}),":"]}),r.jsx(A,{align:"start",children:n})]})}const q=f({component:C,appMetadata:M});customElements.define("extension-app",q);
