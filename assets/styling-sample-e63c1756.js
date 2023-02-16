import"./modulepreload-polyfill-ec808ebb.js";import{j as s,b as t,c as n,a as o}from"./ObservableBox-7106a124.js";function c(){return s("div",{className:"sample-component-with-css",children:["The text in this div should be ",t("strong",{children:"RED"})," because it is styled using external css."]})}const i={"test-ui-components":{name:"test-ui-components",services:{},ui:{references:[]},properties:{}}},a=`.sample-component-with-css{color:red;font-size:1.25em}
`,e=n(a),l=Object.freeze(Object.defineProperty({__proto__:null,packages:i,styles:e},Symbol.toStringTag,{value:"Module"})),r=o({component:c,appMetadata:l});console.log(`CSS:

${e.value}`);customElements.define("styling-app",r);
