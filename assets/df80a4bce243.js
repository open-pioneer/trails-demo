import{r as i,i as R,g as B,a as o,e as h,S as V,f as L,u as z,o as U,j as W,k as H,l as D,F as q,m as J}from"./311de3f9d3bd.js";function K(t){return i.Children.toArray(t).filter(e=>i.isValidElement(e))}var[re,Q]=R({strict:!1,name:"ButtonGroupContext"});function X(t){const[e,n]=i.useState(!t);return{ref:i.useCallback(s=>{s&&n(s.tagName==="BUTTON")},[]),type:e?"button":void 0}}function I(t){const{children:e,className:n,...r}=t,a=i.isValidElement(e)?i.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,s=B("chakra-button__icon",n);return o(h.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:s,children:a})}I.displayName="ButtonIcon";function w(t){const{label:e,placement:n,spacing:r="0.5rem",children:a=o(V,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:c,...y}=t,g=B("chakra-button__spinner",s),l=n==="start"?"marginEnd":"marginStart",d=i.useMemo(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[l]:e?r:0,fontSize:"1em",lineHeight:"normal",...c}),[c,e,l,r]);return o(h.div,{className:g,...y,__css:d,children:a})}w.displayName="ButtonSpinner";var Y=L((t,e)=>{const n=Q(),r=z("Button",{...n,...t}),{isDisabled:a=n?.isDisabled,isLoading:s,isActive:c,children:y,leftIcon:g,rightIcon:l,loadingText:d,iconSpacing:m="0.5rem",type:b,spinner:u,spinnerPlacement:_="start",className:v,as:p,...x}=U(t),N=i.useMemo(()=>{const k={...r?._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!n&&{_focus:k}}},[r,n]),{ref:C,type:S}=X(p),f={rightIcon:l,leftIcon:g,iconSpacing:m,children:y};return W(h.button,{ref:H(e,C),as:p,type:b??S,"data-active":D(c),"data-loading":D(s),__css:N,className:B("chakra-button",v),...x,disabled:a||s,children:[s&&_==="start"&&o(w,{className:"chakra-button__spinner--start",label:d,placement:"start",spacing:m,children:u}),s?d||o(h.span,{opacity:0,children:o(A,{...f})}):o(A,{...f}),s&&_==="end"&&o(w,{className:"chakra-button__spinner--end",label:d,placement:"end",spacing:m,children:u})]})});Y.displayName="Button";function A(t){const{leftIcon:e,rightIcon:n,children:r,iconSpacing:a}=t;return W(q,{children:[e&&o(I,{marginEnd:a,children:e}),r,n&&o(I,{marginStart:a,children:n})]})}function M(t,e){return Array.isArray(t)?t.map(n=>n===null?null:e(n)):J(t)?Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{}):t!=null?e(t):null}var P=t=>o(h.div,{className:"chakra-stack__item",...t,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...t.__css}});P.displayName="StackItem";var E="& > *:not(style) ~ *:not(style)";function Z(t){const{spacing:e,direction:n}=t,r={column:{marginTop:e,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:e},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:e,marginStart:0},"row-reverse":{marginTop:0,marginEnd:e,marginBottom:0,marginStart:0}};return{flexDirection:n,[E]:M(n,a=>r[a])}}function $(t){const{spacing:e,direction:n}=t,r={column:{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":M(n,a=>r[a])}}var ee=L((t,e)=>{const{isInline:n,direction:r,align:a,justify:s,spacing:c="0.5rem",wrap:y,children:g,divider:l,className:d,shouldWrapChildren:m,...b}=t,u=n?"row":r??"column",_=i.useMemo(()=>Z({direction:u,spacing:c}),[u,c]),v=i.useMemo(()=>$({spacing:c,direction:u}),[c,u]),p=!!l,x=!m&&!p,N=i.useMemo(()=>{const S=K(g);return x?S:S.map((f,k)=>{const T=typeof f.key<"u"?f.key:k,F=k+1===S.length,j=m?o(P,{children:f},T):f;if(!p)return j;const G=i.cloneElement(l,{__css:v}),O=F?null:G;return W(i.Fragment,{children:[j,O]},T)})},[l,v,p,x,m,g]),C=B("chakra-stack",d);return o(h.div,{ref:e,display:"flex",alignItems:a,justifyContent:s,flexDirection:_.flexDirection,flexWrap:y,className:C,__css:p?{}:{[E]:_[E]},...b,children:N})});ee.displayName="Stack";export{Y as B,ee as S,K as g};
