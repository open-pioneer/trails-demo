import"./modulepreload-polyfill-ec808ebb.js";import{c as s}from"./CustomElement-1b54c303.js";import{j as t,a as n}from"./jsx-runtime-ea1bf85d.js";function o(){return t("div",{className:"sample-component-with-css",children:["The text in this div should be ",n("strong",{children:"RED"})," because it is styled using external css."]})}const c={"test-ui-components":{name:"test-ui-components",services:{},ui:{references:[]}}},e=`.sample-component-with-css{color:red;font-size:1.25em}
`,i=s({component:o,packages:c,styles:e});console.log(`CSS:

${e}`);customElements.define("styling-app",i);
