import{r as a,c}from"./assets/CustomElement-00e54a38.js";const m={};var p={},_={get exports(){return p},set exports(e){p=e}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=a,d=Symbol.for("react.element"),x=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,E=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,u){var r,n={},s=null,f=null;u!==void 0&&(s=""+u),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(f=t.ref);for(r in t)y.call(t,r)&&!v.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:d,type:e,key:s,ref:f,props:n,_owner:E.current}}o.Fragment=x;o.jsx=i;o.jsxs=i;(function(e){e.exports=o})(_);const O=p.jsxs;function R({date:e="N/A"}){return O("div",{children:["Current date: ",e]})}const j=c({component:R,attributes:["date"],packages:m});customElements.define("date-app",j);
