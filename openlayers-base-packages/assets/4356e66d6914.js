import{q as x,j as o,B as r,E as v}from"./77a49a5f1112.js";import{R as f,U as k,W as w,au as y,av as z,ab as n,ae as a,aW as j,aX as c}from"./be414ef48141.js";import{a as M,S as C}from"./e9042880c539.js";import{L as d}from"./15c0e086192a.js";import{F as m}from"./4bd0b1d5e4f1.js";import{B as u}from"./433d533b25c8.js";import{S}from"./b7f33fcdd491.js";import{T as s}from"./1c38c393c4eb.js";import{V as P}from"./80d6b28a49f7.js";import{U as I,a as i}from"./a7856947b4fc.js";import"./c52f66952b41.js";import"./960f2965a833.js";const p="main";class L{mapId=p;async getMapConfig(){return{initialView:{kind:"position",center:{x:404747,y:5757920},zoom:14},layers:[new f({title:"OSM",isBaseLayer:!0,olLayer:new k({source:new w})})]}}}const R={"highlight-and-zoom-app":{name:"highlight-and-zoom-app",services:{MapConfigProviderImpl:{name:"MapConfigProviderImpl",clazz:L,provides:[{name:"map.MapConfigProvider",qualifier:void 0}],references:{}}},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map":{name:"@open-pioneer/map",services:{MapRegistryImpl:{name:"MapRegistryImpl",clazz:y,provides:[{name:"map.MapRegistry",qualifier:void 0}],references:{providers:{name:"map.MapConfigProvider",qualifier:void 0,all:!0}}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/test-utils":{name:"@open-pioneer/test-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map-test-utils":{name:"@open-pioneer/map-test-utils",services:{},ui:{references:[]},properties:{}}},A=`:root,:host{--ol-background-color: white;--ol-accent-background-color: #F5F5F5;--ol-subtle-background-color: rgba(128, 128, 128, .25);--ol-partial-background-color: rgba(255, 255, 255, .75);--ol-foreground-color: #333333;--ol-subtle-foreground-color: #666666;--ol-brand-color: #00AAFF}.ol-box{box-sizing:border-box;border-radius:2px;border:1.5px solid var(--ol-background-color);background-color:var(--ol-partial-background-color)}.ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:var(--ol-partial-background-color);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid var(--ol-subtle-foreground-color);border-top:none;color:var(--ol-foreground-color);font-size:10px;text-align:center;margin:1px;will-change:contents,width;transition:all .25s}.ol-scale-bar{position:absolute;bottom:8px;left:8px}.ol-scale-bar-inner{display:flex}.ol-scale-step-marker{width:1px;height:15px;background-color:var(--ol-foreground-color);float:right;z-index:10}.ol-scale-step-text{position:absolute;bottom:-5px;font-size:10px;z-index:11;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-text{position:absolute;font-size:12px;text-align:center;bottom:25px;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-singlebar{position:relative;height:10px;z-index:9;box-sizing:border-box;border:1px solid var(--ol-foreground-color)}.ol-scale-singlebar-even{background-color:var(--ol-subtle-foreground-color)}.ol-scale-singlebar-odd{background-color:var(--ol-background-color)}.ol-unsupported{display:none}.ol-viewport,.ol-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-viewport canvas{all:unset;overflow:hidden}.ol-viewport{touch-action:pan-x pan-y}.ol-selectable{-webkit-touch-callout:default;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ol-grabbing{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.ol-grab{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.ol-control{position:absolute;background-color:var(--ol-subtle-background-color);border-radius:4px}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}.ol-control button{display:block;margin:1px;padding:0;color:var(--ol-subtle-foreground-color);font-weight:700;text-decoration:none;font-size:inherit;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:var(--ol-background-color);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:hover,.ol-control button:focus{text-decoration:none;outline:1px solid var(--ol-subtle-foreground-color);color:var(--ol-foreground-color)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em);display:flex;flex-flow:row-reverse;align-items:center}.ol-attribution a{color:var(--ol-subtle-foreground-color);text-decoration:none}.ol-attribution ul{margin:0;padding:1px .5em;color:var(--ol-foreground-color);text-shadow:0 0 2px var(--ol-background-color);font-size:12px}.ol-attribution li{display:inline;list-style:none}.ol-attribution li:not(:last-child):after{content:" "}.ol-attribution img{max-height:2em;max-width:inherit;vertical-align:middle}.ol-attribution button{flex-shrink:0}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution:not(.ol-collapsed){background:var(--ol-partial-background-color)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;height:200px}.ol-zoomslider button{position:relative;height:10px}.ol-touch .ol-zoomslider{top:5.5em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:block}.ol-overviewmap .ol-overviewmap-map{border:1px solid var(--ol-subtle-foreground-color);height:150px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:0;left:0;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:var(--ol-subtle-background-color)}.ol-overviewmap-box{border:1.5px dotted var(--ol-subtle-foreground-color)}.ol-overviewmap .ol-overviewmap-box:hover{cursor:move}
`,G=[];function T(e){throw new Error(`Unsupported locale: '${e}'`)}const B=x(A),F=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:T,locales:G,packages:R,styles:B},Symbol.toStringTag,{value:"Module"}));function q(){const{map:e}=z(p),l=[new n([852011.307424,6788511322702e-6]),new n([829800.379064,6809086916672e-6])],g=[new d([[851890.680238,6788133616293e-6],[851298.293269,6790235634571e-6],[853419.420804,6790407617885e-6]]),new d([[848107.047338,6790579601198e-6],[849081.619449,6793197569417e-6]])],b=[new a([[[851728.251553,6788384425292e-6],[851518.049725,6788651954891e-6],[852182.096409,6788881265976e-6],[851728.251553,6788384425292e-6]]]),new a([[[845183.331006,6794496998898e-6],[850132.628588,6794764528497e-6],[850629.469272,6791707047365e-6],[844399.851466,6791229315939e-6],[845183.331006,6794496998898e-6]]])],h=[new n([852011.307424,6788511322702e-6]),new a([[[845183.331006,6794496998898e-6],[850132.628588,6794764528497e-6],[850629.469272,6791707047365e-6],[844399.851466,6791229315939e-6],[845183.331006,6794496998898e-6]]])];return o.jsx(m,{height:"100%",direction:"column",overflow:"hidden",children:o.jsx(M,{title:o.jsx(u,{textAlign:"center",py:1,children:o.jsx(C,{size:"md",children:"OpenLayers Base Packages - Highlight and Zoom"})}),children:o.jsx(m,{flex:"1",direction:"column",position:"relative",children:o.jsxs(j,{mapId:p,children:[o.jsx(c,{position:"top-left",horizontalGap:10,verticalGap:10,children:o.jsx(u,{backgroundColor:"whiteAlpha.900",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",children:o.jsxs(S,{pt:5,children:[o.jsx(s,{align:"center",children:"Test Controls:"}),o.jsx(r,{onClick:()=>t(e,l),children:"Points"}),o.jsx(r,{onClick:()=>t(e,g),children:"LineString"}),o.jsx(r,{onClick:()=>t(e,b),children:"Polygons"}),o.jsx(r,{onClick:()=>t(e,h),children:"Mixed"}),o.jsx(r,{onClick:()=>E(e),children:"Reset"})]})})}),o.jsx(c,{position:"top-right",horizontalGap:10,verticalGap:10,children:o.jsxs(P,{backgroundColor:"whiteAlpha.900",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",maxWidth:"400px",children:[o.jsx(s,{as:"b",children:"Description"}),o.jsx(s,{children:"This application can be used to test adding highlight or marker, zoom to their extent, and removing highlight and marker. The highlight and zoom for point, line string and polygon geometries can be tested."}),o.jsxs(I,{children:[o.jsxs(i,{children:["Clicking on ","'Points'"," adds markers for point geometries."]}),o.jsxs(i,{children:["Clicking on ","'LineString'"," adds highlight for linestring geometries."]}),o.jsxs(i,{children:["Clicking on ","'Polygon'"," adds highlight for polygon geometries."]}),o.jsxs(i,{children:["Clicking on ","'Mixed'"," adds highlight for geometries of different types."]}),o.jsxs(i,{children:["Clicking on ","'Reset'"," removes the highlights or markers from the map."]})]})]})})]})})})})}function t(e,l){e&&e.highlightAndZoom(l,{})}function E(e){e&&e.removeHighlight()}const O=v({component:q,appMetadata:F});customElements.define("highlight-and-zoom-app",O);
