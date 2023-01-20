import{r as c,c as i}from"./assets/CustomElement-226250e2.js";var l={},u={get exports(){return l},set exports(t){l=t}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=c,d=Symbol.for("react.element"),a=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,y=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function f(t,e,p){var r,o={},s=null,m=null;p!==void 0&&(s=""+p),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(m=e.ref);for(r in e)x.call(e,r)&&!E.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:d,type:t,key:s,ref:m,props:o,_owner:y.current}}n.Fragment=a;n.jsx=f;n.jsxs=f;(function(t){t.exports=n})(u);const v=l.jsx;function O(){return v("div",{children:"Hello World!"})}const R=i({component:c.createElement(O),styles:"div {background-color: red;}"});customElements.define("sample-element",R);
