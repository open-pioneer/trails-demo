import{r as m,c as _}from"./assets/CustomElement-501f9a72.js";var p={},c={get exports(){return p},set exports(e){p=e}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=m,a=Symbol.for("react.element"),d=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,y=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,f){var r,o={},s=null,i=null;f!==void 0&&(s=""+f),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)x.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:a,type:e,key:s,ref:i,props:o,_owner:y.current}}n.Fragment=d;n.jsx=u;n.jsxs=u;(function(e){e.exports=n})(c);const v=p.jsx;function O({date:e="empty"}){return v("div",{children:e})}const R=_({component:O,attributes:["date"]});customElements.define("date-app",R);
