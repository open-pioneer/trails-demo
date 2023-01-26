import{r as c,c as m}from"./assets/CustomElement-00e54a38.js";const a={};var p={},_={get exports(){return p},set exports(e){p=e}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=c,d=Symbol.for("react.element"),x=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,E=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,f){var r,o={},s=null,i=null;f!==void 0&&(s=""+f),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)y.call(t,r)&&!v.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:d,type:e,key:s,ref:i,props:o,_owner:E.current}}n.Fragment=x;n.jsx=u;n.jsxs=u;(function(e){e.exports=n})(_);const O=p.jsx;function R({date:e="empty"}){return O("div",{children:e})}const j=m({component:R,attributes:["date"],packages:a});customElements.define("date-app",j);
