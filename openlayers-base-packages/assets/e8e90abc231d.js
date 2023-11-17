import{f as g,h as y,r as f,j as e,s as T,i as j,t as _,o as B,a as R,b as I,H as w,B as x,d as z}from"./3c93219d3741.js";import{N as A,a as H}from"./9e38be9cb8de.js";import{S as m,F as h}from"./7b062165950b.js";import{u as M,T as q,F as v}from"./1fcedd7f0a7f.js";import{B as F}from"./11178a7b23a9.js";import{C as G,I as P}from"./3ca39c5980b7.js";import{S as D}from"./a6796d0acbfa.js";import{C as L}from"./e8d76c710f47.js";import"./b92e7e8c3c87.js";var O={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},U={horizontal:t=>({"& > *:not(style) ~ *:not(style)":{marginStart:t}}),vertical:t=>({"& > *:not(style) ~ *:not(style)":{marginTop:t}})},S=g(function(s,i){const{size:r,colorScheme:n,variant:a,className:p,spacing:c="0.5rem",isAttached:u,isDisabled:d,orientation:l="horizontal",...o}=s,N=y("chakra-button__group",p),C=f.useMemo(()=>({size:r,colorScheme:n,variant:a,isDisabled:d}),[r,n,a,d]);let k={display:"inline-flex",...u?O[l]:U[l](c)};const E=l==="vertical";return e.jsx(T,{value:C,children:e.jsx(j.div,{ref:i,role:"group",__css:k,className:N,"data-attached":u?"":void 0,"data-orientation":l,flexDir:E?"column":void 0,...o})})});S.displayName="ButtonGroup";function K(t,s=[]){const i=Object.assign({},t);for(const r of s)r in i&&delete i[r];return i}var V=["h","minH","height","minHeight"],b=g((t,s)=>{const i=_("Textarea",t),{className:r,rows:n,...a}=B(t),p=M(a),c=n?K(i,V):i;return e.jsx(j.textarea,{ref:s,rows:n,...p,className:y("chakra-textarea",r),__css:c})});b.displayName="Textarea";const W={"notify-app":{name:"notify-app",services:{},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/notifier":{name:"@open-pioneer/notifier",services:{NotificationServiceImpl:{name:"NotificationServiceImpl",clazz:A,provides:[{name:"notifier.NotificationService",qualifier:void 0}],references:{}}},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/test-utils":{name:"@open-pioneer/test-utils",services:{},ui:{references:[]},properties:{}}},$="",J=[];function Q(t){throw new Error(`Unsupported locale: '${t}'`)}const X=R($),Y=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:Q,locales:J,packages:W,styles:X},Symbol.toStringTag,{value:"Module"})),Z="notify-app",ee=I.bind(void 0,Z);function te(){const t=ee("notifier.NotificationService"),[s,i]=f.useState(""),[r,n]=f.useState("info"),[a,p]=f.useState(""),[c,u]=f.useState(!1),d=()=>{const o={title:s,level:r,message:a,displayDuration:c?5e3:void 0};if(!o.title){t.notify({title:"Title is required",level:"error"});return}t.notify(o)},l=()=>{t.closeAll()};return e.jsxs(e.Fragment,{children:[e.jsx(H,{position:"top-right"}),e.jsx(G,{p:5,children:e.jsxs(m,{spacing:8,children:[e.jsxs(m,{align:"center",children:[e.jsx(w,{as:"h1",children:"Notify Sample"}),e.jsx(q,{children:"Use the form below to emit notifications."})]}),e.jsx(F,{rounded:"lg",boxShadow:"lg",p:8,children:e.jsxs(m,{spacing:4,children:[e.jsxs(v,{isRequired:!0,children:[e.jsx(h,{children:"Title"}),e.jsx(P,{type:"text",value:s,onChange:o=>i(o.target.value)})]}),e.jsxs(v,{isRequired:!0,children:[e.jsx(h,{children:"Level"}),e.jsxs(D,{value:r,onChange:o=>{n(o.target.value)},children:[e.jsx("option",{value:"success",children:"Success"}),e.jsx("option",{value:"info",children:"Info"}),e.jsx("option",{value:"warning",children:"Warning"}),e.jsx("option",{value:"error",children:"Error"})]})]}),e.jsxs(v,{children:[e.jsx(h,{children:"Message"}),e.jsx(b,{placeholder:"Enter additional message",value:a,onChange:o=>p(o.target.value)})]}),e.jsx(L,{isChecked:c,onChange:o=>u(o.target.checked),children:"Hide after 5 seconds"}),e.jsxs(S,{justifyContent:"center",children:[e.jsx(x,{flex:"1",colorScheme:"blue",onClick:d,children:"Emit Notification"}),e.jsx(x,{flex:"1",onClick:l,children:"Clear notifications"})]})]})})]})})]})}const oe=z({component:te,appMetadata:Y});customElements.define("notify-app",oe);
