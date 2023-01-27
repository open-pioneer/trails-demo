import"./modulepreload-polyfill-ec808ebb.js";import{c as e}from"./CustomElement-ccb91613.js";import{j as t,a as n}from"./jsx-runtime-f8cc22b3.js";function o(){return t("div",{className:"sample-component-with-css",children:["The text in this div should be ",n("strong",{children:"RED"})," because it is styled using external css."]})}const c={},s=`.sample-component-with-css{color:red;font-size:1.25em}
`,i=e({component:o,packages:c,styles:s});console.log(`CSS:

${s}`);customElements.define("styling-app",i);
