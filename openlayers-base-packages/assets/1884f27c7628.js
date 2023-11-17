import{D as v,f as d,K as x,L as B,j as i,d as S,T as _,r as m}from"./fd3685c12ee3.js";import{g as I}from"./b1863e3adeb0.js";import{ah as C}from"./284c0dc849a8.js";import{u as j}from"./323dd0418fb2.js";import{u as N}from"./60711ab36be7.js";import{B as E}from"./7e352b174ca6.js";import{S as P}from"./7d21a045d8c5.js";var[w,g]=v({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),L=d(function(e,a){const t=x("List",e),{children:r,styleType:n="none",stylePosition:o,spacing:c,...u}=B(e),p=I(r),y=c?{["& > *:not(style) ~ *:not(style)"]:{mt:c}}:{};return i.jsx(w,{value:t,children:i.jsx(S.ul,{ref:a,listStyleType:n,listStylePosition:o,role:"list",__css:{...t.container,...y},...u,children:p})})});L.displayName="List";var A=d((s,e)=>{const{as:a,...t}=s;return i.jsx(L,{ref:e,as:"ol",styleType:"decimal",marginStart:"1em",...t})});A.displayName="OrderedList";var O=d(function(e,a){const{as:t,...r}=e;return i.jsx(L,{ref:a,as:"ul",styleType:"initial",marginStart:"1em",...r})});O.displayName="UnorderedList";var M=d(function(e,a){const t=g();return i.jsx(S.li,{ref:a,...e,__css:t.item})});M.displayName="ListItem";var T=d(function(e,a){const t=g();return i.jsx(_,{ref:a,role:"presentation",...e,__css:t.icon})});T.displayName="ListIcon";const U="@open-pioneer/basemap-switcher",k=N.bind(void 0,U),f="___NO_BASEMAP___",Q=s=>{const e=k(),{mapId:a,allowSelectingEmptyBasemap:t,"aria-label":r,"aria-labelledby":n}=s,{containerProps:o}=j("basemap-switcher",s),c=e.formatMessage({id:"emptyBasemapLabel"}),{map:u}=C(a),p=R(u),{selectOptions:b,selectedId:y}=m.useMemo(()=>D({baseLayers:p,allowSelectingEmptyBasemap:t,emptyBasemapLabel:c}),[p,t,c]),h=l=>{u?.layers.activateBaseLayer(l===f?void 0:l)};return i.jsx(E,{...o,children:u?i.jsx(P,{"aria-label":r,"aria-labelledby":n,className:"basemap-switcher-select",value:y,onChange:l=>h(l.target.value),children:b.map(l=>i.jsx("option",{value:l.id,children:l.label},l.id))}):""})};function R(s){const e=m.useRef(),a=m.useCallback(r=>{if(e.current=void 0,!s)return()=>{};const n=s.layers.on("changed",()=>{e.current=void 0,r()});return()=>n.destroy()},[s]),t=m.useCallback(()=>e.current?e.current:e.current=s?.layers.getBaseLayers()??[],[s]);return m.useSyncExternalStore(a,t)}function D(s){const{baseLayers:e=[],allowSelectingEmptyBasemap:a=!1,emptyBasemapLabel:t}=s,r=e.map(o=>({id:o.id,label:o.title}));let n=e.find(o=>o.visible)?.id;return(a||n==null)&&r.push(K(t)),n==null&&(n=f),{selectOptions:r,selectedId:n}}function K(s){return{id:f,label:s}}export{Q as B,L,O as U,M as a};
