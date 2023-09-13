var C=(e,n,t)=>{if(!n.has(e))throw TypeError("Cannot "+t)};var r=(e,n,t)=>(C(e,n,"read from private field"),t?t.call(e):n.get(e)),f=(e,n,t)=>{if(n.has(e))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(e):n.set(e,t)},u=(e,n,t,i)=>(C(e,n,"write to private field"),i?i.call(e,t):n.set(e,t),t);var T=(e,n,t)=>(C(e,n,"access private method"),t);import{g as Z,f as y,h as ee,o as te,c as M,p as ne,r as d,j as s,b as $,T as se,q as G,s as R,t as ie,v as re,w as B,x as q,B as P,y as ae,z as oe,D as ue,E as ce,k as le,G as D,n as de}from"./559aa200cabb.js";import{E as H,F as he}from"./aeff6946d221.js";import{C as V,H as K,I as O}from"./3880c78d1ba4.js";import{g as pe,S as me}from"./886fe85b01f2.js";var[ge,fe]=Z({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),Y=y(function(n,t){const i=ee("Input",n),{children:o,className:c,...k}=te(n),j=M("chakra-input__group",c),a={},b=pe(o),g=i.field;b.forEach(l=>{var p,I;i&&(g&&l.type.id==="InputLeftElement"&&(a.paddingStart=(p=g.height)!=null?p:g.h),g&&l.type.id==="InputRightElement"&&(a.paddingEnd=(I=g.height)!=null?I:g.h),l.type.id==="InputRightAddon"&&(a.borderEndRadius=0),l.type.id==="InputLeftAddon"&&(a.borderStartRadius=0))});const _=b.map(l=>{var p,I;const z=ne({size:((p=l.props)==null?void 0:p.size)||n.size,variant:((I=l.props)==null?void 0:I.variant)||n.variant});return l.type.id!=="Input"?d.cloneElement(l,z):d.cloneElement(l,Object.assign(z,a,l.props))});return s.jsx($.div,{className:j,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...i.group},"data-group":!0,...k,children:s.jsx(ge,{value:i,children:_})})});Y.displayName="InputGroup";var ve=$("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),L=y(function(n,t){var i,o;const{placement:c="left",...k}=n,j=fe(),a=j.field,g={[c==="left"?"insetStart":"insetEnd"]:"0",width:(i=a?.height)!=null?i:a?.h,height:(o=a?.height)!=null?o:a?.h,fontSize:a?.fontSize,...j.element};return s.jsx(ve,{ref:t,__css:g,...k})});L.id="InputElement";L.displayName="InputElement";var J=y(function(n,t){const{className:i,...o}=n,c=M("chakra-input__left-element",i);return s.jsx(L,{ref:t,placement:"left",className:c,...o})});J.id="InputLeftElement";J.displayName="InputLeftElement";var F=y(function(n,t){const{className:i,...o}=n,c=M("chakra-input__right-element",i);return s.jsx(L,{ref:t,placement:"right",className:c,...o})});F.id="InputRightElement";F.displayName="InputRightElement";var Q=y((e,n)=>s.jsx(me,{align:"center",...e,direction:"column",ref:n}));Q.displayName="VStack";function Se({doLogin:e,wasLoggedIn:n}){const[t,i]=d.useState(""),[o,c]=d.useState(""),[k,j]=d.useState(!1),[a,b]=d.useState(),[g,_]=d.useState(n),l=p=>{p.preventDefault();const I=e(t,o);b(I||""),_(!1)};return s.jsx(V,{p:5,children:s.jsxs(Q,{as:"form",onSubmit:l,spacing:4,children:[s.jsx(K,{as:"h1",textAlign:"center",children:"Login"}),s.jsxs(se,{textAlign:"center",children:["Please enter your user name and password to authenticate.",s.jsx("br",{}),"Note: credentials are ",'"admin"'," / ",'"admin"']}),a&&s.jsxs(G,{status:"error",children:[s.jsx(R,{}),s.jsx(ie,{children:a})]}),g&&s.jsxs(G,{status:"info",mb:5,children:[s.jsx(R,{}),s.jsxs(re,{children:["Logout successful.",s.jsx("br",{}),"You can use the form below to log in again."]})]}),s.jsxs(B,{children:[s.jsx(q,{children:"User name"}),s.jsx(O,{placeholder:"User name",value:t,onChange:p=>i(p.target.value),autoComplete:"username"})]}),s.jsxs(B,{children:[s.jsx(q,{children:"Password"}),s.jsxs(Y,{children:[s.jsx(O,{pr:"4.5rem",type:k?"text":"password",placeholder:"Enter password",value:o,onChange:p=>c(p.target.value),autoComplete:"current-password"}),s.jsx(F,{width:"4.5rem",children:s.jsx(P,{h:"1.75rem",size:"sm",onClick:()=>j(!k),children:k?"Hide":"Show"})})]})]}),s.jsx(P,{type:"submit",children:"Login"})]})})}var v,x,E;class xe extends H{constructor(){super();f(this,v,{kind:"pending"});f(this,x,void 0);f(this,E,!1);u(this,x,setTimeout(()=>{u(this,v,{kind:"not-authenticated"}),this.emit("changed")},500))}destroy(){clearTimeout(r(this,x)),u(this,x,void 0)}getAuthState(){return r(this,v)}getLoginBehavior(){const t=(o,c)=>{if(o==="admin"&&c==="admin")u(this,v,{kind:"authenticated",sessionInfo:{userId:"admin",userName:"Arnold Administrator"}}),u(this,E,!0),this.emit("changed");else return"Invalid user name or password!"};return{kind:"fallback",Fallback:()=>d.createElement(Se,{doLogin:t,wasLoggedIn:r(this,E)})}}logout(){(r(this,v).kind==="authenticated"||r(this,v).kind==="pending")&&(u(this,v,{kind:"not-authenticated"}),clearTimeout(r(this,x)),u(this,x,void 0),this.emit("changed"))}}v=new WeakMap,x=new WeakMap,E=new WeakMap;const N=ce("authentication:AuthService");var S,h,m,A,w,W;class ke extends H{constructor(t){super();f(this,w);f(this,S,void 0);f(this,h,void 0);f(this,m,void 0);f(this,A,void 0);u(this,S,t.references.plugin),u(this,h,r(this,S).getAuthState()),u(this,A,r(this,S).on?.("changed",()=>T(this,w,W).call(this))),N.debug(`Constructed with initial auth state '${r(this,h).kind}'`,r(this,h))}destroy(){r(this,m)?.reject(ae()),u(this,m,void 0),u(this,A,oe(r(this,A)))}getAuthState(){return r(this,h)}getSessionInfo(){return r(this,h).kind!=="pending"?Promise.resolve(U(r(this,h))):(r(this,m)||u(this,m,ue()),r(this,m).promise)}getLoginBehavior(){return r(this,S).getLoginBehavior()}logout(){N.debug("Triggering logout"),r(this,S).logout()}}S=new WeakMap,h=new WeakMap,m=new WeakMap,A=new WeakMap,w=new WeakSet,W=function(){const t=r(this,S).getAuthState();u(this,h,t),t.kind!=="pending"&&r(this,m)&&(r(this,m).resolve(U(t)),u(this,m,void 0)),N.debug(`Auth state changed to '${r(this,h).kind}'`,r(this,h)),this.emit("changed")};function U(e){return e.kind==="authenticated"?e.sessionInfo:void 0}const Ie={"auth-app":{name:"auth-app",services:{TestAuthPlugin:{name:"TestAuthPlugin",clazz:xe,provides:[{name:"authentication.AuthPlugin",qualifier:void 0}],references:{}}},ui:{references:[{name:"authentication.AuthService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/authentication":{name:"@open-pioneer/authentication",services:{AuthServiceImpl:{name:"AuthServiceImpl",clazz:ke,provides:[{name:"authentication.AuthService",qualifier:void 0}],references:{plugin:{name:"authentication.AuthPlugin",qualifier:void 0,all:!1}}}},ui:{references:[{name:"authentication.AuthService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/test-utils":{name:"@open-pioneer/test-utils",services:{},ui:{references:[]},properties:{}}},je="",Ae=[];function be(e){throw new Error(`Unsupported locale: '${e}'`)}const Ee=le(je),ye=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:be,locales:Ae,packages:Ie,styles:Ee},Symbol.toStringTag,{value:"Module"})),we="@open-pioneer/authentication",Le=D.bind(void 0,we);function X(e){const n=d.useCallback(o=>{const c=e.on("changed",o);return()=>c.destroy()},[e]),t=d.useCallback(()=>e.getAuthState(),[e]);return d.useSyncExternalStore(n,t)}const _e=e=>{const n=Le("authentication.AuthService"),t=X(n),i=d.useMemo(()=>{if(t.kind==="not-authenticated")return n.getLoginBehavior()},[n,t.kind]);switch(d.useEffect(()=>{t.kind==="not-authenticated"&&i?.kind==="effect"&&i.login()},[i,t.kind]),t.kind){case"pending":return null;case"not-authenticated":{if(!i||i.kind!=="fallback")return null;const o=i.Fallback;return e.renderFallback?s.jsx(s.Fragment,{children:e.renderFallback(o)}):s.jsx(o,{...e.fallbackProps})}case"authenticated":return s.jsx(s.Fragment,{children:e.children})}},Ce="auth-app",Ne=D.bind(void 0,Ce);function Pe(){const e=Ne("authentication.AuthService"),n=X(e),t=()=>{e.logout()};return n.kind==="not-authenticated"||n.kind==="pending"?null:s.jsx(P,{colorScheme:"red",onClick:t,children:"Log out"})}function Me(){return s.jsx(_e,{children:s.jsxs(V,{p:5,children:[s.jsx(K,{as:"h1",children:"Authenticated"}),"This is the actual content of the app. Authentication was successful.",s.jsx(he,{pt:5,flexDirection:"row",justifyContent:"center",children:s.jsx(Pe,{})})]})})}const Fe=de({component:Me,appMetadata:ye});customElements.define("auth-app",Fe);
