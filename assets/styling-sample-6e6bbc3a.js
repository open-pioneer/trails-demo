import"./modulepreload-polyfill-ec808ebb.js";import{j as s,d as t,c as n}from"./CustomElement-41edb890.js";function o(){return s("div",{className:"sample-component-with-css",children:["The text in this div should be ",t("strong",{children:"RED"})," because it is styled using external css."]})}const c={"test-ui-components":{name:"test-ui-components",services:{},ui:{references:[]},properties:{}}},e=`.sample-component-with-css{color:red;font-size:1.25em}
`,i=n({component:o,packages:c,styles:e});console.log(`CSS:

${e}`);customElements.define("styling-app",i);
