import{b as c,j as e,B as a,e as l}from"./cf33be65345b.js";import{c as p}from"./1e4db0e4368e.js";import{C as m}from"./29239ddd1aea.js";import{H as u}from"./cc612112ce71.js";import{V as h}from"./629976bbf63c.js";import{T as r}from"./d9f7581a22b6.js";import{U as d,a as o}from"./79b99c1ce4a2.js";import{M as f}from"./857afe2dbb57.js";import{M as x,a as j,b as s}from"./5a3671a01ff3.js";import"./da307b269916.js";var k=p({displayName:"ChevronDownIcon",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"});const g={"menu-fix-app":{name:"menu-fix-app",services:{},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}}},M="",b=[];function v(n){throw new Error(`Unsupported locale: '${n}'`)}const C=c(M),S=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:v,locales:b,packages:g,styles:C},Symbol.toStringTag,{value:"Module"}));function w(){return e.jsx(e.Fragment,{children:e.jsxs(m,{p:5,children:[e.jsxs(u,{children:[t({title:"Closes on select",closeOnSelect:!0}),t({title:"Does not close on select",closeOnSelect:!1})]}),e.jsxs(h,{mt:5,align:"start",spacing:2,children:[e.jsx(r,{as:"b",children:"Description"}),e.jsxs(r,{children:["This application is used to test Chakra-UI menus inside a Shadow DOM. Patches against Chakra","'","s ",e.jsx("code",{children:"Menu"})," component and"," ",e.jsx("code",{children:"useOutsideClick()"})," hooks ensure that the component behaves as expected:"]}),e.jsxs(d,{children:[e.jsx(o,{children:"Both menu buttons should behave normally when clicking them multiple times (first click on button opens menu; second click hides it again)."}),e.jsx(o,{children:"Both menus close when the user clicks outside."}),e.jsx(o,{children:"The first menu should close by itself if some menu item is clicked."}),e.jsxs(o,{children:["The second menu should ",e.jsx("em",{children:"not"})," close itself if an item is clicked."]})]})]})]})})}function t(n){const i=()=>{};return e.jsxs(f,{closeOnSelect:n.closeOnSelect??!0,onClose:i,children:[e.jsx(x,{as:a,rightIcon:e.jsx(k,{}),children:n.title}),e.jsxs(j,{children:[e.jsx(s,{children:"Download"}),e.jsx(s,{children:"Create a Copy"}),e.jsx(s,{children:"Mark as Draft"}),e.jsx(s,{children:"Delete"}),e.jsx(s,{children:"Attend a Workshop"})]})]})}const y=l({component:w,appMetadata:S,openShadowRoot:!0});customElements.define("menu-fix-app",y);
