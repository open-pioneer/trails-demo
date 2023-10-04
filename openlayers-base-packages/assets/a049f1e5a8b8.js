var b=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)};var f=(t,e,i)=>(b(t,e,"read from private field"),i?i.call(t):e.get(t)),v=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},y=(t,e,i,r)=>(b(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i);var S=(t,e,i)=>(b(t,e,"access private method"),i);import{t as L,v as O,r as c,w as P,f as I,e as M,j as o,x as U,g as R,y as W,o as Z,z as $,q as K,c as V,s as _,H as J,l as N,B as E,a as Q}from"./734e1b10cfd4.js";import{B as X}from"./18c42094afdc.js";import{c as Y}from"./bcb0559def19.js";import{S as C,F as k}from"./f8001a26811d.js";import{T as ee}from"./a0583afdcf38.js";import{C as te,I as ie}from"./54b698e823fb.js";import{S as oe}from"./b535f9b894f4.js";import{C as re}from"./f991255265a2.js";function ne(t){const{theme:e}=L(),i=O();return c.useMemo(()=>P(e.direction,{...i,...t}),[t,e.direction,i])}var se={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},ae={horizontal:t=>({"& > *:not(style) ~ *:not(style)":{marginStart:t}}),vertical:t=>({"& > *:not(style) ~ *:not(style)":{marginTop:t}})},B=I(function(e,i){const{size:r,colorScheme:n,variant:l,className:d,spacing:p="0.5rem",isAttached:s,isDisabled:h,orientation:m="horizontal",...a}=e,q=M("chakra-button__group",d),D=c.useMemo(()=>({size:r,colorScheme:n,variant:l,isDisabled:h}),[r,n,l,h]);let F={display:"inline-flex",...s?se[m]:ae[m](p)};const G=m==="vertical";return o.jsx(U,{value:D,children:o.jsx(R.div,{ref:i,role:"group",__css:F,className:q,"data-attached":s?"":void 0,"data-orientation":m,flexDir:G?"column":void 0,...a})})});B.displayName="ButtonGroup";function ce(t,e=[]){const i=Object.assign({},t);for(const r of e)r in i&&delete i[r];return i}var le=["h","minH","height","minHeight"],z=I((t,e)=>{const i=W("Textarea",t),{className:r,rows:n,...l}=Z(t),d=$(l),p=n?ce(i,le):i;return o.jsx(R.textarea,{ref:e,rows:n,...d,className:M("chakra-textarea",r),__css:p})});z.displayName="Textarea";function H(t){const e=c.useRef(null);return c.useLayoutEffect(()=>{e.current=t}),c.useCallback((...r)=>{const n=e.current;return n(...r)},[])}const w=K("notifier:NotificationService");var u,g,x,j,T,A,pe;class ue{constructor(){v(this,j);v(this,A);v(this,u,void 0);v(this,g,void 0);v(this,x,void 0)}destroy(){clearTimeout(f(this,x)),y(this,x,void 0)}notify(e){S(this,j,T).call(this,"showNotification",{title:e.title??void 0,message:e.message??void 0,level:e.level??"info",displayDuration:e.displayDuration})}closeAll(){S(this,j,T).call(this,"closeAll")}registerHandler(e){if(f(this,u))return w.warn(`A notification handler has already been registered; this new handler will be ignored.
The <Notifier /> component has likely been used twice in your application.`),{destroy(){}};y(this,u,e);const i=f(this,g);if(y(this,g,void 0),i)for(const[n,...l]of i)e[n](...l);let r=!1;return{destroy:()=>{r||(r=!0,f(this,u)===e&&y(this,u,void 0))}}}}u=new WeakMap,g=new WeakMap,x=new WeakMap,j=new WeakSet,T=function(e,...i){if(f(this,u))f(this,u)[e](...i);else{const r=f(this,g)??y(this,g,[]);if(r.length>=1024){w.error(`Internal notification buffer overflow: this event will be dropped to prevent a memory leak.
Make sure that the UI is configured to display notifications (use <Notifier />).`,{method:e,args:i});return}r.push([e,...i])}},A=new WeakSet,pe=function(){f(this,u)||w.warn(`No notification handler has been registered: notifications will not be visible.
Make sure that your app contains the <Notifier /> component.`)};const fe={"notify-app":{name:"notify-app",services:{},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/notifier":{name:"@open-pioneer/notifier",services:{NotificationServiceImpl:{name:"NotificationServiceImpl",clazz:ue,provides:[{name:"notifier.NotificationService",qualifier:void 0}],references:{}}},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/test-utils":{name:"@open-pioneer/test-utils",services:{},ui:{references:[]},properties:{}}},de="",he=[];function me(t){throw new Error(`Unsupported locale: '${t}'`)}const ve=V(de),ye=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:me,locales:he,packages:fe,styles:ve},Symbol.toStringTag,{value:"Module"})),ge="@open-pioneer/notifier",xe=_.bind(void 0,ge);var je=Y({displayName:"WarningTwoIcon",d:"M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"});const be=!1;function Se(t){const{position:e="top-right"}=t,i=ne(),r=xe("notifier.NotificationService"),[n,l]=c.useState(!be),d=H(s=>{const h=s.level==="error"?o.jsx(je,{h:"100%",w:"100%"}):void 0;i({position:e,title:s.title,description:s.message||null,status:s.level,isClosable:!0,duration:s.displayDuration??null,icon:h})}),p=H(()=>{i.closeAll()});return c.useEffect(()=>{const s=r.registerHandler({showNotification:d,closeAll:p});return()=>s.destroy()},[n,r,d,p]),o.jsx(o.Fragment,{})}const Ne="notify-app",Ce=_.bind(void 0,Ne);function ke(){const t=Ce("notifier.NotificationService"),[e,i]=c.useState(""),[r,n]=c.useState("info"),[l,d]=c.useState(""),[p,s]=c.useState(!1),h=()=>{const a={title:e,level:r,message:l,displayDuration:p?5e3:void 0};if(!a.title){t.notify({title:"Title is required",level:"error"});return}t.notify(a)},m=()=>{t.closeAll()};return o.jsxs(o.Fragment,{children:[o.jsx(Se,{position:"top-right"}),o.jsx(te,{p:5,children:o.jsxs(C,{spacing:8,children:[o.jsxs(C,{align:"center",children:[o.jsx(J,{as:"h1",children:"Notify Sample"}),o.jsx(ee,{children:"Use the form below to emit notifications."})]}),o.jsx(X,{rounded:"lg",boxShadow:"lg",p:8,children:o.jsxs(C,{spacing:4,children:[o.jsxs(N,{isRequired:!0,children:[o.jsx(k,{children:"Title"}),o.jsx(ie,{type:"text",value:e,onChange:a=>i(a.target.value)})]}),o.jsxs(N,{isRequired:!0,children:[o.jsx(k,{children:"Level"}),o.jsxs(oe,{value:r,onChange:a=>{n(a.target.value)},children:[o.jsx("option",{value:"success",children:"Success"}),o.jsx("option",{value:"info",children:"Info"}),o.jsx("option",{value:"warning",children:"Warning"}),o.jsx("option",{value:"error",children:"Error"})]})]}),o.jsxs(N,{children:[o.jsx(k,{children:"Message"}),o.jsx(z,{placeholder:"Enter additional message",value:l,onChange:a=>d(a.target.value)})]}),o.jsx(re,{isChecked:p,onChange:a=>s(a.target.checked),children:"Hide after 5 seconds"}),o.jsxs(B,{justifyContent:"center",children:[o.jsx(E,{flex:"1",colorScheme:"blue",onClick:h,children:"Emit Notification"}),o.jsx(E,{flex:"1",onClick:m,children:"Clear notifications"})]})]})})]})})]})}const we=Q({component:ke,appMetadata:ye});customElements.define("notify-app",we);
