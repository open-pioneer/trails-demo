import{r as s,i as P,f as y,u as k,o as N,e as O,j as c,g as d,h,b as R}from"./ObservableBox-1a4f456d.js";function V(t){return s.Children.toArray(t).filter(e=>s.isValidElement(e))}function D(t,e){return Array.isArray(t)?t.map(n=>n===null?null:e(n)):P(t)?Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{}):t!=null?e(t):null}var F=y(function(e,n){const r=k("Text",e),{className:a,align:o,decoration:i,casing:S,...m}=N(e),l=O({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return c(d.p,{ref:n,className:h("chakra-text",e.className),...l,...m,__css:r})});F.displayName="Text";var j=t=>c(d.div,{className:"chakra-stack__item",...t,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...t.__css}});j.displayName="StackItem";var _="& > *:not(style) ~ *:not(style)";function U(t){const{spacing:e,direction:n}=t,r={column:{marginTop:e,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:e},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:e,marginStart:0},"row-reverse":{marginTop:0,marginEnd:e,marginBottom:0,marginStart:0}};return{flexDirection:n,[_]:D(n,a=>r[a])}}function q(t){const{spacing:e,direction:n}=t,r={column:{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":D(n,a=>r[a])}}var z=y((t,e)=>{const{isInline:n,direction:r,align:a,justify:o,spacing:i="0.5rem",wrap:S,children:m,divider:l,className:E,shouldWrapChildren:x,...p}=t,u=n?"row":r??"column",C=s.useMemo(()=>U({direction:u,spacing:i}),[u,i]),b=s.useMemo(()=>q({spacing:i,direction:u}),[i,u]),g=!!l,T=!x&&!g,H=s.useMemo(()=>{const v=V(m);return T?v:v.map((f,W)=>{const w=typeof f.key<"u"?f.key:W,L=W+1===v.length,B=x?c(j,{children:f},w):f;if(!g)return B;const A=s.cloneElement(l,{__css:b}),M=L?null:A;return R(s.Fragment,{children:[B,M]},w)})},[l,b,g,T,x,m]),I=h("chakra-stack",E);return c(d.div,{ref:e,display:"flex",alignItems:a,justifyContent:o,flexDirection:C.flexDirection,flexWrap:S,className:I,__css:g?{}:{[_]:C[_]},...p,children:H})});z.displayName="Stack";var G=y(function(e,n){const r=k("Heading",e),{className:a,...o}=N(e);return c(d.h2,{ref:n,className:h("chakra-heading",e.className),...o,__css:r})});G.displayName="Heading";var J=y(function(e,n){const{className:r,centerContent:a,...o}=N(e),i=k("Container",e);return c(d.div,{ref:n,className:h("chakra-container",r),...o,__css:{...i,...a&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});J.displayName="Container";export{J as C,G as H,z as S,F as T};
