import{d as v,f as m,e as x,o as B,j as i,h,Z as _,u as I,r as d}from"./49b2c148dcb3.js";import{g as C}from"./5091d4253a81.js";import{ah as j,ai as N}from"./d930cb64c5d4.js";import{B as E}from"./fa35e3e86a4c.js";import{S as P}from"./dda37e0a503c.js";var[w,S]=v({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),L=m(function(e,a){const t=x("List",e),{children:n,styleType:r="none",stylePosition:o,spacing:c,...u}=B(e),y=C(n),p=c?{["& > *:not(style) ~ *:not(style)"]:{mt:c}}:{};return i.jsx(w,{value:t,children:i.jsx(h.ul,{ref:a,listStyleType:r,listStylePosition:o,role:"list",__css:{...t.container,...p},...u,children:y})})});L.displayName="List";var A=m((s,e)=>{const{as:a,...t}=s;return i.jsx(L,{ref:e,as:"ol",styleType:"decimal",marginStart:"1em",...t})});A.displayName="OrderedList";var O=m(function(e,a){const{as:t,...n}=e;return i.jsx(L,{ref:a,as:"ul",styleType:"initial",marginStart:"1em",...n})});O.displayName="UnorderedList";var M=m(function(e,a){const t=S();return i.jsx(h.li,{ref:a,...e,__css:t.item})});M.displayName="ListItem";var T=m(function(e,a){const t=S();return i.jsx(_,{ref:a,role:"presentation",...e,__css:t.icon})});T.displayName="ListIcon";const U="@open-pioneer/basemap-switcher",k=I.bind(void 0,U),f="___NO_BASEMAP___",F=s=>{const e=k(),{mapId:a,allowSelectingEmptyBasemap:t,"aria-label":n,"aria-labelledby":r}=s,{containerProps:o}=j("basemap-switcher",s),c=e.formatMessage({id:"emptyBasemapLabel"}),{map:u}=N(a),y=R(u),{selectOptions:b,selectedId:p}=d.useMemo(()=>D({baseLayers:y,allowSelectingEmptyBasemap:t,emptyBasemapLabel:c}),[y,t,c]),g=l=>{u?.layers.activateBaseLayer(l===f?void 0:l)};return i.jsx(E,{...o,children:u?i.jsx(P,{"aria-label":n,"aria-labelledby":r,className:"basemap-switcher-select",value:p,onChange:l=>g(l.target.value),children:b.map(l=>i.jsx("option",{value:l.id,children:l.label},l.id))}):""})};function R(s){const e=d.useRef(),a=d.useCallback(n=>{if(e.current=void 0,!s)return()=>{};const r=s.layers.on("changed",()=>{e.current=void 0,n()});return()=>r.destroy()},[s]),t=d.useCallback(()=>e.current?e.current:e.current=s?.layers.getBaseLayers()??[],[s]);return d.useSyncExternalStore(a,t)}function D(s){const{baseLayers:e=[],allowSelectingEmptyBasemap:a=!1,emptyBasemapLabel:t}=s,n=e.map(o=>({id:o.id,label:o.title}));let r=e.find(o=>o.visible)?.id;return(a||r==null)&&n.push(G(t)),r==null&&(r=f),{selectOptions:n,selectedId:r}}function G(s){return{id:f,label:s}}export{F as B,L,O as U,M as a};
