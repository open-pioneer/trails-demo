import{bM as wt,u as xt,o as Ft,E as jt,bN as J,bO as St,bP as Mt,l as Gt,M as le,bQ as G,bR as Et,bS as Ot,bT as At,bU as Rt,bV as kt,bW as Lt,bX as Nt,bY as ce,ah as Tt,bZ as It,ac as se,b_ as Bt,b$ as Dt,c0 as Ht,c1 as Vt,c2 as $t,c3 as zt,c4 as re,c5 as Yt,c6 as Xt,c7 as Jt,c8 as Ee,c9 as Ut,af as ne,ca as Zt,cb as Oe,ab as Ae,y as x,cc as p,s as Kt,cd as Wt,bC as Re,ce as qt,cf as Qt,bv as es,cg as O,aw as ue}from"./f0e91bcc9c61.js";import{L as oe}from"./67720bfb6771.js";import{X as de,Y as ke,h as Le,r as u,Z as ts,$ as ss,a0 as rs,c as Ne,f as k,j as d,a as E,n as L,e as ns,g as os,a1 as q,m as R,a2 as v,k as is,o as as,b as ls,l as cs,C as us,a3 as ds,a4 as fs,B as hs,a5 as gs}from"./c4a29752c861.js";import{u as fe,T as Te,c as Ie,a as je,S as Se}from"./d485cd197377.js";import{F as ms,a as ps,b as ys,c as bs}from"./e3c6569d1e58.js";import{u as Be}from"./b5dfa77580c2.js";import{B as Cs}from"./2ea7eafb4b74.js";import{C as vs}from"./bcc592173162.js";import{T as De}from"./30bb145dadee.js";import{L as Ps}from"./9b7c3df37c58.js";import{B as ie}from"./12fdd0c6beeb.js";import{F as He}from"./1f3a72bb4fb2.js";function _s(s){return"current"in s}var Ve=()=>typeof window<"u";function ws(){var s;const e=navigator.userAgentData;return(s=e?.platform)!=null?s:navigator.platform}var xs=s=>Ve()&&s.test(navigator.vendor),Fs=s=>Ve()&&s.test(ws()),js=()=>Fs(/mac|iphone|ipad|ipod/i),Ss=()=>js()&&xs(/apple/i);function Ms(s){const{ref:e,elements:t,enabled:r}=s,n=()=>{var o,i;return(i=(o=e.current)==null?void 0:o.ownerDocument)!=null?i:document};de(n,"pointerdown",o=>{if(!Ss()||!r)return;const i=o.target,l=(t??[e]).some(c=>{const f=_s(c)?c.current:c;return f?.contains(i)||f===i});n().activeElement!==i&&l&&(o.preventDefault(),i.focus())})}var $e=s=>s.hasAttribute("tabindex"),Gs=s=>$e(s)&&s.tabIndex===-1;function Es(s){return!!s.getAttribute("disabled")||!!s.getAttribute("aria-disabled")}function ze(s){return s.parentElement&&ze(s.parentElement)?!0:s.hidden}function Os(s){const e=s.getAttribute("contenteditable");return e!=="false"&&e!=null}function Ye(s){if(!ke(s)||ze(s)||Es(s))return!1;const{localName:e}=s;if(["input","select","textarea","button"].indexOf(e)>=0)return!0;const r={a:()=>s.hasAttribute("href"),audio:()=>s.hasAttribute("controls"),video:()=>s.hasAttribute("controls")};return e in r?r[e]():Os(s)?!0:$e(s)}function As(s){return s?ke(s)&&Ye(s)&&!Gs(s):!1}var Rs=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],ks=Rs.join(),Ls=s=>s.offsetWidth>0&&s.offsetHeight>0;function Ns(s){const e=Array.from(s.querySelectorAll(ks));return e.unshift(s),e.filter(t=>Ye(t)&&Ls(t))}function Ts(s){const e=s.current;if(!e)return!1;const t=ss(e);return!t||e.contains(t)?!1:!!As(t)}function Is(s,e){const{shouldFocus:t,visible:r,focusRef:n}=e,o=t&&!r;Le(()=>{if(!o||Ts(s))return;const i=n?.current||s.current;let a;if(i)return a=requestAnimationFrame(()=>{i.focus({preventScroll:!0})}),()=>{cancelAnimationFrame(a)}},[o,s,n])}var Bs={preventScroll:!0,shouldFocus:!1};function Ds(s,e=Bs){const{focusRef:t,preventScroll:r,shouldFocus:n,visible:o}=e,i=Hs(s)?s.current:s,a=n&&o,l=u.useRef(a),c=u.useRef(o);ts(()=>{!c.current&&o&&(l.current=a),c.current=o},[o,a]);const f=u.useCallback(()=>{if(!(!o||!i||!l.current)&&(l.current=!1,!i.contains(document.activeElement)))if(t?.current)requestAnimationFrame(()=>{var g;(g=t.current)==null||g.focus({preventScroll:r})});else{const g=Ns(i);g.length>0&&requestAnimationFrame(()=>{g[0].focus({preventScroll:r})})}},[o,r,i,t]);Le(()=>{f()},[f]),de(i,"transitionend",f)}function Hs(s){return"current"in s}function Vs(s){const{isOpen:e,ref:t}=s,[r,n]=u.useState(e),[o,i]=u.useState(!1);return u.useEffect(()=>{o||(n(e),i(!0))},[e,o,r]),de(()=>t.current,"animationend",()=>{n(e)}),{present:!(e?!1:!r),onComplete(){var l;const c=rs(t.current),f=new c.CustomEvent("animationend",{bubbles:!0});(l=t.current)==null||l.dispatchEvent(f)}}}function $s(s){const{wasSelected:e,enabled:t,isSelected:r,mode:n="unmount"}=s;return!!(!t||r||n==="keepMounted"&&e)}var[zs,j]=Ne({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[Ys,N]=Ne({name:"PopoverStylesContext",errorMessage:`usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `}),Xe=k(function(e,t){const{getHeaderProps:r}=j(),n=N();return d.jsx(E.header,{...r(e,t),className:L("chakra-popover__header",e.className),__css:n.header})});Xe.displayName="PopoverHeader";function Je(s){const e=u.Children.only(s.children),{getTriggerProps:t}=j();return u.cloneElement(e,t(e.props,e.ref))}Je.displayName="PopoverTrigger";var M={click:"click",hover:"hover"};function Xs(s={}){const{closeOnBlur:e=!0,closeOnEsc:t=!0,initialFocusRef:r,id:n,returnFocusOnClose:o=!0,autoFocus:i=!0,arrowSize:a,arrowShadowColor:l,trigger:c=M.click,openDelay:f=200,closeDelay:g=200,isLazy:b,lazyBehavior:w="unmount",computePositionOnMount:at,...lt}=s,{isOpen:y,onClose:P,onOpen:U,onToggle:ye}=ns(s),Z=u.useRef(null),T=u.useRef(null),S=u.useRef(null),A=u.useRef(!1),be=u.useRef(!1);y&&(be.current=!0);const[Ce,ct]=u.useState(!1),[ve,ut]=u.useState(!1),dt=u.useId(),ft=n??dt,[Pe,I,B,D]=["popover-trigger","popover-content","popover-header","popover-body"].map(h=>`${h}-${ft}`),{referenceRef:H,getArrowProps:ht,getPopperProps:_e,getArrowInnerProps:gt,forceUpdate:mt}=os({...lt,enabled:y||!!at}),we=Vs({isOpen:y,ref:S});Ms({enabled:y,ref:T}),Is(S,{focusRef:T,visible:y,shouldFocus:o&&c===M.click}),Ds(S,{focusRef:r,visible:y,shouldFocus:i&&c===M.click});const xe=$s({wasSelected:be.current,enabled:b,mode:w,isSelected:we.present}),pt=u.useCallback((h={},C=null)=>{const m={...h,style:{...h.style,transformOrigin:q.transformOrigin.varRef,[q.arrowSize.var]:a?`${a}px`:void 0,[q.arrowShadowColor.var]:l},ref:R(S,C),children:xe?h.children:null,id:I,tabIndex:-1,role:"dialog",onKeyDown:v(h.onKeyDown,_=>{t&&_.key==="Escape"&&P()}),onBlur:v(h.onBlur,_=>{const V=Me(_),W=Q(S.current,V),_t=Q(T.current,V);y&&e&&(!W&&!_t)&&P()}),"aria-labelledby":Ce?B:void 0,"aria-describedby":ve?D:void 0};return c===M.hover&&(m.role="tooltip",m.onMouseEnter=v(h.onMouseEnter,()=>{A.current=!0}),m.onMouseLeave=v(h.onMouseLeave,_=>{_.nativeEvent.relatedTarget!==null&&(A.current=!1,setTimeout(()=>P(),g))})),m},[xe,I,Ce,B,ve,D,c,t,P,y,e,g,l,a]),yt=u.useCallback((h={},C=null)=>_e({...h,style:{visibility:y?"visible":"hidden",...h.style}},C),[y,_e]),bt=u.useCallback((h,C=null)=>({...h,ref:R(C,Z,H)}),[Z,H]),F=u.useRef(),K=u.useRef(),Fe=u.useCallback(h=>{Z.current==null&&H(h)},[H]),Ct=u.useCallback((h={},C=null)=>{const m={...h,ref:R(T,C,Fe),id:Pe,"aria-haspopup":"dialog","aria-expanded":y,"aria-controls":I};return c===M.click&&(m.onClick=v(h.onClick,ye)),c===M.hover&&(m.onFocus=v(h.onFocus,()=>{F.current===void 0&&U()}),m.onBlur=v(h.onBlur,_=>{const V=Me(_),W=!Q(S.current,V);y&&e&&W&&P()}),m.onKeyDown=v(h.onKeyDown,_=>{_.key==="Escape"&&P()}),m.onMouseEnter=v(h.onMouseEnter,()=>{A.current=!0,F.current=window.setTimeout(()=>U(),f)}),m.onMouseLeave=v(h.onMouseLeave,()=>{A.current=!1,F.current&&(clearTimeout(F.current),F.current=void 0),K.current=window.setTimeout(()=>{A.current===!1&&P()},g)})),m},[Pe,y,I,c,Fe,ye,U,e,P,f,g]);u.useEffect(()=>()=>{F.current&&clearTimeout(F.current),K.current&&clearTimeout(K.current)},[]);const vt=u.useCallback((h={},C=null)=>({...h,id:B,ref:R(C,m=>{ct(!!m)})}),[B]),Pt=u.useCallback((h={},C=null)=>({...h,id:D,ref:R(C,m=>{ut(!!m)})}),[D]);return{forceUpdate:mt,isOpen:y,onAnimationComplete:we.onComplete,onClose:P,getAnchorProps:bt,getArrowProps:ht,getArrowInnerProps:gt,getPopoverPositionerProps:yt,getPopoverProps:pt,getTriggerProps:Ct,getHeaderProps:vt,getBodyProps:Pt}}function Q(s,e){return s===e||s?.contains(e)}function Me(s){var e;const t=s.currentTarget.ownerDocument.activeElement;return(e=s.relatedTarget)!=null?e:t}function Ue(s){const e=is("Popover",s),{children:t,...r}=as(s),n=ls(),o=Xs({...r,direction:n.direction});return d.jsx(zs,{value:o,children:d.jsx(Ys,{value:e,children:cs(t,{isOpen:o.isOpen,onClose:o.onClose,forceUpdate:o.forceUpdate})})})}Ue.displayName="Popover";var ee=(s,e)=>e?`${s}.${e}, ${e}`:void 0;function Ze(s){var e;const{bg:t,bgColor:r,backgroundColor:n,shadow:o,boxShadow:i,shadowColor:a}=s,{getArrowProps:l,getArrowInnerProps:c}=j(),f=N(),g=(e=t??r)!=null?e:n,b=o??i;return d.jsx(E.div,{...l(),className:"chakra-popover__arrow-positioner",children:d.jsx(E.div,{className:L("chakra-popover__arrow",s.className),...c(s),__css:{"--popper-arrow-shadow-color":ee("colors",a),"--popper-arrow-bg":ee("colors",g),"--popper-arrow-shadow":ee("shadows",b),...f.arrow}})})}Ze.displayName="PopoverArrow";var Ke=k(function(e,t){const{getBodyProps:r}=j(),n=N();return d.jsx(E.div,{...r(e,t),className:L("chakra-popover__body",e.className),__css:n.body})});Ke.displayName="PopoverBody";var We=k(function(e,t){const{onClose:r}=j(),n=N();return d.jsx(us,{size:"sm",onClick:r,className:L("chakra-popover__close-btn",e.className),__css:n.closeButton,ref:t,...e})});We.displayName="PopoverCloseButton";function Js(s){if(s)return{enter:{...s.enter,visibility:"visible"},exit:{...s.exit,transitionEnd:{visibility:"hidden"}}}}var Us={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},Zs=E(ds.section),qe=k(function(e,t){const{variants:r=Us,...n}=e,{isOpen:o}=j();return d.jsx(Zs,{ref:t,variants:Js(r),initial:!1,animate:o?"enter":"exit",...n})});qe.displayName="PopoverTransition";var Qe=k(function(e,t){const{rootProps:r,motionProps:n,...o}=e,{getPopoverProps:i,getPopoverPositionerProps:a,onAnimationComplete:l}=j(),c=N(),f={position:"relative",display:"flex",flexDirection:"column",...c.content};return d.jsx(E.div,{...a(r),__css:c.popper,className:"chakra-popover__popper",children:d.jsx(qe,{...n,...i(o,t),onAnimationComplete:fs(l,o.onAnimationComplete),className:L("chakra-popover__content",e.className),__css:f})})});Qe.displayName="PopoverContent";class z extends wt{constructor(e){super(),this.geometries_=e||null,this.changeEventsKeys_=[],this.listenGeometriesChange_()}unlistenGeometriesChange_(){this.changeEventsKeys_.forEach(xt),this.changeEventsKeys_.length=0}listenGeometriesChange_(){if(this.geometries_)for(let e=0,t=this.geometries_.length;e<t;++e)this.changeEventsKeys_.push(Ft(this.geometries_[e],jt.CHANGE,this.changed,this))}clone(){const e=new z(null);return e.setGeometries(this.geometries_),e.applyProperties(this),e}closestPointXY(e,t,r,n){if(n<J(this.getExtent(),e,t))return n;const o=this.geometries_;for(let i=0,a=o.length;i<a;++i)n=o[i].closestPointXY(e,t,r,n);return n}containsXY(e,t){const r=this.geometries_;for(let n=0,o=r.length;n<o;++n)if(r[n].containsXY(e,t))return!0;return!1}computeExtent(e){St(e);const t=this.geometries_;for(let r=0,n=t.length;r<n;++r)Mt(e,t[r].getExtent());return e}getGeometries(){return Ge(this.geometries_)}getGeometriesArray(){return this.geometries_}getGeometriesArrayRecursive(){let e=[];const t=this.geometries_;for(let r=0,n=t.length;r<n;++r)t[r].getType()===this.getType()?e=e.concat(t[r].getGeometriesArrayRecursive()):e.push(t[r]);return e}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<this.simplifiedGeometryMaxMinSquaredTolerance)return this;const t=[],r=this.geometries_;let n=!1;for(let o=0,i=r.length;o<i;++o){const a=r[o],l=a.getSimplifiedGeometry(e);t.push(l),l!==a&&(n=!0)}if(n){const o=new z(null);return o.setGeometriesArray(t),o}return this.simplifiedGeometryMaxMinSquaredTolerance=e,this}getType(){return"GeometryCollection"}intersectsExtent(e){const t=this.geometries_;for(let r=0,n=t.length;r<n;++r)if(t[r].intersectsExtent(e))return!0;return!1}isEmpty(){return this.geometries_.length===0}rotate(e,t){const r=this.geometries_;for(let n=0,o=r.length;n<o;++n)r[n].rotate(e,t);this.changed()}scale(e,t,r){r||(r=Gt(this.getExtent()));const n=this.geometries_;for(let o=0,i=n.length;o<i;++o)n[o].scale(e,t,r);this.changed()}setGeometries(e){this.setGeometriesArray(Ge(e))}setGeometriesArray(e){this.unlistenGeometriesChange_(),this.geometries_=e,this.listenGeometriesChange_(),this.changed()}applyTransform(e){const t=this.geometries_;for(let r=0,n=t.length;r<n;++r)t[r].applyTransform(e);this.changed()}translate(e,t){const r=this.geometries_;for(let n=0,o=r.length;n<o;++n)r[n].translate(e,t);this.changed()}disposeInternal(){this.unlistenGeometriesChange_(),super.disposeInternal()}}function Ge(s){const e=[];for(let t=0,r=s.length;t<r;++t)e.push(s[t].clone());return e}const Ks=z;class Y extends le{constructor(e,t,r){if(super(),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(e[0]))this.setCoordinates(e,t);else if(t!==void 0&&r)this.setFlatCoordinates(t,e),this.ends_=r;else{const n=e,o=[],i=[];for(let l=0,c=n.length;l<c;++l){const f=n[l];G(o,f.getFlatCoordinates()),i.push(o.length)}const a=n.length===0?this.getLayout():n[0].getLayout();this.setFlatCoordinates(a,o),this.ends_=i}}appendLineString(e){G(this.flatCoordinates,e.getFlatCoordinates().slice()),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const e=new Y(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return e.applyProperties(this),e}closestPointXY(e,t,r,n){return n<J(this.getExtent(),e,t)?n:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Et(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Ot(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,e,t,r,n))}getCoordinateAtM(e,t,r){return this.layout!="XYM"&&this.layout!="XYZM"||this.flatCoordinates.length===0?null:(t=t!==void 0?t:!1,r=r!==void 0?r:!1,At(this.flatCoordinates,0,this.ends_,this.stride,e,t,r))}getCoordinates(){return Rt(this.flatCoordinates,0,this.ends_,this.stride)}getEnds(){return this.ends_}getLineString(e){return e<0||this.ends_.length<=e?null:new oe(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLineStrings(){const e=this.flatCoordinates,t=this.ends_,r=this.layout,n=[];let o=0;for(let i=0,a=t.length;i<a;++i){const l=t[i],c=new oe(e.slice(o,l),r);n.push(c),o=l}return n}getFlatMidpoints(){const e=[],t=this.flatCoordinates;let r=0;const n=this.ends_,o=this.stride;for(let i=0,a=n.length;i<a;++i){const l=n[i],c=kt(t,r,l,o,.5);G(e,c),r=l}return e}getSimplifiedGeometryInternal(e){const t=[],r=[];return t.length=Lt(this.flatCoordinates,0,this.ends_,this.stride,e,t,0,r),new Y(t,"XY",r)}getType(){return"MultiLineString"}intersectsExtent(e){return Nt(this.flatCoordinates,0,this.ends_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,2),this.flatCoordinates||(this.flatCoordinates=[]);const r=ce(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=r.length===0?0:r[r.length-1],this.changed()}}const Ws=Y;class he extends le{constructor(e,t){super(),t&&!Array.isArray(e[0])?this.setFlatCoordinates(t,e):this.setCoordinates(e,t)}appendPoint(e){G(this.flatCoordinates,e.getFlatCoordinates()),this.changed()}clone(){const e=new he(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,t,r,n){if(n<J(this.getExtent(),e,t))return n;const o=this.flatCoordinates,i=this.stride;for(let a=0,l=o.length;a<l;a+=i){const c=Tt(e,t,o[a],o[a+1]);if(c<n){n=c;for(let f=0;f<i;++f)r[f]=o[a+f];r.length=i}}return n}getCoordinates(){return It(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getPoint(e){const t=this.flatCoordinates.length/this.stride;return e<0||t<=e?null:new se(this.flatCoordinates.slice(e*this.stride,(e+1)*this.stride),this.layout)}getPoints(){const e=this.flatCoordinates,t=this.layout,r=this.stride,n=[];for(let o=0,i=e.length;o<i;o+=r){const a=new se(e.slice(o,o+r),t);n.push(a)}return n}getType(){return"MultiPoint"}intersectsExtent(e){const t=this.flatCoordinates,r=this.stride;for(let n=0,o=t.length;n<o;n+=r){const i=t[n],a=t[n+1];if(Bt(e,i,a))return!0}return!1}setCoordinates(e,t){this.setLayout(t,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Dt(this.flatCoordinates,0,e,this.stride),this.changed()}}const et=he;class X extends le{constructor(e,t,r){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!r&&!Array.isArray(e[0])){const n=e,o=[],i=[];for(let a=0,l=n.length;a<l;++a){const c=n[a],f=o.length,g=c.getEnds();for(let b=0,w=g.length;b<w;++b)g[b]+=f;G(o,c.getFlatCoordinates()),i.push(g)}t=n.length===0?this.getLayout():n[0].getLayout(),e=o,r=i}t!==void 0&&r?(this.setFlatCoordinates(t,e),this.endss_=r):this.setCoordinates(e,t)}appendPolygon(e){let t;if(!this.flatCoordinates)this.flatCoordinates=e.getFlatCoordinates().slice(),t=e.getEnds().slice(),this.endss_.push();else{const r=this.flatCoordinates.length;G(this.flatCoordinates,e.getFlatCoordinates()),t=e.getEnds().slice();for(let n=0,o=t.length;n<o;++n)t[n]+=r}this.endss_.push(t),this.changed()}clone(){const e=this.endss_.length,t=new Array(e);for(let n=0;n<e;++n)t[n]=this.endss_[n].slice();const r=new X(this.flatCoordinates.slice(),this.layout,t);return r.applyProperties(this),r}closestPointXY(e,t,r,n){return n<J(this.getExtent(),e,t)?n:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Ht(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Vt(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,e,t,r,n))}containsXY(e,t){return $t(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e,t)}getArea(){return zt(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(e){let t;return e!==void 0?(t=this.getOrientedFlatCoordinates().slice(),re(t,0,this.endss_,this.stride,e)):t=this.flatCoordinates,Yt(t,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){const e=Xt(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=Jt(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new et(this.getFlatInteriorPoints().slice(),"XYM")}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const e=this.flatCoordinates;Ee(e,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=re(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(e){const t=[],r=[];return t.length=Ut(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(e),t,0,r),new X(t,"XY",r)}getPolygon(e){if(e<0||this.endss_.length<=e)return null;let t;if(e===0)t=0;else{const o=this.endss_[e-1];t=o[o.length-1]}const r=this.endss_[e].slice(),n=r[r.length-1];if(t!==0)for(let o=0,i=r.length;o<i;++o)r[o]-=t;return new ne(this.flatCoordinates.slice(t,n),this.layout,r)}getPolygons(){const e=this.layout,t=this.flatCoordinates,r=this.endss_,n=[];let o=0;for(let i=0,a=r.length;i<a;++i){const l=r[i].slice(),c=l[l.length-1];if(o!==0)for(let g=0,b=l.length;g<b;++g)l[g]-=o;const f=new ne(t.slice(o,c),e,l);n.push(f),o=c}return n}getType(){return"MultiPolygon"}intersectsExtent(e){return Zt(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,3),this.flatCoordinates||(this.flatCoordinates=[]);const r=Oe(this.flatCoordinates,0,e,this.stride,this.endss_);if(r.length===0)this.flatCoordinates.length=0;else{const n=r[r.length-1];this.flatCoordinates.length=n.length===0?0:n[n.length-1]}this.changed()}}const qs=X;class Qs{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.featureClass=Ae,this.supportedMediaTypes=null}getReadOptions(e,t){if(t){let r=t.dataProjection?x(t.dataProjection):this.readProjection(e);t.extent&&r&&r.getUnits()==="tile-pixels"&&(r=x(r),r.setWorldExtent(t.extent)),t={dataProjection:r,featureProjection:t.featureProjection}}return this.adaptOptions(t)}adaptOptions(e){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection,featureClass:this.featureClass},e)}getType(){return p()}readFeature(e,t){return p()}readFeatures(e,t){return p()}readGeometry(e,t){return p()}readProjection(e){return p()}writeFeature(e,t){return p()}writeFeatures(e,t){return p()}writeGeometry(e,t){return p()}}const er=Qs;function ge(s,e,t){const r=t?x(t.featureProjection):null,n=t?x(t.dataProjection):null;let o=s;if(r&&n&&!Kt(r,n)){e&&(o=s.clone());const i=e?r:n,a=e?n:r;i.getUnits()==="tile-pixels"?o.transform(i,a):o.applyTransform(Wt(i,a))}if(e&&t&&t.decimals!==void 0){const i=Math.pow(10,t.decimals),a=function(l){for(let c=0,f=l.length;c<f;++c)l[c]=Math.round(l[c]*i)/i;return l};o===s&&(o=s.clone()),o.applyTransform(a)}return o}const tr={Point:se,LineString:oe,Polygon:ne,MultiPoint:et,MultiLineString:Ws,MultiPolygon:qs};function sr(s,e,t){return Array.isArray(e[0])?(Ee(s,0,e,t)||(s=s.slice(),re(s,0,e,t)),s):(qt(s,0,e,t)||(s=s.slice(),Qt(s,0,e,t)),s)}function tt(s,e){const t=s.geometry;if(!t)return[];if(Array.isArray(t))return t.map(o=>tt({...s,geometry:o})).flat();const r=t.type==="MultiPolygon"?"Polygon":t.type;if(r==="GeometryCollection"||r==="Circle")throw new Error("Unsupported geometry type: "+r);const n=t.layout.length;return ge(new Re(r,r==="Polygon"?sr(t.flatCoordinates,t.ends,n):t.flatCoordinates,t.ends?.flat(),n,s.properties||{},s.id).enableSimplifyTransformed(),!1,e)}function me(s,e){if(!s)return null;if(Array.isArray(s)){const r=s.map(n=>me(n,e));return new Ks(r)}const t=tr[s.type];return ge(new t(s.flatCoordinates,s.layout,s.ends),!1,e)}class rr extends er{constructor(){super()}getType(){return"json"}readFeature(e,t){return this.readFeatureFromObject($(e),this.getReadOptions(e,t))}readFeatures(e,t){return this.readFeaturesFromObject($(e),this.getReadOptions(e,t))}readFeatureFromObject(e,t){return p()}readFeaturesFromObject(e,t){return p()}readGeometry(e,t){return this.readGeometryFromObject($(e),this.getReadOptions(e,t))}readGeometryFromObject(e,t){return p()}readProjection(e){return this.readProjectionFromObject($(e))}readProjectionFromObject(e){return p()}writeFeature(e,t){return JSON.stringify(this.writeFeatureObject(e,t))}writeFeatureObject(e,t){return p()}writeFeatures(e,t){return JSON.stringify(this.writeFeaturesObject(e,t))}writeFeaturesObject(e,t){return p()}writeGeometry(e,t){return JSON.stringify(this.writeGeometryObject(e,t))}writeGeometryObject(e,t){return p()}}function $(s){if(typeof s=="string"){const e=JSON.parse(s);return e||null}return s!==null?s:null}const nr=rr;class or extends nr{constructor(e){e=e||{},super(),this.dataProjection=x(e.dataProjection?e.dataProjection:"EPSG:4326"),e.featureProjection&&(this.defaultFeatureProjection=x(e.featureProjection)),e.featureClass&&(this.featureClass=e.featureClass),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(e,t){let r=null;e.type==="Feature"?r=e:r={type:"Feature",geometry:e,properties:null};const n=pe(r.geometry);if(this.featureClass===Re)return tt({geometry:n,id:r.id,properties:r.properties},t);const o=new Ae;return this.geometryName_?o.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in r!==void 0&&o.setGeometryName(r.geometry_name),o.setGeometry(me(n,t)),"id"in r&&o.setId(r.id),r.properties&&o.setProperties(r.properties,!0),o}readFeaturesFromObject(e,t){const r=e;let n=null;if(r.type==="FeatureCollection"){const o=e;n=[];const i=o.features;for(let a=0,l=i.length;a<l;++a){const c=this.readFeatureFromObject(i[a],t);c&&n.push(c)}}else n=[this.readFeatureFromObject(e,t)];return n.flat()}readGeometryFromObject(e,t){return ir(e,t)}readProjectionFromObject(e){const t=e.crs;let r;if(t)if(t.type=="name")r=x(t.properties.name);else if(t.type==="EPSG")r=x("EPSG:"+t.properties.code);else throw new Error("Unknown SRS type");else r=this.dataProjection;return r}writeFeatureObject(e,t){t=this.adaptOptions(t);const r={type:"Feature",geometry:null,properties:null},n=e.getId();if(n!==void 0&&(r.id=n),!e.hasProperties())return r;const o=e.getProperties(),i=e.getGeometry();return i&&(r.geometry=ae(i,t),delete o[e.getGeometryName()]),es(o)||(r.properties=o),r}writeFeaturesObject(e,t){t=this.adaptOptions(t);const r=[];for(let n=0,o=e.length;n<o;++n)r.push(this.writeFeatureObject(e[n],t));return{type:"FeatureCollection",features:r}}writeGeometryObject(e,t){return ae(e,this.adaptOptions(t))}}function pe(s,e){if(!s)return null;let t;switch(s.type){case"Point":{t=lr(s);break}case"LineString":{t=cr(s);break}case"Polygon":{t=hr(s);break}case"MultiPoint":{t=dr(s);break}case"MultiLineString":{t=ur(s);break}case"MultiPolygon":{t=fr(s);break}case"GeometryCollection":{t=ar(s);break}default:throw new Error("Unsupported GeoJSON type: "+s.type)}return t}function ir(s,e){const t=pe(s);return me(t,e)}function ar(s,e){return s.geometries.map(function(r){return pe(r)})}function lr(s){const e=s.coordinates;return{type:"Point",flatCoordinates:e,layout:O(e.length)}}function cr(s){const e=s.coordinates,t=e.flat();return{type:"LineString",flatCoordinates:t,ends:[t.length],layout:O(e[0].length)}}function ur(s){const e=s.coordinates,t=e[0][0].length,r=[],n=ce(r,0,e,t);return{type:"MultiLineString",flatCoordinates:r,ends:n,layout:O(t)}}function dr(s){const e=s.coordinates;return{type:"MultiPoint",flatCoordinates:e.flat(),layout:O(e[0].length)}}function fr(s){const e=s.coordinates,t=[],r=e[0][0][0].length,n=Oe(t,0,e,r);return{type:"MultiPolygon",flatCoordinates:t,ends:n,layout:O(r)}}function hr(s){const e=s.coordinates,t=[],r=e[0][0].length,n=ce(t,0,e,r);return{type:"Polygon",flatCoordinates:t,ends:n,layout:O(r)}}function ae(s,e){s=ge(s,!0,e);const t=s.getType();let r;switch(t){case"Point":{r=Cr(s);break}case"LineString":{r=mr(s);break}case"Polygon":{r=vr(s,e);break}case"MultiPoint":{r=yr(s);break}case"MultiLineString":{r=pr(s);break}case"MultiPolygon":{r=br(s,e);break}case"GeometryCollection":{r=gr(s,e);break}case"Circle":{r={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+t)}return r}function gr(s,e){return e=Object.assign({},e),delete e.featureProjection,{type:"GeometryCollection",geometries:s.getGeometriesArray().map(function(r){return ae(r,e)})}}function mr(s,e){return{type:"LineString",coordinates:s.getCoordinates()}}function pr(s,e){return{type:"MultiLineString",coordinates:s.getCoordinates()}}function yr(s,e){return{type:"MultiPoint",coordinates:s.getCoordinates()}}function br(s,e){let t;return e&&(t=e.rightHanded),{type:"MultiPolygon",coordinates:s.getCoordinates(t)}}function Cr(s,e){return{type:"Point",coordinates:s.getCoordinates()}}function vr(s,e){let t;return e&&(t=e.rightHanded),{type:"Polygon",coordinates:s.getCoordinates(t)}}const Xr=or,Pr="@open-pioneer/map-navigation",st=Be.bind(void 0,Pr),Jr=u.forwardRef(function(e,t){const{mapId:r}=e,{containerProps:n}=fe("initial-extent",e),{map:o}=ue(r),i=st();function a(){const l=o?.initialExtent,c=o?.olMap;if(l&&c){const f=[l.xMin,l.yMin,l.xMax,l.yMax];c.getView().fit(f,{duration:200})}}return d.jsx(Te,{ref:t,label:i.formatMessage({id:"initial-extent.title"}),icon:d.jsx(ms,{}),onClick:a,...n})}),Ur=u.forwardRef(function(e,t){return d.jsx(rt,{zoomDirection:"in",ref:t,...e})}),Zr=u.forwardRef(function(e,t){return d.jsx(rt,{zoomDirection:"out",ref:t,...e})}),rt=u.forwardRef(function(e,t){const{mapId:r,zoomDirection:n}=e,{map:o}=ue(r),i=st(),{defaultClassName:a,buttonLabel:l,buttonIcon:c}=_r(i,n),{containerProps:f}=fe(Ie("zoom",a),e);function g(){const b=o?.olMap.getView();let w=b?.getZoom();b&&w!==void 0&&(n==="in"?++w:--w,b.animate({zoom:w,duration:200}))}return d.jsx(Te,{ref:t,label:l,icon:c,onClick:g,...f})});function _r(s,e){switch(e){case"in":return{defaultClassName:"zoom-in",buttonLabel:s.formatMessage({id:"zoom-in.title"}),buttonIcon:d.jsx(ys,{})};case"out":return{defaultClassName:"zoom-out",buttonLabel:s.formatMessage({id:"zoom-out.title"}),buttonIcon:d.jsx(ps,{})}}}const wr="@open-pioneer/toc",nt=Be.bind(void 0,wr);function xr(s){const{map:e,"aria-labelledby":t}=s,r=nt(),n=Er(e);return n.length?ot(n,r,{"aria-labelledby":t}):d.jsx(De,{className:"toc-missing-layers","aria-labelledby":t,children:r.formatMessage({id:"missingLayers"})})}function ot(s,e,t){const r=s.map(n=>d.jsx(Fr,{layer:n,intl:e},n.id));return d.jsx(Ps,{as:"ul",className:"toc-layer-list",listStyleType:"none",...t,children:r})}function Fr(s){const{layer:e,intl:t}=s,r=Mr(e),{isVisible:n,setVisible:o}=Gr(e),i=Or(e);let a;return i?.length&&(a=ot(i,t,{ml:4})),d.jsxs(ie,{as:"li",className:Ie("toc-layer-item",`layer-${Ar(e.id)}`),children:[d.jsxs(He,{className:"toc-layer-item-content",width:"100%",flexDirection:"row",align:"center",justifyContent:"space-between",gap:2,minHeight:10,children:[d.jsx(vs,{isChecked:n,onChange:l=>o(l.target.checked),children:r}),e.description&&d.jsx(jr,{layer:e,title:r,intl:t})]}),a]})}function jr(s){const{layer:e,title:t,intl:r}=s,n=r.formatMessage({id:"descriptionLabel"}),o=Sr(e);return d.jsxs(Ue,{children:[d.jsx(Je,{children:d.jsx(hs,{className:"toc-layer-item-details-button","aria-label":n,borderRadius:"full",iconSpacing:0,padding:0,variant:"ghost",leftIcon:d.jsx(bs,{})})}),d.jsx(gs,{children:d.jsxs(Qe,{className:"toc-layer-item-details",overflowY:"auto",maxHeight:"400",children:[d.jsx(Ze,{}),d.jsx(We,{}),d.jsx(Xe,{children:t}),d.jsx(Ke,{children:o})]})})]})}function Sr(s){const e=u.useCallback(()=>s.description,[s]),t=u.useCallback(r=>{const n=s.on("changed:description",r);return()=>n.destroy()},[s]);return u.useSyncExternalStore(t,e)}function Mr(s){const e=u.useCallback(()=>s.title,[s]),t=u.useCallback(r=>{const n=s.on("changed:title",r);return()=>n.destroy()},[s]);return u.useSyncExternalStore(t,e)}function Gr(s){const e=u.useCallback(()=>s.visible,[s]),t=u.useCallback(o=>{const i=s.on("changed:visible",o);return()=>i.destroy()},[s]),r=u.useSyncExternalStore(t,e),n=u.useCallback(o=>{s.setVisible(o)},[s]);return{isVisible:r,setVisible:n}}function Er(s){const e=u.useCallback(r=>{const n=s.layers.on("changed",r);return()=>n.destroy()},[s]),t=u.useCallback(()=>{let r=s.layers.getOperationalLayers({sortByDisplayOrder:!0})??[];return r=r.reverse(),r},[s]);return it(e,t)}function Or(s){const e=u.useCallback(r=>{const n=s.sublayers?.on("changed",r);return()=>n?.destroy()},[s]),t=u.useCallback(()=>{if(!s.sublayers)return;let n=s.sublayers?.getSublayers({sortByDisplayOrder:!0});return n=n.reverse(),n},[s]);return it(e,t)}function it(s,e){const t=u.useRef(),r=u.useCallback(o=>{const i=s(()=>{t.current=void 0,o()});return()=>{t.current=void 0,i()}},[s]),n=u.useCallback(()=>{if(t.current)return t.current.value;const o=e();return t.current={value:o},o},[e]);return u.useSyncExternalStore(r,n)}function Ar(s){return s.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}const te=2,Kr=s=>{const e=nt(),{mapId:t,showBasemapSwitcher:r=!0,basemapSwitcherProps:n}=s,{containerProps:o}=fe("toc",s),i=u.useId(),a=u.useId(),l=ue(t);let c;switch(l.kind){case"loading":c=null;break;case"rejected":c=d.jsx(De,{className:"toc-error",children:e.formatMessage({id:"error"})});break;case"resolved":{const f=r&&d.jsx(ie,{className:"toc-basemap-switcher",children:d.jsx(je,{title:d.jsx(Se,{id:i,size:"sm",mb:te,children:e.formatMessage({id:"basemapsLabel"})}),children:d.jsx(Cs,{mapId:t,"aria-labelledby":i,...n})})}),g=d.jsx(ie,{className:"toc-operational-layers",children:d.jsx(je,{title:d.jsx(Se,{id:a,size:"sm",mb:te,children:e.formatMessage({id:"operationalLayerLabel"})}),children:d.jsx(xr,{map:l.map,"aria-labelledby":a})})});c=d.jsxs(d.Fragment,{children:[f,g]});break}}return d.jsx(He,{...o,direction:"column",gap:te,children:c})};export{er as F,Xr as G,Jr as I,et as M,Kr as T,Ur as Z,Vs as a,Ws as b,qs as c,Ks as d,Zr as e,ge as t,Is as u};
