import{j as e,q as o,s as t}from"./6da62dcb4a0b.js";function r(){return e.jsxs("div",{className:"sample-component-with-css",children:["The text in this div should be ",e.jsx("strong",{children:"RED"})," because it is styled using external css."]})}const i={"styling-app":{name:"styling-app",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"styling-sample-components":{name:"styling-sample-components",services:{},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}}},p=`.sample-component-with-css{color:red;font-size:1.25em}
`,c=[];function a(n){throw new Error(`Unsupported locale: '${n}'`)}const s=o(p),l=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:a,locales:c,packages:i,styles:s},Symbol.toStringTag,{value:"Module"})),m=t({component:r,appMetadata:l});console.log(`CSS:

${s.value}`);customElements.define("styling-app",m);
