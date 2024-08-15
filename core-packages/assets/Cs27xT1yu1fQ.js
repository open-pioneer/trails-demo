import{y as fe,r as o,j as u,p as C,a0 as V,i as z,h as he,a5 as n,x as h,E as te,a7 as W,q as ae,F as me,G as ne,J as ke,d as se,a3 as be}from"./CKEsCCHjohS6.js";import{u as ve,b as ye}from"./mWYqasziI8Fi.js";import{t as Ce}from"./DdrsuNi1stXe.js";var[qe,xe]=fe({name:"CheckboxGroupContext",strict:!1});function pe(s){const[i,t]=o.useState(s),[a,l]=o.useState(!1);return s!==i&&(l(!0),t(s)),a}function ge(s){return u.jsx(C.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...s,children:u.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function Ie(s){return u.jsx(C.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...s,children:u.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function Se(s){const{isIndeterminate:i,isChecked:t,...a}=s,l=i?Ie:ge;return t||i?u.jsx(C.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:u.jsx(l,{...a})}):null}var Pe={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function De(s,i=[]){const t=Object.assign({},s);for(const a of i)a in t&&delete t[a];return t}function we(s={}){const i=ve(s),{isDisabled:t,isReadOnly:a,isRequired:l,isInvalid:r,id:b,onBlur:g,onFocus:O,"aria-describedby":I}=i,{defaultChecked:S,isChecked:P,isFocusable:U,onChange:q,isIndeterminate:f,name:D,value:R,tabIndex:B=void 0,"aria-label":w,"aria-labelledby":_,"aria-invalid":v,...T}=s,j=De(T,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),A=V(q),M=V(g),E=V(O),[x,G]=o.useState(!1),[y,N]=o.useState(!1),[F,X]=o.useState(!1),[L,p]=o.useState(!1);o.useEffect(()=>Ce(G),[]);const m=o.useRef(null),[J,oe]=o.useState(!0),[re,H]=o.useState(!!S),$=P!==void 0,c=$?P:re,Q=o.useCallback(e=>{if(a||t){e.preventDefault();return}$||H(c?e.target.checked:f?!0:e.target.checked),A?.(e)},[a,t,c,$,f,A]);z(()=>{m.current&&(m.current.indeterminate=!!f)},[f]),he(()=>{t&&N(!1)},[t,N]),z(()=>{const e=m.current;if(!e?.form)return;const d=()=>{H(!!S)};return e.form.addEventListener("reset",d),()=>{var k;return(k=e.form)==null?void 0:k.removeEventListener("reset",d)}},[]);const Y=t&&!U,Z=o.useCallback(e=>{e.key===" "&&p(!0)},[p]),ee=o.useCallback(e=>{e.key===" "&&p(!1)},[p]);z(()=>{if(!m.current)return;m.current.checked!==c&&H(m.current.checked)},[m.current]);const ie=o.useCallback((e={},d=null)=>{const k=K=>{y&&K.preventDefault(),p(!0)};return{...e,ref:d,"data-active":n(L),"data-hover":n(F),"data-checked":n(c),"data-focus":n(y),"data-focus-visible":n(y&&x),"data-indeterminate":n(f),"data-disabled":n(t),"data-invalid":n(r),"data-readonly":n(a),"aria-hidden":!0,onMouseDown:h(e.onMouseDown,k),onMouseUp:h(e.onMouseUp,()=>p(!1)),onMouseEnter:h(e.onMouseEnter,()=>X(!0)),onMouseLeave:h(e.onMouseLeave,()=>X(!1))}},[L,c,t,y,x,F,f,r,a]),ce=o.useCallback((e={},d=null)=>({...e,ref:d,"data-active":n(L),"data-hover":n(F),"data-checked":n(c),"data-focus":n(y),"data-focus-visible":n(y&&x),"data-indeterminate":n(f),"data-disabled":n(t),"data-invalid":n(r),"data-readonly":n(a)}),[L,c,t,y,x,F,f,r,a]),le=o.useCallback((e={},d=null)=>({...j,...e,ref:te(d,k=>{k&&oe(k.tagName==="LABEL")}),onClick:h(e.onClick,()=>{var k;J||((k=m.current)==null||k.click(),requestAnimationFrame(()=>{var K;(K=m.current)==null||K.focus({preventScroll:!0})}))}),"data-disabled":n(t),"data-checked":n(c),"data-invalid":n(r)}),[j,t,c,r,J]),de=o.useCallback((e={},d=null)=>({...e,ref:te(m,d),type:"checkbox",name:D,value:R,id:b,tabIndex:B,onChange:h(e.onChange,Q),onBlur:h(e.onBlur,M,()=>N(!1)),onFocus:h(e.onFocus,E,()=>N(!0)),onKeyDown:h(e.onKeyDown,Z),onKeyUp:h(e.onKeyUp,ee),required:l,checked:c,disabled:Y,readOnly:a,"aria-label":w,"aria-labelledby":_,"aria-invalid":v?!!v:r,"aria-describedby":I,"aria-disabled":t,style:Pe}),[D,R,b,Q,M,E,Z,ee,l,c,Y,a,w,_,v,r,I,t,B]),ue=o.useCallback((e={},d=null)=>({...e,ref:d,onMouseDown:h(e.onMouseDown,_e),"data-disabled":n(t),"data-checked":n(c),"data-invalid":n(r)}),[c,t,r]);return{state:{isInvalid:r,isFocused:y,isChecked:c,isActive:L,isHovered:F,isIndeterminate:f,isDisabled:t,isReadOnly:a,isRequired:l},getRootProps:le,getCheckboxProps:ie,getIndicatorProps:ce,getInputProps:de,getLabelProps:ue,htmlProps:j}}function _e(s){s.preventDefault(),s.stopPropagation()}var je={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},Ae={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},Ee=W({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),Fe=W({from:{opacity:0},to:{opacity:1}}),Le=W({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),Re=ae(function(i,t){const a=xe(),l={...a,...i},r=me("Checkbox",l),b=ne(i),{spacing:g="0.5rem",className:O,children:I,iconColor:S,iconSize:P,icon:U=u.jsx(Se,{}),isChecked:q,isDisabled:f=a?.isDisabled,onChange:D,inputProps:R,...B}=b;let w=q;a?.value&&b.value&&(w=a.value.includes(b.value));let _=D;a?.onChange&&b.value&&(_=ke(a.onChange,D));const{state:v,getInputProps:T,getCheckboxProps:j,getLabelProps:A,getRootProps:M}=we({...B,isDisabled:f,isChecked:w,onChange:_}),E=pe(v.isChecked),x=o.useMemo(()=>({animation:E?v.isIndeterminate?`${Fe} 20ms linear, ${Le} 200ms linear`:`${Ee} 200ms linear`:void 0,fontSize:P,color:S,...r.icon}),[S,P,E,v.isIndeterminate,r.icon]),G=o.cloneElement(U,{__css:x,isIndeterminate:v.isIndeterminate,isChecked:v.isChecked});return u.jsxs(C.label,{__css:{...Ae,...r.container},className:se("chakra-checkbox",O),...M(),children:[u.jsx("input",{className:"chakra-checkbox__input",...T(R,t)}),u.jsx(C.span,{__css:{...je,...r.control},className:"chakra-checkbox__control",...j(),children:G}),I&&u.jsx(C.span,{className:"chakra-checkbox__label",...A(),__css:{marginStart:g,...r.label},children:I})]})});Re.displayName="Checkbox";function Be(s,i=[]){const t=Object.assign({},s);for(const a of i)a in t&&delete t[a];return t}var Me=["h","minH","height","minHeight"],Ne=ae((s,i)=>{const t=be("Textarea",s),{className:a,rows:l,...r}=ne(s),b=ye(r),g=l?Be(t,Me):t;return u.jsx(C.textarea,{ref:i,rows:l,...b,className:se("chakra-textarea",a),__css:g})});Ne.displayName="Textarea";export{Re as C,Ne as T,we as u};
