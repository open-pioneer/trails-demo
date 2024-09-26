import{a0 as M,r as m,p as T,q as R,j as r,d as we,h as _t,E as he,y as Qe,F as Ze,G as et,H as Tt,a as Ct,O as It,b as Rt}from"./CP8MVrT81mG9.js";import{F as zt}from"./mcFmBe9aR2Xm.js";import{L as Nt}from"./B1qkmyLhH9kF.js";import{S as k}from"./CkMijwItPRnA.js";import{C as Dt,H as b}from"./qK5A3QF7i-vn.js";import{B as Ke}from"./CN_7oo9JZIao.js";import{D}from"./CpRu3PoDaz9c.js";import{u as At,I as Mt}from"./B4Et_VrZbAI1.js";import{I as pe}from"./BKGDiz-wqvFI.js";import{c as fe,p as Vt,r as Xe,v as Ye}from"./wFQsMYypCwJA.js";import{u as Lt,C as X,T as Ft}from"./D7NM0igdFf19.js";import{B as P}from"./6x-PNDsXtbVt.js";import{a as me}from"./C80bVaSX0YKM.js";import{S as ve}from"./az-Sp7zRG4Eo.js";import"./DTcwvI7lZQBL.js";import"./DdrsuNi1stXe.js";const tt=1/60*1e3,$t=typeof performance<"u"?()=>performance.now():()=>Date.now(),nt=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e($t()),tt);function Ut(e){let t=[],n=[],s=0,i=!1,h=!1;const c=new WeakSet,p={schedule:(u,a=!1,f=!1)=>{const l=f&&i,v=l?t:n;return a&&c.add(u),v.indexOf(u)===-1&&(v.push(u),l&&i&&(s=t.length)),u},cancel:u=>{const a=n.indexOf(u);a!==-1&&n.splice(a,1),c.delete(u)},process:u=>{if(i){h=!0;return}if(i=!0,[t,n]=[n,t],n.length=0,s=t.length,s)for(let a=0;a<s;a++){const f=t[a];f(u),c.has(f)&&(p.schedule(f),e())}i=!1,h&&(h=!1,p.process(u))}};return p}const Bt=40;let ye=!0,B=!1,je=!1;const V={delta:0,timestamp:0},H=["read","update","preRender","render","postRender"],Q=H.reduce((e,t)=>(e[t]=Ut(()=>B=!0),e),{}),Ht=H.reduce((e,t)=>{const n=Q[t];return e[t]=(s,i=!1,h=!1)=>(B||Kt(),n.schedule(s,i,h)),e},{}),Ot=H.reduce((e,t)=>(e[t]=Q[t].cancel,e),{});H.reduce((e,t)=>(e[t]=()=>Q[t].process(V),e),{});const Wt=e=>Q[e].process(V),rt=e=>{B=!1,V.delta=ye?tt:Math.max(Math.min(e-V.timestamp,Bt),1),V.timestamp=e,je=!0,H.forEach(Wt),je=!1,B&&(ye=!1,nt(rt))},Kt=()=>{B=!0,ye=!0,je||nt(rt)},qe=()=>V;function Xt(e){const{value:t,defaultValue:n,onChange:s,shouldUpdate:i=(v,S)=>v!==S}=e,h=M(s),c=M(i),[p,u]=m.useState(n),a=t!==void 0,f=a?t:p,l=M(v=>{const C=typeof v=="function"?v(f):v;c(f,C)&&(a||u(C),h(C))},[a,h,f,c]);return[f,l]}var Yt={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},qt=T("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),ke=R(function(t,n){var s;const{placement:i="left",...h}=t,c=(s=Yt[i])!=null?s:{},p=At();return r.jsx(qt,{ref:n,...h,__css:{...p.addon,...c}})});ke.displayName="InputAddon";var Pe=R(function(t,n){return r.jsx(ke,{ref:n,placement:"left",...t,className:we("chakra-input__left-addon",t.className)})});Pe.displayName="InputLeftAddon";Pe.id="InputLeftAddon";var st=R(function(t,n){return r.jsx(ke,{ref:n,placement:"right",...t,className:we("chakra-input__right-addon",t.className)})});st.displayName="InputRightAddon";st.id="InputRightAddon";var A=e=>e?"":void 0,xe=e=>e?!0:void 0,O=(...e)=>e.filter(Boolean).join(" ");function ge(...e){return function(n){e.some(s=>(s?.(n),n?.defaultPrevented))}}function Y(e){const{orientation:t,vertical:n,horizontal:s}=e;return t==="vertical"?n:s}var G={width:0,height:0},q=e=>e||G;function Gt(e){const{orientation:t,thumbPercents:n,thumbRects:s,isReversed:i}=e,h=j=>{var _;const W=(_=s[j])!=null?_:G;return{position:"absolute",userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",touchAction:"none",...Y({orientation:t,vertical:{bottom:`calc(${n[j]}% - ${W.height/2}px)`},horizontal:{left:`calc(${n[j]}% - ${W.width/2}px)`}})}},c=t==="vertical"?s.reduce((j,_)=>q(j).height>q(_).height?j:_,G):s.reduce((j,_)=>q(j).width>q(_).width?j:_,G),p={position:"relative",touchAction:"none",WebkitTapHighlightColor:"rgba(0,0,0,0)",userSelect:"none",outline:0,...Y({orientation:t,vertical:c?{paddingLeft:c.width/2,paddingRight:c.width/2}:{},horizontal:c?{paddingTop:c.height/2,paddingBottom:c.height/2}:{}})},u={position:"absolute",...Y({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",height:"100%"},horizontal:{top:"50%",transform:"translateY(-50%)",width:"100%"}})},a=n.length===1,f=[0,i?100-n[0]:n[0]],l=a?f:n;let v=l[0];!a&&i&&(v=100-v);const S=Math.abs(l[l.length-1]-l[0]),C={...u,...Y({orientation:t,vertical:i?{height:`${S}%`,top:`${v}%`}:{height:`${S}%`,bottom:`${v}%`},horizontal:i?{width:`${S}%`,right:`${v}%`}:{width:`${S}%`,left:`${v}%`}})};return{trackStyle:u,innerTrackStyle:C,rootStyle:p,getThumbStyle:h}}function Jt(e){const{isReversed:t,direction:n,orientation:s}=e;return n==="ltr"||s==="vertical"?t:!t}function Qt(e,t,n,s){return e.addEventListener(t,n,s),()=>{e.removeEventListener(t,n,s)}}function Zt(e){const t=tn(e);return typeof t.PointerEvent<"u"&&e instanceof t.PointerEvent?e.pointerType==="mouse":e instanceof t.MouseEvent}function ot(e){return!!e.touches}function en(e){return ot(e)&&e.touches.length>1}function tn(e){var t;return(t=e.view)!=null?t:window}function nn(e,t="page"){const n=e.touches[0]||e.changedTouches[0];return{x:n[`${t}X`],y:n[`${t}Y`]}}function rn(e,t="page"){return{x:e[`${t}X`],y:e[`${t}Y`]}}function it(e,t="page"){return ot(e)?nn(e,t):rn(e,t)}function sn(e){return t=>{const n=Zt(t);(!n||n&&t.button===0)&&e(t)}}function on(e,t=!1){function n(i){e(i,{point:it(i)})}return t?sn(n):n}function J(e,t,n,s){return Qt(e,t,on(n,t==="pointerdown"),s)}var an=Object.defineProperty,ln=(e,t,n)=>t in e?an(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t,n)=>(ln(e,typeof t!="symbol"?t+"":t,n),n),cn=class{constructor(e,t,n){E(this,"history",[]),E(this,"startEvent",null),E(this,"lastEvent",null),E(this,"lastEventInfo",null),E(this,"handlers",{}),E(this,"removeListeners",()=>{}),E(this,"threshold",3),E(this,"win"),E(this,"updatePoint",()=>{if(!(this.lastEvent&&this.lastEventInfo))return;const p=be(this.lastEventInfo,this.history),u=this.startEvent!==null,a=pn(p.offset,{x:0,y:0})>=this.threshold;if(!u&&!a)return;const{timestamp:f}=qe();this.history.push({...p.point,timestamp:f});const{onStart:l,onMove:v}=this.handlers;u||(l?.(this.lastEvent,p),this.startEvent=this.lastEvent),v?.(this.lastEvent,p)}),E(this,"onPointerMove",(p,u)=>{this.lastEvent=p,this.lastEventInfo=u,Ht.update(this.updatePoint,!0)}),E(this,"onPointerUp",(p,u)=>{const a=be(u,this.history),{onEnd:f,onSessionEnd:l}=this.handlers;l?.(p,a),this.end(),!(!f||!this.startEvent)&&f?.(p,a)});var s;if(this.win=(s=e.view)!=null?s:window,en(e))return;this.handlers=t,n&&(this.threshold=n),e.stopPropagation(),e.preventDefault();const i={point:it(e)},{timestamp:h}=qe();this.history=[{...i.point,timestamp:h}];const{onSessionStart:c}=t;c?.(e,be(i,this.history)),this.removeListeners=hn(J(this.win,"pointermove",this.onPointerMove),J(this.win,"pointerup",this.onPointerUp),J(this.win,"pointercancel",this.onPointerUp))}updateHandlers(e){this.handlers=e}end(){var e;(e=this.removeListeners)==null||e.call(this),Ot.update(this.updatePoint)}};function Ge(e,t){return{x:e.x-t.x,y:e.y-t.y}}function be(e,t){return{point:e.point,delta:Ge(e.point,t[t.length-1]),offset:Ge(e.point,t[0]),velocity:dn(t,.1)}}var un=e=>e*1e3;function dn(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,s=null;const i=e[e.length-1];for(;n>=0&&(s=e[n],!(i.timestamp-s.timestamp>un(t)));)n--;if(!s)return{x:0,y:0};const h=(i.timestamp-s.timestamp)/1e3;if(h===0)return{x:0,y:0};const c={x:(i.x-s.x)/h,y:(i.y-s.y)/h};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function hn(...e){return t=>e.reduce((n,s)=>s(n),t)}function Se(e,t){return Math.abs(e-t)}function Je(e){return"x"in e&&"y"in e}function pn(e,t){if(typeof e=="number"&&typeof t=="number")return Se(e,t);if(Je(e)&&Je(t)){const n=Se(e.x,t.x),s=Se(e.y,t.y);return Math.sqrt(n**2+s**2)}return 0}function at(e){const t=m.useRef(null);return t.current=e,t}function fn(e,t){const{onPan:n,onPanStart:s,onPanEnd:i,onPanSessionStart:h,onPanSessionEnd:c,threshold:p}=t,u=!!(n||s||i||h||c),a=m.useRef(null),f=at({onSessionStart:h,onSessionEnd:c,onStart:s,onMove:n,onEnd(l,v){a.current=null,i?.(l,v)}});m.useEffect(()=>{var l;(l=a.current)==null||l.updateHandlers(f.current)}),m.useEffect(()=>{const l=e.current;if(!l||!u)return;function v(S){a.current=new cn(S,f.current,p)}return J(l,"pointerdown",v)},[e,u,f,p]),m.useEffect(()=>()=>{var l;(l=a.current)==null||l.end(),a.current=null},[])}function mn(e,t){if(!e){t(void 0);return}t({width:e.offsetWidth,height:e.offsetHeight});const n=e.ownerDocument.defaultView??window,s=new n.ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const[h]=i;let c,p;if("borderBoxSize"in h){const u=h.borderBoxSize,a=Array.isArray(u)?u[0]:u;c=a.inlineSize,p=a.blockSize}else c=e.offsetWidth,p=e.offsetHeight;t({width:c,height:p})});return s.observe(e,{box:"border-box"}),()=>s.unobserve(e)}var vn=globalThis?.document?m.useLayoutEffect:m.useEffect;function xn(e,t){var n,s;if(!e||!e.parentElement)return;const i=(s=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?s:window,h=new i.MutationObserver(()=>{t()});return h.observe(e.parentElement,{childList:!0}),()=>{h.disconnect()}}function gn({getNodes:e,observeMutation:t=!0}){const[n,s]=m.useState([]),[i,h]=m.useState(0);return vn(()=>{const c=e(),p=c.map((u,a)=>mn(u,f=>{s(l=>[...l.slice(0,a),f,...l.slice(a+1)])}));if(t){const u=c[0];p.push(xn(u,()=>{h(a=>a+1)}))}return()=>{p.forEach(u=>{u?.()})}},[i]),n}function bn(e){return typeof e=="object"&&e!==null&&"current"in e}function Sn(e){const[t]=gn({observeMutation:!1,getNodes(){return[bn(e)?e.current:e]}});return t}function yn(e){var t;const{min:n=0,max:s=100,onChange:i,value:h,defaultValue:c,isReversed:p,direction:u="ltr",orientation:a="horizontal",id:f,isDisabled:l,isReadOnly:v,onChangeStart:S,onChangeEnd:C,step:j=1,getAriaValueText:_,"aria-valuetext":W,"aria-label":te,"aria-labelledby":Ee,name:_e,focusThumbOnChange:pt=!0,...Te}=e,Ce=M(S),L=M(C),Ie=M(_),w=Jt({isReversed:p,direction:u,orientation:a}),[ft,ne]=Xt({value:h,defaultValue:c??wn(n,s),onChange:i}),[re,Re]=m.useState(!1),[se,ze]=m.useState(!1),oe=!(l||v),ie=(s-n)/10,F=j||(s-n)/100,x=fe(ft,n,s),mt=s-x+n,Ne=Ye(w?mt:x,n,s),K=a==="vertical",g=at({min:n,max:s,step:j,isDisabled:l,value:x,isInteractive:oe,isReversed:w,isVertical:K,eventSource:null,focusThumbOnChange:pt,orientation:a}),ae=m.useRef(null),le=m.useRef(null),De=m.useRef(null),vt=m.useId(),Ae=f??vt,[Me,Ve]=[`slider-thumb-${Ae}`,`slider-track-${Ae}`],xt=m.useCallback(o=>{var d,$;if(!ae.current)return;const y=g.current;y.eventSource="pointer";const I=ae.current.getBoundingClientRect(),{clientX:ue,clientY:kt}=($=(d=o.touches)==null?void 0:d[0])!=null?$:o,Pt=K?I.bottom-kt:ue-I.left,Et=K?I.height:I.width;let de=Pt/Et;w&&(de=1-de);let U=Vt(de,y.min,y.max);return y.step&&(U=parseFloat(Xe(U,y.min,y.step))),U=fe(U,y.min,y.max),U},[K,w,g]),z=m.useCallback(o=>{const d=g.current;d.isInteractive&&(o=parseFloat(Xe(o,d.min,F)),o=fe(o,d.min,d.max),ne(o))},[F,ne,g]),N=m.useMemo(()=>({stepUp(o=F){const d=w?x-o:x+o;z(d)},stepDown(o=F){const d=w?x+o:x-o;z(d)},reset(){z(c||0)},stepTo(o){z(o)}}),[z,w,x,F,c]),Le=m.useCallback(o=>{const d=g.current,y={ArrowRight:()=>N.stepUp(),ArrowUp:()=>N.stepUp(),ArrowLeft:()=>N.stepDown(),ArrowDown:()=>N.stepDown(),PageUp:()=>N.stepUp(ie),PageDown:()=>N.stepDown(ie),Home:()=>z(d.min),End:()=>z(d.max)}[o.key];y&&(o.preventDefault(),o.stopPropagation(),y(o),d.eventSource="keyboard")},[N,z,ie,g]),Fe=(t=Ie?.(x))!=null?t:W,ce=Sn(le),{getThumbStyle:$e,rootStyle:Ue,trackStyle:Be,innerTrackStyle:He}=m.useMemo(()=>{const o=g.current,d=ce??{width:0,height:0};return Gt({isReversed:w,orientation:o.orientation,thumbRects:[d],thumbPercents:[Ne]})},[w,ce,Ne,g]),Oe=m.useCallback(()=>{g.current.focusThumbOnChange&&setTimeout(()=>{var d;return(d=le.current)==null?void 0:d.focus()})},[g]);_t(()=>{const o=g.current;Oe(),o.eventSource==="keyboard"&&L?.(o.value)},[x,L]);function We(o){const d=xt(o);d!=null&&d!==g.current.value&&ne(d)}fn(De,{onPanSessionStart(o){const d=g.current;d.isInteractive&&(Re(!0),Oe(),We(o),Ce?.(d.value))},onPanSessionEnd(){const o=g.current;o.isInteractive&&(Re(!1),L?.(o.value))},onPan(o){g.current.isInteractive&&We(o)}});const gt=m.useCallback((o={},d=null)=>({...o,...Te,ref:he(d,De),tabIndex:-1,"aria-disabled":xe(l),"data-focused":A(se),style:{...o.style,...Ue}}),[Te,l,se,Ue]),bt=m.useCallback((o={},d=null)=>({...o,ref:he(d,ae),id:Ve,"data-disabled":A(l),style:{...o.style,...Be}}),[l,Ve,Be]),St=m.useCallback((o={},d=null)=>({...o,ref:d,style:{...o.style,...He}}),[He]),yt=m.useCallback((o={},d=null)=>({...o,ref:he(d,le),role:"slider",tabIndex:oe?0:void 0,id:Me,"data-active":A(re),"aria-valuetext":Fe,"aria-valuemin":n,"aria-valuemax":s,"aria-valuenow":x,"aria-orientation":a,"aria-disabled":xe(l),"aria-readonly":xe(v),"aria-label":te,"aria-labelledby":te?void 0:Ee,style:{...o.style,...$e(0)},onKeyDown:ge(o.onKeyDown,Le),onFocus:ge(o.onFocus,()=>ze(!0)),onBlur:ge(o.onBlur,()=>ze(!1))}),[oe,Me,re,Fe,n,s,x,a,l,v,te,Ee,$e,Le]),jt=m.useCallback((o,d=null)=>{const $=!(o.value<n||o.value>s),y=x>=o.value,I=Ye(o.value,n,s),ue={position:"absolute",pointerEvents:"none",...jn({orientation:a,vertical:{bottom:w?`${100-I}%`:`${I}%`},horizontal:{left:w?`${100-I}%`:`${I}%`}})};return{...o,ref:d,role:"presentation","aria-hidden":!0,"data-disabled":A(l),"data-invalid":A(!$),"data-highlighted":A(y),style:{...o.style,...ue}}},[l,w,s,n,a,x]),wt=m.useCallback((o={},d=null)=>({...o,ref:d,type:"hidden",value:x,name:_e}),[_e,x]);return{state:{value:x,isFocused:se,isDragging:re},actions:N,getRootProps:gt,getTrackProps:bt,getInnerTrackProps:St,getThumbProps:yt,getMarkerProps:jt,getInputProps:wt}}function jn(e){const{orientation:t,vertical:n,horizontal:s}=e;return t==="vertical"?n:s}function wn(e,t){return t<e?e:e+(t-e)/2}var[kn,Z]=Qe({name:"SliderContext",hookName:"useSliderContext",providerName:"<Slider />"}),[Pn,ee]=Qe({name:"SliderStylesContext",hookName:"useSliderStyles",providerName:"<Slider />"}),lt=R((e,t)=>{var n;const s={...e,orientation:(n=e?.orientation)!=null?n:"horizontal"},i=Ze("Slider",s),h=et(s),{direction:c}=Tt();h.direction=c;const{getInputProps:p,getRootProps:u,...a}=yn(h),f=u(),l=p({},t);return r.jsx(kn,{value:a,children:r.jsx(Pn,{value:i,children:r.jsxs(T.div,{...f,className:O("chakra-slider",s.className),__css:i.container,children:[s.children,r.jsx("input",{...l})]})})})});lt.displayName="Slider";var ct=R((e,t)=>{const{getThumbProps:n}=Z(),s=ee(),i=n(e,t);return r.jsx(T.div,{...i,className:O("chakra-slider__thumb",e.className),__css:s.thumb})});ct.displayName="SliderThumb";var ut=R((e,t)=>{const{getTrackProps:n}=Z(),s=ee(),i=n(e,t);return r.jsx(T.div,{...i,className:O("chakra-slider__track",e.className),__css:s.track})});ut.displayName="SliderTrack";var dt=R((e,t)=>{const{getInnerTrackProps:n}=Z(),s=ee(),i=n(e,t);return r.jsx(T.div,{...i,className:O("chakra-slider__filled-track",e.className),__css:s.filledTrack})});dt.displayName="SliderFilledTrack";var En=R((e,t)=>{const{getMarkerProps:n}=Z(),s=ee(),i=n(e,t);return r.jsx(T.div,{...i,className:O("chakra-slider__marker",e.className),__css:s.mark})});En.displayName="SliderMark";var ht=R(function(t,n){const s=Ze("Switch",t),{spacing:i="0.5rem",children:h,...c}=et(t),{getIndicatorProps:p,getInputProps:u,getCheckboxProps:a,getRootProps:f,getLabelProps:l}=Lt(c),v=m.useMemo(()=>({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0,...s.container}),[s.container]),S=m.useMemo(()=>({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer",...s.track}),[s.track]),C=m.useMemo(()=>({userSelect:"none",marginStart:i,...s.label}),[i,s.label]);return r.jsxs(T.label,{...f(),className:we("chakra-switch",t.className),__css:v,children:[r.jsx("input",{className:"chakra-switch__input",...u({},n)}),r.jsx(T.span,{...a(),className:"chakra-switch__track",__css:S,children:r.jsx(T.span,{__css:s.thumb,className:"chakra-switch__thumb",...p()})}),h&&r.jsx(T.span,{className:"chakra-switch__label",...l(),__css:C,children:h})]})});ht.displayName="Switch";const _n={"theming-app":{name:"theming-app",services:{},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}}},Tn="",Cn=[];function In(e){throw new Error(`Unsupported locale: '${e}'`)}const Rn=Ct(Tn),zn=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:In,locales:Cn,packages:_n,styles:Rn},Symbol.toStringTag,{value:"Module"}));function Nn(){return r.jsxs(Dt,{children:[r.jsx(b,{size:"md",py:2,children:'Demo page based on color scheme "trails"'}),r.jsxs(zt,{justifyContent:"center",children:[r.jsxs(Ke,{bg:"white",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",margin:3,minW:"400px",children:[r.jsx(b,{size:"md",children:"Button"}),r.jsx(b,{size:"xs",children:"default with tooltip"}),r.jsx(k,{direction:"row",my:2,children:r.jsx(It,{label:"Default button",placement:"auto",openDelay:500,children:r.jsx(P,{children:"default"})})}),r.jsx(b,{size:"xs",children:"Chakra UI variants"}),r.jsxs(k,{direction:"row",my:2,children:[r.jsx(P,{variant:"solid",children:"solid"}),r.jsx(P,{variant:"outline",children:"outline"}),r.jsx(P,{variant:"ghost",children:"ghost"}),r.jsx(P,{variant:"link",children:"link"})]}),r.jsx(b,{size:"xs",children:"Button states"}),r.jsxs(k,{direction:"row",my:2,children:[r.jsx(P,{isDisabled:!0,children:"isDisabled"}),r.jsx(P,{isActive:!0,children:"isActive"}),r.jsx(P,{isLoading:!0,children:"isLoading"}),r.jsx(P,{isLoading:!0,loadingText:"loading...",children:"isLoading with text"})]}),r.jsx(b,{size:"xs",children:"colorScheme"}),r.jsxs(k,{direction:"row",my:2,children:[r.jsx(P,{colorScheme:"blue",children:"blue"}),r.jsx(P,{colorScheme:"red",children:"red"})]}),r.jsx(D,{my:5}),r.jsx(b,{size:"md",children:"Checkbox"}),r.jsxs(k,{direction:"column",my:2,spacing:1,children:[r.jsx(X,{defaultChecked:!0,children:"defaultChecked1"}),r.jsx(X,{defaultChecked:!0,children:"defaultChecked2"}),r.jsx(X,{isDisabled:!0,children:"isDisabled"}),r.jsx(X,{isInvalid:!0,children:"isInvalid"})]}),r.jsx(D,{my:5}),r.jsx(b,{size:"md",children:"Input"}),r.jsxs(k,{direction:"column",my:2,children:[r.jsx(pe,{isInvalid:!1,placeholder:"outline (default)"}),r.jsx(pe,{variant:"filled",placeholder:"filled"}),r.jsxs(Mt,{children:[r.jsx(Pe,{}),r.jsx(pe,{placeholder:"input with left addon"})]})]})]}),r.jsxs(Ke,{bg:"white",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",margin:3,minW:"400px",children:[r.jsx(b,{size:"md",children:"Link"}),r.jsx(k,{direction:"column",my:2,children:r.jsx(Nt,{href:"https://github.com/open-pioneer",target:"_blank",children:"https://github.com/open-pioneer"})}),r.jsx(D,{my:5}),r.jsx(b,{size:"md",children:"Radio"}),r.jsxs(k,{direction:"column",my:2,spacing:1,children:[r.jsx(me,{defaultChecked:!0,children:"defaultChecked"}),r.jsx(me,{isDisabled:!0,children:"isDisabled"}),r.jsx(me,{isInvalid:!0,children:"isInvalid"})]}),r.jsx(D,{my:5}),r.jsx(b,{size:"md",children:"Select"}),r.jsxs(k,{direction:"column",my:2,children:[r.jsxs(ve,{children:[r.jsx("option",{value:"option1",children:"outline1 (default)"}),r.jsx("option",{value:"option2",children:"outline2 (default)"})]}),r.jsxs(ve,{variant:"filled",children:[r.jsx("option",{value:"option1",children:"filled1"}),r.jsx("option",{value:"option2",children:"filled2"})]}),r.jsx(ve,{isDisabled:!0,children:r.jsx("option",{value:"option1",children:"isDisabled"})})]}),r.jsx(D,{my:5}),r.jsx(b,{size:"md",children:"Slider"}),r.jsx(k,{direction:"column",my:2,children:r.jsxs(lt,{"aria-label":"slider-ex-1",defaultValue:30,children:[r.jsx(ut,{children:r.jsx(dt,{})}),r.jsx(ct,{})]})}),r.jsx(D,{my:5}),r.jsx(b,{size:"md",children:"Switch"}),r.jsx(k,{direction:"column",my:2,children:r.jsx(ht,{isChecked:!0})}),r.jsx(D,{my:5}),r.jsx(b,{size:"md",children:"Textarea"}),r.jsx(k,{direction:"column",my:2,children:r.jsx(Ft,{placeholder:"Here is a sample placeholder"})})]})]})]})}const Dn=Rt({component:Nn,appMetadata:zn});customElements.define("theming-app",Dn);
