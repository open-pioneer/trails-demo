var g=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var s=(i,e,t)=>(g(i,e,"read from private field"),t?t.call(i):e.get(i)),l=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},c=(i,e,t,r)=>(g(i,e,"write to private field"),r?r.call(i,t):e.set(i,t),t);var b=(i,e,t)=>(g(i,e,"access private method"),t);import{r as d,q as H,j as p,a1 as k,c as E}from"./BNZsPb_Dlwri.js";import{u as j}from"./DmjSuYXOTY12.js";import{u as C}from"./CF_wYp9wy1uA.js";function M(i){const{viewBox:e="0 0 24 24",d:t,displayName:r,defaultProps:a={}}=i,f=d.Children.toArray(i.path),h=H((y,o)=>p.jsx(k,{ref:o,viewBox:e,...a,...y,children:f.length?f:p.jsx("path",{fill:"currentColor",d:t})}));return h.displayName=r,h}const w=E("notifier:NotificationService");var n,u,v,m,N,A,R;class q{constructor(){l(this,m);l(this,A);l(this,n,void 0);l(this,u,void 0);l(this,v,void 0)}destroy(){clearTimeout(s(this,v)),c(this,v,void 0)}notify(e){b(this,m,N).call(this,"showNotification",{title:e.title??void 0,message:e.message??void 0,level:e.level??"info",displayDuration:e.displayDuration})}closeAll(){b(this,m,N).call(this,"closeAll")}registerHandler(e){if(s(this,n))return w.warn(`A notification handler has already been registered; this new handler will be ignored.
The <Notifier /> component has likely been used twice in your application.`),{destroy(){}};c(this,n,e);const t=s(this,u);if(c(this,u,void 0),t)for(const[a,...f]of t)e[a](...f);let r=!1;return{destroy:()=>{r||(r=!0,s(this,n)===e&&c(this,n,void 0))}}}}n=new WeakMap,u=new WeakMap,v=new WeakMap,m=new WeakSet,N=function(e,...t){if(s(this,n))s(this,n)[e](...t);else{const r=s(this,u)??c(this,u,[]);if(r.length>=1024){w.error(`Internal notification buffer overflow: this event will be dropped to prevent a memory leak.
Make sure that the UI is configured to display notifications (use <Notifier />).`,{method:e,args:t});return}r.push([e,...t])}},A=new WeakSet,R=function(){s(this,n)||w.warn(`No notification handler has been registered: notifications will not be visible.
Make sure that your app contains the <Notifier /> component.`)};function x(i){const e=d.useRef(null);return d.useLayoutEffect(()=>{e.current=i}),d.useCallback((...r)=>{const a=e.current;return a(...r)},[])}const S="@open-pioneer/notifier",T=j.bind(void 0,S);var D=M({displayName:"WarningTwoIcon",d:"M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"});const L=!1;function B(i){const{position:e="top-right"}=i,t=C(),r=T("notifier.NotificationService"),[a,f]=d.useState(!L),h=x(o=>{const I=o.level==="error"?p.jsx(D,{h:"100%",w:"100%"}):void 0;t({position:e,title:o.title,description:o.message||null,status:o.level,isClosable:!0,duration:o.displayDuration??null,icon:I})}),y=x(()=>{t.closeAll()});return d.useEffect(()=>{const o=r.registerHandler({showNotification:h,closeAll:y});return()=>o.destroy()},[a,r,h,y]),p.jsx(p.Fragment,{})}export{q as N,B as a};
