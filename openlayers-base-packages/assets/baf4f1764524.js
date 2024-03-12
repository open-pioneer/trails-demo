import{n as y,r as m,j as o,s as z}from"./a804c6ae25fd.js";import{S as a,T as f,O as _,s as w,v as x,a2 as T,a1 as L,a3 as M,aa as s,ac as g,q as c,ad as b,ao as P,ap as p,ag as I}from"./889696c2fca9.js";import{W as S,q as D}from"./e4489292e9c6.js";import{W as C,a as j}from"./0bae8922d953.js";import{G as k,T as R}from"./73523bec2600.js";import{_ as h}from"./a419295615be.js";import{V as A,T as v}from"./81064a1e15a2.js";import"./4533599bd8ef.js";import"./6166bdbdf108.js";import"./274107ce2ce9.js";import"./89f3884756b4.js";import"./f9299f4d7602.js";import"./3f67a442b387.js";import"./8405f53d91b8.js";import"./a80ff04620c9.js";import"./8feb64e69a5d.js";const d="main";class E{mapId=d;async getMapConfig(){return{initialView:{kind:"position",center:{x:404747,y:5757920},zoom:14},projection:"EPSG:25832",layers:[new a({id:"topplus_open",title:"TopPlus Open",isBaseLayer:!0,visible:!0,healthCheck:"https://sgx.geodatenzentrum.de/wmts_topplus_openERROR/1.0.0/WMTSCapabilities.xml",olLayer:u("web")}),new a({id:"topplus_open_grau",title:"TopPlus Open (Grau)",isBaseLayer:!0,visible:!1,healthCheck:async()=>{function t(r){return new Promise(n=>setTimeout(n,r))}return await t(2e3),"error"},olLayer:u("web_grau")}),new a({id:"topplus_open_light",title:"TopPlus Open (Light)",isBaseLayer:!0,visible:!1,healthCheck:"https://sgx.geodatenzentrum.de/wmts_topplus_open/1.0.0/WMTSCapabilities.xml",olLayer:u("web_light")}),new a({title:"OSM",visible:!1,isBaseLayer:!0,olLayer:new f({source:new _})}),new a({title:"Haltestellen Stadt Rostock",visible:!0,description:"Haltestellen des öffentlichen Personenverkehrs in der Hanse- und Universitätsstadt Rostock.",olLayer:O()}),new a({title:"Kindertagesstätten",visible:!0,healthCheck:"https://sgx.geodatenzentrum.de/wmts_topplus_open/1.0.0/WMTSCapabilities.xml",olLayer:W()}),G(),q()]}}}function u(e){const t=[-380316598427299e-8,880590808284866e-8],r=[4891.96981025128,2445.98490512564,1222.99245256282,611.49622628141,305.748113140705,152.874056570353,76.4370282851763,38.2185141425881,19.1092570712941,9.55462853564703,4.77731426782352,2.38865713391176,1.19432856695588,.59716428347794],n=new Array(r.length);for(let l=0;l<r.length;l++)n[l]=l;const i=new C({url:`https://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/${e}/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png`,layer:"web_grau",matrixSet:"EU_EPSG_25832_TOPPLUS",format:"image/png",projection:"EPSG:25832",requestEncoding:"REST",tileGrid:new j({origin:t,resolutions:r,matrixIds:n}),style:"default",attributions:`Kartendarstellung und Präsentationsgraphiken: © Bundesamt für Kartographie und Geodäsie ${new Date().getFullYear()}, <a href="https://sg.geodatenzentrum.de/web_public/gdz/datenquellen/Datenquellen_TopPlusOpen.html" target="_blank">Datenquellen</a>`});return new f({source:i})}function O(){const e=new w({url:"https://geo.sv.rostock.de/download/opendata/haltestellen/haltestellen.json",format:new k,attributions:"Haltestellen Stadt Rostock, Creative Commons CC Zero License (cc-zero)"});return new x({source:e})}function W(){const e=new w({url:"https://ogc-api.nrw.de/inspire-us-kindergarten/v1/collections/governmentalservice/items?f=json&limit=10000",format:new k,attributions:'&copy; <a href="http://www.bkg.bund.de" target="_blank">Bundesamt f&uuml;r Kartographie und Geod&auml;sie</a> 2017, <a href="http://sg.geodatenzentrum.de/web_public/Datenquellen_TopPlus_Open.pdf" target="_blank">Datenquellen</a>'});return new x({source:e})}function G(){return new S({title:"Schulstandorte",description:"Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.",visible:!0,healthCheck:async()=>{function e(t){return new Promise(r=>setTimeout(r,t))}return await e(3e3),"error"},url:"https://www.wms.nrw.de/wms/wms_nw_inspire-schulen",sublayers:[{name:"US.education",title:"INSPIRE - WMS Schulstandorte NRW"}],sourceOptions:{ratio:1}})}function q(){return new S({title:"Straßennetz Landesbetrieb Straßenbau NRW",url:"https://www.wms.nrw.de/wms/strassen_nrw_wms",sublayers:[{name:"1",title:"Verwaltungen"},{name:"4",title:"Abschnitte und Äste"},{name:"6",title:"Unfälle"}]})}const H={"toc-map":{name:"toc-map",services:{MapConfigProviderImpl:{name:"MapConfigProviderImpl",clazz:E,provides:[{name:"map.MapConfigProvider",qualifier:void 0}],references:{}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map":{name:"@open-pioneer/map",services:{MapRegistryImpl:{name:"MapRegistryImpl",clazz:T,provides:[{name:"map.MapRegistry",qualifier:void 0}],references:{providers:{name:"map.MapConfigProvider",qualifier:void 0,all:!0},httpService:{name:"http.HttpService",qualifier:void 0,all:!1}}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/http":{name:"@open-pioneer/http",services:{HttpServiceImpl:{name:"HttpServiceImpl",clazz:L,provides:[{name:"http.HttpService",qualifier:"http.HttpService"}],references:{interceptors:{name:"http.Interceptor",qualifier:void 0,all:!0}}}},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/toc":{name:"@open-pioneer/toc",services:{},ui:{references:[]},properties:{}},"@open-pioneer/basemap-switcher":{name:"@open-pioneer/basemap-switcher",services:{},ui:{references:[]},properties:{}}},B=`:root,:host{--ol-background-color: white;--ol-accent-background-color: #F5F5F5;--ol-subtle-background-color: rgba(128, 128, 128, .25);--ol-partial-background-color: rgba(255, 255, 255, .75);--ol-foreground-color: #333333;--ol-subtle-foreground-color: #666666;--ol-brand-color: #00AAFF}.ol-box{box-sizing:border-box;border-radius:2px;border:1.5px solid var(--ol-background-color);background-color:var(--ol-partial-background-color)}.ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:var(--ol-partial-background-color);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid var(--ol-subtle-foreground-color);border-top:none;color:var(--ol-foreground-color);font-size:10px;text-align:center;margin:1px;will-change:contents,width;transition:all .25s}.ol-scale-bar{position:absolute;bottom:8px;left:8px}.ol-scale-bar-inner{display:flex}.ol-scale-step-marker{width:1px;height:15px;background-color:var(--ol-foreground-color);float:right;z-index:10}.ol-scale-step-text{position:absolute;bottom:-5px;font-size:10px;z-index:11;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-text{position:absolute;font-size:12px;text-align:center;bottom:25px;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-singlebar{position:relative;height:10px;z-index:9;box-sizing:border-box;border:1px solid var(--ol-foreground-color)}.ol-scale-singlebar-even{background-color:var(--ol-subtle-foreground-color)}.ol-scale-singlebar-odd{background-color:var(--ol-background-color)}.ol-unsupported{display:none}.ol-viewport,.ol-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-viewport canvas{all:unset;overflow:hidden}.ol-viewport{touch-action:pan-x pan-y}.ol-selectable{-webkit-touch-callout:default;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ol-grabbing{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.ol-grab{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.ol-control{position:absolute;background-color:var(--ol-subtle-background-color);border-radius:4px}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}.ol-control button{display:block;margin:1px;padding:0;color:var(--ol-subtle-foreground-color);font-weight:700;text-decoration:none;font-size:inherit;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:var(--ol-background-color);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:hover,.ol-control button:focus{text-decoration:none;outline:1px solid var(--ol-subtle-foreground-color);color:var(--ol-foreground-color)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em);display:flex;flex-flow:row-reverse;align-items:center}.ol-attribution a{color:var(--ol-subtle-foreground-color);text-decoration:none}.ol-attribution ul{margin:0;padding:1px .5em;color:var(--ol-foreground-color);text-shadow:0 0 2px var(--ol-background-color);font-size:12px}.ol-attribution li{display:inline;list-style:none}.ol-attribution li:not(:last-child):after{content:" "}.ol-attribution img{max-height:2em;max-width:inherit;vertical-align:middle}.ol-attribution button{flex-shrink:0}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution:not(.ol-collapsed){background:var(--ol-partial-background-color)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;height:200px}.ol-zoomslider button{position:relative;height:10px}.ol-touch .ol-zoomslider{top:5.5em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:block}.ol-overviewmap .ol-overviewmap-map{border:1px solid var(--ol-subtle-foreground-color);height:150px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:0;left:0;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:var(--ol-subtle-background-color)}.ol-overviewmap-box{border:1.5px dotted var(--ol-subtle-foreground-color)}.ol-overviewmap .ol-overviewmap-box:hover{cursor:move}
`,N=["en","de"];function U(e){switch(e){case"en":return h(()=>import("./4e731ddbc9af.js"),[],import.meta.url).then(t=>t.default);case"de":return h(()=>import("./0f8dafe3cfa6.js"),[],import.meta.url).then(t=>t.default)}throw new Error(`Unsupported locale: '${e}'`)}const V=y(B),F=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:U,locales:N,packages:H,styles:V},Symbol.toStringTag,{value:"Module"})),K="toc-map",$=M.bind(void 0,K);function J(){const e=$(),t=m.useId(),[r,n]=m.useState(!0);function i(){n(!r)}return o.jsx(s,{height:"100%",direction:"column",overflow:"hidden",children:o.jsx(g,{title:o.jsx(c,{role:"region","aria-label":e.formatMessage({id:"ariaLabel.header"}),textAlign:"center",py:1,children:o.jsx(b,{size:"md",children:"OpenLayers Base Packages - TOC and Health Check Sample"})}),children:o.jsx(s,{flex:"1",direction:"column",children:o.jsxs(P,{mapId:d,role:"main","aria-label":e.formatMessage({id:"ariaLabel.map"}),children:[o.jsx(p,{position:"top-left",horizontalGap:10,verticalGap:10,children:r&&o.jsx(c,{backgroundColor:"white",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",maxWidth:350,children:r&&o.jsx(c,{role:"dialog","aria-labelledby":t,children:o.jsx(g,{title:o.jsx(b,{id:t,size:"md",mb:2,children:e.formatMessage({id:"tocTitle"})}),children:o.jsx(R,{mapId:d,showTools:!0,basemapSwitcherProps:{allowSelectingEmptyBasemap:!0}})})})})}),o.jsx(p,{position:"top-right",horizontalGap:10,verticalGap:10,children:o.jsxs(A,{backgroundColor:"whiteAlpha.900",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",maxWidth:"400px",children:[o.jsx(v,{as:"b",children:"Description"}),o.jsxs(v,{children:["This application can be used to test the TOC, including health checks for configured layers. Two base layers (",'"',"TopPlus Open",'"'," and ",'"',"TopPlus Open (Grau)",'"',") and one operational layer (",'"',"Schulstandorte",'"',") will be unavailable and should be marked as such by the UI."]})]})}),o.jsx(p,{position:"bottom-right",horizontalGap:10,verticalGap:45,children:o.jsx(s,{role:"toolbar","aria-label":e.formatMessage({id:"ariaLabel.toolbar"}),direction:"column",gap:1,padding:1,children:o.jsx(I,{label:e.formatMessage({id:"tocTitle"}),icon:o.jsx(D,{}),isActive:r,onClick:i})})})]})})})})}const Y=z({component:J,appMetadata:F,async resolveConfig(e){const t=e.getAttribute("forced-locale");if(t)return{locale:t}}});customElements.define("toc-map-app",Y);const Z=document.getElementsByTagName("body")[0];Q();function Q(){const e=window.location.search,r=new URLSearchParams(e).get("lang"),n=document.createElement("toc-map-app");n.classList.add("full-height"),n.classList.add("app"),n.setAttribute("id","test"),r&&n.setAttribute("forced-locale",r),Z.appendChild(n)}
