var a=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var r=(t,e,n)=>(a(t,e,"read from private field"),n?n.call(t):e.get(t)),c=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},p=(t,e,n,s)=>(a(t,e,"write to private field"),s?s.call(t,n):e.set(t,n),n);import"./modulepreload-polyfill-ec808ebb.js";import{c as l,b as o,j as v,a as m}from"./ObservableBox-70dd61b3.js";import{u}from"./hooks-01c7f993.js";import{C as f,T as E,B as d}from"./chunk-SRMZVY4F-50a1bafb.js";import{V as x}from"./chunk-MUMUYFOI-2b4b404d.js";class S{constructor(){console.log("apiextenstion")}async getApiMethods(){return{foo(e){return e*2}}}}var i;class b{constructor({references:e}){c(this,i,void 0);p(this,i,e.ctx)}emitEvent(e){const n=r(this,i).getHostElement(),s=new CustomEvent(e,{bubbles:!1,cancelable:!1,detail:{prop:"value"}});n.dispatchEvent(s)}}i=new WeakMap;const A={"api-app":{name:"api-app",services:{TestApiExtension:{name:"TestApiExtension",clazz:S,provides:[{name:"runtime.ApiExtension",qualifier:void 0}],references:{}}},ui:{references:[{name:"application-events.EventService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/application-events":{name:"@open-pioneer/application-events",services:{EventServiceImpl:{name:"EventServiceImpl",clazz:b,provides:[{name:"application-events.EventService",qualifier:void 0}],references:{ctx:{name:"runtime.ApplicationContext",qualifier:void 0,all:!1}}}},ui:{references:[]},properties:{}}},h="",C=l(h),g=Object.freeze(Object.defineProperty({__proto__:null,packages:A,styles:C},Symbol.toStringTag,{value:"Module"})),y="api-app",T=u.bind(void 0,y);function j(){const t=T("application-events.EventService");return o(f,{children:v(x,{children:[o(E,{children:"Click this button to emit a browser event:"}),o(d,{onClick:()=>t.emitEvent("my-event-type"),children:"Emit Event"})]})})}const z=m({component:j,appMetadata:g});customElements.define("api-app",z);
