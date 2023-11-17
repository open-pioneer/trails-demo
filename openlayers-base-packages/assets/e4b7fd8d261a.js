var E=(e,s,t)=>{if(!s.has(e))throw TypeError("Cannot "+t)};var i=(e,s,t)=>(E(e,s,"read from private field"),t?t.call(e):s.get(e)),p=(e,s,t)=>{if(s.has(e))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(e):s.set(e,t)},o=(e,s,t,r)=>(E(e,s,"write to private field"),r?r.call(e,t):s.set(e,t),t);var F=(e,s,t)=>(E(e,s,"access private method"),t);import{d as J,f as L,j as n,e as R,r as d,H as U,A as _,g as N,h as Q,i as W,B as y,k as X,l as Z,m as ee,c as te,a as ne,b as se,t as ie}from"./fd3685c12ee3.js";import{E as q}from"./960f2965a833.js";import{C as G,I as M}from"./c5f8f39924c0.js";import{T as re}from"./6f1bedebbe49.js";import{V as ae}from"./647668343c5b.js";import{u as oe,I as ce}from"./ae6044e82e95.js";import{F as T}from"./b1863e3adeb0.js";import{F as z}from"./f9e4eb76c6de.js";import{a as O}from"./60711ab36be7.js";import{F as ue}from"./ea1f485d8aae.js";import"./b102a52a3700.js";var le=J("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),b=L(function(s,t){var r,a;const{placement:l="left",...x}=s,A=oe(),c=A.field,I={[l==="left"?"insetStart":"insetEnd"]:"0",width:(r=c?.height)!=null?r:c?.h,height:(a=c?.height)!=null?a:c?.h,fontSize:c?.fontSize,...A.element};return n.jsx(le,{ref:t,__css:I,...x})});b.id="InputElement";b.displayName="InputElement";var $=L(function(s,t){const{className:r,...a}=s,l=R("chakra-input__left-element",r);return n.jsx(b,{ref:t,placement:"left",className:l,...a})});$.id="InputLeftElement";$.displayName="InputLeftElement";var C=L(function(s,t){const{className:r,...a}=s,l=R("chakra-input__right-element",r);return n.jsx(b,{ref:t,placement:"right",className:l,...a})});C.id="InputRightElement";C.displayName="InputRightElement";function he({doLogin:e,wasLoggedIn:s}){const[t,r]=d.useState(""),[a,l]=d.useState(""),[x,A]=d.useState(!1),[c,P]=d.useState(),[I,K]=d.useState(s),V=S=>{S.preventDefault();const Y=e(t,a);P(Y||""),K(!1)};return n.jsx(G,{p:5,children:n.jsxs(ae,{as:"form",onSubmit:V,spacing:4,children:[n.jsx(U,{as:"h1",textAlign:"center",children:"Login"}),n.jsxs(re,{textAlign:"center",children:["Please enter your user name and password to authenticate.",n.jsx("br",{}),"Note: credentials are ",'"admin"'," / ",'"admin"']}),c&&n.jsxs(_,{status:"error",children:[n.jsx(N,{}),n.jsx(Q,{children:c})]}),I&&n.jsxs(_,{status:"info",mb:5,children:[n.jsx(N,{}),n.jsxs(W,{children:["Logout successful.",n.jsx("br",{}),"You can use the form below to log in again."]})]}),n.jsxs(T,{children:[n.jsx(z,{children:"User name"}),n.jsx(M,{placeholder:"User name",value:t,onChange:S=>r(S.target.value),autoComplete:"username"})]}),n.jsxs(T,{children:[n.jsx(z,{children:"Password"}),n.jsxs(ce,{children:[n.jsx(M,{pr:"4.5rem",type:x?"text":"password",placeholder:"Enter password",value:a,onChange:S=>l(S.target.value),autoComplete:"current-password"}),n.jsx(C,{width:"4.5rem",children:n.jsx(y,{h:"1.75rem",size:"sm",onClick:()=>A(!x),children:x?"Hide":"Show"})})]})]}),n.jsx(y,{type:"submit",children:"Login"})]})})}var m,f,k;class de extends q{constructor(){super();p(this,m,{kind:"pending"});p(this,f,void 0);p(this,k,!1);o(this,f,setTimeout(()=>{o(this,m,{kind:"not-authenticated"}),this.emit("changed")},500))}destroy(){clearTimeout(i(this,f)),o(this,f,void 0)}getAuthState(){return i(this,m)}getLoginBehavior(){const t=(a,l)=>{if(a==="admin"&&l==="admin")o(this,m,{kind:"authenticated",sessionInfo:{userId:"admin",userName:"Arnold Administrator"}}),o(this,k,!0),this.emit("changed");else return"Invalid user name or password!"};return{kind:"fallback",Fallback:()=>d.createElement(he,{doLogin:t,wasLoggedIn:i(this,k)})}}logout(){(i(this,m).kind==="authenticated"||i(this,m).kind==="pending")&&(o(this,m,{kind:"not-authenticated"}),clearTimeout(i(this,f)),o(this,f,void 0),this.emit("changed"))}}m=new WeakMap,f=new WeakMap,k=new WeakMap;const w=te("authentication:AuthService");var g,u,h,v,j,H;class pe extends q{constructor(t){super();p(this,j);p(this,g,void 0);p(this,u,void 0);p(this,h,void 0);p(this,v,void 0);o(this,g,t.references.plugin),o(this,u,i(this,g).getAuthState()),o(this,v,i(this,g).on?.("changed",()=>F(this,j,H).call(this))),w.debug(`Constructed with initial auth state '${i(this,u).kind}'`,i(this,u))}destroy(){i(this,h)?.reject(X()),o(this,h,void 0),o(this,v,Z(i(this,v)))}getAuthState(){return i(this,u)}getSessionInfo(){return i(this,u).kind!=="pending"?Promise.resolve(B(i(this,u))):(i(this,h)||o(this,h,ee()),i(this,h).promise)}getLoginBehavior(){return i(this,g).getLoginBehavior()}logout(){w.debug("Triggering logout"),i(this,g).logout()}}g=new WeakMap,u=new WeakMap,h=new WeakMap,v=new WeakMap,j=new WeakSet,H=function(){const t=i(this,g).getAuthState();o(this,u,t),t.kind!=="pending"&&i(this,h)&&(i(this,h).resolve(B(t)),o(this,h,void 0)),w.debug(`Auth state changed to '${i(this,u).kind}'`,i(this,u)),this.emit("changed")};function B(e){return e.kind==="authenticated"?e.sessionInfo:void 0}const me={"auth-app":{name:"auth-app",services:{TestAuthPlugin:{name:"TestAuthPlugin",clazz:de,provides:[{name:"authentication.AuthPlugin",qualifier:void 0}],references:{}}},ui:{references:[{name:"authentication.AuthService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/theme":{name:"@open-pioneer/theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/authentication":{name:"@open-pioneer/authentication",services:{AuthServiceImpl:{name:"AuthServiceImpl",clazz:pe,provides:[{name:"authentication.AuthService",qualifier:void 0}],references:{plugin:{name:"authentication.AuthPlugin",qualifier:void 0,all:!1}}}},ui:{references:[{name:"authentication.AuthService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/test-utils":{name:"@open-pioneer/test-utils",services:{},ui:{references:[]},properties:{}}},ge="",fe=[];function ve(e){throw new Error(`Unsupported locale: '${e}'`)}const xe=ne(ge),Se=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:ve,locales:fe,packages:me,styles:xe},Symbol.toStringTag,{value:"Module"})),ke="@open-pioneer/authentication",Ae=O.bind(void 0,ke);function D(e){const s=d.useCallback(a=>{const l=e.on("changed",a);return()=>l.destroy()},[e]),t=d.useCallback(()=>e.getAuthState(),[e]);return d.useSyncExternalStore(s,t)}const je=e=>{const s=Ae("authentication.AuthService"),t=D(s),r=d.useMemo(()=>{if(t.kind==="not-authenticated")return s.getLoginBehavior()},[s,t.kind]);switch(d.useEffect(()=>{t.kind==="not-authenticated"&&r?.kind==="effect"&&r.login()},[r,t.kind]),t.kind){case"pending":return null;case"not-authenticated":{if(!r||r.kind!=="fallback")return null;const a=r.Fallback;return e.renderFallback?n.jsx(n.Fragment,{children:e.renderFallback(a)}):n.jsx(a,{...e.fallbackProps})}case"authenticated":return n.jsx(n.Fragment,{children:e.children})}},be="auth-app",Ie=O.bind(void 0,be);function Ee(){const e=Ie("authentication.AuthService"),s=D(e),t=()=>{e.logout()};return s.kind==="not-authenticated"||s.kind==="pending"?null:n.jsx(y,{colorScheme:"red",onClick:t,children:"Log out"})}function we(){return n.jsx(je,{children:n.jsxs(G,{p:5,children:[n.jsx(U,{as:"h1",children:"Authenticated"}),"This is the actual content of the app. Authentication was successful.",n.jsx(ue,{pt:5,flexDirection:"row",justifyContent:"center",children:n.jsx(Ee,{})})]})})}const ye=se({component:we,theme:ie,appMetadata:Se});customElements.define("auth-app",ye);
