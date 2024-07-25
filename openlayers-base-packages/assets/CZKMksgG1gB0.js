import{r as m,y as A,h as a,o as B,p as N,j as i,f,I as M,Q as R,O as q,q as C}from"./CfsOZItWJxSO.js";function z(t){const e=Object.assign({},t);for(let s in e)e[s]===void 0&&delete e[s];return e}function I(t){return m.Children.toArray(t).filter(e=>m.isValidElement(e))}var[F,T]=A({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),L=a(function(e,s){const n=B("List",e),{children:r,styleType:c="none",stylePosition:l,spacing:u,...d}=N(e),o=I(r),y=u?{["& > *:not(style) ~ *:not(style)"]:{mt:u}}:{};return i.jsx(F,{value:n,children:i.jsx(f.ul,{ref:s,listStyleType:c,listStylePosition:l,role:"list",__css:{...n.container,...y},...d,children:o})})});L.displayName="List";var Q=a((t,e)=>{const{as:s,...n}=t;return i.jsx(L,{ref:e,as:"ol",styleType:"decimal",marginStart:"1em",...n})});Q.displayName="OrderedList";var G=a(function(e,s){const{as:n,...r}=e;return i.jsx(L,{ref:s,as:"ul",styleType:"initial",marginStart:"1em",...r})});G.displayName="UnorderedList";var H=a(function(e,s){const n=T();return i.jsx(f.li,{ref:s,...e,__css:n.item})});H.displayName="ListItem";var J=a(function(e,s){const n=T();return i.jsx(M,{ref:s,role:"presentation",...e,__css:n.icon})});J.displayName="ListIcon";var K=Object.freeze(["base","sm","md","lg","xl","2xl"]);function X(t,e){return Array.isArray(t)?t.map(s=>s===null?null:e(s)):R(t)?Object.keys(t).reduce((s,n)=>(s[n]=e(t[n]),s),{}):t!=null?e(t):null}function se(t,e=K){const s={};return t.forEach((n,r)=>{const c=e[r];n!=null&&(s[c]=n)}),s}var Y=a(function(e,s){const n=q("Text",e),{className:r,align:c,decoration:l,casing:u,...d}=N(e),o=z({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return i.jsx(f.p,{ref:s,className:C("chakra-text",e.className),...o,...d,__css:n})});Y.displayName="Text";var W=t=>i.jsx(f.div,{className:"chakra-stack__item",...t,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...t.__css}});W.displayName="StackItem";function Z(t){const{spacing:e,direction:s}=t,n={column:{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":X(s,r=>n[r])}}var w=a((t,e)=>{const{isInline:s,direction:n,align:r,justify:c,spacing:l="0.5rem",wrap:u,children:d,divider:o,className:S,shouldWrapChildren:y,...O}=t,v=s?"row":n??"column",j=m.useMemo(()=>Z({spacing:l,direction:v}),[l,v]),x=!!o,p=!y&&!x,P=m.useMemo(()=>{const g=I(d);return p?g:g.map((h,k)=>{const _=typeof h.key<"u"?h.key:k,E=k+1===g.length,b=y?i.jsx(W,{children:h},_):h;if(!x)return b;const U=m.cloneElement(o,{__css:j}),V=E?null:U;return i.jsxs(m.Fragment,{children:[b,V]},_)})},[o,j,x,p,y,d]),D=C("chakra-stack",S);return i.jsx(f.div,{ref:e,display:"flex",alignItems:r,justifyContent:c,flexDirection:v,flexWrap:u,gap:x?void 0:l,className:D,...O,children:P})});w.displayName="Stack";var $=a((t,e)=>i.jsx(w,{align:"center",...t,direction:"column",ref:e}));$.displayName="VStack";export{L,w as S,Y as T,G as U,$ as V,H as a,K as b,se as c};
