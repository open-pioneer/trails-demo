import{c as x,u as v,j as e,F as f,r as w,B as d,b as y}from"./cf1d3ad631a4.js";import{G as h,O as k,aa as z,ab as j,as as M,at as m,af as u}from"./9faa25e1b582.js";import{B as S,U as I,a as c}from"./03cf43d39e6d.js";import{T,B as b,S as B}from"./7eb5078ce6c0.js";import{W as _,b as C}from"./0bcdaebcc21b.js";import{T as p}from"./b8b4f1b8c9b3.js";import{V as L}from"./872b9bf08390.js";import{F as A,S as P}from"./3d84a04cbb5e.js";import{F as g}from"./566149609e44.js";import"./4abddbb25485.js";class E extends _{constructor(a){const r=[-380316598427299e-8,880590808284866e-8],n=[4891.96981025128,2445.98490512564,1222.99245256282,611.49622628141,305.748113140705,152.874056570353,76.4370282851763,38.2185141425881,19.1092570712941,9.55462853564703,4.77731426782352,2.38865713391176,1.19432856695588,.59716428347794],l=new Array(n.length);for(let t=0;t<n.length;t++)l[t]=t;const i=a?.layer??"web";super({url:`https://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/${i}/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png`,layer:i,matrixSet:"EU_EPSG_25832_TOPPLUS",format:"image/png",projection:"EPSG:25832",requestEncoding:"REST",tileGrid:new C({origin:r,resolutions:n,matrixIds:l}),style:"default",attributions:`Kartendarstellung und Präsentationsgraphiken: © Bundesamt für Kartographie und Geodäsie ${new Date().getFullYear()}, <a href="https://sg.geodatenzentrum.de/web_public/gdz/datenquellen/Datenquellen_TopPlusOpen.html" target="_blank">Datenquellen</a>`})}}const s="main";class F{mapId=s;async getMapConfig(){return{initialView:{kind:"position",center:{x:404747,y:5757920},zoom:14},layers:[{title:"OSM",isBaseLayer:!0,layer:new h({source:new k})}]}}}const R={"basemap-switcher-app":{name:"basemap-switcher-app",services:{MapConfigProviderImpl:{name:"MapConfigProviderImpl",clazz:F,provides:[{name:"map.MapConfigProvider",qualifier:void 0}],references:{}}},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map":{name:"@open-pioneer/map",services:{MapRegistryImpl:{name:"MapRegistryImpl",clazz:z,provides:[{name:"map.MapRegistry",qualifier:void 0}],references:{providers:{name:"map.MapConfigProvider",qualifier:void 0,all:!0}}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/basemap-switcher":{name:"@open-pioneer/basemap-switcher",services:{},ui:{references:[]},properties:{}},"@open-pioneer/test-utils":{name:"@open-pioneer/test-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map-test-utils":{name:"@open-pioneer/map-test-utils",services:{},ui:{references:[]},properties:{}}},G=`:root,:host{--ol-background-color: white;--ol-accent-background-color: #F5F5F5;--ol-subtle-background-color: rgba(128, 128, 128, .25);--ol-partial-background-color: rgba(255, 255, 255, .75);--ol-foreground-color: #333333;--ol-subtle-foreground-color: #666666;--ol-brand-color: #00AAFF}.ol-box{box-sizing:border-box;border-radius:2px;border:1.5px solid var(--ol-background-color);background-color:var(--ol-partial-background-color)}.ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:var(--ol-partial-background-color);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid var(--ol-subtle-foreground-color);border-top:none;color:var(--ol-foreground-color);font-size:10px;text-align:center;margin:1px;will-change:contents,width;transition:all .25s}.ol-scale-bar{position:absolute;bottom:8px;left:8px}.ol-scale-bar-inner{display:flex}.ol-scale-step-marker{width:1px;height:15px;background-color:var(--ol-foreground-color);float:right;z-index:10}.ol-scale-step-text{position:absolute;bottom:-5px;font-size:10px;z-index:11;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-text{position:absolute;font-size:12px;text-align:center;bottom:25px;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-singlebar{position:relative;height:10px;z-index:9;box-sizing:border-box;border:1px solid var(--ol-foreground-color)}.ol-scale-singlebar-even{background-color:var(--ol-subtle-foreground-color)}.ol-scale-singlebar-odd{background-color:var(--ol-background-color)}.ol-unsupported{display:none}.ol-viewport,.ol-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-viewport canvas{all:unset;overflow:hidden}.ol-viewport{touch-action:none}.ol-selectable{-webkit-touch-callout:default;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ol-grabbing{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.ol-grab{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.ol-control{position:absolute;background-color:var(--ol-subtle-background-color);border-radius:4px}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}.ol-control button{display:block;margin:1px;padding:0;color:var(--ol-subtle-foreground-color);font-weight:700;text-decoration:none;font-size:inherit;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:var(--ol-background-color);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:hover,.ol-control button:focus{text-decoration:none;outline:1px solid var(--ol-subtle-foreground-color);color:var(--ol-foreground-color)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em);display:flex;flex-flow:row-reverse;align-items:center}.ol-attribution a{color:var(--ol-subtle-foreground-color);text-decoration:none}.ol-attribution ul{margin:0;padding:1px .5em;color:var(--ol-foreground-color);text-shadow:0 0 2px var(--ol-background-color);font-size:12px}.ol-attribution li{display:inline;list-style:none}.ol-attribution li:not(:last-child):after{content:" "}.ol-attribution img{max-height:2em;max-width:inherit;vertical-align:middle}.ol-attribution button{flex-shrink:0}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution:not(.ol-collapsed){background:var(--ol-partial-background-color)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;height:200px}.ol-zoomslider button{position:relative;height:10px}.ol-touch .ol-zoomslider{top:5.5em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:block}.ol-overviewmap .ol-overviewmap-map{border:1px solid var(--ol-subtle-foreground-color);height:150px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:0;left:0;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:var(--ol-subtle-background-color)}.ol-overviewmap-box{border:1.5px dotted var(--ol-subtle-foreground-color)}.ol-overviewmap .ol-overviewmap-box:hover{cursor:move}
`,O=["en"];function q(o){switch(o){case"en":return j(()=>import("./df50d4ccdbbc.js"),[],import.meta.url).then(a=>a.default)}throw new Error(`Unsupported locale: '${o}'`)}const D=x(G),U=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:q,locales:O,packages:R,styles:D},Symbol.toStringTag,{value:"Module"})),W="basemap-switcher-app",V=v.bind(void 0,W);function $(){const o=V();return e.jsx(g,{height:"100%",direction:"column",overflow:"hidden",children:e.jsx(T,{title:e.jsx(b,{textAlign:"center",py:1,children:e.jsx(B,{size:"md",children:"OpenLayers Base Packages - Basemap Switcher"})}),children:e.jsx(g,{flex:"1",direction:"column",position:"relative",children:e.jsx(M,{mapId:s,children:e.jsxs(m,{position:"top-left",horizontalGap:10,verticalGap:10,children:[e.jsxs(b,{backgroundColor:"whiteAlpha.900",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",children:[e.jsxs(f,{children:[e.jsx(A,{ps:1,children:e.jsx(p,{as:"b",children:o.formatMessage({id:"basemapLabel"})})}),e.jsx(S,{allowSelectingEmptyBasemap:!0,mapId:s})]}),e.jsxs(P,{pt:5,children:[e.jsx(p,{align:"center",children:"Test Controls:"}),e.jsx(K,{mapId:s}),e.jsx(N,{mapId:s}),e.jsx(H,{mapId:s})]})]}),e.jsx(m,{position:"top-right",horizontalGap:10,verticalGap:10,children:e.jsxs(L,{backgroundColor:"whiteAlpha.900",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",maxWidth:"400px",children:[e.jsx(p,{as:"b",children:"Description"}),e.jsx(p,{children:"This application can be used to test the basemap switcher. The basemap switcher synchronizes with the state of the shared map model. If the map model is changed (for example, by changing the current basemap), the basemap switcher must update itself accordingly."}),e.jsxs(I,{children:[e.jsx(c,{children:"Adding a new basemap updates the dropdown menu (new option)"}),e.jsx(c,{children:"Changing the current basemap to another basemap updates the selected option"}),e.jsxs(c,{children:["Setting the current basemap to ","'undefined'"," also updates the selection"]})]})]})})]})})})})})}function K(o){const{mapId:a}=o,{map:r}=u(a),n=w.useRef(1),l=()=>{if(!r)return;const i=n.current++,t=r.layers.createLayer({title:`New Layer ${i}`,isBaseLayer:!0,layer:new h({source:new E({layer:"web_grau"})})});console.log("generated base layer with id",t.id)};return e.jsx(d,{onClick:l,children:"Add base layer"})}function N(o){const{mapId:a}=o,{map:r}=u(a),n=()=>{if(!r)return;const l=r.layers.getAllLayers();if(l.length===0){console.error("There is no base layer");return}const i=Math.floor(Math.random()*l.length),t=l[i];if(!t){console.error("Failed to find a layer");return}console.log("activating base layer",t.id),r.layers.activateBaseLayer(t.id)};return e.jsx(d,{onClick:n,children:"Activate random base layer"})}function H(o){const{mapId:a}=o,{map:r}=u(a),n=()=>{r&&(console.log("setting active base layer to undefined"),r.layers.activateBaseLayer(void 0))};return e.jsx(d,{onClick:n,children:"Clear base layer"})}const Y=y({component:$,appMetadata:U});customElements.define("basemap-switcher-app",Y);
