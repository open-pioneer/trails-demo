import{r as i,a2 as D,j as d,n as W,h as E,l as I}from"./D2oXSZAF25Nh.js";function A(e){return i.Children.toArray(e).filter(t=>i.isValidElement(t))}function R(e,t){return Array.isArray(e)?e.map(r=>r===null?null:t(r)):D(e)?Object.keys(e).reduce((r,n)=>(r[n]=t(e[n]),r),{}):e!=null?t(e):null}const _=e=>d.jsx(W.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});_.displayName="StackItem";function M(e){const{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":R(r,a=>n[a])}}const O=E((e,t)=>{const{isInline:r,direction:n,align:a,justify:g,spacing:c="0.5rem",wrap:j,children:f,divider:l,className:p,shouldWrapChildren:m,...C}=e,u=r?"row":n??"column",x=i.useMemo(()=>M({spacing:c,direction:u}),[c,u]),s=!!l,y=!m&&!s,S=i.useMemo(()=>{const h=A(f);return y?h:h.map((o,v)=>{const k=typeof o.key<"u"?o.key:v,N=v+1===h.length,b=m?d.jsx(_,{children:o},k):o;if(!s)return b;const L=i.cloneElement(l,{__css:x}),B=N?null:L;return d.jsxs(i.Fragment,{children:[b,B]},k)})},[l,x,s,y,m,f]),w=I("chakra-stack",p);return d.jsx(W.div,{ref:t,display:"flex",alignItems:a,justifyContent:g,flexDirection:u,flexWrap:j,gap:s?void 0:c,className:w,...C,children:S})});O.displayName="Stack";export{O as S,A as g};
