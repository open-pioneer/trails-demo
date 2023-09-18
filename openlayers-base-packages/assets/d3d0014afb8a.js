var S=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)};var p=(t,e,i)=>(S(t,e,"read from private field"),i?i.call(t):e.get(t)),v=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},g=(t,e,i,n)=>(S(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i);var b=(t,e,i)=>(S(t,e,"access private method"),i);import{H as P,I as U,r as s,J as $,f as M,c as I,j as o,K,b as R,L as W,o as Z,M as V,E as J,k as Q,G as L,T as X,w as N,x as C,B as H,n as Y}from"./c8e25a99743e.js";import{H as _,C as ee,I as te}from"./98fffb034338.js";import{c as ie,C as oe}from"./ea164418c21f.js";import{S as k}from"./20f18d6412d7.js";import{B as ne,S as re}from"./bdd41d3a298a.js";function se(t){const{theme:e}=P(),i=U();return s.useMemo(()=>$(e.direction,{...i,...t}),[t,e.direction,i])}var ae={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},ce={horizontal:t=>({"& > *:not(style) ~ *:not(style)":{marginStart:t}}),vertical:t=>({"& > *:not(style) ~ *:not(style)":{marginTop:t}})},B=M(function(e,i){const{size:n,colorScheme:r,variant:a,className:u,spacing:d="0.5rem",isAttached:c,isDisabled:h,orientation:m="horizontal",...l}=e,z=I("chakra-button__group",u),F=s.useMemo(()=>({size:n,colorScheme:r,variant:a,isDisabled:h}),[n,r,a,h]);let q={display:"inline-flex",...c?ae[m]:ce[m](d)};const O=m==="vertical";return o.jsx(K,{value:F,children:o.jsx(R.div,{ref:i,role:"group",__css:q,className:z,"data-attached":c?"":void 0,"data-orientation":m,flexDir:O?"column":void 0,...l})})});B.displayName="ButtonGroup";function le(t,e=[]){const i=Object.assign({},t);for(const n of e)n in i&&delete i[n];return i}var ue=["h","minH","height","minHeight"],D=M((t,e)=>{const i=W("Textarea",t),{className:n,rows:r,...a}=Z(t),u=V(a),d=r?le(i,ue):i;return o.jsx(R.textarea,{ref:e,rows:r,...u,className:I("chakra-textarea",n),__css:d})});D.displayName="Textarea";var fe=ie({displayName:"WarningTwoIcon",d:"M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"});const w=J("notifier:NotificationService");var f,x,y,j,T,E,pe;class de{constructor(){v(this,j);v(this,E);v(this,f,void 0);v(this,x,void 0);v(this,y,void 0)}destroy(){clearTimeout(p(this,y)),g(this,y,void 0)}notify(e){b(this,j,T).call(this,"showNotification",{title:e.title??void 0,message:e.message??void 0,level:e.level??"info",displayDuration:e.displayDuration})}closeAll(){b(this,j,T).call(this,"closeAll")}registerHandler(e){if(p(this,f))return w.warn(`A notification handler has already been registered; this new handler will be ignored.
The <Notifier /> component has likely been used twice in your application.`),{destroy(){}};g(this,f,e);const i=p(this,x);if(g(this,x,void 0),i)for(const[r,...a]of i)e[r](...a);let n=!1;return{destroy:()=>{n||(n=!0,p(this,f)===e&&g(this,f,void 0))}}}}f=new WeakMap,x=new WeakMap,y=new WeakMap,j=new WeakSet,T=function(e,...i){if(p(this,f))p(this,f)[e](...i);else{const n=p(this,x)??g(this,x,[]);if(n.length>=1024){w.error(`Internal notification buffer overflow: this event will be dropped to prevent a memory leak.
Make sure that the UI is configured to display notifications (use <Notifier />).`,{method:e,args:i});return}n.push([e,...i])}},E=new WeakSet,pe=function(){p(this,f)||w.warn(`No notification handler has been registered: notifications will not be visible.
Make sure that your app contains the <Notifier /> component.`)};const he={"notify-app":{name:"notify-app",services:{},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/notifier":{name:"@open-pioneer/notifier",services:{NotificationServiceImpl:{name:"NotificationServiceImpl",clazz:de,provides:[{name:"notifier.NotificationService",qualifier:void 0}],references:{}}},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/test-utils":{name:"@open-pioneer/test-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}}},me="",ve=[];function ge(t){throw new Error(`Unsupported locale: '${t}'`)}const xe=Q(me),ye=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:ge,locales:ve,packages:he,styles:xe},Symbol.toStringTag,{value:"Module"}));function A(t){const e=s.useRef(null);return s.useLayoutEffect(()=>{e.current=t}),s.useCallback((...n)=>{const r=e.current;return r(...n)},[])}const je=1,G=s.createContext(je);G.displayName="LevelContext";s.forwardRef(function(e,i){const{children:n,...r}=e,a=Se(),u=be(a);return o.jsx(_,{as:u,ref:i,...r,children:n})});function Se(){const t=s.useContext(G);return Math.min(t,6)}function be(t){return`h${t}`}const Ne="@open-pioneer/notifier",Ce=L.bind(void 0,Ne),ke=!1;function we(t){const{position:e="top-right"}=t,i=se(),n=Ce("notifier.NotificationService"),[r,a]=s.useState(!ke),u=A(c=>{const h=c.level==="error"?o.jsx(fe,{h:"100%",w:"100%"}):void 0;i({position:e,title:c.title,description:c.message||null,status:c.level,isClosable:!0,duration:c.displayDuration??null,icon:h})}),d=A(()=>{i.closeAll()});return s.useEffect(()=>{const c=n.registerHandler({showNotification:u,closeAll:d});return()=>c.destroy()},[r,n,u,d]),o.jsx(o.Fragment,{})}const Te="notify-app",Ee=L.bind(void 0,Te);function He(){const t=Ee("notifier.NotificationService"),[e,i]=s.useState(""),[n,r]=s.useState("info"),[a,u]=s.useState(""),[d,c]=s.useState(!1),h=()=>{const l={title:e,level:n,message:a,displayDuration:d?5e3:void 0};if(!l.title){t.notify({title:"Title is required",level:"error"});return}t.notify(l)},m=()=>{t.closeAll()};return o.jsxs(o.Fragment,{children:[o.jsx(we,{position:"top-right"}),o.jsx(ee,{p:5,children:o.jsxs(k,{spacing:8,children:[o.jsxs(k,{align:"center",children:[o.jsx(_,{as:"h1",children:"Notify Sample"}),o.jsx(X,{children:"Use the form below to emit notifications."})]}),o.jsx(ne,{rounded:"lg",boxShadow:"lg",p:8,children:o.jsxs(k,{spacing:4,children:[o.jsxs(N,{isRequired:!0,children:[o.jsx(C,{children:"Title"}),o.jsx(te,{type:"text",value:e,onChange:l=>i(l.target.value)})]}),o.jsxs(N,{isRequired:!0,children:[o.jsx(C,{children:"Level"}),o.jsxs(re,{value:n,onChange:l=>{r(l.target.value)},children:[o.jsx("option",{value:"success",children:"Success"}),o.jsx("option",{value:"info",children:"Info"}),o.jsx("option",{value:"warning",children:"Warning"}),o.jsx("option",{value:"error",children:"Error"})]})]}),o.jsxs(N,{children:[o.jsx(C,{children:"Message"}),o.jsx(D,{placeholder:"Enter additional message",value:a,onChange:l=>u(l.target.value)})]}),o.jsx(oe,{isChecked:d,onChange:l=>c(l.target.checked),children:"Hide after 5 seconds"}),o.jsxs(B,{justifyContent:"center",children:[o.jsx(H,{flex:"1",colorScheme:"blue",onClick:h,children:"Emit Notification"}),o.jsx(H,{flex:"1",onClick:m,children:"Clear notifications"})]})]})})]})})]})}const Ae=Y({component:He,appMetadata:ye});customElements.define("notify-app",Ae);
