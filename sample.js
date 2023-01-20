import{r as m,c as u}from"./assets/CustomElement-6f09ff1e.js";var l={},c={get exports(){return l},set exports(t){l=t}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=m,d=Symbol.for("react.element"),a=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,y=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function i(t,e,p){var r,o={},s=null,f=null;p!==void 0&&(s=""+p),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(f=e.ref);for(r in e)x.call(e,r)&&!v.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:d,type:t,key:s,ref:f,props:o,_owner:y.current}}n.Fragment=a;n.jsx=i;n.jsxs=i;(function(t){t.exports=n})(c);const E=l.jsx;function j(){return E("div",{children:"Hello World!"})}const O=u({component:j,styles:"div {background-color: red;}"});customElements.define("sample-element",O);export{E as j};
