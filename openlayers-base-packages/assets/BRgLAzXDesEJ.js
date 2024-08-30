import{z as k,h as q,o as $,p as w,q as H,j as y,f as _,r as u,J as T,s as c,Y as P,K as g}from"./DqeW8Azkkghv.js";var[A,E]=k({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[M,S]=k({strict:!1,name:"FormControlContext"});function z(n){const{id:o,isRequired:t,isInvalid:l,isDisabled:e,isReadOnly:s,...m}=n,f=u.useId(),r=o||`field-${f}`,b=`${r}-label`,v=`${r}-feedback`,F=`${r}-helptext`,[C,x]=u.useState(!1),[p,h]=u.useState(!1),[i,I]=u.useState(!1),O=u.useCallback((a={},d=null)=>({id:F,...a,ref:T(d,R=>{R&&h(!0)})}),[F]),j=u.useCallback((a={},d=null)=>({...a,ref:d,"data-focus":c(i),"data-disabled":c(e),"data-invalid":c(l),"data-readonly":c(s),id:a.id!==void 0?a.id:b,htmlFor:a.htmlFor!==void 0?a.htmlFor:r}),[r,e,i,l,s,b]),D=u.useCallback((a={},d=null)=>({id:v,...a,ref:T(d,R=>{R&&x(!0)}),"aria-live":"polite"}),[v]),N=u.useCallback((a={},d=null)=>({...a,...m,ref:d,role:"group","data-focus":c(i),"data-disabled":c(e),"data-invalid":c(l),"data-readonly":c(s)}),[m,e,i,l,s]),B=u.useCallback((a={},d=null)=>({...a,ref:d,role:"presentation","aria-hidden":!0,children:a.children||"*"}),[]);return{isRequired:!!t,isInvalid:!!l,isReadOnly:!!s,isDisabled:!!e,isFocused:!!i,onFocus:()=>I(!0),onBlur:()=>I(!1),hasFeedbackText:C,setHasFeedbackText:x,hasHelpText:p,setHasHelpText:h,id:r,labelId:b,feedbackId:v,helpTextId:F,htmlProps:m,getHelpTextProps:O,getErrorMessageProps:D,getRootProps:N,getLabelProps:j,getRequiredIndicatorProps:B}}var J=q(function(o,t){const l=$("Form",o),e=w(o),{getRootProps:s,htmlProps:m,...f}=z(e),r=H("chakra-form-control",o.className);return y.jsx(M,{value:f,children:y.jsx(A,{value:l,children:y.jsx(_.div,{...s({},t),className:r,__css:l.container})})})});J.displayName="FormControl";var K=q(function(o,t){const l=S(),e=E(),s=H("chakra-form__helper-text",o.className);return y.jsx(_.div,{...l?.getHelpTextProps(o,t),__css:e.helperText,className:s})});K.displayName="FormHelperText";function G(n){const{isDisabled:o,isInvalid:t,isReadOnly:l,isRequired:e,...s}=L(n);return{...s,disabled:o,readOnly:l,required:e,"aria-invalid":P(t),"aria-required":P(e),"aria-readonly":P(l)}}function L(n){var o,t,l;const e=S(),{id:s,disabled:m,readOnly:f,required:r,isRequired:b,isInvalid:v,isReadOnly:F,isDisabled:C,onFocus:x,onBlur:p,...h}=n,i=n["aria-describedby"]?[n["aria-describedby"]]:[];return e?.hasFeedbackText&&e?.isInvalid&&i.push(e.feedbackId),e?.hasHelpText&&i.push(e.helpTextId),{...h,"aria-describedby":i.join(" ")||void 0,id:s??e?.id,isDisabled:(o=m??C)!=null?o:e?.isDisabled,isReadOnly:(t=f??F)!=null?t:e?.isReadOnly,isRequired:(l=r??b)!=null?l:e?.isRequired,isInvalid:v??e?.isInvalid,onFocus:g(e?.onFocus,x),onBlur:g(e?.onBlur,p)}}export{J as F,S as a,E as b,L as c,G as u};
