var g=(i,n,e)=>{if(!n.has(i))throw TypeError("Cannot "+e)};var s=(i,n,e)=>(g(i,n,"read from private field"),e?e.call(i):n.get(i)),p=(i,n,e)=>{if(n.has(i))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(i):n.set(i,e)};import{a as u,j as o,b as a,d as f}from"./ObservableBox-a6aaecbd.js";import{u as h}from"./hooks-7fdf6099.js";import{B as A,C as w,H as l,T as d}from"./chunk-SRMZVY4F-a96a7b7e.js";import{V as x}from"./chunk-MUMUYFOI-4ac0c104.js";var r;class P{constructor(n){p(this,r,new Map);const e=s(this,r),t=n.references.providers;for(const m of t){const v=m.createActions();for(const c of v){if(e.has(c.id))throw new Error(`Action '${c.id}' was defined twice.`);e.set(c.id,c)}}}getActionInfo(){const n=Array.from(s(this,r).values()).map(e=>({id:e.id,text:e.text}));return n.sort((e,t)=>e.text.localeCompare(t.text)),n}triggerAction(n){const e=s(this,r).get(n);if(!e)throw new Error(`Action '${n}' was not defined.`);e.trigger()}}r=new WeakMap;class b{createActions(){return[{id:"logging-action",text:"Log a message",trigger(){console.info("Logging a message!")}}]}}class S{createActions(){return[{id:"clear-browser-action",text:"Clear browser",trigger(){document.body.innerHTML=""}},{id:"refresh-browser-action",text:"Refresh browser",trigger(){window.location.reload()}}]}}class y{createActions(){return[{id:"open-window-action",text:"Open window",trigger(){window.open("https://www.conterra.de")}}]}}const I={"extension-app":{name:"extension-app",services:{ActionServiceImpl:{name:"ActionServiceImpl",clazz:P,provides:[{name:"extension-app.ActionService",qualifier:void 0}],references:{providers:{name:"extension-app.ActionProvider",qualifier:void 0,all:!0}}},LoggingActionProvider:{name:"LoggingActionProvider",clazz:b,provides:[{name:"extension-app.ActionProvider",qualifier:void 0}],references:{}},MultiActionProvider:{name:"MultiActionProvider",clazz:S,provides:[{name:"extension-app.ActionProvider",qualifier:void 0}],references:{}},OpenWindowActionProvider:{name:"OpenWindowActionProvider",clazz:y,provides:[{name:"extension-app.ActionProvider",qualifier:void 0}],references:{}}},ui:{references:[{name:"extension-app.ActionService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}}},z="",E=[];function M(i){throw new Error(`Unsupported locale: '${i}'`)}const T=u(z),k=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:M,locales:E,packages:I,styles:T},Symbol.toStringTag,{value:"Module"})),C="extension-app",q=h.bind(void 0,C);function B(){const i=q("extension-app.ActionService"),n=i.getActionInfo().map(({id:e,text:t})=>o(A,{onClick:()=>i.triggerAction(e),children:t},e));return a(w,{maxW:"3xl",py:2,children:[o(l,{as:"h1",size:"4xl",mb:4,children:"Extension Example"}),o(d,{my:2,children:"This example demonstrates how to provide an extensible API with services and 1-to-N dependencies."}),a(d,{my:2,children:["Individual ",o("code",{children:"ActionProvider"})," instances can provide a number of actions, which are then gathered and indexed by the ",o("code",{children:"ActionService"}),", which depends on all ActionProviders. The UI references the ",o("code",{children:"ActionService"})," and renders the provided actions as buttons. When a button is clicked, the appropriate action will be triggered."]}),a(d,{my:2,children:["To add a new action, simply add new implementation of"," ",o("code",{children:'"extension-app.ActionProvider"'}),". The"," ",o("code",{children:"ActionService"})," will pick it up automatically."]}),a(l,{as:"h4",size:"xl",children:["Buttons from ",o("code",{children:"ActionService"}),":"]}),o(x,{align:"start",children:n})]})}const L=f({component:B,appMetadata:k});customElements.define("extension-app",L);
