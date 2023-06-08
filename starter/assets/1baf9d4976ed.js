import{h as P,r as o,d as x,j as t,e as p,S as w,f as A,n as G,o as M,p as R,i as j}from"./9793881094f5.js";var[L,z]=P({strict:!1,name:"ButtonGroupContext"});function D(r){const[e,n]=o.useState(!r);return{ref:o.useCallback(a=>{a&&n(a.tagName==="BUTTON")},[]),type:e?"button":void 0}}function h(r){const{children:e,className:n,...s}=r,i=o.isValidElement(e)?o.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,a=x("chakra-button__icon",n);return t.jsx(p.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...s,className:a,children:i})}h.displayName="ButtonIcon";function g(r){const{label:e,placement:n,spacing:s="0.5rem",children:i=t.jsx(w,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:l,...d}=r,m=x("chakra-button__spinner",a),u=n==="start"?"marginEnd":"marginStart",c=o.useMemo(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[u]:e?s:0,fontSize:"1em",lineHeight:"normal",...l}),[l,e,u,s]);return t.jsx(p.div,{className:m,...d,__css:c,children:i})}g.displayName="ButtonSpinner";var F=A((r,e)=>{const n=z(),s=G("Button",{...n,...r}),{isDisabled:i=n?.isDisabled,isLoading:a,isActive:l,children:d,leftIcon:m,rightIcon:u,loadingText:c,iconSpacing:f="0.5rem",type:_,spinner:b,spinnerPlacement:y="start",className:v,as:S,...k}=M(r),I=o.useMemo(()=>{const T={...s?._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...s,...!!n&&{_focus:T}}},[s,n]),{ref:C,type:E}=D(S),B={rightIcon:u,leftIcon:m,iconSpacing:f,children:d};return t.jsxs(p.button,{ref:R(e,C),as:S,type:_??E,"data-active":j(l),"data-loading":j(a),__css:I,className:x("chakra-button",v),...k,disabled:i||a,children:[a&&y==="start"&&t.jsx(g,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:f,children:b}),a?c||t.jsx(p.span,{opacity:0,children:t.jsx(N,{...B})}):t.jsx(N,{...B}),a&&y==="end"&&t.jsx(g,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:f,children:b})]})});F.displayName="Button";function N(r){const{leftIcon:e,rightIcon:n,children:s,iconSpacing:i}=r;return t.jsxs(t.Fragment,{children:[e&&t.jsx(h,{marginEnd:i,children:e}),s,n&&t.jsx(h,{marginStart:i,children:n})]})}export{F as B};
