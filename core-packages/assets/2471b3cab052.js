import{j as w,e as j,f as W,r,m as pe,t as ne,h as he,d as ve,i as c,l as k,k as T,b as me,o as ye,v as be,w as ge}from"./6da62dcb4a0b.js";import{a as ke}from"./fb0a8a921891.js";var ae=!1,q=null,F=!1,U=!1,$=new Set;function J(e,s){$.forEach(o=>o(e,s))}var Ce=typeof window<"u"&&window.navigator!=null?/^Mac/.test(window.navigator.platform):!1;function Pe(e){return!(e.metaKey||!Ce&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function se(e){F=!0,Pe(e)&&(q="keyboard",J("keyboard",e))}function N(e){if(q="pointer",e.type==="mousedown"||e.type==="pointerdown"){F=!0;const s=e.composedPath?e.composedPath()[0]:e.target;let o=!1;try{o=s.matches(":focus-visible")}catch{}if(o)return;J("pointer",e)}}function we(e){return e.mozInputSource===0&&e.isTrusted?!0:e.detail===0&&!e.pointerType}function xe(e){we(e)&&(F=!0,q="virtual")}function Re(e){e.target===window||e.target===document||(!F&&!U&&(q="virtual",J("virtual",e)),F=!1,U=!1)}function Se(){F=!1,U=!0}function ie(){return q!=="pointer"}function Ee(){if(typeof window>"u"||ae)return;const{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...o){F=!0,e.apply(this,o)},document.addEventListener("keydown",se,!0),document.addEventListener("keyup",se,!0),document.addEventListener("click",xe,!0),window.addEventListener("focus",Re,!0),window.addEventListener("blur",Se,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",N,!0),document.addEventListener("pointermove",N,!0),document.addEventListener("pointerup",N,!0)):(document.addEventListener("mousedown",N,!0),document.addEventListener("mousemove",N,!0),document.addEventListener("mouseup",N,!0)),ae=!0}function De(e){Ee(),e(ie());const s=()=>e(ie());return $.add(s),()=>{$.delete(s)}}var _e=e=>w.jsx(j.div,{className:"chakra-stack__divider",...e,__css:{...e.__css,borderWidth:0,alignSelf:"stretch",borderColor:"inherit",width:"auto",height:"auto"}});_e.displayName="StackDivider";var re=j("div");re.displayName="Box";var le=W(function(s,o){const{size:t,centerContent:l=!0,...d}=s,p=l?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return w.jsx(re,{ref:o,boxSize:t,__css:{...p,flexShrink:0,flexGrow:0},...d})});le.displayName="Square";var Fe=W(function(s,o){const{size:t,...l}=s;return w.jsx(le,{size:t,ref:o,borderRadius:"9999px",...l})});Fe.displayName="Circle";function Le(e){return e&&ne(e)&&ne(e.target)}function Ie(e={}){const{onChange:s,value:o,defaultValue:t,name:l,isDisabled:d,isFocusable:p,isNative:h,...C}=e,[P,y]=r.useState(t||""),v=typeof o<"u",b=v?o:P,m=r.useRef(null),x=r.useCallback(()=>{const a=m.current;if(!a)return;let i="input:not(:disabled):checked";const g=a.querySelector(i);if(g){g.focus();return}i="input:not(:disabled)";const f=a.querySelector(i);f?.focus()},[]),u=`radio-${r.useId()}`,L=l||u,E=r.useCallback(a=>{const i=Le(a)?a.target.value:a;v||y(i),s?.(String(i))},[s,v]),B=r.useCallback((a={},i=null)=>({...a,ref:pe(i,m),role:"radiogroup"}),[]),R=r.useCallback((a={},i=null)=>({...a,ref:i,name:L,[h?"checked":"isChecked"]:b!=null?a.value===b:void 0,onChange(f){E(f)},"data-radiogroup":!0}),[h,L,E,b]);return{getRootProps:B,getRadioProps:R,name:L,ref:m,focus:x,setValue:y,value:b,onChange:E,isDisabled:d,isFocusable:p,htmlProps:C}}var[Me,ue]=he({name:"RadioGroupContext",strict:!1}),Ne=W((e,s)=>{const{colorScheme:o,size:t,variant:l,children:d,className:p,isDisabled:h,isFocusable:C,...P}=e,{value:y,onChange:v,getRootProps:b,name:m,htmlProps:x}=Ie(P),S=r.useMemo(()=>({name:m,size:t,onChange:v,colorScheme:o,value:y,variant:l,isDisabled:h,isFocusable:C}),[m,t,v,o,y,l,h,C]);return w.jsx(Me,{value:S,children:w.jsx(j.div,{...b(x,s),className:ve("chakra-radio-group",p),children:d})})});Ne.displayName="RadioGroup";var je={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function Ke(e={}){const{defaultChecked:s,isChecked:o,isFocusable:t,isDisabled:l,isReadOnly:d,isRequired:p,onChange:h,isInvalid:C,name:P,value:y,id:v,"data-radiogroup":b,"aria-describedby":m,...x}=e,S=`radio-${r.useId()}`,u=ke(),E=!!ue()||!!b;let R=!!u&&!E?u.id:S;R=v??R;const a=l??u?.isDisabled,i=d??u?.isReadOnly,g=p??u?.isRequired,f=C??u?.isInvalid,[G,H]=r.useState(!1),[I,A]=r.useState(!1),[K,V]=r.useState(!1),[O,M]=r.useState(!1),[de,ce]=r.useState(!!s),z=typeof o<"u",D=z?o:de;r.useEffect(()=>De(H),[]);const Q=r.useCallback(n=>{if(i||a){n.preventDefault();return}z||ce(n.target.checked),h?.(n)},[z,a,i,h]),X=r.useCallback(n=>{n.key===" "&&M(!0)},[M]),Y=r.useCallback(n=>{n.key===" "&&M(!1)},[M]),Z=r.useCallback((n={},_=null)=>({...n,ref:_,"data-active":c(O),"data-hover":c(K),"data-disabled":c(a),"data-invalid":c(f),"data-checked":c(D),"data-focus":c(I),"data-focus-visible":c(I&&G),"data-readonly":c(i),"aria-hidden":!0,onMouseDown:k(n.onMouseDown,()=>M(!0)),onMouseUp:k(n.onMouseUp,()=>M(!1)),onMouseEnter:k(n.onMouseEnter,()=>V(!0)),onMouseLeave:k(n.onMouseLeave,()=>V(!1))}),[O,K,a,f,D,I,i,G]),{onFocus:ee,onBlur:te}=u??{},fe=r.useCallback((n={},_=null)=>{const oe=a&&!t;return{...n,id:R,ref:_,type:"radio",name:P,value:y,onChange:k(n.onChange,Q),onBlur:k(te,n.onBlur,()=>A(!1)),onFocus:k(ee,n.onFocus,()=>A(!0)),onKeyDown:k(n.onKeyDown,X),onKeyUp:k(n.onKeyUp,Y),checked:D,disabled:oe,readOnly:i,required:g,"aria-invalid":T(f),"aria-disabled":T(oe),"aria-required":T(g),"data-readonly":c(i),"aria-describedby":m,style:je}},[a,t,R,P,y,Q,te,ee,X,Y,D,i,g,f,m]);return{state:{isInvalid:f,isFocused:I,isChecked:D,isActive:O,isHovered:K,isDisabled:a,isReadOnly:i,isRequired:g},getCheckboxProps:Z,getRadioProps:Z,getInputProps:fe,getLabelProps:(n={},_=null)=>({...n,ref:_,onMouseDown:k(n.onMouseDown,qe),"data-disabled":c(a),"data-checked":c(D),"data-invalid":c(f)}),getRootProps:(n,_=null)=>({...n,ref:_,"data-disabled":c(a),"data-checked":c(D),"data-invalid":c(f)}),htmlProps:x}}function qe(e){e.preventDefault(),e.stopPropagation()}function Be(e,s){const o={},t={};for(const[l,d]of Object.entries(e))s.includes(l)?o[l]=d:t[l]=d;return[o,t]}var Ge=W((e,s)=>{var o;const t=ue(),{onChange:l,value:d}=e,p=me("Radio",{...t,...e}),h=ye(e),{spacing:C="0.5rem",children:P,isDisabled:y=t?.isDisabled,isFocusable:v=t?.isFocusable,inputProps:b,...m}=h;let x=e.isChecked;t?.value!=null&&d!=null&&(x=t.value===d);let S=l;t?.onChange&&d!=null&&(S=be(t.onChange,l));const u=(o=e?.name)!=null?o:t?.name,{getInputProps:L,getCheckboxProps:E,getLabelProps:B,getRootProps:R,htmlProps:a}=Ke({...m,isChecked:x,isFocusable:v,isDisabled:y,onChange:S,name:u}),[i,g]=Be(a,ge),f=E(g),G=L(b,s),H=B(),I=Object.assign({},i,R()),A={display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative",...p.container},K={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,...p.control},V={userSelect:"none",marginStart:C,...p.label};return w.jsxs(j.label,{className:"chakra-radio",...I,__css:A,children:[w.jsx("input",{className:"chakra-radio__input",...G}),w.jsx(j.span,{className:"chakra-radio__control",...f,__css:K}),P&&w.jsx(j.span,{className:"chakra-radio__label",...H,__css:V,children:P})]})});Ge.displayName="Radio";export{re as B,Ne as R,_e as S,Ge as a};
