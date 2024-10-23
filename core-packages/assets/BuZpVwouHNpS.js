import{f as M,r as a,j as t,a3 as De,d as $e,e as Je,u as Qe,D as se,o as y,x as Te,h as B,F as Ze,G as et,n as Z,l as Re,a as tt,H as R,S as ie,O as z,b as nt}from"./BNseSxaIihtT.js";import{_ as Ae}from"./CmsKOCeNyeyo.js";import{a as rt}from"./DrpD1hfjkN6P.js";import{I as le}from"./apwTDgsvPGCI.js";import{c as st,t as Fe,a as Me}from"./D-Zd7p0hx1Jn.js";import{a as ae,C as at}from"./jYicUDcJydKy.js";import{u as ot}from"./DE_cfL-UvDdR.js";import{T as N}from"./GR5gr-89Qrme.js";import{S as it}from"./C_rveq3oviC1.js";import{R as Oe,a as P}from"./_DT9ZMsk9pcc.js";import"./Bux-xGeHLEc6.js";function lt(e={}){const{onChange:r,precision:o,defaultValue:s,value:u,step:i=1,min:c=Number.MIN_SAFE_INTEGER,max:b=Number.MAX_SAFE_INTEGER,keepWithinRange:m=!0}=e,C=M(r),[_,k]=a.useState(()=>s==null?"":oe(s,i,o)??""),S=typeof u<"u",g=S?u:_,U=Ve(E(g),i),D=o??U,v=a.useCallback(d=>{d!==g&&(S||k(d.toString()),C?.(d.toString(),E(d)))},[C,S,g]),j=a.useCallback(d=>{let p=d;return m&&(p=st(p,c,b)),Fe(p,D)},[D,m,b,c]),K=a.useCallback((d=i)=>{let p;g===""?p=E(d):p=E(g)+d,p=j(p),v(p)},[j,i,v,g]),L=a.useCallback((d=i)=>{let p;g===""?p=E(-d):p=E(g)-d,p=j(p),v(p)},[j,i,v,g]),G=a.useCallback(()=>{let d;s==null?d="":d=oe(s,i,o)??c,v(d)},[s,o,i,v,c]),te=a.useCallback(d=>{const p=oe(d,i,D)??c;v(p)},[D,i,v,c]),A=E(g);return{isOutOfRange:A>b||A<c,isAtMax:A===b,isAtMin:A===c,precision:D,value:g,valueAsNumber:A,update:v,reset:G,increment:K,decrement:L,clamp:j,cast:te,setValue:k}}function E(e){return parseFloat(e.toString().replace(/[^\w.-]+/g,""))}function Ve(e,r){return Math.max(Me(r),Me(e))}function oe(e,r,o){const s=E(e);if(Number.isNaN(s))return;const u=Ve(s,r);return Fe(s,o??u)}function ut(e,r){const o=M(e);a.useEffect(()=>{let s=null;const u=()=>o();return r!==null&&(s=window.setInterval(u,r)),()=>{s&&window.clearInterval(s)}},[r,o])}const ct=e=>t.jsx(De,{viewBox:"0 0 24 24",...e,children:t.jsx("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})}),mt=e=>t.jsx(De,{viewBox:"0 0 24 24",...e,children:t.jsx("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"})});function Pe(e,r,o,s){a.useEffect(()=>{if(!e.current||!s)return;const u=e.current.ownerDocument.defaultView??window,i=Array.isArray(r)?r:[r],c=new u.MutationObserver(b=>{for(const m of b)m.type==="attributes"&&m.attributeName&&i.includes(m.attributeName)&&o(m)});return c.observe(e.current,{attributes:!0,attributeFilter:i}),()=>c.disconnect()})}const dt=50,_e=300;function pt(e,r){const[o,s]=a.useState(!1),[u,i]=a.useState(null),[c,b]=a.useState(!0),m=a.useRef(null),C=()=>clearTimeout(m.current);ut(()=>{u==="increment"&&e(),u==="decrement"&&r()},o?dt:null);const _=a.useCallback(()=>{c&&e(),m.current=setTimeout(()=>{b(!1),s(!0),i("increment")},_e)},[e,c]),k=a.useCallback(()=>{c&&r(),m.current=setTimeout(()=>{b(!1),s(!0),i("decrement")},_e)},[r,c]),S=a.useCallback(()=>{b(!0),s(!1),C()},[]);return a.useEffect(()=>()=>C(),[]),{up:_,down:k,stop:S,isSpinning:o}}const ft=/^[Ee0-9+\-.]$/;function bt(e){return ft.test(e)}function ht(e,r){if(e.key==null)return!0;const o=e.ctrlKey||e.altKey||e.metaKey;return!(e.key.length===1)||o?!0:r(e.key)}function gt(e={}){const{focusInputOnChange:r=!0,clampValueOnBlur:o=!0,keepWithinRange:s=!0,min:u=Number.MIN_SAFE_INTEGER,max:i=Number.MAX_SAFE_INTEGER,step:c=1,isReadOnly:b,isDisabled:m,isRequired:C,isInvalid:_,pattern:k="[0-9]*(.[0-9]+)?",inputMode:S="decimal",allowMouseWheel:g,id:U,onChange:D,precision:v,name:j,"aria-describedby":K,"aria-label":L,"aria-labelledby":G,onFocus:te,onBlur:A,onInvalid:ce,getAriaValueText:me,isValidCharacter:de,format:d,parse:p,...We}=e,pe=M(te),fe=M(A),ne=M(ce),W=M(de??bt),be=M(me),l=lt(e),{update:O,increment:he,decrement:ge}=l,[He,re]=a.useState(!1),H=!(b||m),w=a.useRef(null),q=a.useRef(null),xe=a.useRef(null),ve=a.useRef(null),X=a.useCallback(n=>n.split("").filter(W).join(""),[W]),Y=a.useCallback(n=>p?.(n)??n,[p]),T=a.useCallback(n=>(d?.(n)??n).toString(),[d]);$e(()=>{(l.valueAsNumber>i||l.valueAsNumber<u)&&ne?.("rangeOverflow",T(l.value),l.valueAsNumber)},[l.valueAsNumber,l.value,T,ne]),Je(()=>{if(!w.current)return;if(w.current.value!=l.value){const f=Y(w.current.value);l.setValue(X(f))}},[Y,X]);const $=a.useCallback((n=c)=>{H&&he(n)},[he,H,c]),J=a.useCallback((n=c)=>{H&&ge(n)},[ge,H,c]),h=pt($,J);Pe(xe,"disabled",h.stop,h.isSpinning),Pe(ve,"disabled",h.stop,h.isSpinning);const ye=a.useCallback(n=>{if(n.nativeEvent.isComposing)return;const x=Y(n.currentTarget.value);O(X(x)),q.current={start:n.currentTarget.selectionStart,end:n.currentTarget.selectionEnd}},[O,X,Y]),Ne=a.useCallback(n=>{pe?.(n),q.current&&(n.currentTarget.selectionStart=q.current.start??n.currentTarget.value?.length,n.currentTarget.selectionEnd=q.current.end??n.currentTarget.selectionStart)},[pe]),Ce=a.useCallback(n=>{if(n.nativeEvent.isComposing)return;ht(n,W)||n.preventDefault();const f=Ie(n)*c,x=n.key,V={ArrowUp:()=>$(f),ArrowDown:()=>J(f),Home:()=>O(u),End:()=>O(i)}[x];V&&(n.preventDefault(),V(n))},[W,c,$,J,O,u,i]),Ie=n=>{let f=1;return(n.metaKey||n.ctrlKey)&&(f=.1),n.shiftKey&&(f=10),f},Se=a.useMemo(()=>{const n=be?.(l.value);if(n!=null)return n;const f=l.value.toString();return f||void 0},[l.value,be]),je=a.useCallback(()=>{let n=l.value;if(l.value==="")return;/^[eE]/.test(l.value.toString())?l.setValue(""):(l.valueAsNumber<u&&(n=u),l.valueAsNumber>i&&(n=i),l.cast(n))},[l,i,u]),we=a.useCallback(()=>{re(!1),o&&je()},[o,re,je]),Q=a.useCallback(()=>{r&&requestAnimationFrame(()=>{w.current?.focus()})},[r]),Ee=a.useCallback(n=>{n.preventDefault(),h.up(),Q()},[Q,h]),ke=a.useCallback(n=>{n.preventDefault(),h.down(),Q()},[Q,h]);Qe(()=>w.current,"wheel",n=>{const x=(w.current?.ownerDocument??document).activeElement===w.current;if(!g||!x)return;n.preventDefault();const I=Ie(n)*c,V=Math.sign(n.deltaY);V===-1?$(I):V===1&&J(I)},{passive:!1});const qe=a.useCallback((n={},f=null)=>{const x=m||s&&l.isAtMax;return{...n,ref:se(f,xe),role:"button",tabIndex:-1,onPointerDown:y(n.onPointerDown,I=>{I.button!==0||x||Ee(I)}),onPointerLeave:y(n.onPointerLeave,h.stop),onPointerUp:y(n.onPointerUp,h.stop),disabled:x,"aria-disabled":ae(x)}},[l.isAtMax,s,Ee,h.stop,m]),Xe=a.useCallback((n={},f=null)=>{const x=m||s&&l.isAtMin;return{...n,ref:se(f,ve),role:"button",tabIndex:-1,onPointerDown:y(n.onPointerDown,I=>{I.button!==0||x||ke(I)}),onPointerLeave:y(n.onPointerLeave,h.stop),onPointerUp:y(n.onPointerUp,h.stop),disabled:x,"aria-disabled":ae(x)}},[l.isAtMin,s,ke,h.stop,m]),Ye=a.useCallback((n={},f=null)=>({name:j,inputMode:S,type:"text",pattern:k,"aria-labelledby":G,"aria-label":L,"aria-describedby":K,id:U,disabled:m,...n,readOnly:n.readOnly??b,"aria-readonly":n.readOnly??b,"aria-required":n.required??C,required:n.required??C,ref:se(w,f),value:T(l.value),role:"spinbutton","aria-valuemin":u,"aria-valuemax":i,"aria-valuenow":Number.isNaN(l.valueAsNumber)?void 0:l.valueAsNumber,"aria-invalid":ae(_??l.isOutOfRange),"aria-valuetext":Se,autoComplete:"off",autoCorrect:"off",onChange:y(n.onChange,ye),onKeyDown:y(n.onKeyDown,Ce),onFocus:y(n.onFocus,Ne,()=>re(!0)),onBlur:y(n.onBlur,fe,we)}),[j,S,k,G,L,T,K,U,m,C,b,_,l.value,l.valueAsNumber,l.isOutOfRange,u,i,Se,ye,Ce,Ne,fe,we]);return{value:T(l.value),valueAsNumber:l.valueAsNumber,isFocused:He,isDisabled:m,isReadOnly:b,getIncrementButtonProps:qe,getDecrementButtonProps:Xe,getInputProps:Ye,htmlProps:We}}const[xt,ee]=Te({name:"NumberInputStylesContext",errorMessage:`useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />" `}),[vt,ue]=Te({name:"NumberInputContext",errorMessage:"useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"}),ze=B(function(r,o){const s=Ze("NumberInput",r),u=et(r),i=ot(u),{htmlProps:c,...b}=gt(i),m=a.useMemo(()=>b,[b]);return t.jsx(vt,{value:m,children:t.jsx(xt,{value:s,children:t.jsx(Z.div,{...c,ref:o,className:Re("chakra-numberinput",r.className),__css:{position:"relative",zIndex:0,...s.root}})})})});ze.displayName="NumberInput";const Be=B(function(r,o){const s=ee();return t.jsx(Z.div,{"aria-hidden":!0,ref:o,...r,__css:{display:"flex",flexDirection:"column",position:"absolute",top:"0",insetEnd:"0px",margin:"1px",height:"calc(100% - 2px)",zIndex:1,...s.stepperGroup}})});Be.displayName="NumberInputStepper";const Ue=B(function(r,o){const{getInputProps:s}=ue(),u=s(r,o),i=ee();return t.jsx(Z.input,{...u,className:Re("chakra-numberinput__field",r.className),__css:{width:"100%",...i.field}})});Ue.displayName="NumberInputField";const Ke=Z("div",{baseStyle:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,transitionProperty:"common",transitionDuration:"normal",userSelect:"none",cursor:"pointer",lineHeight:"normal"}}),Le=B(function(r,o){const s=ee(),{getDecrementButtonProps:u}=ue(),i=u(r,o);return t.jsx(Ke,{...i,__css:s.stepper,children:r.children??t.jsx(ct,{})})});Le.displayName="NumberDecrementStepper";const Ge=B(function(r,o){const{getIncrementButtonProps:s}=ue(),u=s(r,o),i=ee();return t.jsx(Ke,{...u,__css:i.stepper,children:r.children??t.jsx(mt,{})})});Ge.displayName="NumberIncrementStepper";const yt={"i18n-howto-app":{name:"i18n-howto-app",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}}},Nt="",Ct=["de","en"];function It(e){switch(e){case"de":return Ae(()=>import("./BMGLgZQdGFiZ.js"),[],import.meta.url).then(r=>r.default);case"en":return Ae(()=>import("./DRvIJMpysLDi.js"),[],import.meta.url).then(r=>r.default)}throw new Error(`Unsupported locale: '${e}'`)}const St=tt(Nt),jt=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:It,locales:Ct,packages:yt,styles:St},Symbol.toStringTag,{value:"Module"})),wt="i18n-howto-app",F=rt.bind(void 0,wt);function Et(){const e=F();return t.jsxs(at,{children:[t.jsx(R,{as:"h1",size:"lg",children:e.formatMessage({id:"heading"})}),t.jsx(N,{children:e.formatMessage({id:"text"})}),t.jsx(kt,{})]})}function kt(){return t.jsxs(ie,{mb:5,mt:5,divider:t.jsx(it,{borderColor:"gray.200"}),spacing:"24px",align:"stretch",children:[t.jsx(z,{bg:"white",w:"100%",p:4,color:"black",borderWidth:"1px",borderColor:"black",children:t.jsx(At,{})}),t.jsx(z,{bg:"white",w:"100%",p:4,color:"black",borderWidth:"1px",borderColor:"black",children:t.jsx(Mt,{})}),t.jsx(z,{bg:"white",w:"100%",p:4,color:"black",borderWidth:"1px",borderColor:"black",children:t.jsx(Pt,{})}),t.jsx(z,{bg:"white",w:"100%",p:4,color:"black",borderWidth:"1px",borderColor:"black",children:t.jsx(_t,{})}),t.jsx(z,{bg:"white",w:"100%",p:4,color:"black",borderWidth:"1px",borderColor:"black",children:t.jsx(Dt,{})})]})}function At(){const e=F(),[r,o]=a.useState("");return t.jsxs(t.Fragment,{children:[t.jsx(R,{as:"h4",size:"md",children:e.formatMessage({id:"interpolation.heading"})}),t.jsx(le,{value:r,onChange:s=>o(s.target.value),placeholder:e.formatMessage({id:"interpolation.placeholder"}),size:"sm"}),t.jsx(N,{mb:"8px",children:e.formatMessage({id:"interpolation.value"},{name:r})})]})}function Mt(){const e=F(),[r,o]=a.useState("1");return t.jsxs(t.Fragment,{children:[t.jsx(R,{as:"h4",size:"md",children:e.formatMessage({id:"plurals.heading"})}),t.jsx(Oe,{onChange:o,value:r,children:t.jsxs(ie,{spacing:4,direction:"row",children:[t.jsx(P,{size:"md",value:"0",children:"0"}),t.jsx(P,{size:"md",value:"1",children:"1"}),t.jsx(P,{size:"md",value:"42",children:"42"}),t.jsx(P,{size:"md",value:"99",children:"99"})]})}),t.jsx(N,{mb:"8px",children:e.formatMessage({id:"plurals.value"},{n:r})})]})}function Pt(){const e=F(),[r,o]=a.useState(""),[s,u]=a.useState("male");return t.jsxs(t.Fragment,{children:[t.jsx(R,{as:"h4",size:"md",children:e.formatMessage({id:"selection.heading"})}),t.jsx(le,{value:r,onChange:i=>o(i.target.value),placeholder:e.formatMessage({id:"interpolation.placeholder"}),size:"sm"}),t.jsx(Oe,{onChange:u,value:s,children:t.jsxs(ie,{spacing:4,direction:"row",children:[t.jsx(P,{size:"md",value:"female",children:e.formatMessage({id:"selection.gender.female"})}),t.jsx(P,{size:"md",value:"male",children:e.formatMessage({id:"selection.gender.male"})}),t.jsx(P,{size:"md",value:"other",children:e.formatMessage({id:"selection.gender.other"})})]})}),t.jsx(N,{mb:"8px",children:e.formatMessage({id:"selection.value"},{name:r,gender:s})})]})}function _t(){const e=F(),[r,o]=a.useState("424224.24");return t.jsxs(t.Fragment,{children:[t.jsx(R,{as:"h4",size:"md",children:e.formatMessage({id:"numberformat.heading"})}),t.jsxs(ze,{onChange:s=>o(s),value:r,precision:2,step:.25,children:[t.jsx(Ue,{}),t.jsxs(Be,{children:[t.jsx(Ge,{}),t.jsx(Le,{})]})]}),t.jsxs(N,{mb:"8px",children:[e.formatMessage({id:"numberformat.example.currency1"}),e.formatNumber(+r,{style:"currency",currency:"EUR"})]}),t.jsxs(N,{mb:"8px",children:[e.formatMessage({id:"numberformat.example.currency2"}),e.formatNumber(+r,{style:"currency",currency:"EUR",currencyDisplay:"name"})]}),t.jsxs(N,{mb:"8px",children:[e.formatMessage({id:"numberformat.example.unit1"}),e.formatNumber(+r,{style:"unit",unit:"terabyte-per-second"})]}),t.jsxs(N,{mb:"8px",children:[e.formatMessage({id:"numberformat.example.unit2"}),e.formatNumber(+r,{style:"unit",unit:"terabyte-per-second",unitDisplay:"long"})]})]})}function Dt(){const e=F(),[r,o]=a.useState("2023-02-19T19:02");return t.jsxs(t.Fragment,{children:[t.jsx(R,{as:"h4",size:"md",children:e.formatMessage({id:"datetimeformat.heading"})}),t.jsx(le,{value:r,onChange:s=>o(s.target.value),size:"md",type:"datetime-local"}),t.jsxs(N,{mb:"8px",children:[e.formatMessage({id:"datetimeformat.timelabel"}),e.formatDate(r,{dateStyle:"full",timeStyle:"short"})]}),t.jsxs(N,{mb:"8px",children:[e.formatMessage({id:"datetimeformat.relativetimelabel"}),e.formatRelativeTime(Tt(r),"minute",{numeric:"auto",style:"long"})]})]})}function Tt(e){const r=new Date(e).getTime()-new Date().getTime();return Math.round(r/6e4)}const Rt=nt({component:Et,appMetadata:jt,async resolveConfig(e){const r=e.getAttribute("forced-locale");if(r)return{locale:r}}});customElements.define("i18n-howto",Rt);const Ft=document.getElementById("container");Ot();function Ot(){const e=window.location.search,o=new URLSearchParams(e).get("lang"),s=document.createElement("i18n-howto");o&&s.setAttribute("forced-locale",o),Ft.appendChild(s)}
