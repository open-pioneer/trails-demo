import{r as c,c as m}from"./assets/CustomElement-00e54a38.js";var p={},a={get exports(){return p},set exports(e){p=e}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=c,l=Symbol.for("react.element"),d=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,y=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,f){var r,o={},s=null,i=null;f!==void 0&&(s=""+f),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)x.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:l,type:e,key:s,ref:i,props:o,_owner:y.current}}n.Fragment=d;n.jsx=u;n.jsxs=u;(function(e){e.exports=n})(a);const v=p.jsx,O={};function R({date:e="empty"}){return v("div",{children:e})}const j=m({component:R,attributes:["date"],packages:O});customElements.define("date-app",j);
