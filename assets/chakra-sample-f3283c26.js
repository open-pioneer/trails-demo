import{T as Tt,r as i,n as Fe,j as t,A as Et,p as ot,g as O,w as Ue,q as ze,e as C,f as S,u as Nt,o as ue,s as nt,t as Rt,v as Ft,x as Dt,y as Mt,z as Ot,B as At,C as It,D as Bt,M as Lt,h as we,G as Ht,H as zt,I as Te,J as re,K as w,L as Se,N as Kt,O as Vt,Q as Gt,R as rt,i as Xe,l as R,U as Ee,a as h,V as st,c as qt,W as at,X as jt,Y as $t,Z as Wt,_ as Ut,$ as Xt,F as de,a0 as Yt,a1 as Jt,a2 as Qt,a3 as Zt,a4 as eo,b as to}from"./ObservableBox-732c3e57.js";import{C as oo,H as it,T as no,S as lt}from"./chunk-SRMZVY4F-2e962f7c.js";import{u as ro,a as so,b as ao}from"./chunk-JSSKUSQH-96ebf11e.js";import{u as Ke,M as Ve,a as Ge,b as qe,c as je,d as ct}from"./chunk-YLPWWAYV-f2861657.js";import{B as M}from"./chunk-NAA7TEES-eeec8700.js";var Ye={exit:{duration:.15,ease:Tt.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},io={exit:({direction:e,transition:o,transitionEnd:n,delay:r})=>{var s;const{exit:a}=Fe({direction:e});return{...a,transition:(s=o?.exit)!=null?s:Ue.exit(Ye.exit,r),transitionEnd:n?.exit}},enter:({direction:e,transitionEnd:o,transition:n,delay:r})=>{var s;const{enter:a}=Fe({direction:e});return{...a,transition:(s=n?.enter)!=null?s:Ue.enter(Ye.enter,r),transitionEnd:o?.enter}}},ut=i.forwardRef(function(o,n){const{direction:r="right",style:s,unmountOnExit:a,in:l,className:p,transition:v,transitionEnd:c,delay:d,motionProps:f,..._}=o,k=Fe({direction:r}),T=Object.assign({position:"fixed"},k.position,s),F=a?l&&a:!0,u=l||a?"enter":"exit",P={transitionEnd:c,transition:v,direction:r,delay:d};return t(Et,{custom:P,children:F&&t(ot.div,{..._,ref:n,initial:"exit",className:O("chakra-slide",p),animate:u,exit:"exit",custom:P,variants:io,style:T,...f})})});ut.displayName="Slide";var Je=!1,pe=null,X=!1,De=!1,Me=new Set;function $e(e,o){Me.forEach(n=>n(e,o))}var lo=typeof window<"u"&&window.navigator!=null?/^Mac/.test(window.navigator.platform):!1;function co(e){return!(e.metaKey||!lo&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function Qe(e){X=!0,co(e)&&(pe="keyboard",$e("keyboard",e))}function oe(e){if(pe="pointer",e.type==="mousedown"||e.type==="pointerdown"){X=!0;const o=e.composedPath?e.composedPath()[0]:e.target;let n=!1;try{n=o.matches(":focus-visible")}catch{}if(n)return;$e("pointer",e)}}function uo(e){return e.mozInputSource===0&&e.isTrusted?!0:e.detail===0&&!e.pointerType}function po(e){uo(e)&&(X=!0,pe="virtual")}function ho(e){e.target===window||e.target===document||(!X&&!De&&(pe="virtual",$e("virtual",e)),X=!1,De=!1)}function fo(){X=!1,De=!0}function Ze(){return pe!=="pointer"}function vo(){if(typeof window>"u"||Je)return;const{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...n){X=!0,e.apply(this,n)},document.addEventListener("keydown",Qe,!0),document.addEventListener("keyup",Qe,!0),document.addEventListener("click",po,!0),window.addEventListener("focus",ho,!0),window.addEventListener("blur",fo,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",oe,!0),document.addEventListener("pointermove",oe,!0),document.addEventListener("pointerup",oe,!0)):(document.addEventListener("mousedown",oe,!0),document.addEventListener("mousemove",oe,!0),document.addEventListener("mouseup",oe,!0)),Je=!0}function mo(e){vo(),e(Ze());const o=()=>e(Ze());return Me.add(o),()=>{Me.delete(o)}}function yo(e){return"current"in e}var dt=()=>typeof window<"u";function go(){var e;const o=navigator.userAgentData;return(e=o?.platform)!=null?e:navigator.platform}var bo=e=>dt()&&e.test(navigator.vendor),Co=e=>dt()&&e.test(go()),Po=()=>Co(/mac|iphone|ipad|ipod/i),ko=()=>Po()&&bo(/apple/i);function wo(e){const{ref:o,elements:n,enabled:r}=e,s=()=>{var a,l;return(l=(a=o.current)==null?void 0:a.ownerDocument)!=null?l:document};ze(s,"pointerdown",a=>{if(!ko()||!r)return;const l=a.target,v=(n??[o]).some(c=>{const d=yo(c)?c.current:c;return d?.contains(l)||d===l});s().activeElement!==l&&v&&(a.preventDefault(),l.focus())})}var pt=e=>t(C.div,{className:"chakra-stack__divider",...e,__css:{...e.__css,borderWidth:0,alignSelf:"stretch",borderColor:"inherit",width:"auto",height:"auto"}});pt.displayName="StackDivider";var I=C("div");I.displayName="Box";var ht=S(function(o,n){const{size:r,centerContent:s=!0,...a}=o;return t(I,{ref:n,boxSize:r,__css:{...s?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...a})});ht.displayName="Square";var So=S(function(o,n){const{size:r,...s}=o;return t(ht,{size:r,ref:n,borderRadius:"9999px",...s})});So.displayName="Circle";var ft=S(function(o,n){const r=Nt("Link",o),{className:s,isExternal:a,...l}=ue(o);return t(C.a,{target:a?"_blank":void 0,rel:a?"noopener":void 0,ref:n,className:O("chakra-link",s),...l,__css:r})});ft.displayName="Link";function _o(e){const o=e.current;if(!o)return!1;const n=Dt(o);return!n||o.contains(n)?!1:!!Mt(n)}function xo(e,o){const{shouldFocus:n,visible:r,focusRef:s}=o,a=n&&!r;nt(()=>{if(!a||_o(e))return;const l=s?.current||e.current;l&&requestAnimationFrame(()=>{l.focus()})},[a,e,s])}var To={preventScroll:!0,shouldFocus:!1};function Eo(e,o=To){const{focusRef:n,preventScroll:r,shouldFocus:s,visible:a}=o,l=No(e)?e.current:e,p=s&&a,v=i.useRef(p),c=i.useRef(a);Rt(()=>{!c.current&&a&&(v.current=p),c.current=a},[a,p]);const d=i.useCallback(()=>{if(!(!a||!l||!v.current)&&(v.current=!1,!l.contains(document.activeElement)))if(n?.current)requestAnimationFrame(()=>{var f;(f=n.current)==null||f.focus({preventScroll:r})});else{const f=Ft(l);f.length>0&&requestAnimationFrame(()=>{f[0].focus({preventScroll:r})})}},[a,r,l,n]);nt(()=>{d()},[d]),ze(l,"transitionend",d)}function No(e){return"current"in e}function Ro(e){const{isOpen:o,ref:n}=e,[r,s]=i.useState(o),[a,l]=i.useState(!1);return i.useEffect(()=>{a||(s(o),l(!0))},[o,a,r]),ze(()=>n.current,"animationend",()=>{s(o)}),{present:!(o?!1:!r),onComplete(){var v;const c=Ot(n.current),d=new c.CustomEvent("animationend",{bubbles:!0});(v=n.current)==null||v.dispatchEvent(d)}}}function Fo(e){const{wasSelected:o,enabled:n,isSelected:r,mode:s="unmount"}=e;return!!(!n||r||s==="keepMounted"&&o)}var Do=C(ut),vt=S((e,o)=>{const{className:n,children:r,motionProps:s,containerProps:a,...l}=e,{getDialogProps:p,getDialogContainerProps:v,isOpen:c}=At(),d=p(l,o),f=v(a),_=O("chakra-modal__content",n),k=It(),T={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...k.dialog},F={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...k.dialogContainer},{placement:u}=Bt();return t(Lt,{children:t(C.div,{...f,className:"chakra-modal__content-container",__css:F,children:t(Do,{motionProps:s,direction:u,in:c,className:_,...d,__css:T,children:r})})})});vt.displayName="DrawerContent";var[Mo,Y]=we({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[Oo,se]=we({name:"PopoverStylesContext",errorMessage:`usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `}),Oe=S(function(o,n){const{getHeaderProps:r}=Y(),s=se();return t(C.header,{...r(o,n),className:O("chakra-popover__header",o.className),__css:s.header})});Oe.displayName="PopoverHeader";function Ae(e){const o=i.Children.only(e.children),{getTriggerProps:n}=Y();return i.cloneElement(o,n(o.props,o.ref))}Ae.displayName="PopoverTrigger";var ne={click:"click",hover:"hover"};function Ao(e={}){const{closeOnBlur:o=!0,closeOnEsc:n=!0,initialFocusRef:r,id:s,returnFocusOnClose:a=!0,autoFocus:l=!0,arrowSize:p,arrowShadowColor:v,trigger:c=ne.click,openDelay:d=200,closeDelay:f=200,isLazy:_,lazyBehavior:k="unmount",computePositionOnMount:T,...F}=e,{isOpen:u,onClose:P,onOpen:D,onToggle:H}=Ht(e),A=i.useRef(null),m=i.useRef(null),g=i.useRef(null),E=i.useRef(!1),x=i.useRef(!1);u&&(x.current=!0);const[W,ie]=i.useState(!1),[z,J]=i.useState(!1),U=i.useId(),Q=s??U,[Z,B,ee,te]=["popover-trigger","popover-content","popover-header","popover-body"].map(b=>`${b}-${Q}`),{referenceRef:j,getArrowProps:K,getPopperProps:le,getArrowInnerProps:he,forceUpdate:fe}=zt({...F,enabled:u||!!T}),ve=Ro({isOpen:u,ref:g});wo({enabled:u,ref:m}),xo(g,{focusRef:m,visible:u,shouldFocus:a&&c===ne.click}),Eo(g,{focusRef:r,visible:u,shouldFocus:l&&c===ne.click});const ce=Fo({wasSelected:x.current,enabled:_,mode:k,isSelected:ve.present}),me=i.useCallback((b={},L=null)=>{const N={...b,style:{...b.style,transformOrigin:Te.transformOrigin.varRef,[Te.arrowSize.var]:p?`${p}px`:void 0,[Te.arrowShadowColor.var]:v},ref:re(g,L),children:ce?b.children:null,id:B,tabIndex:-1,role:"dialog",onKeyDown:w(b.onKeyDown,G=>{n&&G.key==="Escape"&&P()}),onBlur:w(b.onBlur,G=>{const be=et(G),xe=Ne(g.current,be),xt=Ne(m.current,be);u&&o&&(!xe&&!xt)&&P()}),"aria-labelledby":W?ee:void 0,"aria-describedby":z?te:void 0};return c===ne.hover&&(N.role="tooltip",N.onMouseEnter=w(b.onMouseEnter,()=>{E.current=!0}),N.onMouseLeave=w(b.onMouseLeave,G=>{G.nativeEvent.relatedTarget!==null&&(E.current=!1,setTimeout(()=>P(),f))})),N},[ce,B,W,ee,z,te,c,n,P,u,o,f,v,p]),_e=i.useCallback((b={},L=null)=>le({...b,style:{visibility:u?"visible":"hidden",...b.style}},L),[u,le]),We=i.useCallback((b,L=null)=>({...b,ref:re(L,A,j)}),[A,j]),$=i.useRef(),ye=i.useRef(),y=i.useCallback(b=>{A.current==null&&j(b)},[j]),V=i.useCallback((b={},L=null)=>{const N={...b,ref:re(m,L,y),id:Z,"aria-haspopup":"dialog","aria-expanded":u,"aria-controls":B};return c===ne.click&&(N.onClick=w(b.onClick,H)),c===ne.hover&&(N.onFocus=w(b.onFocus,()=>{$.current===void 0&&D()}),N.onBlur=w(b.onBlur,G=>{const be=et(G),xe=!Ne(g.current,be);u&&o&&xe&&P()}),N.onKeyDown=w(b.onKeyDown,G=>{G.key==="Escape"&&P()}),N.onMouseEnter=w(b.onMouseEnter,()=>{E.current=!0,$.current=window.setTimeout(()=>D(),d)}),N.onMouseLeave=w(b.onMouseLeave,()=>{E.current=!1,$.current&&(clearTimeout($.current),$.current=void 0),ye.current=window.setTimeout(()=>{E.current===!1&&P()},f)})),N},[Z,u,B,c,y,H,D,o,P,d,f]);i.useEffect(()=>()=>{$.current&&clearTimeout($.current),ye.current&&clearTimeout(ye.current)},[]);const ge=i.useCallback((b={},L=null)=>({...b,id:ee,ref:re(L,N=>{ie(!!N)})}),[ee]),_t=i.useCallback((b={},L=null)=>({...b,id:te,ref:re(L,N=>{J(!!N)})}),[te]);return{forceUpdate:fe,isOpen:u,onAnimationComplete:ve.onComplete,onClose:P,getAnchorProps:We,getArrowProps:K,getArrowInnerProps:he,getPopoverPositionerProps:_e,getPopoverProps:me,getTriggerProps:V,getHeaderProps:ge,getBodyProps:_t}}function Ne(e,o){return e===o||e?.contains(o)}function et(e){var o;const n=e.currentTarget.ownerDocument.activeElement;return(o=e.relatedTarget)!=null?o:n}function Ie(e){const o=Se("Popover",e),{children:n,...r}=ue(e),s=Kt(),a=Ao({...r,direction:s.direction});return t(Mo,{value:a,children:t(Oo,{value:o,children:Vt(n,{isOpen:a.isOpen,onClose:a.onClose,forceUpdate:a.forceUpdate})})})}Ie.displayName="Popover";function Be(e){var o;const{bg:n,bgColor:r,backgroundColor:s,shadow:a,boxShadow:l}=e,{getArrowProps:p,getArrowInnerProps:v}=Y(),c=se(),d=(o=n??r)!=null?o:s,f=a??l;return t(C.div,{...p(),className:"chakra-popover__arrow-positioner",children:t(C.div,{className:O("chakra-popover__arrow",e.className),...v(e),__css:{"--popper-arrow-bg":d?`colors.${d}, ${d}`:void 0,"--popper-arrow-shadow":f?`shadows.${f}, ${f}`:void 0,...c.arrow}})})}Be.displayName="PopoverArrow";var Pe=S(function(o,n){const{getBodyProps:r}=Y(),s=se();return t(C.div,{...r(o,n),className:O("chakra-popover__body",o.className),__css:s.body})});Pe.displayName="PopoverBody";var Le=S(function(o,n){const{onClose:r}=Y(),s=se();return t(Gt,{size:"sm",onClick:r,className:O("chakra-popover__close-btn",o.className),__css:s.closeButton,ref:n,...o})});Le.displayName="PopoverCloseButton";function Io(e){if(e)return{enter:{...e.enter,visibility:"visible"},exit:{...e.exit,transitionEnd:{visibility:"hidden"}}}}var Bo={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},Lo=C(ot.section),mt=S(function(o,n){const{variants:r=Bo,...s}=o,{isOpen:a}=Y();return t(Lo,{ref:n,variants:Io(r),initial:!1,animate:a?"enter":"exit",...s})});mt.displayName="PopoverTransition";var He=S(function(o,n){const{rootProps:r,motionProps:s,...a}=o,{getPopoverProps:l,getPopoverPositionerProps:p,onAnimationComplete:v}=Y(),c=se(),d={position:"relative",display:"flex",flexDirection:"column",...c.content};return t(C.div,{...p(r),__css:c.popper,className:"chakra-popover__popper",children:t(mt,{...s,...l(a,n),onAnimationComplete:rt(v,a.onAnimationComplete),className:O("chakra-popover__content",o.className),__css:d})})});He.displayName="PopoverContent";function yt(e){const o=se();return t(C.footer,{...e,className:O("chakra-popover__footer",e.className),__css:o.footer})}yt.displayName="PopoverFooter";function Ho(e){return e&&Xe(e)&&Xe(e.target)}function zo(e={}){const{onChange:o,value:n,defaultValue:r,name:s,isDisabled:a,isFocusable:l,isNative:p,...v}=e,[c,d]=i.useState(r||""),f=typeof n<"u",_=f?n:c,k=i.useRef(null),T=i.useCallback(()=>{const m=k.current;if(!m)return;let g="input:not(:disabled):checked";const E=m.querySelector(g);if(E){E.focus();return}g="input:not(:disabled)";const x=m.querySelector(g);x?.focus()},[]),u=`radio-${i.useId()}`,P=s||u,D=i.useCallback(m=>{const g=Ho(m)?m.target.value:m;f||d(g),o?.(String(g))},[o,f]),H=i.useCallback((m={},g=null)=>({...m,ref:re(g,k),role:"radiogroup"}),[]),A=i.useCallback((m={},g=null)=>({...m,ref:g,name:P,[p?"checked":"isChecked"]:_!=null?m.value===_:void 0,onChange(x){D(x)},"data-radiogroup":!0}),[p,P,D,_]);return{getRootProps:H,getRadioProps:A,name:P,ref:k,focus:T,setValue:d,value:_,onChange:D,isDisabled:a,isFocusable:l,htmlProps:v}}var[Ko,gt]=we({name:"RadioGroupContext",strict:!1}),bt=S((e,o)=>{const{colorScheme:n,size:r,variant:s,children:a,className:l,isDisabled:p,isFocusable:v,...c}=e,{value:d,onChange:f,getRootProps:_,name:k,htmlProps:T}=zo(c),F=i.useMemo(()=>({name:k,size:r,onChange:f,colorScheme:n,value:d,variant:s,isDisabled:p,isFocusable:v}),[k,r,f,n,d,s,p,v]);return t(Ko,{value:F,children:t(C.div,{..._(T,o),className:O("chakra-radio-group",l),children:a})})});bt.displayName="RadioGroup";var Vo={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function Go(e={}){const{defaultChecked:o,isChecked:n,isFocusable:r,isDisabled:s,isReadOnly:a,isRequired:l,onChange:p,isInvalid:v,name:c,value:d,id:f,"data-radiogroup":_,"aria-describedby":k,...T}=e,F=`radio-${i.useId()}`,u=ro(),D=!!gt()||!!_;let A=!!u&&!D?u.id:F;A=f??A;const m=s??u?.isDisabled,g=a??u?.isReadOnly,E=l??u?.isRequired,x=v??u?.isInvalid,[W,ie]=i.useState(!1),[z,J]=i.useState(!1),[U,Q]=i.useState(!1),[Z,B]=i.useState(!1),[ee,te]=i.useState(Boolean(o)),j=typeof n<"u",K=j?n:ee;i.useEffect(()=>mo(ie),[]);const le=i.useCallback(y=>{if(g||m){y.preventDefault();return}j||te(y.target.checked),p?.(y)},[j,m,g,p]),he=i.useCallback(y=>{y.key===" "&&B(!0)},[B]),fe=i.useCallback(y=>{y.key===" "&&B(!1)},[B]),ve=i.useCallback((y={},V=null)=>({...y,ref:V,"data-active":R(Z),"data-hover":R(U),"data-disabled":R(m),"data-invalid":R(x),"data-checked":R(K),"data-focus":R(z),"data-focus-visible":R(z&&W),"data-readonly":R(g),"aria-hidden":!0,onMouseDown:w(y.onMouseDown,()=>B(!0)),onMouseUp:w(y.onMouseUp,()=>B(!1)),onMouseEnter:w(y.onMouseEnter,()=>Q(!0)),onMouseLeave:w(y.onMouseLeave,()=>Q(!1))}),[Z,U,m,x,K,z,g,W]),{onFocus:ce,onBlur:me}=u??{},_e=i.useCallback((y={},V=null)=>{const ge=m&&!r;return{...y,id:A,ref:V,type:"radio",name:c,value:d,onChange:w(y.onChange,le),onBlur:w(me,y.onBlur,()=>J(!1)),onFocus:w(ce,y.onFocus,()=>J(!0)),onKeyDown:w(y.onKeyDown,he),onKeyUp:w(y.onKeyUp,fe),checked:K,disabled:ge,readOnly:g,required:E,"aria-invalid":Ee(x),"aria-disabled":Ee(ge),"aria-required":Ee(E),"data-readonly":R(g),"aria-describedby":k,style:Vo}},[m,r,A,c,d,le,me,ce,he,fe,K,g,E,x,k]);return{state:{isInvalid:x,isFocused:z,isChecked:K,isActive:Z,isHovered:U,isDisabled:m,isReadOnly:g,isRequired:E},getCheckboxProps:ve,getInputProps:_e,getLabelProps:(y={},V=null)=>({...y,ref:V,onMouseDown:w(y.onMouseDown,tt),onTouchStart:w(y.onTouchStart,tt),"data-disabled":R(m),"data-checked":R(K),"data-invalid":R(x)}),getRootProps:(y,V=null)=>({...y,ref:V,"data-disabled":R(m),"data-checked":R(K),"data-invalid":R(x)}),htmlProps:T}}function tt(e){e.preventDefault(),e.stopPropagation()}function qo(e,o){const n={},r={};for(const[s,a]of Object.entries(e))o.includes(s)?n[s]=a:r[s]=a;return[n,r]}var ke=S((e,o)=>{var n;const r=gt(),{onChange:s,value:a}=e,l=Se("Radio",{...r,...e}),p=ue(e),{spacing:v="0.5rem",children:c,isDisabled:d=r?.isDisabled,isFocusable:f=r?.isFocusable,inputProps:_,...k}=p;let T=e.isChecked;r?.value!=null&&a!=null&&(T=r.value===a);let F=s;r?.onChange&&a!=null&&(F=rt(r.onChange,s));const u=(n=e?.name)!=null?n:r?.name,{getInputProps:P,getCheckboxProps:D,getLabelProps:H,getRootProps:A,htmlProps:m}=Go({...k,isChecked:T,isFocusable:f,isDisabled:d,onChange:F,name:u}),[g,E]=qo(m,st),x=D(E),W=P(_,o),ie=H(),z=Object.assign({},g,A()),J={display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative",...l.container},U={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,...l.control},Q={userSelect:"none",marginStart:v,...l.label};return h(C.label,{className:"chakra-radio",...z,__css:J,children:[t("input",{className:"chakra-radio__input",...W}),t(C.span,{className:"chakra-radio__control",...x,__css:U}),c&&t(C.span,{className:"chakra-radio__label",...ie,__css:Q,children:c})]})});ke.displayName="Radio";var Ct=S(function(o,n){const{children:r,placeholder:s,className:a,...l}=o;return h(C.select,{...l,ref:n,className:O("chakra-select",a),children:[s&&t("option",{value:"",children:s}),r]})});Ct.displayName="SelectField";function jo(e,o){const n={},r={};for(const[s,a]of Object.entries(e))o.includes(s)?n[s]=a:r[s]=a;return[n,r]}var Pt=S((e,o)=>{var n;const r=Se("Select",e),{rootProps:s,placeholder:a,icon:l,color:p,height:v,h:c,minH:d,minHeight:f,iconColor:_,iconSize:k,...T}=ue(e),[F,u]=jo(T,st),P=so(u),D={width:"100%",height:"fit-content",position:"relative",color:p},H={paddingEnd:"2rem",...r.field,_focus:{zIndex:"unset",...(n=r.field)==null?void 0:n._focus}};return h(C.div,{className:"chakra-select__wrapper",__css:D,...F,...s,children:[t(Ct,{ref:o,height:c??v,minH:d??f,placeholder:a,...P,__css:H,children:e.children}),t(kt,{"data-disabled":R(P.disabled),...(_||p)&&{color:_||p},__css:r.icon,...k&&{fontSize:k},children:l})]})});Pt.displayName="Select";var $o=e=>t("svg",{viewBox:"0 0 24 24",...e,children:t("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),Wo=C("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),kt=e=>{const{children:o=t($o,{}),...n}=e,r=i.cloneElement(o,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return t(Wo,{...n,className:"chakra-select__icon-wrapper",children:i.isValidElement(o)?r:null})};kt.displayName="SelectIcon";var[Uo,ae]=we({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),wt=S((e,o)=>{const n=Se("Table",e),{className:r,layout:s,...a}=ue(e);return t(Uo,{value:n,children:t(C.table,{ref:o,__css:{tableLayout:s,...n.table},className:O("chakra-table",r),...a})})});wt.displayName="Table";var Xo=S((e,o)=>{const n=ae();return t(C.thead,{...e,ref:o,__css:n.thead})}),Ce=S((e,o)=>{const n=ae();return t(C.tr,{...e,ref:o,__css:n.tr})}),St=S((e,o)=>{const{placement:n="bottom",...r}=e,s=ae();return t(C.caption,{...r,ref:o,__css:{...s.caption,captionSide:n}})});St.displayName="TableCaption";var Yo=S((e,o)=>{var n;const{overflow:r,overflowX:s,className:a,...l}=e;return t(C.div,{ref:o,className:O("chakra-table__container",a),...l,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:(n=r??s)!=null?n:"auto",overflowY:"hidden",maxWidth:"100%"}})}),Jo=S((e,o)=>{const n=ae();return t(C.tbody,{...e,ref:o,__css:n.tbody})}),q=S(({isNumeric:e,...o},n)=>{const r=ae();return t(C.td,{...o,ref:n,__css:r.td,"data-is-numeric":e})}),Re=S(({isNumeric:e,...o},n)=>{const r=ae();return t(C.th,{...o,ref:n,__css:r.th,"data-is-numeric":e})});const Qo={"chakra-app":{name:"chakra-app",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}}},Zo="",en=[];function tn(e){throw new Error(`Unsupported locale: '${e}'`)}const on=qt(Zo),nn=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:tn,locales:en,packages:Qo,styles:on},Symbol.toStringTag,{value:"Module"}));function rn(){return t(Yo,{sx:{border:"solid"},children:h(wt,{variant:"striped",colorScheme:"teal",children:[t(St,{children:"This is the table cation"}),t(Xo,{children:h(Ce,{children:[t(Re,{children:"First"}),t(Re,{children:"Test"}),t(Re,{isNumeric:!0,children:"Third (numeric)"})]})}),h(Jo,{children:[h(Ce,{children:[t(q,{children:"one"}),t(q,{children:"bla"}),t(q,{isNumeric:!0,children:"22,3"})]}),h(Ce,{children:[t(q,{children:"two"}),t(q,{children:"blub"}),t(q,{isNumeric:!0,children:"23.4"})]}),h(Ce,{children:[t(q,{children:"three"}),t(q,{children:"blob"}),t(q,{isNumeric:!0,children:"12"})]})]})]})})}function sn(){return t("div",{style:{overflow:"auto",height:"100%",width:"100%"},children:h(oo,{children:[t(it,{mb:5,children:"chakra technical demo"}),t(an,{}),t(ln,{}),t(rn,{}),t(gn,{})]})})}function an(){return h(no,{children:["This is a"," ",t(ft,{href:"https://chakra-ui.com",isExternal:!0,color:"yellow.500",children:"link to Chakra's Design system"})]})}function ln(){return h(lt,{mb:5,mt:5,divider:t(pt,{borderColor:"gray.200"}),spacing:"24px",align:"stretch",children:[t(I,{children:t(cn,{})}),t(I,{children:t(un,{})}),t(I,{children:t(dn,{})}),t(I,{children:t(pn,{})}),t(I,{children:t(hn,{})}),t(I,{children:t(fn,{})}),t(I,{children:t(vn,{})}),t(I,{children:t(mn,{})}),t(I,{bg:"yellow.100",children:t(yn,{})})]})}function cn(){return h(I,{bg:"yellow.100",children:[t(it,{size:"sm",children:"Portal Example: "}),"This is box and displayed here. Scroll/Look down to see the portal that is added at the end of document.body. The Portal is part of this Box.",t(at,{children:"This is the portal content!"})]})}function un(){return t(jt,{hasArrow:!0,label:"Button Tooltip","aria-label":"A tooltip",placement:"top",children:t(M,{colorScheme:"teal",children:"Button with a tooltip"})})}function dn(){const e=ao();return t(M,{colorScheme:"teal",onClick:()=>e({title:"Account created.",description:"We've created your account for you.",status:"success",duration:9e3,position:"bottom-left",isClosable:!0}),children:"Show Toast"})}function pn(){return h($t,{status:"error",children:[t(Wt,{}),t(Ut,{children:"Test Alert!"}),t(Xt,{children:"This is a test alert (error)"})]})}function hn(){const{isOpen:e,onOpen:o,onClose:n}=Ke(),r=i.useRef(null);return h(de,{children:[t(M,{onClick:o,colorScheme:"teal",children:"Open Alert"}),t(Yt,{isOpen:e,leastDestructiveRef:r,onClose:n,children:t(Ve,{children:h(Jt,{className:"class-from-app",children:[t(Ge,{fontSize:"lg",fontWeight:"bold",children:"Alert Title"}),t(qe,{children:"This is the text in the alert dialog body."}),h(je,{children:[t(M,{ref:r,onClick:n,children:"Cancel"}),t(M,{colorScheme:"green",onClick:n,ml:3,children:"Okay"})]})]})})})]})}function fn(){const{isOpen:e,onOpen:o,onClose:n}=Ke();return h(de,{children:[t(M,{onClick:o,colorScheme:"teal",children:"Show Modal"}),h(Qt,{closeOnOverlayClick:!1,isOpen:e,onClose:n,children:[t(Ve,{}),h(Zt,{children:[t(Ge,{children:"This is a modal"}),t(ct,{}),t(qe,{pb:6,children:"This is a modal text!"}),h(je,{children:[t(M,{colorScheme:"green",mr:2,children:"Got it"}),t(M,{onClick:n,children:"Cancel"})]})]})]})]})}function vn(){const{isOpen:e,onOpen:o,onClose:n}=Ke(),r=i.useRef(null);return h(de,{children:[t(M,{ref:r,colorScheme:"teal",onClick:o,children:"Open Drawer"}),h(eo,{isOpen:e,placement:"left",onClose:n,finalFocusRef:r,isFullHeight:!1,children:[t(Ve,{}),h(vt,{children:[t(ct,{}),t(Ge,{children:"This is the drawer header"}),t(qe,{children:"This is the body."}),h(je,{children:[t(M,{variant:"outline",mr:3,onClick:n,children:"Cancel"}),t(M,{colorScheme:"green",children:"Got it"})]})]})]})]})}function mn(){return h(de,{children:[h(Ie,{children:[t(Ae,{children:t(M,{colorScheme:"teal",children:"Show Popover"})}),h(He,{children:[t(Be,{}),t(Le,{}),t(Oe,{children:"Popover!"}),t(Pe,{children:"This is a very important Popover"})]})]}),h(Ie,{children:[t(Ae,{children:t(M,{ml:5,colorScheme:"teal",children:"Show Popover rendered in an portal"})}),t(at,{children:h(He,{children:[t(Be,{}),t(Oe,{children:"Header"}),t(Le,{}),t(Pe,{children:t(Pe,{children:"This is a very important Popover"})}),t(yt,{children:"This is the footer"})]})})]})]})}function yn(){const[e,o]=i.useState("2");return h(de,{children:[t(bt,{onChange:o,value:e,children:h(lt,{spacing:4,direction:"row",children:[t(ke,{size:"sm",value:"1",isDisabled:!0,children:"Radio 1 (Disabled)"}),t(ke,{size:"md",value:"2",children:"Radio 2"}),t(ke,{size:"lg",value:"3",children:"Radio 3"})]})}),t("p",{children:"Checked radio: "+e})]})}function gn(){return h(Pt,{m:5,placeholder:"Select an item",children:[t("option",{value:"item1",children:"Item 1"}),t("option",{value:"item2",children:"Item 2"}),t("option",{value:"item3",children:"Item 3"})]})}const bn=to({component:sn,appMetadata:nn});customElements.define("chakra-app",bn);
