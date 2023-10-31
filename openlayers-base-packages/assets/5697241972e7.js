import{b as W,d as D,g as P}from"./5091d4253a81.js";import{f as p,x as A,o as E,j as o,h as x,g,Y as M,r as h}from"./49b2c148dcb3.js";var O=p(function(r,s){var t;const n=A("FormLabel",r),a=E(r),{className:c,children:y,requiredIndicator:d=o.jsx(L,{}),optionalIndicator:l=null,...u}=a,i=W(),v=(t=i?.getLabelProps(u,s))!=null?t:{ref:s,...u};return o.jsxs(x.label,{...v,className:g("chakra-form__label",a.className),__css:{display:"block",textAlign:"start",...n},children:[y,i?.isRequired?d:l]})});O.displayName="FormLabel";var L=p(function(r,s){const t=W(),n=D();if(!t?.isRequired)return null;const a=g("chakra-form__required-indicator",r.className);return o.jsx(x.span,{...t?.getRequiredIndicatorProps(r,s),__css:n.requiredIndicator,className:a})});L.displayName="RequiredIndicator";function T(e,r){return Array.isArray(e)?e.map(s=>s===null?null:r(s)):M(e)?Object.keys(e).reduce((s,t)=>(s[t]=r(e[t]),s),{}):e!=null?r(e):null}var S=e=>o.jsx(x.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});S.displayName="StackItem";function U(e){const{spacing:r,direction:s}=e,t={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":T(s,n=>t[n])}}var V=p((e,r)=>{const{isInline:s,direction:t,align:n,justify:a,spacing:c="0.5rem",wrap:y,children:d,divider:l,className:u,shouldWrapChildren:i,...v}=e,b=s?"row":t??"column",k=h.useMemo(()=>U({spacing:c,direction:b}),[c,b]),m=!!l,j=!i&&!m,q=h.useMemo(()=>{const _=P(d);return j?_:_.map((f,N)=>{const C=typeof f.key<"u"?f.key:N,w=N+1===_.length,I=i?o.jsx(S,{children:f},C):f;if(!m)return I;const F=h.cloneElement(l,{__css:k}),B=w?null:F;return o.jsxs(h.Fragment,{children:[I,B]},C)})},[l,k,m,j,i,d]),R=g("chakra-stack",u);return o.jsx(x.div,{ref:r,display:"flex",alignItems:n,justifyContent:a,flexDirection:b,flexWrap:y,gap:m?void 0:c,className:R,...v,children:q})});V.displayName="Stack";export{O as F,V as S};
