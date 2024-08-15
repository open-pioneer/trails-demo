import{$ as P,r as s,j as n,a0 as Fe,h as Qe,i as Ze,u as et,E as ue,x as C,a1 as ce,y as Oe,q as K,F as tt,G as nt,p as te,d as Ve,a as rt,b as at}from"./FpWhIYPQtjDV.js";import{_ as Pe}from"./Dch09mLNbtBx.js";import{a as st}from"./ybE0yBI8Jih7.js";import{I as de}from"./CBzWPTSsuM-L.js";import{c as ot,t as ze,a as De}from"./wFQsMYypCwJA.js";import{u as it}from"./COA7Fy72VbPa.js";import{C as lt,H as F}from"./B5LsMhejF82D.js";import{T as I}from"./BlJrPTOdtHRl.js";import{S as pe}from"./RrDYW84yp6Hz.js";import{S as ut}from"./Cg9sYtMVRsW5.js";import{B as U}from"./ApOV2EUX4Az6.js";import{R as Be,a as D}from"./C4WpeipR96OW.js";import"./DdrsuNi1stXe.js";function ct(e={}){const{onChange:r,precision:o,defaultValue:a,value:u,step:l=1,min:m=Number.MIN_SAFE_INTEGER,max:f=Number.MAX_SAFE_INTEGER,keepWithinRange:h=!0}=e,g=P(r),[E,k]=s.useState(()=>{var p;return a==null?"":(p=me(a,l,o))!=null?p:""}),S=typeof u<"u",v=S?u:E,L=Ue(_(v),l),R=o??L,N=s.useCallback(p=>{p!==v&&(S||k(p.toString()),g?.(p.toString(),_(p)))},[g,S,v]),j=s.useCallback(p=>{let d=p;return h&&(d=ot(d,m,f)),ze(d,R)},[R,h,f,m]),G=s.useCallback((p=l)=>{let d;v===""?d=_(p):d=_(v)+p,d=j(d),N(d)},[j,l,N,v]),W=s.useCallback((p=l)=>{let d;v===""?d=_(-p):d=_(v)-p,d=j(d),N(d)},[j,l,N,v]),q=s.useCallback(()=>{var p;let d;a==null?d="":d=(p=me(a,l,o))!=null?p:m,N(d)},[a,o,l,N,m]),re=s.useCallback(p=>{var d;const se=(d=me(p,l,R))!=null?d:m;N(se)},[R,l,N,m]),A=_(v);return{isOutOfRange:A>f||A<m,isAtMax:A===f,isAtMin:A===m,precision:R,value:v,valueAsNumber:A,update:N,reset:q,increment:G,decrement:W,clamp:j,cast:re,setValue:k}}function _(e){return parseFloat(e.toString().replace(/[^\w.-]+/g,""))}function Ue(e,r){return Math.max(De(r),De(e))}function me(e,r,o){const a=_(e);if(Number.isNaN(a))return;const u=Ue(a,r);return ze(a,o??u)}var mt=e=>n.jsx(Fe,{viewBox:"0 0 24 24",...e,children:n.jsx("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})}),dt=e=>n.jsx(Fe,{viewBox:"0 0 24 24",...e,children:n.jsx("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"})});function Re(e,r,o,a){s.useEffect(()=>{var u;if(!e.current||!a)return;const l=(u=e.current.ownerDocument.defaultView)!=null?u:window,m=Array.isArray(r)?r:[r],f=new l.MutationObserver(h=>{for(const g of h)g.type==="attributes"&&g.attributeName&&m.includes(g.attributeName)&&o(g)});return f.observe(e.current,{attributes:!0,attributeFilter:m}),()=>f.disconnect()})}function pt(e,r){const o=P(e);s.useEffect(()=>{let a=null;const u=()=>o();return r!==null&&(a=window.setInterval(u,r)),()=>{a&&window.clearInterval(a)}},[r,o])}var ft=50,Te=300;function bt(e,r){const[o,a]=s.useState(!1),[u,l]=s.useState(null),[m,f]=s.useState(!0),h=s.useRef(null),g=()=>clearTimeout(h.current);pt(()=>{u==="increment"&&e(),u==="decrement"&&r()},o?ft:null);const E=s.useCallback(()=>{m&&e(),h.current=setTimeout(()=>{f(!1),a(!0),l("increment")},Te)},[e,m]),k=s.useCallback(()=>{m&&r(),h.current=setTimeout(()=>{f(!1),a(!0),l("decrement")},Te)},[r,m]),S=s.useCallback(()=>{f(!0),a(!1),g()},[]);return s.useEffect(()=>()=>g(),[]),{up:E,down:k,stop:S,isSpinning:o}}var ht=/^[Ee0-9+\-.]$/;function gt(e){return ht.test(e)}function xt(e,r){if(e.key==null)return!0;const o=e.ctrlKey||e.altKey||e.metaKey;return!(e.key.length===1)||o?!0:r(e.key)}function vt(e={}){const{focusInputOnChange:r=!0,clampValueOnBlur:o=!0,keepWithinRange:a=!0,min:u=Number.MIN_SAFE_INTEGER,max:l=Number.MAX_SAFE_INTEGER,step:m=1,isReadOnly:f,isDisabled:h,isRequired:g,isInvalid:E,pattern:k="[0-9]*(.[0-9]+)?",inputMode:S="decimal",allowMouseWheel:v,id:L,onChange:R,precision:N,name:j,"aria-describedby":G,"aria-label":W,"aria-labelledby":q,onFocus:re,onBlur:A,onInvalid:be,getAriaValueText:he,isValidCharacter:ae,format:p,parse:d,...se}=e,oe=P(re),ge=P(A),V=P(be),H=P(ae??gt),ie=P(he),i=ct(e),{update:z,increment:xe,decrement:ve}=i,[Xe,le]=s.useState(!1),X=!(f||h),w=s.useRef(null),$=s.useRef(null),ye=s.useRef(null),Ne=s.useRef(null),Y=s.useCallback(t=>t.split("").filter(H).join(""),[H]),J=s.useCallback(t=>{var c;return(c=d?.(t))!=null?c:t},[d]),T=s.useCallback(t=>{var c;return((c=p?.(t))!=null?c:t).toString()},[p]);Qe(()=>{(i.valueAsNumber>l||i.valueAsNumber<u)&&V?.("rangeOverflow",T(i.value),i.valueAsNumber)},[i.valueAsNumber,i.value,T,V]),Ze(()=>{if(!w.current)return;if(w.current.value!=i.value){const c=J(w.current.value);i.setValue(Y(c))}},[J,Y]);const Q=s.useCallback((t=m)=>{X&&xe(t)},[xe,X,m]),Z=s.useCallback((t=m)=>{X&&ve(t)},[ve,X,m]),x=bt(Q,Z);Re(ye,"disabled",x.stop,x.isSpinning),Re(Ne,"disabled",x.stop,x.isSpinning);const Ce=s.useCallback(t=>{if(t.nativeEvent.isComposing)return;const b=J(t.currentTarget.value);z(Y(b)),$.current={start:t.currentTarget.selectionStart,end:t.currentTarget.selectionEnd}},[z,Y,J]),Ie=s.useCallback(t=>{var c,b,y;oe?.(t),$.current&&(t.target.selectionStart=(b=$.current.start)!=null?b:(c=t.currentTarget.value)==null?void 0:c.length,t.currentTarget.selectionEnd=(y=$.current.end)!=null?y:t.currentTarget.selectionStart)},[oe]),Se=s.useCallback(t=>{if(t.nativeEvent.isComposing)return;xt(t,H)||t.preventDefault();const c=je(t)*m,b=t.key,M={ArrowUp:()=>Q(c),ArrowDown:()=>Z(c),Home:()=>z(u),End:()=>z(l)}[b];M&&(t.preventDefault(),M(t))},[H,m,Q,Z,z,u,l]),je=t=>{let c=1;return(t.metaKey||t.ctrlKey)&&(c=.1),t.shiftKey&&(c=10),c},we=s.useMemo(()=>{const t=ie?.(i.value);if(t!=null)return t;const c=i.value.toString();return c||void 0},[i.value,ie]),_e=s.useCallback(()=>{let t=i.value;if(i.value==="")return;/^[eE]/.test(i.value.toString())?i.setValue(""):(i.valueAsNumber<u&&(t=u),i.valueAsNumber>l&&(t=l),i.cast(t))},[i,l,u]),Ee=s.useCallback(()=>{le(!1),o&&_e()},[o,le,_e]),ee=s.useCallback(()=>{r&&requestAnimationFrame(()=>{var t;(t=w.current)==null||t.focus()})},[r]),ke=s.useCallback(t=>{t.preventDefault(),x.up(),ee()},[ee,x]),Ae=s.useCallback(t=>{t.preventDefault(),x.down(),ee()},[ee,x]);et(()=>w.current,"wheel",t=>{var c,b;const M=((b=(c=w.current)==null?void 0:c.ownerDocument)!=null?b:document).activeElement===w.current;if(!v||!M)return;t.preventDefault();const B=je(t)*m,Me=Math.sign(t.deltaY);Me===-1?Q(B):Me===1&&Z(B)},{passive:!1});const $e=s.useCallback((t={},c=null)=>{const b=h||a&&i.isAtMax;return{...t,ref:ue(c,ye),role:"button",tabIndex:-1,onPointerDown:C(t.onPointerDown,y=>{y.button!==0||b||ke(y)}),onPointerLeave:C(t.onPointerLeave,x.stop),onPointerUp:C(t.onPointerUp,x.stop),disabled:b,"aria-disabled":ce(b)}},[i.isAtMax,a,ke,x.stop,h]),Ye=s.useCallback((t={},c=null)=>{const b=h||a&&i.isAtMin;return{...t,ref:ue(c,Ne),role:"button",tabIndex:-1,onPointerDown:C(t.onPointerDown,y=>{y.button!==0||b||Ae(y)}),onPointerLeave:C(t.onPointerLeave,x.stop),onPointerUp:C(t.onPointerUp,x.stop),disabled:b,"aria-disabled":ce(b)}},[i.isAtMin,a,Ae,x.stop,h]),Je=s.useCallback((t={},c=null)=>{var b,y,M,B;return{name:j,inputMode:S,type:"text",pattern:k,"aria-labelledby":q,"aria-label":W,"aria-describedby":G,id:L,disabled:h,...t,readOnly:(b=t.readOnly)!=null?b:f,"aria-readonly":(y=t.readOnly)!=null?y:f,"aria-required":(M=t.required)!=null?M:g,required:(B=t.required)!=null?B:g,ref:ue(w,c),value:T(i.value),role:"spinbutton","aria-valuemin":u,"aria-valuemax":l,"aria-valuenow":Number.isNaN(i.valueAsNumber)?void 0:i.valueAsNumber,"aria-invalid":ce(E??i.isOutOfRange),"aria-valuetext":we,autoComplete:"off",autoCorrect:"off",onChange:C(t.onChange,Ce),onKeyDown:C(t.onKeyDown,Se),onFocus:C(t.onFocus,Ie,()=>le(!0)),onBlur:C(t.onBlur,ge,Ee)}},[j,S,k,q,W,T,G,L,h,g,f,E,i.value,i.valueAsNumber,i.isOutOfRange,u,l,we,Ce,Se,Ie,ge,Ee]);return{value:T(i.value),valueAsNumber:i.valueAsNumber,isFocused:Xe,isDisabled:h,isReadOnly:f,getIncrementButtonProps:$e,getDecrementButtonProps:Ye,getInputProps:Je,htmlProps:se}}var[yt,ne]=Oe({name:"NumberInputStylesContext",errorMessage:`useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />" `}),[Nt,fe]=Oe({name:"NumberInputContext",errorMessage:"useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"}),Ke=K(function(r,o){const a=tt("NumberInput",r),u=nt(r),l=it(u),{htmlProps:m,...f}=vt(l),h=s.useMemo(()=>f,[f]);return n.jsx(Nt,{value:h,children:n.jsx(yt,{value:a,children:n.jsx(te.div,{...m,ref:o,className:Ve("chakra-numberinput",r.className),__css:{position:"relative",zIndex:0,...a.root}})})})});Ke.displayName="NumberInput";var Le=K(function(r,o){const a=ne();return n.jsx(te.div,{"aria-hidden":!0,ref:o,...r,__css:{display:"flex",flexDirection:"column",position:"absolute",top:"0",insetEnd:"0px",margin:"1px",height:"calc(100% - 2px)",zIndex:1,...a.stepperGroup}})});Le.displayName="NumberInputStepper";var Ge=K(function(r,o){const{getInputProps:a}=fe(),u=a(r,o),l=ne();return n.jsx(te.input,{...u,className:Ve("chakra-numberinput__field",r.className),__css:{width:"100%",...l.field}})});Ge.displayName="NumberInputField";var We=te("div",{baseStyle:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,transitionProperty:"common",transitionDuration:"normal",userSelect:"none",cursor:"pointer",lineHeight:"normal"}}),qe=K(function(r,o){var a;const u=ne(),{getDecrementButtonProps:l}=fe(),m=l(r,o);return n.jsx(We,{...m,__css:u.stepper,children:(a=r.children)!=null?a:n.jsx(mt,{})})});qe.displayName="NumberDecrementStepper";var He=K(function(r,o){var a;const{getIncrementButtonProps:u}=fe(),l=u(r,o),m=ne();return n.jsx(We,{...l,__css:m.stepper,children:(a=r.children)!=null?a:n.jsx(dt,{})})});He.displayName="NumberIncrementStepper";const Ct={"i18n-howto-app":{name:"i18n-howto-app",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}}},It="",St=["de","en"];function jt(e){switch(e){case"de":return Pe(()=>import("./BMGLgZQdGFiZ.js"),[],import.meta.url).then(r=>r.default);case"en":return Pe(()=>import("./DRvIJMpysLDi.js"),[],import.meta.url).then(r=>r.default)}throw new Error(`Unsupported locale: '${e}'`)}const wt=rt(It),_t=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:jt,locales:St,packages:Ct,styles:wt},Symbol.toStringTag,{value:"Module"})),Et="i18n-howto-app",O=st.bind(void 0,Et);function kt(){const e=O();return n.jsxs(lt,{children:[n.jsx(F,{as:"h1",size:"lg",children:e.formatMessage({id:"heading"})}),n.jsx(I,{children:e.formatMessage({id:"text"})}),n.jsx(At,{})]})}function At(){return n.jsxs(pe,{mb:5,mt:5,divider:n.jsx(ut,{borderColor:"gray.200"}),spacing:"24px",align:"stretch",children:[n.jsx(U,{bg:"white",w:"100%",p:4,color:"black",borderWidth:"1px",borderColor:"black",children:n.jsx(Mt,{})}),n.jsx(U,{bg:"white",w:"100%",p:4,color:"black",borderWidth:"1px",borderColor:"black",children:n.jsx(Pt,{})}),n.jsx(U,{bg:"white",w:"100%",p:4,color:"black",borderWidth:"1px",borderColor:"black",children:n.jsx(Dt,{})}),n.jsx(U,{bg:"white",w:"100%",p:4,color:"black",borderWidth:"1px",borderColor:"black",children:n.jsx(Rt,{})}),n.jsx(U,{bg:"white",w:"100%",p:4,color:"black",borderWidth:"1px",borderColor:"black",children:n.jsx(Tt,{})})]})}function Mt(){const e=O(),[r,o]=s.useState("");return n.jsxs(n.Fragment,{children:[n.jsx(F,{as:"h4",size:"md",children:e.formatMessage({id:"interpolation.heading"})}),n.jsx(de,{value:r,onChange:a=>o(a.target.value),placeholder:e.formatMessage({id:"interpolation.placeholder"}),size:"sm"}),n.jsx(I,{mb:"8px",children:e.formatMessage({id:"interpolation.value"},{name:r})})]})}function Pt(){const e=O(),[r,o]=s.useState("1");return n.jsxs(n.Fragment,{children:[n.jsx(F,{as:"h4",size:"md",children:e.formatMessage({id:"plurals.heading"})}),n.jsx(Be,{onChange:o,value:r,children:n.jsxs(pe,{spacing:4,direction:"row",children:[n.jsx(D,{size:"md",value:"0",children:"0"}),n.jsx(D,{size:"md",value:"1",children:"1"}),n.jsx(D,{size:"md",value:"42",children:"42"}),n.jsx(D,{size:"md",value:"99",children:"99"})]})}),n.jsx(I,{mb:"8px",children:e.formatMessage({id:"plurals.value"},{n:r})})]})}function Dt(){const e=O(),[r,o]=s.useState(""),[a,u]=s.useState("male");return n.jsxs(n.Fragment,{children:[n.jsx(F,{as:"h4",size:"md",children:e.formatMessage({id:"selection.heading"})}),n.jsx(de,{value:r,onChange:l=>o(l.target.value),placeholder:e.formatMessage({id:"interpolation.placeholder"}),size:"sm"}),n.jsx(Be,{onChange:u,value:a,children:n.jsxs(pe,{spacing:4,direction:"row",children:[n.jsx(D,{size:"md",value:"female",children:e.formatMessage({id:"selection.gender.female"})}),n.jsx(D,{size:"md",value:"male",children:e.formatMessage({id:"selection.gender.male"})}),n.jsx(D,{size:"md",value:"other",children:e.formatMessage({id:"selection.gender.other"})})]})}),n.jsx(I,{mb:"8px",children:e.formatMessage({id:"selection.value"},{name:r,gender:a})})]})}function Rt(){const e=O(),[r,o]=s.useState("424224.24");return n.jsxs(n.Fragment,{children:[n.jsx(F,{as:"h4",size:"md",children:e.formatMessage({id:"numberformat.heading"})}),n.jsxs(Ke,{onChange:a=>o(a),value:r,precision:2,step:.25,children:[n.jsx(Ge,{}),n.jsxs(Le,{children:[n.jsx(He,{}),n.jsx(qe,{})]})]}),n.jsxs(I,{mb:"8px",children:[e.formatMessage({id:"numberformat.example.currency1"}),e.formatNumber(+r,{style:"currency",currency:"EUR"})]}),n.jsxs(I,{mb:"8px",children:[e.formatMessage({id:"numberformat.example.currency2"}),e.formatNumber(+r,{style:"currency",currency:"EUR",currencyDisplay:"name"})]}),n.jsxs(I,{mb:"8px",children:[e.formatMessage({id:"numberformat.example.unit1"}),e.formatNumber(+r,{style:"unit",unit:"terabyte-per-second"})]}),n.jsxs(I,{mb:"8px",children:[e.formatMessage({id:"numberformat.example.unit2"}),e.formatNumber(+r,{style:"unit",unit:"terabyte-per-second",unitDisplay:"long"})]})]})}function Tt(){const e=O(),[r,o]=s.useState("2023-02-19T19:02");return n.jsxs(n.Fragment,{children:[n.jsx(F,{as:"h4",size:"md",children:e.formatMessage({id:"datetimeformat.heading"})}),n.jsx(de,{value:r,onChange:a=>o(a.target.value),size:"md",type:"datetime-local"}),n.jsxs(I,{mb:"8px",children:[e.formatMessage({id:"datetimeformat.timelabel"}),e.formatDate(r,{dateStyle:"full",timeStyle:"short"})]}),n.jsxs(I,{mb:"8px",children:[e.formatMessage({id:"datetimeformat.relativetimelabel"}),e.formatRelativeTime(Ft(r),"minute",{numeric:"auto",style:"long"})]})]})}function Ft(e){const r=new Date(e).getTime()-new Date().getTime();return Math.round(r/6e4)}const Ot=at({component:kt,appMetadata:_t,async resolveConfig(e){const r=e.getAttribute("forced-locale");if(r)return{locale:r}}});customElements.define("i18n-howto",Ot);const Vt=document.getElementById("container");zt();function zt(){const e=window.location.search,o=new URLSearchParams(e).get("lang"),a=document.createElement("i18n-howto");o&&a.setAttribute("forced-locale",o),Vt.appendChild(a)}
