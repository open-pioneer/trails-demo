import{a$ as ve,L as C,bO as g,ay as nt,bP as st,ak as je,an as at,am as it,bQ as lt,bR as ct,bS as ut,bT as dt,G as pt,bU as M,bV as Ce,bW as mt,aZ as xe,b4 as we,u as ft,B as z,i as X,g as Se,e as ge,f as be}from"./CKJVqe80oimG.js";import{G as yt,a as gt,b as bt,M as ht}from"./DW3N9beJZBqr.js";import{L as Pt}from"./Cg2kYByUc4RN.js";import{x as vt,y as Fe,h as A,j as a,f as k,q as R,r as i,z as jt,D as Ct,G as Q,H as T,J as v,o as xt,p as wt,K as St,L as Ft,C as Ot,M as kt,N as Mt,l as Oe,B as re,F as ke}from"./CfsOZItWJxSO.js";import{B as Nt}from"./CboLGRN6EGsf.js";import{F as Gt,d as Me}from"./ByEtrROIq9PZ.js";import{S as Ne}from"./uzE7Eflf_Mmf.js";import{T as ee,L as Lt}from"./CZKMksgG1gB0.js";import{u as Tt,a as At,b as Rt,l as _t,M as Bt}from"./Ou_tk4DdlQr6.js";import{C as Et}from"./BRRkivce1ozn.js";import{M as It,a as Dt,b as Ht}from"./DxlQqtWeOHn_.js";function Vt(r){return"current"in r}var Ge=()=>typeof window<"u";function Jt(){var r;const e=navigator.userAgentData;return(r=e?.platform)!=null?r:navigator.platform}var zt=r=>Ge()&&r.test(navigator.vendor),Ut=r=>Ge()&&r.test(Jt()),$t=()=>Ut(/mac|iphone|ipad|ipod/i),Kt=()=>$t()&&zt(/apple/i);function Wt(r){const{ref:e,elements:t,enabled:o}=r,n=()=>{var s,l;return(l=(s=e.current)==null?void 0:s.ownerDocument)!=null?l:document};vt(n,"pointerdown",s=>{if(!Kt()||!o)return;const l=s.target,d=(t??[e]).some(c=>{const m=Vt(c)?c.current:c;return m?.contains(l)||m===l});n().activeElement!==l&&d&&(s.preventDefault(),l.focus())})}var[qt,S]=Fe({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[Qt,_]=Fe({name:"PopoverStylesContext",errorMessage:`usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `}),Le=A(function(e,t){const{getHeaderProps:o}=S(),n=_();return a.jsx(k.header,{...o(e,t),className:R("chakra-popover__header",e.className),__css:n.header})});Le.displayName="PopoverHeader";function Te(r){const e=i.Children.only(r.children),{getTriggerProps:t}=S();return i.cloneElement(e,t(e.props,e.ref))}Te.displayName="PopoverTrigger";var O={click:"click",hover:"hover"};function Yt(r={}){const{closeOnBlur:e=!0,closeOnEsc:t=!0,initialFocusRef:o,id:n,returnFocusOnClose:s=!0,autoFocus:l=!0,arrowSize:p,arrowShadowColor:d,trigger:c=O.click,openDelay:m=200,closeDelay:b=200,isLazy:x,lazyBehavior:N="unmount",computePositionOnMount:U,...$}=r,{isOpen:f,onClose:h,onOpen:G,onToggle:ie}=jt(r),K=i.useRef(null),B=i.useRef(null),F=i.useRef(null),L=i.useRef(!1),le=i.useRef(!1);f&&(le.current=!0);const[ce,ze]=i.useState(!1),[ue,Ue]=i.useState(!1),$e=i.useId(),Ke=n??$e,[de,E,I,D]=["popover-trigger","popover-content","popover-header","popover-body"].map(u=>`${u}-${Ke}`),{referenceRef:H,getArrowProps:We,getPopperProps:pe,getArrowInnerProps:qe,forceUpdate:Qe}=Ct({...$,enabled:f||!!U}),me=Tt({isOpen:f,ref:F});Wt({enabled:f,ref:B}),At(F,{focusRef:B,visible:f,shouldFocus:s&&c===O.click}),Rt(F,{focusRef:o,visible:f,shouldFocus:l&&c===O.click});const fe=_t({wasSelected:le.current,enabled:x,mode:N,isSelected:me.present}),Ye=i.useCallback((u={},P=null)=>{const y={...u,style:{...u.style,transformOrigin:Q.transformOrigin.varRef,[Q.arrowSize.var]:p?`${p}px`:void 0,[Q.arrowShadowColor.var]:d},ref:T(F,P),children:fe?u.children:null,id:E,tabIndex:-1,role:"dialog",onKeyDown:v(u.onKeyDown,j=>{t&&j.key==="Escape"&&h()}),onBlur:v(u.onBlur,j=>{const V=he(j),q=Y(F.current,V),ot=Y(B.current,V);f&&e&&(!q&&!ot)&&h()}),"aria-labelledby":ce?I:void 0,"aria-describedby":ue?D:void 0};return c===O.hover&&(y.role="tooltip",y.onMouseEnter=v(u.onMouseEnter,()=>{L.current=!0}),y.onMouseLeave=v(u.onMouseLeave,j=>{j.nativeEvent.relatedTarget!==null&&(L.current=!1,setTimeout(()=>h(),b))})),y},[fe,E,ce,I,ue,D,c,t,h,f,e,b,d,p]),Ze=i.useCallback((u={},P=null)=>pe({...u,style:{visibility:f?"visible":"hidden",...u.style}},P),[f,pe]),Xe=i.useCallback((u,P=null)=>({...u,ref:T(P,K,H)}),[K,H]),w=i.useRef(),W=i.useRef(),ye=i.useCallback(u=>{K.current==null&&H(u)},[H]),et=i.useCallback((u={},P=null)=>{const y={...u,ref:T(B,P,ye),id:de,"aria-haspopup":"dialog","aria-expanded":f,"aria-controls":E};return c===O.click&&(y.onClick=v(u.onClick,ie)),c===O.hover&&(y.onFocus=v(u.onFocus,()=>{w.current===void 0&&G()}),y.onBlur=v(u.onBlur,j=>{const V=he(j),q=!Y(F.current,V);f&&e&&q&&h()}),y.onKeyDown=v(u.onKeyDown,j=>{j.key==="Escape"&&h()}),y.onMouseEnter=v(u.onMouseEnter,()=>{L.current=!0,w.current=window.setTimeout(()=>G(),m)}),y.onMouseLeave=v(u.onMouseLeave,()=>{L.current=!1,w.current&&(clearTimeout(w.current),w.current=void 0),W.current=window.setTimeout(()=>{L.current===!1&&h()},b)})),y},[de,f,E,c,ye,ie,G,e,h,m,b]);i.useEffect(()=>()=>{w.current&&clearTimeout(w.current),W.current&&clearTimeout(W.current)},[]);const tt=i.useCallback((u={},P=null)=>({...u,id:I,ref:T(P,y=>{ze(!!y)})}),[I]),rt=i.useCallback((u={},P=null)=>({...u,id:D,ref:T(P,y=>{Ue(!!y)})}),[D]);return{forceUpdate:Qe,isOpen:f,onAnimationComplete:me.onComplete,onClose:h,getAnchorProps:Xe,getArrowProps:We,getArrowInnerProps:qe,getPopoverPositionerProps:Ze,getPopoverProps:Ye,getTriggerProps:et,getHeaderProps:tt,getBodyProps:rt}}function Y(r,e){return r===e||r?.contains(e)}function he(r){var e;const t=r.currentTarget.ownerDocument.activeElement;return(e=r.relatedTarget)!=null?e:t}function Ae(r){const e=xt("Popover",r),{children:t,...o}=wt(r),n=St(),s=Yt({...o,direction:n.direction});return a.jsx(qt,{value:s,children:a.jsx(Qt,{value:e,children:Ft(t,{isOpen:s.isOpen,onClose:s.onClose,forceUpdate:s.forceUpdate})})})}Ae.displayName="Popover";var Z=(r,e)=>e?`${r}.${e}, ${e}`:void 0;function Re(r){var e;const{bg:t,bgColor:o,backgroundColor:n,shadow:s,boxShadow:l,shadowColor:p}=r,{getArrowProps:d,getArrowInnerProps:c}=S(),m=_(),b=(e=t??o)!=null?e:n,x=s??l;return a.jsx(k.div,{...d(),className:"chakra-popover__arrow-positioner",children:a.jsx(k.div,{className:R("chakra-popover__arrow",r.className),...c(r),__css:{"--popper-arrow-shadow-color":Z("colors",p),"--popper-arrow-bg":Z("colors",b),"--popper-arrow-shadow":Z("shadows",x),...m.arrow}})})}Re.displayName="PopoverArrow";var _e=A(function(e,t){const{getBodyProps:o}=S(),n=_();return a.jsx(k.div,{...o(e,t),className:R("chakra-popover__body",e.className),__css:n.body})});_e.displayName="PopoverBody";var Be=A(function(e,t){const{onClose:o}=S(),n=_();return a.jsx(Ot,{size:"sm",onClick:o,className:R("chakra-popover__close-btn",e.className),__css:n.closeButton,ref:t,...e})});Be.displayName="PopoverCloseButton";function Zt(r){if(r)return{enter:{...r.enter,visibility:"visible"},exit:{...r.exit,transitionEnd:{visibility:"hidden"}}}}var Xt={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},er=k(kt.section),Ee=A(function(e,t){const{variants:o=Xt,...n}=e,{isOpen:s}=S();return a.jsx(er,{ref:t,variants:Zt(o),initial:!1,animate:s?"enter":"exit",...n})});Ee.displayName="PopoverTransition";var Ie=A(function(e,t){const{rootProps:o,motionProps:n,...s}=e,{getPopoverProps:l,getPopoverPositionerProps:p,onAnimationComplete:d}=S(),c=_(),m={position:"relative",display:"flex",flexDirection:"column",...c.content};return a.jsx(k.div,{...p(o),__css:c.popper,className:"chakra-popover__popper",children:a.jsx(Ee,{...n,...l(s,t),onAnimationComplete:Mt(d,s.onAnimationComplete),className:R("chakra-popover__content",e.className),__css:m})})});Ie.displayName="PopoverContent";class tr{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.featureClass=ve,this.supportedMediaTypes=null}getReadOptions(e,t){if(t){let o=t.dataProjection?C(t.dataProjection):this.readProjection(e);t.extent&&o&&o.getUnits()==="tile-pixels"&&(o=C(o),o.setWorldExtent(t.extent)),t={dataProjection:o,featureProjection:t.featureProjection}}return this.adaptOptions(t)}adaptOptions(e){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection,featureClass:this.featureClass},e)}getType(){return g()}readFeature(e,t){return g()}readFeatures(e,t){return g()}readGeometry(e,t){return g()}readProjection(e){return g()}writeFeature(e,t){return g()}writeFeatures(e,t){return g()}writeGeometry(e,t){return g()}}const rr=tr;function oe(r,e,t){const o=t?C(t.featureProjection):null,n=t?C(t.dataProjection):null;let s=r;if(o&&n&&!nt(o,n)){e&&(s=r.clone());const l=e?o:n,p=e?n:o;l.getUnits()==="tile-pixels"?s.transform(l,p):s.applyTransform(st(l,p))}if(e&&t&&t.decimals!==void 0){const l=Math.pow(10,t.decimals),p=function(d){for(let c=0,m=d.length;c<m;++c)d[c]=Math.round(d[c]*l)/l;return d};s===r&&(s=r.clone()),s.applyTransform(p)}return s}const or={Point:at,LineString:Pt,Polygon:it,MultiPoint:gt,MultiLineString:bt,MultiPolygon:ht};function nr(r,e,t){return Array.isArray(e[0])?(lt(r,0,e,t)||(r=r.slice(),ct(r,0,e,t)),r):(ut(r,0,e,t)||(r=r.slice(),dt(r,0,e,t)),r)}function De(r,e){const t=r.geometry;if(!t)return[];if(Array.isArray(t))return t.map(s=>De({...r,geometry:s})).flat();const o=t.type==="MultiPolygon"?"Polygon":t.type;if(o==="GeometryCollection"||o==="Circle")throw new Error("Unsupported geometry type: "+o);const n=t.layout.length;return oe(new je(o,o==="Polygon"?nr(t.flatCoordinates,t.ends,n):t.flatCoordinates,t.ends?.flat(),n,r.properties||{},r.id).enableSimplifyTransformed(),!1,e)}function ne(r,e){if(!r)return null;if(Array.isArray(r)){const o=r.map(n=>ne(n,e));return new yt(o)}const t=or[r.type];return oe(new t(r.flatCoordinates,r.layout,r.ends),!1,e)}class sr extends rr{constructor(){super()}getType(){return"json"}readFeature(e,t){return this.readFeatureFromObject(J(e),this.getReadOptions(e,t))}readFeatures(e,t){return this.readFeaturesFromObject(J(e),this.getReadOptions(e,t))}readFeatureFromObject(e,t){return g()}readFeaturesFromObject(e,t){return g()}readGeometry(e,t){return this.readGeometryFromObject(J(e),this.getReadOptions(e,t))}readGeometryFromObject(e,t){return g()}readProjection(e){return this.readProjectionFromObject(J(e))}readProjectionFromObject(e){return g()}writeFeature(e,t){return JSON.stringify(this.writeFeatureObject(e,t))}writeFeatureObject(e,t){return g()}writeFeatures(e,t){return JSON.stringify(this.writeFeaturesObject(e,t))}writeFeaturesObject(e,t){return g()}writeGeometry(e,t){return JSON.stringify(this.writeGeometryObject(e,t))}writeGeometryObject(e,t){return g()}}function J(r){if(typeof r=="string"){const e=JSON.parse(r);return e||null}return r!==null?r:null}class $r extends sr{constructor(e){e=e||{},super(),this.dataProjection=C(e.dataProjection?e.dataProjection:"EPSG:4326"),e.featureProjection&&(this.defaultFeatureProjection=C(e.featureProjection)),e.featureClass&&(this.featureClass=e.featureClass),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(e,t){let o=null;e.type==="Feature"?o=e:o={type:"Feature",geometry:e,properties:null};const n=se(o.geometry);if(this.featureClass===je)return De({geometry:n,id:o.id,properties:o.properties},t);const s=new ve;return this.geometryName_?s.setGeometryName(this.geometryName_):this.extractGeometryName_&&o.geometry_name&&s.setGeometryName(o.geometry_name),s.setGeometry(ne(n,t)),"id"in o&&s.setId(o.id),o.properties&&s.setProperties(o.properties,!0),s}readFeaturesFromObject(e,t){const o=e;let n=null;if(o.type==="FeatureCollection"){const s=e;n=[];const l=s.features;for(let p=0,d=l.length;p<d;++p){const c=this.readFeatureFromObject(l[p],t);c&&n.push(c)}}else n=[this.readFeatureFromObject(e,t)];return n.flat()}readGeometryFromObject(e,t){return ar(e,t)}readProjectionFromObject(e){const t=e.crs;let o;if(t)if(t.type=="name")o=C(t.properties.name);else if(t.type==="EPSG")o=C("EPSG:"+t.properties.code);else throw new Error("Unknown SRS type");else o=this.dataProjection;return o}writeFeatureObject(e,t){t=this.adaptOptions(t);const o={type:"Feature",geometry:null,properties:null},n=e.getId();if(n!==void 0&&(o.id=n),!e.hasProperties())return o;const s=e.getProperties(),l=e.getGeometry();return l&&(o.geometry=te(l,t),delete s[e.getGeometryName()]),pt(s)||(o.properties=s),o}writeFeaturesObject(e,t){t=this.adaptOptions(t);const o=[];for(let n=0,s=e.length;n<s;++n)o.push(this.writeFeatureObject(e[n],t));return{type:"FeatureCollection",features:o}}writeGeometryObject(e,t){return te(e,this.adaptOptions(t))}}function se(r,e){if(!r)return null;let t;switch(r.type){case"Point":{t=lr(r);break}case"LineString":{t=cr(r);break}case"Polygon":{t=mr(r);break}case"MultiPoint":{t=dr(r);break}case"MultiLineString":{t=ur(r);break}case"MultiPolygon":{t=pr(r);break}case"GeometryCollection":{t=ir(r);break}default:throw new Error("Unsupported GeoJSON type: "+r.type)}return t}function ar(r,e){const t=se(r);return ne(t,e)}function ir(r,e){return r.geometries.map(function(o){return se(o)})}function lr(r){const e=r.coordinates;return{type:"Point",flatCoordinates:e,layout:M(e.length)}}function cr(r){const e=r.coordinates,t=e.flat();return{type:"LineString",flatCoordinates:t,ends:[t.length],layout:M(e[0]?.length||2)}}function ur(r){const e=r.coordinates,t=e[0]?.[0]?.length||2,o=[],n=Ce(o,0,e,t);return{type:"MultiLineString",flatCoordinates:o,ends:n,layout:M(t)}}function dr(r){const e=r.coordinates;return{type:"MultiPoint",flatCoordinates:e.flat(),layout:M(e[0]?.length||2)}}function pr(r){const e=r.coordinates,t=[],o=e[0]?.[0]?.[0].length||2,n=mt(t,0,e,o);return{type:"MultiPolygon",flatCoordinates:t,ends:n,layout:M(o)}}function mr(r){const e=r.coordinates,t=[],o=e[0]?.[0]?.length,n=Ce(t,0,e,o);return{type:"Polygon",flatCoordinates:t,ends:n,layout:M(o)}}function te(r,e){r=oe(r,!0,e);const t=r.getType();let o;switch(t){case"Point":{o=Pr(r);break}case"LineString":{o=yr(r);break}case"Polygon":{o=vr(r,e);break}case"MultiPoint":{o=br(r);break}case"MultiLineString":{o=gr(r);break}case"MultiPolygon":{o=hr(r,e);break}case"GeometryCollection":{o=fr(r,e);break}case"Circle":{o={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+t)}return o}function fr(r,e){return e=Object.assign({},e),delete e.featureProjection,{type:"GeometryCollection",geometries:r.getGeometriesArray().map(function(o){return te(o,e)})}}function yr(r,e){return{type:"LineString",coordinates:r.getCoordinates()}}function gr(r,e){return{type:"MultiLineString",coordinates:r.getCoordinates()}}function br(r,e){return{type:"MultiPoint",coordinates:r.getCoordinates()}}function hr(r,e){let t;return e&&(t=e.rightHanded),{type:"MultiPolygon",coordinates:r.getCoordinates(t)}}function Pr(r,e){return{type:"Point",coordinates:r.getCoordinates()}}function vr(r,e){let t;return e&&(t=e.rightHanded),{type:"Polygon",coordinates:r.getCoordinates(t)}}const Kr=i.forwardRef(function(e,t){const{label:o,icon:n,onClick:s,isLoading:l,isDisabled:p,isActive:d,tooltipProps:c,buttonProps:m}=e,{containerProps:{className:b,...x}}=xe("tool-button",e),N=we(b,{"tool-button--active":d,"tool-button--loading":l,"tool-button--disabled":p}),U=typeof d=="boolean"?d?"true":"false":void 0,[$,f]=i.useState(!1),h=G=>{f(!1),s?.(G)};return a.jsx(Oe,{label:o,placement:"auto",openDelay:500,...c,isOpen:$,onOpen:()=>f(!0),onClose:()=>f(!1),children:a.jsx(jr,{className:N,ref:t,"aria-label":o,leftIcon:n,iconSpacing:0,padding:0,isDisabled:p,isLoading:l,isActive:d,"aria-pressed":U,...x,...m,onClick:h})})}),jr=i.forwardRef(function(e,t){const{"aria-labelledby":o,"aria-describedby":n,...s}=e;return a.jsx(re,{ref:t,...s})}),Cr="@open-pioneer/toc",ae=ft.bind(void 0,Cr);function xr(r){const{map:e,"aria-labelledby":t}=r,o=ae(),n=Mr(e);return n.length?He(n,o,{"aria-labelledby":t}):a.jsx(ee,{className:"toc-missing-layers","aria-labelledby":t,children:o.formatMessage({id:"missingLayers"})})}function He(r,e,t){const o=r.map(n=>a.jsx(wr,{layer:n,intl:e},n.id));return a.jsx(Lt,{as:"ul",className:"toc-layer-list",listStyleType:"none",...t,children:o})}function wr(r){const{layer:e,intl:t}=r,o=Or(e),{isVisible:n,setVisible:s}=kr(e),l=Nr(e),p=Ve(e)!=="error",d=t.formatMessage({id:"layerNotAvailable"});let c;return l?.length&&(c=He(l,t,{ml:4})),a.jsxs(z,{as:"li",className:we("toc-layer-item",`layer-${Gr(e.id)}`),children:[a.jsxs(X,{className:"toc-layer-item-content",width:"100%",flexDirection:"row",align:"center",justifyContent:"space-between",gap:2,minHeight:10,children:[a.jsx(Et,{"aria-label":o+(p?"":" "+d),isChecked:n,isDisabled:!p,onChange:m=>s(m.target.checked),children:o}),!p&&a.jsx(Oe,{className:"toc-layer-item-content-tooltip",label:d,placement:"right",openDelay:500,children:a.jsx("span",{children:a.jsx(Gt,{className:"toc-layer-item-content-icon",color:"red","aria-label":d})})}),a.jsx(Ne,{}),e.description&&a.jsx(Sr,{layer:e,title:o,intl:t})]}),c]})}function Sr(r){const{layer:e,title:t,intl:o}=r,n=o.formatMessage({id:"descriptionLabel"}),s=Fr(e),l=Ve(e)!=="error";return a.jsxs(Ae,{placement:"bottom-start",children:[a.jsx(Te,{children:a.jsx(re,{isDisabled:!l,className:"toc-layer-item-details-button","aria-label":n,borderRadius:"full",iconSpacing:0,padding:0,variant:"ghost",leftIcon:a.jsx(Me,{})})}),a.jsx(ke,{children:a.jsxs(Ie,{className:"toc-layer-item-details",overflowY:"auto",maxHeight:"400",children:[a.jsx(Re,{}),a.jsx(Be,{mt:1}),a.jsx(Le,{children:t}),a.jsx(_e,{children:s})]})})]})}function Fr(r){const e=i.useCallback(()=>r.description,[r]),t=i.useCallback(o=>{const n=r.on("changed:description",o);return()=>n.destroy()},[r]);return i.useSyncExternalStore(t,e)}function Or(r){const e=i.useCallback(()=>r.title,[r]),t=i.useCallback(o=>{const n=r.on("changed:title",o);return()=>n.destroy()},[r]);return i.useSyncExternalStore(t,e)}function kr(r){const e=i.useCallback(()=>r.visible,[r]),t=i.useCallback(s=>{const l=r.on("changed:visible",s);return()=>l.destroy()},[r]),o=i.useSyncExternalStore(t,e),n=i.useCallback(s=>{r.setVisible(s)},[r]);return{isVisible:o,setVisible:n}}function Mr(r){const e=i.useCallback(o=>{const n=r.layers.on("changed",o);return()=>n.destroy()},[r]),t=i.useCallback(()=>{let o=r.layers.getOperationalLayers({sortByDisplayOrder:!0})??[];return o=o.reverse(),o},[r]);return Je(e,t)}function Nr(r){const e=i.useCallback(o=>{const n=r.sublayers?.on("changed",o);return()=>n?.destroy()},[r]),t=i.useCallback(()=>{if(!r.sublayers)return;let n=r.sublayers?.getSublayers({sortByDisplayOrder:!0});return n=n.reverse(),n},[r]);return Je(e,t)}function Ve(r){const e="parentLayer"in r?r.parentLayer:r,t=i.useCallback(n=>{const s=e.on("changed:loadState",n);return()=>s.destroy()},[e]),o=i.useCallback(()=>e.loadState,[e]);return i.useSyncExternalStore(t,o)}function Je(r,e){const t=i.useRef(),o=i.useCallback(s=>{const l=r(()=>{t.current=void 0,s()});return()=>{t.current=void 0,l()}},[r]),n=i.useCallback(()=>{if(t.current)return t.current.value;const s=e();return t.current={value:s},s},[e]);return i.useSyncExternalStore(o,n)}function Gr(r){return r.toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}const Lr=r=>{const e=ae(),{mapId:t,showHideAllLayers:o=!0}=r,{map:n}=Se(t);return!!o&&a.jsx(z,{className:"toc-tools",children:a.jsxs(Bt,{placement:"bottom-start",children:[a.jsx(It,{as:re,className:"toc-tools-button","aria-label":e.formatMessage({id:"toolsLabel"}),borderRadius:"full",iconSpacing:0,padding:3,variant:"ghost",leftIcon:a.jsx(Me,{})}),a.jsx(ke,{children:a.jsx(Dt,{className:"tools-menu",children:a.jsx(Ht,{"aria-label":e.formatMessage({id:"tools.hideAllLayers"}),onClick:()=>{Tr(n)},children:e.formatMessage({id:"tools.hideAllLayers"})})})})]})})};function Tr(r){const e=t=>{t?.getSublayers().forEach(o=>{o.setVisible(!1),e(o?.sublayers)})};r?.layers.getOperationalLayers().forEach(t=>{t.setVisible(!1),e(t?.sublayers)})}const Pe=2,Wr=r=>{const e=ae(),{mapId:t,showTools:o=!1,toolsConfig:n,showBasemapSwitcher:s=!0,basemapSwitcherProps:l}=r,{containerProps:p}=xe("toc",r),d=i.useId(),c=i.useId(),m=Se(t);let b;switch(m.kind){case"loading":b=null;break;case"rejected":b=a.jsx(ee,{className:"toc-error",children:e.formatMessage({id:"error"})});break;case"resolved":{const x=s&&a.jsx(z,{className:"toc-basemap-switcher",children:a.jsx(ge,{title:a.jsx(be,{id:d,size:"sm",mb:Pe,children:e.formatMessage({id:"basemapsLabel"})}),children:a.jsx(Nt,{mapId:t,"aria-labelledby":d,...l})})}),N=a.jsx(z,{className:"toc-operational-layers",children:a.jsx(ge,{title:a.jsx(be,{id:c,size:"sm",mb:2,children:a.jsxs(X,{children:[a.jsx(ee,{my:3,children:e.formatMessage({id:"operationalLayerLabel"})}),a.jsx(Ne,{}),o&&a.jsx(Lr,{mapId:t,...n})]})}),children:a.jsx(xr,{map:m.map,"aria-labelledby":c})})});b=a.jsxs(a.Fragment,{children:[x,N]});break}}return a.jsx(X,{...p,direction:"column",gap:Pe,children:b})};export{rr as F,$r as G,Ae as P,Kr as T,Te as a,Ie as b,Re as c,_e as d,Wr as e,oe as t,S as u};
