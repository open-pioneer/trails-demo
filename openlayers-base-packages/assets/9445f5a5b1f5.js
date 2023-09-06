import{r as u,f as m,N as C,o as N,Z as L,j as i,b as c,c as f,$ as B,h as E,O as M,a0 as O}from"./91e4906893bb.js";function z(s){return u.Children.toArray(s).filter(e=>u.isValidElement(e))}var V=m(function(e,n){var t;const r=C("FormLabel",e),a=N(e),{className:o,children:h,requiredIndicator:d=i.jsx(q,{}),optionalIndicator:y=null,...x}=a,l=L(),g=(t=l?.getLabelProps(x,n))!=null?t:{ref:n,...x};return i.jsxs(c.label,{...g,className:f("chakra-form__label",a.className),__css:{display:"block",textAlign:"start",...r},children:[h,l?.isRequired?d:y]})});V.displayName="FormLabel";var q=m(function(e,n){const t=L(),r=B();if(!t?.isRequired)return null;const a=f("chakra-form__required-indicator",e.className);return i.jsx(c.span,{...t?.getRequiredIndicatorProps(e,n),__css:r.requiredIndicator,className:a})});q.displayName="RequiredIndicator";var w=m(function(e,n){const{htmlSize:t,...r}=e,a=E("Input",r),o=N(r),h=M(o),d=f("chakra-input",e.className);return i.jsx(c.input,{size:t,...h,__css:a.field,ref:n,className:d})});w.displayName="Input";w.id="Input";function T(s,e){return Array.isArray(s)?s.map(n=>n===null?null:e(n)):O(s)?Object.keys(s).reduce((n,t)=>(n[t]=e(s[t]),n),{}):s!=null?e(s):null}var F=s=>i.jsx(c.div,{className:"chakra-stack__item",...s,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...s.__css}});F.displayName="StackItem";function U(s){const{spacing:e,direction:n}=s,t={column:{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":T(n,r=>t[r])}}var Z=m((s,e)=>{const{isInline:n,direction:t,align:r,justify:a,spacing:o="0.5rem",wrap:h,children:d,divider:y,className:x,shouldWrapChildren:l,...g}=s,p=n?"row":t??"column",k=u.useMemo(()=>U({spacing:o,direction:p}),[o,p]),v=!!y,I=!l&&!v,R=u.useMemo(()=>{const b=z(d);return I?b:b.map((_,j)=>{const S=typeof _.key<"u"?_.key:j,H=j+1===b.length,W=l?i.jsx(F,{children:_},S):_;if(!v)return W;const P=u.cloneElement(y,{__css:k}),A=H?null:P;return i.jsxs(u.Fragment,{children:[W,A]},S)})},[y,k,v,I,l,d]),D=f("chakra-stack",x);return i.jsx(c.div,{ref:e,display:"flex",alignItems:r,justifyContent:a,flexDirection:p,flexWrap:h,gap:v?void 0:o,className:D,...g,children:R})});Z.displayName="Stack";var $=m(function(e,n){const t=C("Heading",e),{className:r,...a}=N(e);return i.jsx(c.h2,{ref:n,className:f("chakra-heading",e.className),...a,__css:t})});$.displayName="Heading";var G=m(function(e,n){const{className:t,centerContent:r,...a}=N(e),o=C("Container",e);return i.jsx(c.div,{ref:n,className:f("chakra-container",t),...a,__css:{...o,...r&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});G.displayName="Container";export{G as C,V as F,$ as H,w as I,Z as S,z as g};
