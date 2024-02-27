var E=(e,s,t)=>{if(!s.has(e))throw TypeError("Cannot "+t)};var i=(e,s,t)=>(E(e,s,"read from private field"),t?t.call(e):s.get(e)),p=(e,s,t)=>{if(s.has(e))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(e):s.set(e,t)},o=(e,s,t,r)=>(E(e,s,"write to private field"),r?r.call(e,t):s.set(e,t),t);var F=(e,s,t)=>(E(e,s,"access private method"),t);import{p as Y,q as L,j as n,d as R,r as d,P as _,Q as N,R as J,S as W,ac as X,ad as Z,ae as ee,c as te,a as ne,b as se}from"./f6bce9997efc.js";import{E as q}from"./960f2965a833.js";import{u as ie,I as re,F as ae}from"./a98298bb138a.js";import{I as M}from"./443a3944a6a7.js";import{C as U,H as G}from"./29fb1f323e6e.js";import{V as oe}from"./423259cadff8.js";import{T as ce}from"./4ebae876f574.js";import{F as T}from"./a6d9340f2712.js";import{F as z}from"./24631eb4775c.js";import{B as y}from"./2e7753f73b7f.js";import{u as O}from"./25a5152ddbe5.js";import"./ed8cece5af8e.js";var ue=Y("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),b=L(function(s,t){var r,a;const{placement:l="left",...x}=s,A=ie(),c=A.field,I={[l==="left"?"insetStart":"insetEnd"]:"0",width:(r=c?.height)!=null?r:c?.h,height:(a=c?.height)!=null?a:c?.h,fontSize:c?.fontSize,...A.element};return n.jsx(ue,{ref:t,__css:I,...x})});b.id="InputElement";b.displayName="InputElement";var $=L(function(s,t){const{className:r,...a}=s,l=R("chakra-input__left-element",r);return n.jsx(b,{ref:t,placement:"left",className:l,...a})});$.id="InputLeftElement";$.displayName="InputLeftElement";var C=L(function(s,t){const{className:r,...a}=s,l=R("chakra-input__right-element",r);return n.jsx(b,{ref:t,placement:"right",className:l,...a})});C.id="InputRightElement";C.displayName="InputRightElement";function le({doLogin:e,wasLoggedIn:s}){const[t,r]=d.useState(""),[a,l]=d.useState(""),[x,A]=d.useState(!1),[c,P]=d.useState(),[I,K]=d.useState(s),V=S=>{S.preventDefault();const Q=e(t,a);P(Q||""),K(!1)};return n.jsx(U,{p:5,children:n.jsxs(oe,{as:"form",onSubmit:V,spacing:4,children:[n.jsx(G,{as:"h1",textAlign:"center",children:"Login"}),n.jsxs(ce,{textAlign:"center",children:["Please enter your user name and password to authenticate.",n.jsx("br",{}),"Note: credentials are ",'"admin"'," / ",'"admin"']}),c&&n.jsxs(_,{status:"error",children:[n.jsx(N,{}),n.jsx(J,{children:c})]}),I&&n.jsxs(_,{status:"info",mb:5,children:[n.jsx(N,{}),n.jsxs(W,{children:["Logout successful.",n.jsx("br",{}),"You can use the form below to log in again."]})]}),n.jsxs(T,{children:[n.jsx(z,{children:"User name"}),n.jsx(M,{placeholder:"User name",value:t,onChange:S=>r(S.target.value),autoComplete:"username"})]}),n.jsxs(T,{children:[n.jsx(z,{children:"Password"}),n.jsxs(re,{children:[n.jsx(M,{pr:"4.5rem",type:x?"text":"password",placeholder:"Enter password",value:a,onChange:S=>l(S.target.value),autoComplete:"current-password"}),n.jsx(C,{width:"4.5rem",children:n.jsx(y,{h:"1.75rem",size:"sm",onClick:()=>A(!x),children:x?"Hide":"Show"})})]})]}),n.jsx(y,{type:"submit",children:"Login"})]})})}var m,f,k;class he extends q{constructor(){super();p(this,m,{kind:"pending"});p(this,f,void 0);p(this,k,!1);o(this,f,setTimeout(()=>{o(this,m,{kind:"not-authenticated"}),this.emit("changed")},500))}destroy(){clearTimeout(i(this,f)),o(this,f,void 0)}getAuthState(){return i(this,m)}getLoginBehavior(){const t=(a,l)=>{if(a==="admin"&&l==="admin")o(this,m,{kind:"authenticated",sessionInfo:{userId:"admin",userName:"Arnold Administrator"}}),o(this,k,!0),this.emit("changed");else return"Invalid user name or password!"};return{kind:"fallback",Fallback:()=>d.createElement(le,{doLogin:t,wasLoggedIn:i(this,k)})}}logout(){(i(this,m).kind==="authenticated"||i(this,m).kind==="pending")&&(o(this,m,{kind:"not-authenticated"}),clearTimeout(i(this,f)),o(this,f,void 0),this.emit("changed"))}}m=new WeakMap,f=new WeakMap,k=new WeakMap;const w=te("authentication:AuthService");var g,u,h,v,j,H;class de extends q{constructor(t){super();p(this,j);p(this,g,void 0);p(this,u,void 0);p(this,h,void 0);p(this,v,void 0);o(this,g,t.references.plugin),o(this,u,i(this,g).getAuthState()),o(this,v,i(this,g).on?.("changed",()=>F(this,j,H).call(this))),w.debug(`Constructed with initial auth state '${i(this,u).kind}'`,i(this,u))}destroy(){i(this,h)?.reject(X()),o(this,h,void 0),o(this,v,Z(i(this,v)))}getAuthState(){return i(this,u)}getSessionInfo(){return i(this,u).kind!=="pending"?Promise.resolve(B(i(this,u))):(i(this,h)||o(this,h,ee()),i(this,h).promise)}getLoginBehavior(){return i(this,g).getLoginBehavior()}logout(){w.debug("Triggering logout"),i(this,g).logout()}}g=new WeakMap,u=new WeakMap,h=new WeakMap,v=new WeakMap,j=new WeakSet,H=function(){const t=i(this,g).getAuthState();o(this,u,t),t.kind!=="pending"&&i(this,h)&&(i(this,h).resolve(B(t)),o(this,h,void 0)),w.debug(`Auth state changed to '${i(this,u).kind}'`,i(this,u)),this.emit("changed")};function B(e){return e.kind==="authenticated"?e.sessionInfo:void 0}const pe={"auth-app":{name:"auth-app",services:{TestAuthPlugin:{name:"TestAuthPlugin",clazz:he,provides:[{name:"authentication.AuthPlugin",qualifier:void 0}],references:{}}},ui:{references:[{name:"authentication.AuthService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/authentication":{name:"@open-pioneer/authentication",services:{AuthServiceImpl:{name:"AuthServiceImpl",clazz:de,provides:[{name:"authentication.AuthService",qualifier:void 0}],references:{plugin:{name:"authentication.AuthPlugin",qualifier:void 0,all:!1}}}},ui:{references:[{name:"authentication.AuthService",qualifier:void 0,all:!1}]},properties:{}}},me="",ge=[];function fe(e){throw new Error(`Unsupported locale: '${e}'`)}const ve=ne(me),xe=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:fe,locales:ge,packages:pe,styles:ve},Symbol.toStringTag,{value:"Module"})),Se="@open-pioneer/authentication",ke=O.bind(void 0,Se);function D(e){const s=d.useCallback(a=>{const l=e.on("changed",a);return()=>l.destroy()},[e]),t=d.useCallback(()=>e.getAuthState(),[e]);return d.useSyncExternalStore(s,t)}const Ae=e=>{const s=ke("authentication.AuthService"),t=D(s),r=d.useMemo(()=>{if(t.kind==="not-authenticated")return s.getLoginBehavior()},[s,t.kind]);switch(d.useEffect(()=>{t.kind==="not-authenticated"&&r?.kind==="effect"&&r.login()},[r,t.kind]),t.kind){case"pending":return null;case"not-authenticated":{if(!r||r.kind!=="fallback")return null;const a=r.Fallback;return e.renderFallback?n.jsx(n.Fragment,{children:e.renderFallback(a)}):n.jsx(a,{...e.fallbackProps})}case"authenticated":return n.jsx(n.Fragment,{children:e.children})}},je="auth-app",be=O.bind(void 0,je);function Ie(){const e=be("authentication.AuthService"),s=D(e),t=()=>{e.logout()};return s.kind==="not-authenticated"||s.kind==="pending"?null:n.jsx(y,{colorScheme:"red",onClick:t,children:"Log out"})}function Ee(){return n.jsx(Ae,{children:n.jsxs(U,{p:5,children:[n.jsx(G,{as:"h1",children:"Authenticated"}),"This is the actual content of the app. Authentication was successful.",n.jsx(ae,{pt:5,flexDirection:"row",justifyContent:"center",children:n.jsx(Ie,{})})]})})}const we=se({component:Ee,appMetadata:xe});customElements.define("auth-app",we);
