import{a$ as ve,N as C,bP as g,az as ot,bQ as nt,al as je,ao as st,an as at,bR as it,bS as lt,bT as ct,bU as ut,I as dt,bV as M,bW as Ce,bX as pt,a_ as xe,b5 as we,u as ft,B as J,i as Z,g as mt,e as ge,f as be}from"./Bg6CwrFcg8E3.js";import{G as yt,a as gt,b as bt,M as ht}from"./BB33NBwZyslZ.js";import{L as Pt}from"./ch35LvjY6teX.js";import{y as vt,z as Se,h as T,j as a,f as k,q as A,r as i,D as jt,G as Ct,H as Q,J as G,K as v,o as xt,p as wt,L as St,M as Ft,C as Ot,N as kt,O as Mt,l as Fe,B as re,F as Oe}from"./Bh0CuZ3gy5tC.js";import{B as Nt}from"./D7yIa8IXM-WF.js";import{F as Lt,d as ke}from"./JUj2SwJ_uov9.js";import{S as Me}from"./CjjyePfBQlZ7.js";import{T as ee,L as Gt}from"./Tz2xttM4F6S2.js";import{u as Tt,a as At,b as _t,l as Rt,M as Et}from"./DUys4rac0YQP.js";import{C as Bt}from"./2d5-QpxJNHTD.js";import{a as It,b as Dt,M as Ht}from"./BeFcF3Ti4kY-.js";function Vt(t){return"current"in t}var Ne=()=>typeof window<"u";function Jt(){var t;const e=navigator.userAgentData;return(t=e?.platform)!=null?t:navigator.platform}var zt=t=>Ne()&&t.test(navigator.vendor),Ut=t=>Ne()&&t.test(Jt()),$t=()=>Ut(/mac|iphone|ipad|ipod/i),Kt=()=>$t()&&zt(/apple/i);function Wt(t){const{ref:e,elements:r,enabled:o}=t,n=()=>{var s,l;return(l=(s=e.current)==null?void 0:s.ownerDocument)!=null?l:document};vt(n,"pointerdown",s=>{if(!Kt()||!o)return;const l=s.target,p=(r??[e]).some(c=>{const f=Vt(c)?c.current:c;return f?.contains(l)||f===l});n().activeElement!==l&&p&&(s.preventDefault(),l.focus())})}var[qt,S]=Se({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[Qt,_]=Se({name:"PopoverStylesContext",errorMessage:`usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `}),Le=T(function(e,r){const{getHeaderProps:o}=S(),n=_();return a.jsx(k.header,{...o(e,r),className:A("chakra-popover__header",e.className),__css:n.header})});Le.displayName="PopoverHeader";function Ge(t){const e=i.Children.only(t.children),{getTriggerProps:r}=S();return i.cloneElement(e,r(e.props,e.ref))}Ge.displayName="PopoverTrigger";var O={click:"click",hover:"hover"};function Xt(t={}){const{closeOnBlur:e=!0,closeOnEsc:r=!0,initialFocusRef:o,id:n,returnFocusOnClose:s=!0,autoFocus:l=!0,arrowSize:d,arrowShadowColor:p,trigger:c=O.click,openDelay:f=200,closeDelay:P=200,isLazy:x,lazyBehavior:z="unmount",computePositionOnMount:U,...$}=t,{isOpen:m,onClose:b,onOpen:N,onToggle:ie}=jt(t),K=i.useRef(null),R=i.useRef(null),F=i.useRef(null),L=i.useRef(!1),le=i.useRef(!1);m&&(le.current=!0);const[ce,Je]=i.useState(!1),[ue,ze]=i.useState(!1),Ue=i.useId(),$e=n??Ue,[de,E,B,I]=["popover-trigger","popover-content","popover-header","popover-body"].map(u=>`${u}-${$e}`),{referenceRef:D,getArrowProps:Ke,getPopperProps:pe,getArrowInnerProps:We,forceUpdate:qe}=Ct({...$,enabled:m||!!U}),fe=Tt({isOpen:m,ref:F});Wt({enabled:m,ref:R}),At(F,{focusRef:R,visible:m,shouldFocus:s&&c===O.click}),_t(F,{focusRef:o,visible:m,shouldFocus:l&&c===O.click});const me=Rt({wasSelected:le.current,enabled:x,mode:z,isSelected:fe.present}),Qe=i.useCallback((u={},h=null)=>{const y={...u,style:{...u.style,transformOrigin:Q.transformOrigin.varRef,[Q.arrowSize.var]:d?`${d}px`:void 0,[Q.arrowShadowColor.var]:p},ref:G(F,h),children:me?u.children:null,id:E,tabIndex:-1,role:"dialog",onKeyDown:v(u.onKeyDown,j=>{r&&j.key==="Escape"&&b()}),onBlur:v(u.onBlur,j=>{const H=he(j),q=X(F.current,H),rt=X(R.current,H);m&&e&&(!q&&!rt)&&b()}),"aria-labelledby":ce?B:void 0,"aria-describedby":ue?I:void 0};return c===O.hover&&(y.role="tooltip",y.onMouseEnter=v(u.onMouseEnter,()=>{L.current=!0}),y.onMouseLeave=v(u.onMouseLeave,j=>{j.nativeEvent.relatedTarget!==null&&(L.current=!1,setTimeout(()=>b(),P))})),y},[me,E,ce,B,ue,I,c,r,b,m,e,P,p,d]),Xe=i.useCallback((u={},h=null)=>pe({...u,style:{visibility:m?"visible":"hidden",...u.style}},h),[m,pe]),Ye=i.useCallback((u,h=null)=>({...u,ref:G(h,K,D)}),[K,D]),w=i.useRef(),W=i.useRef(),ye=i.useCallback(u=>{K.current==null&&D(u)},[D]),Ze=i.useCallback((u={},h=null)=>{const y={...u,ref:G(R,h,ye),id:de,"aria-haspopup":"dialog","aria-expanded":m,"aria-controls":E};return c===O.click&&(y.onClick=v(u.onClick,ie)),c===O.hover&&(y.onFocus=v(u.onFocus,()=>{w.current===void 0&&N()}),y.onBlur=v(u.onBlur,j=>{const H=he(j),q=!X(F.current,H);m&&e&&q&&b()}),y.onKeyDown=v(u.onKeyDown,j=>{j.key==="Escape"&&b()}),y.onMouseEnter=v(u.onMouseEnter,()=>{L.current=!0,w.current=window.setTimeout(()=>N(),f)}),y.onMouseLeave=v(u.onMouseLeave,()=>{L.current=!1,w.current&&(clearTimeout(w.current),w.current=void 0),W.current=window.setTimeout(()=>{L.current===!1&&b()},P)})),y},[de,m,E,c,ye,ie,N,e,b,f,P]);i.useEffect(()=>()=>{w.current&&clearTimeout(w.current),W.current&&clearTimeout(W.current)},[]);const et=i.useCallback((u={},h=null)=>({...u,id:B,ref:G(h,y=>{Je(!!y)})}),[B]),tt=i.useCallback((u={},h=null)=>({...u,id:I,ref:G(h,y=>{ze(!!y)})}),[I]);return{forceUpdate:qe,isOpen:m,onAnimationComplete:fe.onComplete,onClose:b,getAnchorProps:Ye,getArrowProps:Ke,getArrowInnerProps:We,getPopoverPositionerProps:Xe,getPopoverProps:Qe,getTriggerProps:Ze,getHeaderProps:et,getBodyProps:tt}}function X(t,e){return t===e||t?.contains(e)}function he(t){var e;const r=t.currentTarget.ownerDocument.activeElement;return(e=t.relatedTarget)!=null?e:r}function Te(t){const e=xt("Popover",t),{children:r,...o}=wt(t),n=St(),s=Xt({...o,direction:n.direction});return a.jsx(qt,{value:s,children:a.jsx(Qt,{value:e,children:Ft(r,{isOpen:s.isOpen,onClose:s.onClose,forceUpdate:s.forceUpdate})})})}Te.displayName="Popover";var Y=(t,e)=>e?`${t}.${e}, ${e}`:void 0;function Ae(t){var e;const{bg:r,bgColor:o,backgroundColor:n,shadow:s,boxShadow:l,shadowColor:d}=t,{getArrowProps:p,getArrowInnerProps:c}=S(),f=_(),P=(e=r??o)!=null?e:n,x=s??l;return a.jsx(k.div,{...p(),className:"chakra-popover__arrow-positioner",children:a.jsx(k.div,{className:A("chakra-popover__arrow",t.className),...c(t),__css:{"--popper-arrow-shadow-color":Y("colors",d),"--popper-arrow-bg":Y("colors",P),"--popper-arrow-shadow":Y("shadows",x),...f.arrow}})})}Ae.displayName="PopoverArrow";var _e=T(function(e,r){const{getBodyProps:o}=S(),n=_();return a.jsx(k.div,{...o(e,r),className:A("chakra-popover__body",e.className),__css:n.body})});_e.displayName="PopoverBody";var Re=T(function(e,r){const{onClose:o}=S(),n=_();return a.jsx(Ot,{size:"sm",onClick:o,className:A("chakra-popover__close-btn",e.className),__css:n.closeButton,ref:r,...e})});Re.displayName="PopoverCloseButton";function Yt(t){if(t)return{enter:{...t.enter,visibility:"visible"},exit:{...t.exit,transitionEnd:{visibility:"hidden"}}}}var Zt={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},er=k(kt.section),Ee=T(function(e,r){const{variants:o=Zt,...n}=e,{isOpen:s}=S();return a.jsx(er,{ref:r,variants:Yt(o),initial:!1,animate:s?"enter":"exit",...n})});Ee.displayName="PopoverTransition";var Be=T(function(e,r){const{rootProps:o,motionProps:n,...s}=e,{getPopoverProps:l,getPopoverPositionerProps:d,onAnimationComplete:p}=S(),c=_(),f={position:"relative",display:"flex",flexDirection:"column",...c.content};return a.jsx(k.div,{...d(o),__css:c.popper,className:"chakra-popover__popper",children:a.jsx(Ee,{...n,...l(s,r),onAnimationComplete:Mt(p,s.onAnimationComplete),className:A("chakra-popover__content",e.className),__css:f})})});Be.displayName="PopoverContent";function tr(t){return"parentLayer"in t}function $r(t){return"olLayer"in t}class rr{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.featureClass=ve,this.supportedMediaTypes=null}getReadOptions(e,r){if(r){let o=r.dataProjection?C(r.dataProjection):this.readProjection(e);r.extent&&o&&o.getUnits()==="tile-pixels"&&(o=C(o),o.setWorldExtent(r.extent)),r={dataProjection:o,featureProjection:r.featureProjection}}return this.adaptOptions(r)}adaptOptions(e){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection,featureClass:this.featureClass},e)}getType(){return g()}readFeature(e,r){return g()}readFeatures(e,r){return g()}readGeometry(e,r){return g()}readProjection(e){return g()}writeFeature(e,r){return g()}writeFeatures(e,r){return g()}writeGeometry(e,r){return g()}}function oe(t,e,r){const o=r?C(r.featureProjection):null,n=r?C(r.dataProjection):null;let s=t;if(o&&n&&!ot(o,n)){e&&(s=t.clone());const l=e?o:n,d=e?n:o;l.getUnits()==="tile-pixels"?s.transform(l,d):s.applyTransform(nt(l,d))}if(e&&r&&r.decimals!==void 0){const l=Math.pow(10,r.decimals),d=function(p){for(let c=0,f=p.length;c<f;++c)p[c]=Math.round(p[c]*l)/l;return p};s===t&&(s=t.clone()),s.applyTransform(d)}return s}const or={Point:st,LineString:Pt,Polygon:at,MultiPoint:gt,MultiLineString:bt,MultiPolygon:ht};function nr(t,e,r){return Array.isArray(e[0])?(it(t,0,e,r)||(t=t.slice(),lt(t,0,e,r)),t):(ct(t,0,e,r)||(t=t.slice(),ut(t,0,e,r)),t)}function Ie(t,e){const r=t.geometry;if(!r)return[];if(Array.isArray(r))return r.map(s=>Ie({...t,geometry:s})).flat();const o=r.type==="MultiPolygon"?"Polygon":r.type;if(o==="GeometryCollection"||o==="Circle")throw new Error("Unsupported geometry type: "+o);const n=r.layout.length;return oe(new je(o,o==="Polygon"?nr(r.flatCoordinates,r.ends,n):r.flatCoordinates,r.ends?.flat(),n,t.properties||{},t.id).enableSimplifyTransformed(),!1,e)}function ne(t,e){if(!t)return null;if(Array.isArray(t)){const o=t.map(n=>ne(n,e));return new yt(o)}const r=or[t.type];return oe(new r(t.flatCoordinates,t.layout,t.ends),!1,e)}class sr extends rr{constructor(){super()}getType(){return"json"}readFeature(e,r){return this.readFeatureFromObject(V(e),this.getReadOptions(e,r))}readFeatures(e,r){return this.readFeaturesFromObject(V(e),this.getReadOptions(e,r))}readFeatureFromObject(e,r){return g()}readFeaturesFromObject(e,r){return g()}readGeometry(e,r){return this.readGeometryFromObject(V(e),this.getReadOptions(e,r))}readGeometryFromObject(e,r){return g()}readProjection(e){return this.readProjectionFromObject(V(e))}readProjectionFromObject(e){return g()}writeFeature(e,r){return JSON.stringify(this.writeFeatureObject(e,r))}writeFeatureObject(e,r){return g()}writeFeatures(e,r){return JSON.stringify(this.writeFeaturesObject(e,r))}writeFeaturesObject(e,r){return g()}writeGeometry(e,r){return JSON.stringify(this.writeGeometryObject(e,r))}writeGeometryObject(e,r){return g()}}function V(t){if(typeof t=="string"){const e=JSON.parse(t);return e||null}return t!==null?t:null}class Kr extends sr{constructor(e){e=e||{},super(),this.dataProjection=C(e.dataProjection?e.dataProjection:"EPSG:4326"),e.featureProjection&&(this.defaultFeatureProjection=C(e.featureProjection)),e.featureClass&&(this.featureClass=e.featureClass),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(e,r){let o=null;e.type==="Feature"?o=e:o={type:"Feature",geometry:e,properties:null};const n=se(o.geometry);if(this.featureClass===je)return Ie({geometry:n,id:o.id,properties:o.properties},r);const s=new ve;return this.geometryName_?s.setGeometryName(this.geometryName_):this.extractGeometryName_&&o.geometry_name&&s.setGeometryName(o.geometry_name),s.setGeometry(ne(n,r)),"id"in o&&s.setId(o.id),o.properties&&s.setProperties(o.properties,!0),s}readFeaturesFromObject(e,r){const o=e;let n=null;if(o.type==="FeatureCollection"){const s=e;n=[];const l=s.features;for(let d=0,p=l.length;d<p;++d){const c=this.readFeatureFromObject(l[d],r);c&&n.push(c)}}else n=[this.readFeatureFromObject(e,r)];return n.flat()}readGeometryFromObject(e,r){return ar(e,r)}readProjectionFromObject(e){const r=e.crs;let o;if(r)if(r.type=="name")o=C(r.properties.name);else if(r.type==="EPSG")o=C("EPSG:"+r.properties.code);else throw new Error("Unknown SRS type");else o=this.dataProjection;return o}writeFeatureObject(e,r){r=this.adaptOptions(r);const o={type:"Feature",geometry:null,properties:null},n=e.getId();if(n!==void 0&&(o.id=n),!e.hasProperties())return o;const s=e.getProperties(),l=e.getGeometry();return l&&(o.geometry=te(l,r),delete s[e.getGeometryName()]),dt(s)||(o.properties=s),o}writeFeaturesObject(e,r){r=this.adaptOptions(r);const o=[];for(let n=0,s=e.length;n<s;++n)o.push(this.writeFeatureObject(e[n],r));return{type:"FeatureCollection",features:o}}writeGeometryObject(e,r){return te(e,this.adaptOptions(r))}}function se(t,e){if(!t)return null;let r;switch(t.type){case"Point":{r=lr(t);break}case"LineString":{r=cr(t);break}case"Polygon":{r=fr(t);break}case"MultiPoint":{r=dr(t);break}case"MultiLineString":{r=ur(t);break}case"MultiPolygon":{r=pr(t);break}case"GeometryCollection":{r=ir(t);break}default:throw new Error("Unsupported GeoJSON type: "+t.type)}return r}function ar(t,e){const r=se(t);return ne(r,e)}function ir(t,e){return t.geometries.map(function(o){return se(o)})}function lr(t){const e=t.coordinates;return{type:"Point",flatCoordinates:e,layout:M(e.length)}}function cr(t){const e=t.coordinates,r=e.flat();return{type:"LineString",flatCoordinates:r,ends:[r.length],layout:M(e[0]?.length||2)}}function ur(t){const e=t.coordinates,r=e[0]?.[0]?.length||2,o=[],n=Ce(o,0,e,r);return{type:"MultiLineString",flatCoordinates:o,ends:n,layout:M(r)}}function dr(t){const e=t.coordinates;return{type:"MultiPoint",flatCoordinates:e.flat(),layout:M(e[0]?.length||2)}}function pr(t){const e=t.coordinates,r=[],o=e[0]?.[0]?.[0].length||2,n=pt(r,0,e,o);return{type:"MultiPolygon",flatCoordinates:r,ends:n,layout:M(o)}}function fr(t){const e=t.coordinates,r=[],o=e[0]?.[0]?.length,n=Ce(r,0,e,o);return{type:"Polygon",flatCoordinates:r,ends:n,layout:M(o)}}function te(t,e){t=oe(t,!0,e);const r=t.getType();let o;switch(r){case"Point":{o=Pr(t);break}case"LineString":{o=yr(t);break}case"Polygon":{o=vr(t,e);break}case"MultiPoint":{o=br(t);break}case"MultiLineString":{o=gr(t);break}case"MultiPolygon":{o=hr(t,e);break}case"GeometryCollection":{o=mr(t,e);break}case"Circle":{o={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+r)}return o}function mr(t,e){return e=Object.assign({},e),delete e.featureProjection,{type:"GeometryCollection",geometries:t.getGeometriesArray().map(function(o){return te(o,e)})}}function yr(t,e){return{type:"LineString",coordinates:t.getCoordinates()}}function gr(t,e){return{type:"MultiLineString",coordinates:t.getCoordinates()}}function br(t,e){return{type:"MultiPoint",coordinates:t.getCoordinates()}}function hr(t,e){let r;return e&&(r=e.rightHanded),{type:"MultiPolygon",coordinates:t.getCoordinates(r)}}function Pr(t,e){return{type:"Point",coordinates:t.getCoordinates()}}function vr(t,e){let r;return e&&(r=e.rightHanded),{type:"Polygon",coordinates:t.getCoordinates(r)}}const Wr=i.forwardRef(function(e,r){const{label:o,icon:n,onClick:s,isLoading:l,isDisabled:d,isActive:p,tooltipProps:c,buttonProps:f}=e,{containerProps:{className:P,...x}}=xe("tool-button",e),z=we(P,{"tool-button--active":p,"tool-button--loading":l,"tool-button--disabled":d}),U=typeof p=="boolean"?p?"true":"false":void 0,[$,m]=i.useState(!1),b=N=>{m(!1),s?.(N)};return a.jsx(Fe,{label:o,placement:"auto",openDelay:500,...c,isOpen:$,onOpen:()=>m(!0),onClose:()=>m(!1),children:a.jsx(jr,{className:z,ref:r,"aria-label":o,leftIcon:n,iconSpacing:0,padding:0,isDisabled:d,isLoading:l,isActive:p,"aria-pressed":U,...x,...f,onClick:b})})}),jr=i.forwardRef(function(e,r){const{"aria-labelledby":o,"aria-describedby":n,...s}=e;return a.jsx(re,{ref:r,...s})}),Cr="@open-pioneer/toc",ae=ft.bind(void 0,Cr);function xr(t){const{map:e,"aria-label":r}=t,o=ae(),n=Mr(e);return n.length?De(n,o,{"aria-label":r}):a.jsx(ee,{className:"toc-missing-layers","aria-label":r,children:o.formatMessage({id:"missingLayers"})})}function De(t,e,r){const o=t.map(n=>a.jsx(wr,{layer:n,intl:e},n.id));return a.jsx(Gt,{as:"ul",className:"toc-layer-list",listStyleType:"none",role:"group",...r,children:o})}function wr(t){const{layer:e,intl:r}=t,o=Or(e),{isVisible:n,setVisible:s}=kr(e),l=Nr(e),d=He(e)!=="error",p=r.formatMessage({id:"layerNotAvailable"});let c;return l?.length&&(c=De(l,r,{ml:4,"aria-label":r.formatMessage({id:"childgroupLabel"},{title:o})})),a.jsxs(J,{as:"li",className:we("toc-layer-item",`layer-${Lr(e.id)}`),children:[a.jsxs(Z,{className:"toc-layer-item-content",width:"100%",flexDirection:"row",align:"center",justifyContent:"space-between",gap:2,minHeight:10,children:[a.jsx(Bt,{"aria-label":o+(d?"":" "+p),isChecked:n,isDisabled:!d,onChange:f=>s(f.target.checked),children:o}),!d&&a.jsx(Fe,{className:"toc-layer-item-content-tooltip",label:p,placement:"right",openDelay:500,children:a.jsx("span",{children:a.jsx(Lt,{className:"toc-layer-item-content-icon",color:"red","aria-label":p})})}),a.jsx(Me,{}),e.description&&a.jsx(Sr,{layer:e,title:o,intl:r})]}),c]})}function Sr(t){const{layer:e,title:r,intl:o}=t,n=o.formatMessage({id:"descriptionLabel"}),s=Fr(e),l=He(e)!=="error";return a.jsxs(Te,{placement:"bottom-start",children:[a.jsx(Ge,{children:a.jsx(re,{isDisabled:!l,className:"toc-layer-item-details-button","aria-label":n,borderRadius:"full",iconSpacing:0,padding:0,variant:"ghost",leftIcon:a.jsx(ke,{})})}),a.jsx(Oe,{children:a.jsxs(Be,{className:"toc-layer-item-details",overflowY:"auto",maxHeight:"400",children:[a.jsx(Ae,{}),a.jsx(Re,{mt:1}),a.jsx(Le,{children:r}),a.jsx(_e,{children:s})]})})]})}function Fr(t){const e=i.useCallback(()=>t.description,[t]),r=i.useCallback(o=>{const n=t.on("changed:description",o);return()=>n.destroy()},[t]);return i.useSyncExternalStore(r,e)}function Or(t){const e=i.useCallback(()=>t.title,[t]),r=i.useCallback(o=>{const n=t.on("changed:title",o);return()=>n.destroy()},[t]);return i.useSyncExternalStore(r,e)}function kr(t){const e=i.useCallback(()=>t.visible,[t]),r=i.useCallback(s=>{const l=t.on("changed:visible",s);return()=>l.destroy()},[t]),o=i.useSyncExternalStore(r,e),n=i.useCallback(s=>{t.setVisible(s)},[t]);return{isVisible:o,setVisible:n}}function Mr(t){const e=i.useCallback(o=>{const n=t.layers.on("changed",o);return()=>n.destroy()},[t]),r=i.useCallback(()=>{let o=t.layers.getOperationalLayers({sortByDisplayOrder:!0})??[];return o=o.reverse(),o},[t]);return Ve(e,r)}function Nr(t){const e=i.useCallback(o=>{const n=t.sublayers?.on("changed",o);return()=>n?.destroy()},[t]),r=i.useCallback(()=>{if(!t.sublayers)return;let n=t.sublayers?.getSublayers({sortByDisplayOrder:!0});return n=n.reverse(),n},[t]);return Ve(e,r)}function He(t){const e=tr(t)?t.parentLayer:t,r=i.useCallback(n=>{const s=e.on("changed:loadState",n);return()=>s.destroy()},[e]),o=i.useCallback(()=>e.loadState,[e]);return i.useSyncExternalStore(r,o)}function Ve(t,e){const r=i.useRef(),o=i.useCallback(s=>{const l=t(()=>{r.current=void 0,s()});return()=>{r.current=void 0,l()}},[t]),n=i.useCallback(()=>{if(r.current)return r.current.value;const s=e();return r.current={value:s},s},[e]);return i.useSyncExternalStore(o,n)}function Lr(t){return t.toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}const Gr=t=>{const e=ae(),{map:r,showHideAllLayers:o=!0}=t;return!!o&&a.jsx(J,{className:"toc-tools",children:a.jsxs(Et,{placement:"bottom-start",children:[a.jsx(It,{as:re,className:"toc-tools-button","aria-label":e.formatMessage({id:"toolsLabel"}),borderRadius:"full",iconSpacing:0,padding:3,variant:"ghost",leftIcon:a.jsx(ke,{})}),a.jsx(Oe,{children:a.jsx(Dt,{className:"tools-menu",children:a.jsx(Ht,{"aria-label":e.formatMessage({id:"tools.hideAllLayers"}),onClick:()=>{Tr(r)},children:e.formatMessage({id:"tools.hideAllLayers"})})})})]})})};function Tr(t){const e=r=>{r?.getSublayers().forEach(o=>{o.setVisible(!1),e(o?.sublayers)})};t?.layers.getOperationalLayers().forEach(r=>{r.setVisible(!1),e(r?.sublayers)})}const Pe=2,qr=t=>{const e=ae(),{showTools:r=!1,toolsConfig:o,showBasemapSwitcher:n=!0,basemapSwitcherProps:s}=t,{containerProps:l}=xe("toc",t),d=i.useId(),p=mt(t);let c;switch(p.kind){case"loading":c=null;break;case"rejected":c=a.jsx(ee,{className:"toc-error",children:e.formatMessage({id:"error"})});break;case"resolved":{const f=p.map,P=n&&a.jsx(J,{className:"toc-basemap-switcher",children:a.jsx(ge,{title:a.jsx(be,{id:d,size:"sm",mb:Pe,children:e.formatMessage({id:"basemapsLabel"})}),children:a.jsx(Nt,{map:f,"aria-labelledby":d,...s})})}),x=a.jsx(J,{className:"toc-operational-layers",children:a.jsx(ge,{title:a.jsx(be,{size:"sm",mb:2,children:a.jsxs(Z,{children:[a.jsx(ee,{my:3,children:e.formatMessage({id:"operationalLayerLabel"})}),a.jsx(Me,{}),r&&a.jsx(Gr,{map:f,...o})]})}),children:a.jsx(xr,{map:f,"aria-label":e.formatMessage({id:"operationalLayerLabel"})})})});c=a.jsxs(a.Fragment,{children:[P,x]});break}}return a.jsx(Z,{...l,direction:"column",gap:Pe,children:c})};export{rr as F,Kr as G,Te as P,Wr as T,Ge as a,Be as b,Ae as c,_e as d,qr as e,$r as i,oe as t,S as u};
