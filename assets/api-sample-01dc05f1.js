var a=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var v=(t,e,n)=>(a(t,e,"read from private field"),n?n.call(t):e.get(t)),c=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},m=(t,e,n,i)=>(a(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n);var p=(t,e,n)=>(a(t,e,"access private method"),n);import{c as S,a as T,r as d,j as r,b as u,d as A}from"./ObservableBox-1a4f456d.js";import{E as b}from"./events-960f2965.js";import{u as z}from"./hooks-fd855541.js";import{C as y,H as f,T as C}from"./chunk-SRMZVY4F-d9c835e2.js";import{V as q}from"./chunk-MUMUYFOI-c9d1d7fa.js";import{B as M}from"./chunk-NAA7TEES-31f0f4eb.js";class j{textService;logger;constructor(e){this.textService=e.references.textService,this.logger=S("test-prefix")}async getApiMethods(){return{changeText:e=>{this.textService.setText(e),this.logger.warn("api-app:TextApiExtension",{testLog:123,text:e})}}}}class w extends b{text="not yet set";setText(e){const n=this.text;this.text=e,this.emit("text-changed",{newText:this.text,oldText:n})}getText(){return this.text}}class k{async getApiMethods(){return{justAnotherApiMethod:()=>{console.log("justAnotherApiMethod")}}}}var s,o,l;class I{constructor({references:e}){c(this,o);c(this,s,void 0);m(this,s,e.ctx)}emitEvent(e,n=null){if(e==null)return;if(e instanceof Event){p(this,o,l).call(this,e);return}const i=new CustomEvent(e,{bubbles:!1,cancelable:!1,detail:n});p(this,o,l).call(this,i)}}s=new WeakMap,o=new WeakSet,l=function(e){v(this,s).getHostElement().dispatchEvent(e)};const _={"api-app":{name:"api-app",services:{TextApiExtension:{name:"TextApiExtension",clazz:j,provides:[{name:"integration.ApiExtension",qualifier:void 0}],references:{textService:{name:"api-app.TextService",qualifier:void 0,all:!1}}},TextService:{name:"TextService",clazz:w,provides:[{name:"api-app.TextService",qualifier:void 0}],references:{}},SecondApiExtension:{name:"SecondApiExtension",clazz:k,provides:[{name:"integration.ApiExtension",qualifier:void 0}],references:{}}},ui:{references:[{name:"api-app.TextService",qualifier:void 0,all:!1},{name:"integration.ExternalEventService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/integration":{name:"@open-pioneer/integration",services:{ExternalEventServiceImpl:{name:"ExternalEventServiceImpl",clazz:I,provides:[{name:"integration.ExternalEventService",qualifier:void 0}],references:{ctx:{name:"runtime.ApplicationContext",qualifier:void 0,all:!1}}}},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}}},B="",H=[];function L(t){throw new Error(`Unsupported locale: '${t}'`)}const P=T(B),U=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:L,locales:H,packages:_,styles:P},Symbol.toStringTag,{value:"Module"})),V="api-app",E=z.bind(void 0,V);function D(){const t=E("integration.ExternalEventService"),e=()=>{t.emitEvent("my-custom-event",{data:"my-event-data"})},n=E("api-app.TextService"),[i,x]=d.useState("");return d.useEffect(()=>{x(n.getText());const h=n.on("text-changed",g=>{x(g.newText)});return()=>h.destroy()},[n]),r(y,{children:u(q,{children:[r(f,{size:"md",children:"Emitting Events"}),r(C,{children:"Click this button to emit a browser event:"}),r(M,{onClick:e,children:"Emit Event"}),r(f,{size:"md",pt:20,children:"React to api calls from outer site"}),u("div",{children:["Current text: ",i]})]})})}const G=A({component:D,appMetadata:U});customElements.define("api-app",G);
