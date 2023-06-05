import{b as x,c as m,r as o,j as t,a as v}from"./1889ede4dc75.js";import{E as u}from"./960f2965a833.js";import{E as d}from"./4eca66f82c38.js";import{a as E}from"./5289126a23a7.js";import{V as f}from"./f189f2981ba7.js";import{C as g,H as s,T as h}from"./c8a9d875cf40.js";import{B as S}from"./be3b7f0cae56.js";import"./176051891b7b.js";class T{textService;logger;constructor(e){this.textService=e.references.textService,this.logger=x("api-app:TextApiExtension")}async getApiMethods(){return{changeText:e=>{this.logger.info("Changing text to",JSON.stringify(e)),this.textService.setText(e)}}}}class A extends u{text="not yet set";setText(e){const i=this.text;this.text=e,this.emit("text-changed",{newText:this.text,oldText:i})}getText(){return this.text}}class j{async getApiMethods(){return{justAnotherApiMethod:()=>{console.log("justAnotherApiMethod")}}}}const y={"api-app":{name:"api-app",services:{TextApiExtension:{name:"TextApiExtension",clazz:T,provides:[{name:"integration.ApiExtension",qualifier:void 0}],references:{textService:{name:"api-app.TextService",qualifier:void 0,all:!1}}},TextService:{name:"TextService",clazz:A,provides:[{name:"api-app.TextService",qualifier:void 0}],references:{}},SecondApiExtension:{name:"SecondApiExtension",clazz:j,provides:[{name:"integration.ApiExtension",qualifier:void 0}],references:{}}},ui:{references:[{name:"api-app.TextService",qualifier:void 0,all:!1},{name:"integration.ExternalEventService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/integration":{name:"@open-pioneer/integration",services:{ExternalEventServiceImpl:{name:"ExternalEventServiceImpl",clazz:d,provides:[{name:"integration.ExternalEventService",qualifier:"integration.ExternalEventService"}],references:{ctx:{name:"runtime.ApplicationContext",qualifier:void 0,all:!1}}}},ui:{references:[]},properties:{}}},z="",C=[];function q(n){throw new Error(`Unsupported locale: '${n}'`)}const M=m(z),b=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:q,locales:C,packages:y,styles:M},Symbol.toStringTag,{value:"Module"})),k="api-app",a=E.bind(void 0,k);function I(){const n=a("integration.ExternalEventService"),e=()=>{n.emitEvent("my-custom-event",{data:"my-event-data"})},i=a("api-app.TextService"),[c,r]=o.useState("");return o.useEffect(()=>{r(i.getText());const p=i.on("text-changed",l=>{r(l.newText)});return()=>p.destroy()},[i]),t.jsx(g,{children:t.jsxs(f,{children:[t.jsx(s,{size:"md",children:"Emitting Events"}),t.jsx(h,{children:"Click this button to emit a browser event:"}),t.jsx(S,{onClick:e,children:"Emit Event"}),t.jsx(s,{size:"md",pt:20,children:"Reacting to API calls from the host site"}),t.jsxs("div",{children:["Current text: ",c]})]})})}const w=v({component:I,appMetadata:b});customElements.define("api-app",w);
