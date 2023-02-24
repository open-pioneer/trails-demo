import{h as x,c as v,r as o,a as i,j as s,b as d}from"./311de3f9d3bd.js";import{E as u}from"./960f2965a833.js";import{E as f}from"./4eca66f82c38.js";import{u as E}from"./7cb0865c7300.js";import{V as g}from"./114150e3f41a.js";import{C as h,H as a,T as S}from"./826f1388077c.js";import{B as T}from"./df80a4bce243.js";class A{textService;logger;constructor(e){this.textService=e.references.textService,this.logger=x("api-app:TextApiExtension")}async getApiMethods(){return{changeText:e=>{this.logger.info("Changing text to",JSON.stringify(e)),this.textService.setText(e)}}}}class y extends u{text="not yet set";setText(e){const n=this.text;this.text=e,this.emit("text-changed",{newText:this.text,oldText:n})}getText(){return this.text}}class z{async getApiMethods(){return{justAnotherApiMethod:()=>{console.log("justAnotherApiMethod")}}}}const C={"api-app":{name:"api-app",services:{TextApiExtension:{name:"TextApiExtension",clazz:A,provides:[{name:"integration.ApiExtension",qualifier:void 0}],references:{textService:{name:"api-app.TextService",qualifier:void 0,all:!1}}},TextService:{name:"TextService",clazz:y,provides:[{name:"api-app.TextService",qualifier:void 0}],references:{}},SecondApiExtension:{name:"SecondApiExtension",clazz:z,provides:[{name:"integration.ApiExtension",qualifier:void 0}],references:{}}},ui:{references:[{name:"api-app.TextService",qualifier:void 0,all:!1},{name:"integration.ExternalEventService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/integration":{name:"@open-pioneer/integration",services:{ExternalEventServiceImpl:{name:"ExternalEventServiceImpl",clazz:f,provides:[{name:"integration.ExternalEventService",qualifier:void 0}],references:{ctx:{name:"runtime.ApplicationContext",qualifier:void 0,all:!1}}}},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}}},q="",M=[];function b(t){throw new Error(`Unsupported locale: '${t}'`)}const j=v(q),k=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:b,locales:M,packages:C,styles:j},Symbol.toStringTag,{value:"Module"})),I="api-app",c=E.bind(void 0,I);function w(){const t=c("integration.ExternalEventService"),e=()=>{t.emitEvent("my-custom-event",{data:"my-event-data"})},n=c("api-app.TextService"),[p,r]=o.useState("");return o.useEffect(()=>{r(n.getText());const l=n.on("text-changed",m=>{r(m.newText)});return()=>l.destroy()},[n]),i(h,{children:s(g,{children:[i(a,{size:"md",children:"Emitting Events"}),i(S,{children:"Click this button to emit a browser event:"}),i(T,{onClick:e,children:"Emit Event"}),i(a,{size:"md",pt:20,children:"Reacting to API calls from the host site"}),s("div",{children:["Current text: ",p]})]})})}const _=d({component:w,appMetadata:k});customElements.define("api-app",_);
